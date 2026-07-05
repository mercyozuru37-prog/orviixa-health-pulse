export type UserRole = 'patient' | 'doctor' | 'hospital';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Hospital {
  id: string;
  name: string;
  location: string;
  rating: number;
  image?: string;
  verified: boolean;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  hospitalId: string;
  availability: boolean;
  rating: number;
  reviews: number;
  image?: string;
  verified: boolean;
  certificates?: string[];
  isPrivate?: boolean;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  hospitalId: string;
  startTime: string;
  status: 'upcoming' | 'expired' | 'completed' | 'emergency';
  verificationCode: string;
  emergencyNature?: string;
  expiresAt: string;
}

export interface Review {
  id: string;
  userId: string;
  targetId: string;
  rating: number;
  remarks: string;
  emoji: string;
  createdAt: string;
}
