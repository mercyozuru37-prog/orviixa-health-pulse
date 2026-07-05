import { useState } from 'react';
import { UserRole, User, Appointment, Doctor, Hospital } from './types';
import { Login } from './components/auth/Login';
import { Layout } from './components/shared/Layout';
import { PatientDashboard } from './components/patient/PatientDashboard';
import { DoctorBooking } from './components/patient/DoctorBooking';
import { EmergencyCTA } from './components/patient/EmergencyCTA';
import { ReviewSystem } from './components/patient/ReviewSystem';
import { DoctorDashboard } from './components/doctor/DoctorDashboard';
import { DoctorVerification } from './components/doctor/DoctorVerification';
import { SchedulingModule } from './components/doctor/SchedulingModule';
import { EmploymentPortal } from './components/doctor/EmploymentPortal';
import { HospitalDashboard } from './components/hospital/HospitalDashboard';
import { HospitalOnboarding } from './components/hospital/HospitalOnboarding';
import { mockAppointments, mockDoctors, mockHospitals } from './lib/mock-data';
import { Toaster, toast } from 'sonner';
import { addHours } from 'date-fns';

function App() {
  const [role, setRole] = useState<UserRole | null>(null);
  const [view, setView] = useState<string>('dashboard');
  const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);
  const [showReview, setShowReview] = useState(false);
  const [lastBookedDoctor, setLastBookedDoctor] = useState<string>('');

  const handleLogin = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setView('dashboard');
    toast.success(`Logged in as ${selectedRole}`);
  };

  const handleLogout = () => {
    setRole(null);
    setView('dashboard');
  };

  const handleBook = (doctor: Doctor, hospital: Hospital) => {
    const newAppointment: Appointment = {
      id: `a${Date.now()}`,
      patientId: 'p1',
      doctorId: doctor.id,
      hospitalId: hospital.id,
      startTime: new Date().toISOString(),
      status: 'upcoming',
      verificationCode: `ORV-${Math.floor(100 + Math.random() * 900)}-${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`,
      expiresAt: addHours(new Date(), 2).toISOString(),
    };
    setAppointments([newAppointment, ...appointments]);
    setLastBookedDoctor(doctor.name);
    setView('dashboard');
    toast.success(`Appointment booked with ${doctor.name}! Valid for 2 hours.`);
  };

  const handleEmergency = (nature: string) => {
    const doctor = mockDoctors[0]; // Auto-match first doctor
    const hospital = mockHospitals[0];
    const newAppointment: Appointment = {
      id: `e${Date.now()}`,
      patientId: 'p1',
      doctorId: doctor.id,
      hospitalId: hospital.id,
      startTime: new Date().toISOString(),
      status: 'emergency',
      verificationCode: `EMG-${Math.floor(100 + Math.random() * 900)}`,
      emergencyNature: nature,
      expiresAt: addHours(new Date(), 1).toISOString(),
    };
    setAppointments([newAppointment, ...appointments]);
    setView('dashboard');
  };

  if (!role) {
    return (
      <>
        <Login onLogin={handleLogin} />
        <Toaster position="top-center" expand={true} richColors />
      </>
    );
  }

  const renderContent = () => {
    if (role === 'patient') {
      switch (view) {
        case 'dashboard':
          return (
            <>
              <PatientDashboard appointments={appointments} />
              <EmergencyCTA onEmergency={handleEmergency} />
            </>
          );
        case 'booking':
          return <DoctorBooking onBook={handleBook} />;
        default:
          return <PatientDashboard appointments={appointments} />;
      }
    }

    if (role === 'doctor') {
      const doctor = mockDoctors[0];
      switch (view) {
        case 'dashboard':
          return <DoctorDashboard doctor={doctor} />;
        case 'verification':
          return <DoctorVerification />;
        case 'scheduling':
          return <SchedulingModule />;
        case 'employment':
          return <EmploymentPortal />;
        default:
          return <DoctorDashboard doctor={doctor} />;
      }
    }

    if (role === 'hospital') {
      const hospital = mockHospitals[0];
      switch (view) {
        case 'dashboard':
          return <HospitalDashboard hospital={hospital} />;
        case 'onboarding':
          return <HospitalOnboarding />;
        default:
          return <HospitalDashboard hospital={hospital} />;
      }
    }

    return null;
  };

  return (
    <Layout role={role} onLogout={handleLogout}>
      <div className="flex gap-4 mb-8 overflow-x-auto no-scrollbar pb-2">
        {role === 'patient' && (
          <>
            <button 
              onClick={() => setView('dashboard')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${view === 'dashboard' ? 'bg-teal-600 text-white shadow-lg shadow-teal-100' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'}`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setView('booking')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${view === 'booking' ? 'bg-teal-600 text-white shadow-lg shadow-teal-100' : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-100'}`}
            >
              Book Appointment
            </button>
            <button 
              onClick={() => setShowReview(true)}
              className="px-4 py-2 rounded-xl text-sm font-bold bg-white text-slate-500 hover:bg-slate-50 border border-slate-100"
            >
              Recent Feedback
            </button>
          </>
        )}
        {role === 'doctor' && (
          <>
            <button onClick={() => setView('dashboard')} className={`px-4 py-2 rounded-xl text-sm font-bold ${view === 'dashboard' ? 'bg-teal-600 text-white' : 'bg-white border'}`}>Dashboard</button>
            <button onClick={() => setView('scheduling')} className={`px-4 py-2 rounded-xl text-sm font-bold ${view === 'scheduling' ? 'bg-teal-600 text-white' : 'bg-white border'}`}>Scheduling</button>
            <button onClick={() => setView('verification')} className={`px-4 py-2 rounded-xl text-sm font-bold ${view === 'verification' ? 'bg-teal-600 text-white' : 'bg-white border'}`}>Verification</button>
            <button onClick={() => setView('employment')} className={`px-4 py-2 rounded-xl text-sm font-bold ${view === 'employment' ? 'bg-teal-600 text-white' : 'bg-white border'}`}>Employment</button>
          </>
        )}
        {role === 'hospital' && (
          <>
            <button onClick={() => setView('dashboard')} className={`px-4 py-2 rounded-xl text-sm font-bold ${view === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-white border'}`}>Hospital Dashboard</button>
            <button onClick={() => setView('onboarding')} className={`px-4 py-2 rounded-xl text-sm font-bold ${view === 'onboarding' ? 'bg-blue-600 text-white' : 'bg-white border'}`}>Onboarding Portal</button>
          </>
        )}
      </div>

      {renderContent()}

      {showReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="w-full max-w-md animate-in fade-in zoom-in duration-300">
            <ReviewSystem 
              doctorName={lastBookedDoctor || "Dr. Sarah Johnson"} 
              onReview={() => setShowReview(false)} 
            />
          </div>
        </div>
      )}

      <Toaster position="top-center" expand={true} richColors />
    </Layout>
  );
}

export default App;
