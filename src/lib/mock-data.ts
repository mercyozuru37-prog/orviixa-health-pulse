import { Hospital, Doctor, Appointment } from '@/types';
import { addHours, subHours } from 'date-fns';

export const mockHospitals: Hospital[] = [
  {
    id: 'h1',
    name: "St. Mary's General Hospital",
    location: 'Downtown City, CA',
    rating: 4.8,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2eaf34de-81ef-4a3b-b54a-d396b8a21b35/hospital-bg-1-88b8834f-1783252629664.webp',
    verified: true,
  },
  {
    id: 'h2',
    name: 'Green Valley Community Health',
    location: 'Westside, CA',
    rating: 4.5,
    verified: true,
  },
  {
    id: 'h3',
    name: 'Riverside Medical Center',
    location: 'North District, CA',
    rating: 4.2,
    verified: false,
  }
];

export const mockDoctors: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    hospitalId: 'h1',
    availability: true,
    rating: 4.9,
    reviews: 128,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2eaf34de-81ef-4a3b-b54a-d396b8a21b35/doctor-avatar-1-2c6d09c7-1783252628330.webp',
    verified: true,
    certificates: ['Board Certified in Cardiology', 'Medical License #12345'],
  },
  {
    id: 'd2',
    name: 'Dr. Michael Chen',
    specialty: 'Pediatrician',
    hospitalId: 'h1',
    availability: true,
    rating: 4.7,
    reviews: 85,
    verified: true,
  },
  {
    id: 'd3',
    name: 'Dr. Elena Rodriguez',
    specialty: 'Dermatologist',
    hospitalId: 'h2',
    availability: false,
    rating: 4.8,
    reviews: 210,
    verified: true,
  },
  {
    id: 'd4',
    name: 'Dr. James Wilson',
    specialty: 'General Practitioner',
    hospitalId: 'h3',
    availability: true,
    rating: 4.5,
    reviews: 45,
    verified: false,
    isPrivate: true,
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: 'a1',
    patientId: 'p1',
    doctorId: 'd1',
    hospitalId: 'h1',
    startTime: new Date().toISOString(),
    status: 'upcoming',
    verificationCode: 'ORV-782-X',
    expiresAt: addHours(new Date(), 1.5).toISOString(),
  },
  {
    id: 'a2',
    patientId: 'p1',
    doctorId: 'd2',
    hospitalId: 'h1',
    startTime: subHours(new Date(), 24).toISOString(),
    status: 'expired',
    verificationCode: 'ORV-123-A',
    expiresAt: subHours(new Date(), 22).toISOString(),
  }
];
