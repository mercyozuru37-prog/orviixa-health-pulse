import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, CheckCircle, AlertCircle, QrCode } from 'lucide-react';
import { Appointment, Doctor, Hospital } from '@/types';
import { mockDoctors, mockHospitals } from '@/lib/mock-data';
import { useAppointmentTimer } from '@/hooks/use-appointment-timer';
import { format } from 'date-fns';

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const doctor = mockDoctors.find(d => d.id === appointment.doctorId);
  const hospital = mockHospitals.find(h => h.id === appointment.hospitalId);
  const { formatTime, isExpired } = useAppointmentTimer(appointment.expiresAt);

  const statusColors = {
    upcoming: 'bg-teal-50 text-teal-700 border-teal-200',
    expired: 'bg-slate-50 text-slate-500 border-slate-200',
    completed: 'bg-blue-50 text-blue-700 border-blue-200',
    emergency: 'bg-red-50 text-red-700 border-red-200',
  };

  return (
    <Card className="mb-4 overflow-hidden border-2 border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex">
        <div className={`w-2 ${isExpired ? 'bg-slate-300' : appointment.status === 'emergency' ? 'bg-red-500' : 'bg-teal-500'}`} />
        <CardContent className="p-4 flex-1">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">{doctor?.name}</h3>
              <p className="text-sm text-slate-500 font-medium">{doctor?.specialty}</p>
            </div>
            <Badge variant="outline" className={statusColors[isExpired ? 'expired' : appointment.status]}>
              {isExpired ? 'Expired' : appointment.status.toUpperCase()}
            </Badge>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Building2 className="w-4 h-4 text-teal-600" />
              <span>{hospital?.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Calendar className="w-4 h-4 text-teal-600" />
              <span>{format(new Date(appointment.startTime), 'PPP p')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span>{hospital?.location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-dashed border-slate-200">
            <div className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Verification Code</span>
              <div className="flex items-center gap-2 text-teal-700 font-mono font-bold">
                <QrCode className="w-4 h-4" />
                {appointment.verificationCode}
              </div>
            </div>
            
            {!isExpired && appointment.status !== 'completed' && (
              <div className="flex flex-col items-end text-right">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Valid for</span>
                <div className="flex items-center gap-1.5 text-red-600 font-bold">
                  <Clock className="w-4 h-4 animate-pulse" />
                  {formatTime()}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

const Building2 = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
);

export const PatientDashboard: React.FC<{ appointments: Appointment[] }> = ({ appointments }) => {
  const upcoming = appointments.filter(a => a.status === 'upcoming' || a.status === 'emergency');
  const past = appointments.filter(a => a.status === 'expired' || a.status === 'completed');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900">Hello, Alex! 👋</h1>
          <p className="text-slate-500">Your health overview for today</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-teal-600 rounded-3xl p-5 text-white shadow-lg shadow-teal-100">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div className="text-2xl font-bold">{upcoming.length}</div>
          <div className="text-xs opacity-80 font-medium">Active Bookings</div>
        </div>
        <div className="bg-red-500 rounded-3xl p-5 text-white shadow-lg shadow-red-100">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="text-2xl font-bold">{appointments.filter(a => a.status === 'emergency').length}</div>
          <div className="text-xs opacity-80 font-medium">Urgent Requests</div>
        </div>
      </div>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">Upcoming Appointments</h2>
          <Button variant="link" className="text-teal-600 font-bold p-0">See all</Button>
        </div>
        {upcoming.length > 0 ? (
          upcoming.map(apt => <AppointmentCard key={apt.id} appointment={apt} />)
        ) : (
          <div className="bg-white rounded-3xl border-2 border-dashed border-slate-200 p-8 text-center">
            <p className="text-slate-400 font-medium">No upcoming appointments</p>
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-slate-900">Past & Expired</h2>
        </div>
        {past.map(apt => <AppointmentCard key={apt.id} appointment={apt} />)}
      </section>
    </div>
  );
};
