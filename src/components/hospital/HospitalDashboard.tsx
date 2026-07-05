import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, Activity, BarChart3, TrendingUp, CheckCircle2, UserPlus } from 'lucide-react';
import { Hospital } from '@/types';

export const HospitalDashboard: React.FC<{ hospital: Hospital }> = ({ hospital }) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">{hospital.name}</h1>
            <div className="flex items-center gap-2 text-slate-500 font-medium">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Verified Partner Hospital
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Button variant="outline" className="rounded-2xl border-2 border-slate-100 font-bold h-12">Export Stats</Button>
          <Button className="rounded-2xl bg-blue-600 hover:bg-blue-700 font-bold h-12 px-6 shadow-lg shadow-blue-100">Manage Doctors</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Patients', val: '2,840', icon: Users, color: 'bg-blue-500' },
          { label: 'Active Doctors', val: '45', icon: Activity, color: 'bg-teal-500' },
          { label: 'Revenue', val: '$84k', icon: BarChart3, color: 'bg-amber-500' },
          { label: 'Efficiency', val: '94%', icon: TrendingUp, color: 'bg-purple-500' }
        ].map((stat, i) => (
          <Card key={i} className="rounded-3xl border-2 border-slate-50 p-6 shadow-sm">
            <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center text-white mb-4`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-slate-900">{stat.val}</div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{stat.label}</div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="rounded-[2.5rem] border-2 border-slate-100 p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-900">Doctor Performance</h3>
            <Button variant="ghost" className="text-blue-600 font-bold">View List</Button>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100"></div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Dr. Specialist #{i}</h4>
                    <p className="text-xs text-slate-500">Cardiology • 4.9 Rating</p>
                  </div>
                </div>
                <Badge className="bg-green-50 text-green-700 border-none font-bold">Active</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="rounded-[2.5rem] bg-slate-900 text-white p-8 relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-bold">Government API Collab</h3>
            <p className="text-slate-400 leading-relaxed">Your hospital is successfully synced with the National Health Authority. All digital signatures and prescriptions are regulatory compliant.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-teal-400 font-bold mb-1">Status</div>
                <div className="text-lg font-bold">Authenticated</div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-teal-400 font-bold mb-1">Last Sync</div>
                <div className="text-lg font-bold">2m ago</div>
              </div>
            </div>
            <Button className="w-full h-14 rounded-2xl bg-teal-500 hover:bg-teal-600 font-bold">Review API Logs</Button>
          </div>
          <Activity className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5" />
        </Card>
      </div>
    </div>
  );
};
