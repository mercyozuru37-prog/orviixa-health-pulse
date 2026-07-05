import React from 'react';
import { Shield, Bell, User, Menu, Home, Calendar, PlusCircle, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserRole } from '@/types';

interface LayoutProps {
  children: React.ReactNode;
  role: UserRole;
  onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, role, onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <Shield className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight hidden sm:inline-block">orviixa</span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-slate-500 rounded-full">
              <Bell className="w-5 h-5" />
            </Button>
            <Avatar className="w-8 h-8 border border-slate-200">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="icon" className="text-slate-500 rounded-full" onClick={onLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full p-4 pb-24 md:pb-8">
        {children}
      </main>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-6 py-3 md:hidden">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="flex flex-col gap-1 text-teal-600">
            <Home className="w-6 h-6" />
            <span className="text-[10px] font-medium">Home</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col gap-1 text-slate-400">
            <Calendar className="w-6 h-6" />
            <span className="text-[10px] font-medium">Bookings</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col gap-1 bg-teal-600 text-white rounded-2xl w-12 h-12 -mt-10 shadow-lg shadow-teal-200">
            <PlusCircle className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col gap-1 text-slate-400">
            <User className="w-6 h-6" />
            <span className="text-[10px] font-medium">Profile</span>
          </Button>
          <Button variant="ghost" size="icon" className="flex flex-col gap-1 text-slate-400">
            <Settings className="w-6 h-6" />
            <span className="text-[10px] font-medium">Settings</span>
          </Button>
        </div>
      </nav>
    </div>
  );
};
