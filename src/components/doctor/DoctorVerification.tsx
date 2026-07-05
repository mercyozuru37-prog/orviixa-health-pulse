import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Upload, CheckCircle, FileText, X, ShieldCheck, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export const DoctorVerification: React.FC = () => {
  const [files, setFiles] = useState<{name: string, status: string}[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setFiles([...files, { name: `certificate_${Date.now()}.pdf`, status: 'Verified' }]);
      setIsUploading(false);
      toast.success('Certificate uploaded and verified!');
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Trust & Transparency</h1>
        <p className="text-slate-500">Verify your medical credentials to reach more patients and hospitals.</p>
      </div>

      <Card className="rounded-[2.5rem] border-2 border-slate-100 shadow-xl overflow-hidden">
        <CardHeader className="bg-slate-900 text-white p-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-xl font-bold">Doctor Verification System</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div 
            className="border-2 border-dashed border-slate-200 rounded-[2rem] p-10 text-center space-y-4 hover:border-teal-500 hover:bg-teal-50/30 transition-all cursor-pointer group"
            onClick={() => !isUploading && handleUpload()}
          >
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8 text-slate-400 group-hover:text-teal-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900">Click to upload medical certificate</p>
              <p className="text-xs text-slate-400 mt-1">PDF, JPG or PNG (max 5MB)</p>
            </div>
            {isUploading && (
              <div className="flex items-center justify-center gap-2 text-teal-600 font-bold text-sm animate-pulse">
                <CheckCircle className="w-4 h-4" />
                Processing Verification...
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Active Certificates</h3>
            {files.length > 0 ? (
              <div className="space-y-3">
                {files.map((file, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-slate-400" />
                      <div>
                        <p className="text-sm font-bold text-slate-900">{file.name}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">Added {new Date().toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none rounded-lg px-2">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      VERIFIED
                    </Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-amber-50 rounded-2xl p-4 flex gap-3 border border-amber-100">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <p className="text-xs text-amber-700 font-medium leading-relaxed">
                  You haven't uploaded any certificates yet. Verification is required to join most hospital panels.
                </p>
              </div>
            )}
          </div>

          <div className="pt-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-teal-500 rounded-full"></div>
              <h3 className="font-bold text-slate-900">Why Verify?</h3>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              <li className="text-xs text-slate-500 flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-[10px] shrink-0">✓</div>
                Appear in top search results
              </li>
              <li className="text-xs text-slate-500 flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-[10px] shrink-0">✓</div>
                Apply for hospital jobs
              </li>
              <li className="text-xs text-slate-500 flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-[10px] shrink-0">✓</div>
                Higher booking rates
              </li>
              <li className="text-xs text-slate-500 flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-[10px] shrink-0">✓</div>
                Premium insurance billing
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
