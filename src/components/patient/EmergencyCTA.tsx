import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, Zap, ShieldAlert, Phone } from 'lucide-react';
import { toast } from 'sonner';

export const EmergencyCTA: React.FC<{ onEmergency: (nature: string) => void }> = ({ onEmergency }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nature, setNature] = useState('');

  const handleSubmit = () => {
    if (!nature.trim()) {
      toast.error('Please describe the emergency');
      return;
    }
    onEmergency(nature);
    setIsOpen(false);
    setNature('');
    toast.success('Emergency alert sent! Instant approval granted.');
  };

  return (
    <>
      <Button 
        size="icon" 
        className="fixed bottom-24 right-6 w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 shadow-2xl shadow-red-200 z-40 animate-pulse border-4 border-white"
        onClick={() => setIsOpen(true)}
      >
        <AlertCircle className="w-8 h-8 text-white" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md rounded-3xl">
          <DialogHeader>
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
              <ShieldAlert className="text-red-600 w-8 h-8" />
            </div>
            <DialogTitle className="text-2xl font-bold text-slate-900">Emergency Response</DialogTitle>
            <DialogDescription className="text-slate-500 pt-2">
              Describe the nature of your emergency. This will grant you <strong>instant doctor approval</strong> and priority scheduling.
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nature of Emergency</label>
              <Textarea 
                placeholder="e.g., Severe chest pain, high fever, accident..."
                className="rounded-2xl border-2 border-slate-100 focus:border-red-500 h-32"
                value={nature}
                onChange={(e) => setNature(e.target.value)}
              />
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex gap-3">
              <Zap className="w-5 h-5 text-amber-600 shrink-0" />
              <p className="text-xs text-amber-700 font-medium">
                Our system automatically matches you with the nearest available verified doctor for immediate virtual consultation.
              </p>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-col gap-3">
            <Button 
              className="w-full h-14 rounded-2xl bg-red-600 hover:bg-red-700 font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-red-100"
              onClick={handleSubmit}
            >
              <AlertCircle className="w-5 h-5" />
              Request Instant Help
            </Button>
            <Button 
              variant="outline" 
              className="w-full h-14 rounded-2xl border-2 border-slate-100 font-bold text-slate-600 flex items-center justify-center gap-2"
              onClick={() => {
                setIsOpen(false);
                toast.info('Connecting to emergency services...');
              }}
            >
              <Phone className="w-5 h-5" />
              Call Emergency Services
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
