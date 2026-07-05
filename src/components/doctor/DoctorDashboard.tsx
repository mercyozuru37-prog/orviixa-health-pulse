import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Clock, ShieldCheck, Plus, Briefcase, FileText } from 'lucide-react';
import { Doctor } from '@/types';
import { mockAppointments } from '@/lib/mock-data';
import { format } from 'date-fns';

export const DoctorDashboard: React.FC<{ doctor: Doctor }> = ({ doctor }) => {
  const appointments = mockAppointments; // In a real app, filter by doctor ID

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-teal-100 overflow-hidden border-2 border-white shadow-md">
            {doctor.image ? (
              <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-teal-600 font-bold text-2xl">
                {doctor.name.charAt(0)}
              </div>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-slate-900">{doctor.name}</h1>
              {doctor.verified && <ShieldCheck className="w-5 h-5 text-blue-500" />}
            </div>
            <p className="text-slate-500 font-medium">{doctor.specialty} • {doctor.isPrivate ? "Private Practice" : "St. Mary's General"}</p>
          </div>
        </div>
        <Button className="rounded-2xl bg-teal-600 hover:bg-teal-700 h-12 px-6 font-bold shadow-lg shadow-teal-100 hidden sm:flex items-center gap-2">
          <Plus className="w-5 h-5" />
          New Schedule
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="rounded-3xl border-none bg-slate-900 text-white p-6 shadow-xl">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 font-bold">TODAY</Badge>
          </div>
          <div className="text-3xl font-bold">12</div>
          <div className="text-sm opacity-60">Patients Scheduled</div>
        </Card>

        <Card className="rounded-3xl border-none bg-white p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900">4.5h</div>
          <div className="text-sm text-slate-500 font-medium">Consultation Time</div>
        </Card>

        <Card className="rounded-3xl border-none bg-white p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
              <Briefcase className="w-6 h-6" />
            </div>
          </div>
          <div className="text-3xl font-bold text-slate-900">3</div>
          <div className="text-sm text-slate-500 font-medium">Job Invitations</div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Upcoming Consultations</h2>
          </div>
          <div className="space-y-4">
            {appointments.map(apt => (
              <Card key={apt.id} className="rounded-2xl border-2 border-slate-50 hover:border-teal-100 transition-all shadow-sm">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                      JD
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">John Doe</h4>
                      <p className="text-xs text-slate-500">{format(new Date(apt.startTime), 'p')} • Virtual</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="rounded-xl text-teal-600 font-bold hover:bg-teal-50">
                    Start Call
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <Card className="rounded-3xl border-2 border-slate-100 bg-slate-50 p-6 overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Verification Status</h3>
              <p className="text-sm text-slate-500 mb-6">Your profile is currently 85% complete. Verify your certificates to gain patient trust.</p>
              <div className="flex items-center gap-4">
                <Button className="rounded-xl bg-slate-900 text-white font-bold">Complete Now</Button>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-green-500 flex items-center justify-center text-white">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            <FileText className="absolute -right-4 -bottom-4 w-32 h-32 text-slate-200/50" />
          </Card>

          <Card className="rounded-3xl border-2 border-slate-100 p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Employment Opportunities</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Senior Cardiologist Needed</h4>
                  <p className="text-xs text-slate-500">Riverside Medical Center • Full-time</p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};
