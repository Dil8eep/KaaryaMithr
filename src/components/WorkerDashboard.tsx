import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, MapPin, Clock, IndianRupee, Volume2, Home, Briefcase, MessageCircle, Wallet, User } from 'lucide-react';
import JobCard from './JobCard';

type Language = 'te' | 'hi' | 'en';

interface WorkerDashboardProps {
  user: any;
  language: Language;
  onNavigateToProfile: () => void;
  onNavigateToChat: (contactName: string, contactType: 'worker' | 'employer') => void;
  onNavigateToEarnings: () => void;
}

const WorkerDashboard: React.FC<WorkerDashboardProps> = ({ 
  user, 
  language, 
  onNavigateToProfile, 
  onNavigateToChat, 
  onNavigateToEarnings 
}) => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  const content = {
    en: {
      greeting: "Good morning",
      readyForWork: "Ready for Work",
      notAvailable: "Not Available",
      todayJobs: "Jobs for You Today",
      noJobs: "No jobs available right now",
      tabs: {
        home: "Home",
        works: "Works",
        chat: "Chat",
        earnings: "Earnings",
        profile: "Profile"
      }
    },
    hi: {
      greeting: "सुप्रभात",
      readyForWork: "काम के लिए तैयार",
      notAvailable: "उपलब्ध नहीं",
      todayJobs: "आज आपके लिए काम",
      noJobs: "अभी कोई काम उपलब्ध नहीं है",
      tabs: {
        home: "घर",
        works: "काम",
        chat: "चैट",
        earnings: "कमाई",
        profile: "प्रोफाइल"
      }
    },
    te: {
      greeting: "శుభోదయం",
      readyForWork: "పనికి సిద్ధం",
      notAvailable: "అందుబాటులో లేదు",
      todayJobs: "ఈరోజు మీ కోసం పనులు",
      noJobs: "ప్రస్తుతం ఎటువంటి పనులు అందుబాటులో లేవు",
      tabs: {
        home: "హోమ్",
        works: "పనులు",
        chat: "చాట్",
        earnings: "సంపాదన",
        profile: "ప్రొఫైల్"
      }
    }
  };

  const currentContent = content[language];

  const sampleJobs = [
    {
      id: 1,
      title: "Farm Work Needed",
      category: "Farming",
      location: "Rajam Village",
      distance: "2.5 km",
      duration: "4 hours",
      payment: 800,
      employer: "Ravi Kumar",
      description: "Need help with harvesting tomatoes",
      urgency: "high"
    },
    {
      id: 2,
      title: "House Construction",
      category: "Construction",
      location: "Narasapur",
      distance: "5.2 km",
      duration: "Full day",
      payment: 1200,
      employer: "Lakshmi Devi",
      description: "Brick laying work for new house",
      urgency: "medium"
    },
    {
      id: 3,
      title: "Garden Cleaning",
      category: "Gardening",
      location: "Vizianagaram",
      distance: "1.8 km",
      duration: "3 hours",
      payment: 600,
      employer: "Suresh Babu",
      description: "Clean and maintain garden area",
      urgency: "low"
    }
  ];

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
          <Volume2 className="w-6 h-6 text-green-600" />
        </div>

        {/* Availability Toggle */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <div>
            <h3 className="font-semibold text-gray-800">
              {isAvailable ? currentContent.readyForWork : currentContent.notAvailable}
            </h3>
            <p className="text-sm text-gray-600">
              {isAvailable ? "Employers can contact you" : "You won't receive job requests"}
            </p>
          </div>
          <button
            onClick={() => setIsAvailable(!isAvailable)}
            className={`p-1 rounded-full transition-colors ${
              isAvailable ? 'text-green-600' : 'text-gray-400'
            }`}
          >
            {isAvailable ? <ToggleRight className="w-12 h-12" /> : <ToggleLeft className="w-12 h-12" />}
          </button>
        </div>
      </div>

      {/* Jobs Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">
            {currentContent.todayJobs}
          </h3>
          <Volume2 className="w-5 h-5 text-green-600" />
        </div>

        {sampleJobs.length > 0 ? (
          <div className="space-y-4">
            {sampleJobs.map((job) => (
              <JobCard key={job.id} job={job} language={language} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-600">{currentContent.noJobs}</p>
          </div>
        )}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return renderHomeTab();
      case 'works':
        return (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Your work history will appear here</p>
          </div>
        );
      case 'chat':
        return (
          <div className="text-center py-12">
            <button
              onClick={() => onNavigateToChat('Demo Employer', 'employer')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl"
            >
              Open Chat Demo
            </button>
          </div>
        );
      case 'earnings':
        return (
          <div className="text-center py-12">
            <button
              onClick={onNavigateToEarnings}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl"
            >
              View Earnings
            </button>
          </div>
        );
      case 'profile':
        return (
          <div className="text-center py-12">
            <button
              onClick={onNavigateToProfile}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl"
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Main Content */}
      <div className="px-6 py-6 pb-24">
        {renderTabContent()}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-around">
          {[
            { id: 'home', icon: Home, label: currentContent.tabs.home },
            { id: 'works', icon: Briefcase, label: currentContent.tabs.works },
            { id: 'chat', icon: MessageCircle, label: currentContent.tabs.chat },
            { id: 'earnings', icon: Wallet, label: currentContent.tabs.earnings },
            { id: 'profile', icon: User, label: currentContent.tabs.profile }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center space-y-1 py-2 px-3 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-green-600'
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

export default WorkerDashboard;