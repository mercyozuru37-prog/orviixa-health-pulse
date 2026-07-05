import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Building2, Globe, ShieldCheck, CheckCircle2, Database, Users } from 'lucide-react';
import { toast } from 'sonner';

export const HospitalOnboarding: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Hospital registration submitted for approval!');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <Badge className="bg-teal-100 text-teal-700 hover:bg-teal-100 border-none font-bold">PARTNER PROGRAM</Badge>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Onboard Your Hospital</h1>
          <p className="text-slate-500 text-lg">Bring digital healthcare to your local community.</p>
        </div>
        <div className="flex items-center gap-2 text-slate-400 font-bold text-sm bg-white border border-slate-100 rounded-2xl px-4 py-2">
          <Globe className="w-4 h-4" />
          Government API Connected
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card className="rounded-[2.5rem] border-2 border-slate-100 shadow-lg overflow-hidden">
            <CardHeader className="p-8 pb-0">
              <CardTitle className="text-xl font-bold">Hospital Details</CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Hospital Name</label>
                    <Input placeholder="e.g. City Community Clinic" className="h-14 rounded-2xl border-2 border-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Hospital Category</label>
                    <select className="w-full h-14 rounded-2xl border-2 border-slate-50 px-3 bg-white text-slate-700 font-medium">
                      <option>Select Category</option>
                      <option>Private Clinic</option>
                      <option>Public/Government</option>
                      <option>Specialized Center</option>
                      <option>Pharmacy w/ Clinic</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Location Address</label>
                  <Input placeholder="Street, City, Zip Code" className="h-14 rounded-2xl border-2 border-slate-50" />
                </div>

                <div className="p-6 bg-blue-50/50 rounded-3xl border border-blue-100 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Database className="w-5 h-5 text-blue-600" />
                      <h4 className="font-bold text-slate-900">Government Health API Sync</h4>
                    </div>
                    <Badge className="bg-green-500 text-white border-none px-2 py-0.5 text-[10px]">LIVE</Badge>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    By enabling this, we will automatically fetch your hospital's license status and regulatory standing from the national health database.
                  </p>
                  <Button type="button" variant="outline" className="rounded-xl border-blue-200 text-blue-700 font-bold hover:bg-blue-100">
                    Sync Credentials
                  </Button>
                </div>

                <Button className="w-full h-16 rounded-2xl bg-teal-600 hover:bg-teal-700 font-bold text-lg shadow-xl shadow-teal-100">
                  Register Hospital
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="rounded-[2.5rem] bg-slate-900 text-white p-8 space-y-6 overflow-hidden relative">
            <h3 className="text-xl font-bold relative z-10">Why join Orviixa?</h3>
            <ul className="space-y-6 relative z-10">
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Reach 10k+ Patients</h4>
                  <p className="text-xs opacity-60">Instantly appear in patient searches across the city.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-xl bg-blue-500 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Digitize Operations</h4>
                  <p className="text-xs opacity-60">Manage appointments and doctor schedules online.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold">Verified Status</h4>
                  <p className="text-xs opacity-60">Build trust with our rigorous verification badges.</p>
                </div>
              </li>
            </ul>
            <Building2 className="absolute -right-8 -bottom-8 w-48 h-48 text-white/5" />
          </Card>

          <div className="bg-white rounded-3xl p-6 border-2 border-slate-50 shadow-sm space-y-4">
            <h4 className="font-bold text-slate-900">Supported Standards</h4>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-lg text-[10px]">HL7/FHIR</Badge>
              <Badge variant="outline" className="rounded-lg text-[10px]">HIPAA COMPLIANT</Badge>
              <Badge variant="outline" className="rounded-lg text-[10px]">ISO 27001</Badge>
              <Badge variant="outline" className="rounded-lg text-[10px]">GDPR</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
