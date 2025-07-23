import React, { useState } from 'react';
import { Plus, Search, MapPin, Users, Briefcase, MessageCircle, User, Volume2 } from 'lucide-react';

type Language = 'te' | 'hi' | 'en';

interface EmployerDashboardProps {
  user: any;
  language: Language;
  onNavigateToProfile: () => void;
}

const EmployerDashboard: React.FC<EmployerDashboardProps> = ({ user, language, onNavigateToProfile }) => {
  const [activeTab, setActiveTab] = useState('home');

  const content = {
    en: {
      greeting: "Good morning",
      postJob: "Post New Job",
      findWorkers: "Find Workers",
      myJobs: "My Posted Jobs",
      noJobs: "You haven't posted any jobs yet",
      tabs: {
        home: "Home",
        workers: "Workers",
        chat: "Chat",
        jobs: "My Jobs",
        profile: "Profile"
      }
    },
    hi: {
      greeting: "सुप्रभात",
      postJob: "नया काम पोस्ट करें",
      findWorkers: "कामगार खोजें",
      myJobs: "मेरे पोस्ट किए गए काम",
      noJobs: "आपने अभी तक कोई काम पोस्ट नहीं किया है",
      tabs: {
        home: "घर",
        workers: "कामगार",
        chat: "चैट",
        jobs: "मेरे काम",
        profile: "प्रोफाइल"
      }
    },
    te: {
      greeting: "శుభోదయం",
      postJob: "కొత్త పని పోస్ట్ చేయండి",
      findWorkers: "కార్మికులను కనుగొనండి",
      myJobs: "నా పోస్ట్ చేసిన పనులు",
      noJobs: "మీరు ఇంకా ఎటువంటి పనులు పోస్ట్ చేయలేదు",
      tabs: {
        home: "హోమ్",
        workers: "కార్మికులు",
        chat: "చాట్",
        jobs: "నా పనులు",
        profile: "ప్రొఫైల్"
      }
    }
  };

  const currentContent = content[language];

  const renderHomeTab = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {currentContent.greeting}, {user.name}
            </h2>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{user.location}</span>
            </div>
          </div>
          <Volume2 className="w-6 h-6 text-orange-600" />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-4">
        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Plus className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold">{currentContent.postJob}</h3>
              <p className="text-orange-100">Find workers for your tasks</p>
            </div>
          </div>
        </button>

        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold">{currentContent.findWorkers}</h3>
              <p className="text-blue-100">Browse available workers</p>
            </div>
          </div>
        </button>
      </div>

      {/* My Jobs */}
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          {currentContent.myJobs}
        </h3>
        <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Briefcase className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-600">{currentContent.noJobs}</p>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return renderHomeTab();
      case 'workers':
        return (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Available workers will appear here</p>
          </div>
        );
      case 'chat':
        return (
          <div className="text-center py-12">
            <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Your messages will appear here</p>
          </div>
        );
      case 'jobs':
        return (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Your posted jobs will appear here</p>
          </div>
        );
      case 'profile':
        return (
          <div className="text-center py-12">
            <button
              onClick={onNavigateToProfile}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl"
            >
              View Profile
            </button>
          </div>
        );
      default:
        return renderHomeTab();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Main Content */}
      <div className="px-6 py-6 pb-24">
        {renderTabContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-around">
          {[
            { id: 'home', icon: Briefcase, label: currentContent.tabs.home },
            { id: 'workers', icon: Users, label: currentContent.tabs.workers },
            { id: 'chat', icon: MessageCircle, label: currentContent.tabs.chat },
            { id: 'jobs', icon: Briefcase, label: currentContent.tabs.jobs },
            { id: 'profile', icon: User, label: currentContent.tabs.profile }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'text-orange-600 bg-orange-50'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              <tab.icon className="w-6 h-6" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;