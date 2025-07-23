import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import LanguageSelection from './components/LanguageSelection';
import RoleSelection from './components/RoleSelection';
import PhoneLogin from './components/PhoneLogin';
import WorkerDashboard from './components/WorkerDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import WorkerRegistration from './components/WorkerRegistration';
import Profile from './components/Profile';

type Screen = 'splash' | 'language' | 'role' | 'login' | 'worker-registration' | 'worker-dashboard' | 'employer-dashboard' | 'profile';
type Language = 'te' | 'hi' | 'en';
type UserRole = 'worker' | 'employer';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [user, setUser] = useState<any>(null);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setCurrentScreen('role');
  };

  const handleRoleSelect = (role: UserRole) => {
    setUserRole(role);
    setCurrentScreen('login');
  };

  const handleLoginSuccess = (userData: any) => {
    setUser(userData);
    if (userRole === 'worker' && !userData.isRegistered) {
      setCurrentScreen('worker-registration');
    } else if (userRole === 'worker') {
      setCurrentScreen('worker-dashboard');
    } else {
      setCurrentScreen('employer-dashboard');
    }
  };

  const handleRegistrationComplete = (registrationData: any) => {
    setUser({ ...user, ...registrationData, isRegistered: true });
    setCurrentScreen('worker-dashboard');
  };

  const handleNavigateToProfile = () => {
    setCurrentScreen('profile');
  };

  const handleBackToDashboard = () => {
    if (userRole === 'worker') {
      setCurrentScreen('worker-dashboard');
    } else {
      setCurrentScreen('employer-dashboard');
    }
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={() => setCurrentScreen('language')} />;
      case 'language':
        return <LanguageSelection onLanguageSelect={handleLanguageSelect} />;
      case 'role':
        return <RoleSelection onRoleSelect={handleRoleSelect} language={selectedLanguage} />;
      case 'login':
        return <PhoneLogin onLoginSuccess={handleLoginSuccess} language={selectedLanguage} />;
      case 'worker-registration':
        return <WorkerRegistration onComplete={handleRegistrationComplete} language={selectedLanguage} />;
      case 'worker-dashboard':
        return <WorkerDashboard user={user} language={selectedLanguage} onNavigateToProfile={handleNavigateToProfile} />;
      case 'employer-dashboard':
        return <EmployerDashboard user={user} language={selectedLanguage} onNavigateToProfile={handleNavigateToProfile} />;
      case 'profile':
        return <Profile user={user} language={selectedLanguage} userRole={userRole} onBack={handleBackToDashboard} />;
      default:
        return <SplashScreen onComplete={() => setCurrentScreen('language')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {renderCurrentScreen()}
    </div>
  );
}

export default App;