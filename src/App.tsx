import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import LanguageSelection from './components/LanguageSelection';
import PermissionsScreen from './components/PermissionsScreen';
import RoleSelection from './components/RoleSelection';
import PhoneLogin from './components/PhoneLogin';
import WorkerDashboard from './components/WorkerDashboard';
import EmployerDashboard from './components/EmployerDashboard';
import WorkerRegistration from './components/WorkerRegistration';
import Profile from './components/Profile';
import JobPostForm from './components/JobPostForm';
import WorkersList from './components/WorkersList';
import ChatScreen from './components/ChatScreen';
import EarningsScreen from './components/EarningsScreen';

type Screen = 'splash' | 'language' | 'permissions' | 'role' | 'login' | 'worker-registration' | 'worker-dashboard' | 'employer-dashboard' | 'profile' | 'job-post' | 'workers-list' | 'chat' | 'earnings';
type Language = 'te' | 'hi' | 'en';
type UserRole = 'worker' | 'employer';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [user, setUser] = useState<any>(null);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setCurrentScreen('permissions');
  };

  const handlePermissionsComplete = () => {
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

  const handleJobPost = (jobData: any) => {
    console.log('Job posted:', jobData);
    setCurrentScreen('employer-dashboard');
  };

  const handleNavigateToProfile = () => {
    setCurrentScreen('profile');
  };

  const handleNavigateToJobPost = () => {
    setCurrentScreen('job-post');
  };

  const handleNavigateToWorkersList = () => {
    setCurrentScreen('workers-list');
  };

  const handleNavigateToChat = (contactName: string, contactType: 'worker' | 'employer') => {
    setCurrentScreen('chat');
  };

  const handleNavigateToEarnings = () => {
    setCurrentScreen('earnings');
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
      case 'permissions':
        return <PermissionsScreen onComplete={handlePermissionsComplete} language={selectedLanguage} />;
      case 'role':
        return <RoleSelection onRoleSelect={handleRoleSelect} language={selectedLanguage} />;
      case 'login':
        return <PhoneLogin onLoginSuccess={handleLoginSuccess} language={selectedLanguage} />;
      case 'worker-registration':
        return <WorkerRegistration onComplete={handleRegistrationComplete} language={selectedLanguage} />;
      case 'worker-dashboard':
        return <WorkerDashboard 
          user={user} 
          language={selectedLanguage} 
          onNavigateToProfile={handleNavigateToProfile}
          onNavigateToChat={handleNavigateToChat}
          onNavigateToEarnings={handleNavigateToEarnings}
        />;
      case 'employer-dashboard':
        return <EmployerDashboard 
          user={user} 
          language={selectedLanguage} 
          onNavigateToProfile={handleNavigateToProfile}
          onNavigateToJobPost={handleNavigateToJobPost}
          onNavigateToWorkersList={handleNavigateToWorkersList}
          onNavigateToChat={handleNavigateToChat}
        />;
      case 'profile':
        return <Profile user={user} language={selectedLanguage} userRole={userRole} onBack={handleBackToDashboard} />;
      case 'job-post':
        return <JobPostForm onBack={handleBackToDashboard} onSubmit={handleJobPost} language={selectedLanguage} />;
      case 'workers-list':
        return <WorkersList onBack={handleBackToDashboard} language={selectedLanguage} />;
      case 'chat':
        return <ChatScreen onBack={handleBackToDashboard} language={selectedLanguage} contactName="Demo Contact" contactType="worker" />;
      case 'earnings':
        return <EarningsScreen onBack={handleBackToDashboard} language={selectedLanguage} />;
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