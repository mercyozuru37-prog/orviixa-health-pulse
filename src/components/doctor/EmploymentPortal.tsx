import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Building2, Star, ChevronRight, DollarSign, Clock } from 'lucide-react';

const mockJobs = [
  {
    id: 'j1',
    title: 'Chief Cardiologist',
    hospital: "St. Mary's General",
    location: 'Downtown City',
    type: 'Full-time',
    salary: '$180k - $240k',
    rating: 4.8
  },
  {
    id: 'j2',
    title: 'Senior Pediatrician',
    hospital: 'Green Valley Community',
    location: 'Westside',
    type: 'Part-time',
    salary: '$90k - $120k',
    rating: 4.5
  }
];

export const EmploymentPortal: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Career Opportunities</h1>
          <p className="text-slate-500">Exclusive roles for verified Orviixa doctors.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl border-2 border-slate-100 font-bold">My Applications</Button>
          <Button className="rounded-xl bg-slate-900 font-bold">Post a Resume</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockJobs.map(job => (
          <Card key={job.id} className="rounded-[2rem] border-2 border-slate-50 shadow-sm hover:border-teal-100 transition-all overflow-hidden group">
            <CardContent className="p-0">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                    <Building2 className="w-8 h-8" />
                  </div>
                  <Badge className="bg-teal-50 text-teal-700 hover:bg-teal-50 border-none font-bold uppercase tracking-widest text-[10px]">
                    {job.type}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mt-1">
                    <span>{job.hospital}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-2">
                  <div className="flex items-center gap-1.5 text-slate-700 font-bold text-sm">
                    <DollarSign className="w-4 h-4 text-green-600" />
                    {job.salary}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-700 font-bold text-sm">
                    <Clock className="w-4 h-4 text-blue-600" />
                    Posted 2d ago
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 p-4 flex items-center justify-between border-t border-slate-100">
                <div className="flex items-center gap-1 text-amber-500 font-bold text-xs uppercase">
                  <Star className="w-3 h-3 fill-amber-500" />
                  {job.rating} Hospital Rating
                </div>
                <Button variant="ghost" className="text-teal-600 font-bold hover:bg-teal-100 rounded-xl group-hover:translate-x-1 transition-transform">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
