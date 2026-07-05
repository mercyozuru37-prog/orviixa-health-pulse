import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin, Star, ShieldCheck, Clock, Hospital as HospitalIcon, ChevronRight } from 'lucide-react';
import { mockDoctors, mockHospitals } from '@/lib/mock-data';
import { Doctor, Hospital } from '@/types';

interface DoctorBookingProps {
  onBook: (doctor: Doctor, hospital: Hospital) => void;
}

export const DoctorBooking: React.FC<DoctorBookingProps> = ({ onBook }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHospital, setSelectedHospital] = useState<string | null>(null);

  const filteredDoctors = mockDoctors.filter(d => 
    (d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     d.specialty.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (!selectedHospital || d.hospitalId === selectedHospital)
  );

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-extrabold text-slate-900">Find Your Specialist</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input 
            placeholder="Search doctors, specialties..." 
            className="pl-10 h-14 rounded-2xl border-2 border-slate-100 focus:border-teal-500 bg-white transition-all shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Popular Hospitals</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 no-scrollbar">
          <Button 
            variant={selectedHospital === null ? 'default' : 'outline'}
            className={`rounded-2xl h-12 whitespace-nowrap px-6 font-bold ${selectedHospital === null ? 'bg-teal-600 shadow-lg shadow-teal-100' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
            onClick={() => setSelectedHospital(null)}
          >
            All Hospitals
          </Button>
          {mockHospitals.map(h => (
            <Button
              key={h.id}
              variant={selectedHospital === h.id ? 'default' : 'outline'}
              className={`rounded-2xl h-12 whitespace-nowrap px-6 font-bold ${selectedHospital === h.id ? 'bg-teal-600 shadow-lg shadow-teal-100' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              onClick={() => setSelectedHospital(h.id)}
            >
              <HospitalIcon className="w-4 h-4 mr-2" />
              {h.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">Available Doctors</h3>
        <div className="space-y-4">
          {filteredDoctors.map(doctor => {
            const hospital = mockHospitals.find(h => h.id === doctor.hospitalId);
            return (
              <Card key={doctor.id} className="rounded-3xl border-2 border-slate-50 shadow-sm hover:border-teal-100 transition-all overflow-hidden group">
                <CardContent className="p-0">
                  <div className="flex p-4 gap-4">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-slate-100 overflow-hidden">
                        {doctor.image ? (
                          <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-400">
                            <DoctorIcon className="w-10 h-10" />
                          </div>
                        )}
                      </div>
                      {doctor.availability && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white"></div>
                      )}
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-bold text-slate-900">{doctor.name}</h4>
                          {doctor.verified && (
                            <ShieldCheck className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-500" />
                          {doctor.rating}
                        </div>
                      </div>
                      
                      <p className="text-sm text-slate-500 font-medium">{doctor.specialty}</p>
                      
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{hospital?.name}</span>
                      </div>

                      <div className="flex items-center gap-4 pt-3">
                        <div className="flex items-center gap-1.5">
                          <Badge variant="secondary" className="bg-teal-50 text-teal-700 hover:bg-teal-100 rounded-lg px-2 py-0.5 text-[10px] font-bold">
                            REAL-TIME AVAILABILITY
                          </Badge>
                        </div>
                        {doctor.isPrivate && (
                          <Badge variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-lg px-2 py-0.5 text-[10px] font-bold">
                            PRIVATE
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="px-4 pb-4">
                    <Button 
                      className="w-full rounded-2xl bg-slate-900 hover:bg-teal-600 transition-colors h-11 font-bold flex items-center justify-between px-6"
                      onClick={() => hospital && onBook(doctor, hospital)}
                    >
                      Book Appointment
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs">1-2h Validity</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const DoctorIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.82 2.96 0"/><path d="m12 5 2.96 2.96c.83.83.83 2.14 0 2.96v0a2.17 2.17 0 0 1-3.08 0"/><path d="M12 21v-6"/></svg>
);
