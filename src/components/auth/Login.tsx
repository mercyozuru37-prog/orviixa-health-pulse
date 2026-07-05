import React from 'react';
import { Shield, Stethoscope, Building2, User } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserRole } from '@/types';

interface LoginProps {
  onLogin: (role: UserRole) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block space-y-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
              <Shield className="text-white w-6 h-6" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">orviixa</h1>
          </div>
          <h2 className="text-5xl font-extrabold text-slate-900 leading-tight">
            Healthcare Access <span className="text-teal-600">Reimagined.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-md">
            The comprehensive mobile health platform bridging patients, doctors, and hospitals for seamless virtual care.
          </p>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex-1">
              <div className="text-2xl font-bold text-teal-600">15k+</div>
              <div className="text-sm text-slate-500 font-medium">Verified Doctors</div>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex-1">
              <div className="text-2xl font-bold text-teal-600">200+</div>
              <div className="text-sm text-slate-500 font-medium">Hospitals</div>
            </div>
          </div>
        </div>

        <Card className="shadow-2xl border-none bg-white rounded-3xl overflow-hidden">
          <CardHeader className="space-y-1 p-8 pb-4">
            <div className="md:hidden flex items-center gap-2 mb-4">
              <Shield className="text-teal-600 w-8 h-8" />
              <span className="text-2xl font-bold">orviixa</span>
            </div>
            <CardTitle className="text-2xl font-bold text-slate-900">Sign in to Orviixa</CardTitle>
            <CardDescription className="text-slate-500">
              Select your role to continue with Google Authentication
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-4 space-y-4">
            <Button 
              variant="outline" 
              className="w-full h-16 rounded-2xl justify-start px-6 text-lg border-2 hover:border-teal-600 hover:bg-teal-50/50 transition-all duration-300 group"
              onClick={() => onLogin('patient')}
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4 group-hover:bg-teal-100 transition-colors">
                <User className="w-5 h-5 text-slate-600 group-hover:text-teal-600" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold">I am a Patient</span>
                <span className="text-xs text-slate-500">Book and manage appointments</span>
              </div>
            </Button>

            <Button 
              variant="outline" 
              className="w-full h-16 rounded-2xl justify-start px-6 text-lg border-2 hover:border-teal-600 hover:bg-teal-50/50 transition-all duration-300 group"
              onClick={() => onLogin('doctor')}
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4 group-hover:bg-teal-100 transition-colors">
                <Stethoscope className="w-5 h-5 text-slate-600 group-hover:text-teal-600" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold">I am a Doctor</span>
                <span className="text-xs text-slate-500">Manage schedules and patients</span>
              </div>
            </Button>

            <Button 
              variant="outline" 
              className="w-full h-16 rounded-2xl justify-start px-6 text-lg border-2 hover:border-teal-600 hover:bg-teal-50/50 transition-all duration-300 group"
              onClick={() => onLogin('hospital')}
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-4 group-hover:bg-teal-100 transition-colors">
                <Building2 className="w-5 h-5 text-slate-600 group-hover:text-teal-600" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold">I am a Hospital Admin</span>
                <span className="text-xs text-slate-500">Onboard and manage resources</span>
              </div>
            </Button>
          </CardContent>
          <CardFooter className="p-8 pt-0 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-6 w-full">
              <div className="h-px bg-slate-200 flex-1"></div>
              <span className="text-xs text-slate-400 font-medium px-2">OR SECURE LOGIN</span>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>
            <Button className="w-full h-14 rounded-2xl bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm flex items-center justify-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Continue with Google
            </Button>
            <p className="mt-6 text-xs text-slate-400 text-center">
              By signing in, you agree to Orviixa's <br />
              <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
