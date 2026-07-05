import { useState, useEffect } from 'react';
import { differenceInSeconds } from 'date-fns';

export function useAppointmentTimer(expiresAt: string | Date) {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const expiry = new Date(expiresAt);
    
    const calculateTimeLeft = () => {
      const seconds = differenceInSeconds(expiry, new Date());
      if (seconds <= 0) {
        setTimeLeft(0);
        setIsExpired(true);
        return;
      }
      setTimeLeft(seconds);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  const formatTime = () => {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return { timeLeft, isExpired, formatTime };
}
