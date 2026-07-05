import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Plus, Search, User, UserPlus, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export const SchedulingModule: React.FC = () => {
  const [patientName, setPatientName] = useState('');
  
  const handleCreate = () => {
    if (!patientName) return toast.error('Enter patient name');
    toast.success(`Appointment scheduled for ${patientName}`);
    setPatientName('');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-slate-900">Manage Schedule</h2>
        <Button className="rounded-2xl bg-slate-900 h-12 font-bold px-6">Set Availability</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 rounded-[2rem] border-2 border-slate-100 shadow-sm overflow-hidden">
          <CardHeader className="bg-slate-50 border-b border-slate-100 p-6">
            <CardTitle className="text-lg font-bold">Initiate New Appointment</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Find Patient</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <Input 
                    placeholder="Search by name or ID..." 
                    className="pl-10 h-14 rounded-2xl border-2 border-slate-50 bg-slate-50/30"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Date</label>
                  <Input type="date" className="h-14 rounded-2xl border-2 border-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Time Slot</label>
                  <Input type="time" className="h-14 rounded-2xl border-2 border-slate-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Consultation Type</label>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2 border-teal-500 bg-teal-50 text-teal-700 font-bold">Virtual</Button>
                  <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2 border-slate-50 text-slate-500 font-bold">In-Person</Button>
                </div>
              </div>
            </div>

            <Button 
              className="w-full h-16 rounded-2xl bg-teal-600 hover:bg-teal-700 font-bold text-lg shadow-lg shadow-teal-100"
              onClick={handleCreate}
            >
              Confirm and Invite Patient
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="rounded-[2rem] border-2 border-slate-100 p-6">
            <h3 className="font-bold text-slate-900 mb-4">Patient Queue</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Patient #{i}204</p>
                      <p className="text-[10px] text-slate-500">Waiting for 1{i}m</p>
                    </div>
                  </div>
                  <Button size="sm" className="rounded-lg bg-white border border-slate-200 text-slate-900 hover:bg-teal-50 hover:text-teal-600 font-bold h-8">Accept</Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="rounded-[2rem] bg-teal-600 text-white p-6 shadow-xl shadow-teal-100">
            <h3 className="font-bold mb-2">Private Doctor Integration</h3>
            <p className="text-xs text-teal-100 mb-4 leading-relaxed">Join as a private practitioner to manage your own client base while using Orviixa's tools.</p>
            <Button className="w-full rounded-xl bg-white text-teal-600 hover:bg-teal-50 font-bold">Activate Private Mode</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
