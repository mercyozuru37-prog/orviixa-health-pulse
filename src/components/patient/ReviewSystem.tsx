import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const emojis = ['😞', '😐', '😊', '🤩', '❤️'];

export const ReviewSystem: React.FC<{ doctorName: string; onReview: () => void }> = ({ doctorName, onReview }) => {
  const [rating, setRating] = useState(0);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (rating === 0) {
      toast.error('Please provide a star rating');
      return;
    }
    toast.success('Thank you for your feedback!');
    onReview();
  };

  return (
    <Card className="rounded-3xl border-2 border-slate-100 shadow-xl overflow-hidden">
      <CardHeader className="bg-teal-600 text-white p-6">
        <CardTitle className="text-xl font-bold">Rate your experience</CardTitle>
        <p className="text-teal-100 text-sm">How was your appointment with {doctorName}?</p>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Button
                key={star}
                variant="ghost"
                size="icon"
                className="w-12 h-12"
                onClick={() => setRating(star)}
              >
                <Star 
                  className={`w-10 h-10 ${rating >= star ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} 
                />
              </Button>
            ))}
          </div>
          <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">
            {rating === 0 ? 'Select Rating' : `${rating} out of 5 stars`}
          </span>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-bold text-slate-700">How do you feel?</label>
          <div className="flex justify-between gap-2">
            {emojis.map((emoji) => (
              <Button
                key={emoji}
                variant="ghost"
                className={`text-3xl p-0 h-14 w-14 rounded-2xl transition-all ${selectedEmoji === emoji ? 'bg-teal-50 border-2 border-teal-500 scale-110' : 'bg-slate-50 border-2 border-transparent hover:bg-slate-100'}`}
                onClick={() => setSelectedEmoji(emoji)}
              >
                {emoji}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700">Remarks (Optional)</label>
          <Textarea 
            placeholder="Share your thoughts on the consultation..."
            className="rounded-2xl border-2 border-slate-100 focus:border-teal-500 h-24"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <Button 
          className="w-full h-14 rounded-2xl bg-teal-600 hover:bg-teal-700 font-bold text-lg shadow-lg shadow-teal-100"
          onClick={handleSubmit}
        >
          Submit Feedback
        </Button>
      </CardContent>
    </Card>
  );
};
