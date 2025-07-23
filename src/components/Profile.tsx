import React from 'react';
import { ArrowLeft, User, MapPin, Phone, Globe, LogOut, Settings, HelpCircle, Edit } from 'lucide-react';

type Language = 'te' | 'hi' | 'en';
type UserRole = 'worker' | 'employer';

interface ProfileProps {
  user: any;
  language: Language;
  userRole: UserRole | null;
  onBack: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, language, userRole, onBack }) => {
  const content = {
    en: {
      title: "Profile",
      edit: "Edit Profile",
      switchRole: userRole === 'worker' ? "Switch to Employer" : "Switch to Worker",
      language: "Language",
      help: "Help & Support",
      logout: "Logout",
      phone: "Phone Number",
      location: "Location",
      categories: "Work Categories",
      settings: "Settings"
    },
    hi: {
      title: "प्रोफाइल",
      edit: "प्रोफाइल संपादित करें",
      switchRole: userRole === 'worker' ? "नियोक्ता में बदलें" : "कामगार में बदलें",
      language: "भाषा",
      help: "सहायता और समर्थन",
      logout: "लॉगआउट",
      phone: "फोन नंबर",
      location: "स्थान",
      categories: "काम की श्रेणियां",
      settings: "सेटिंग्स"
    },
    te: {
      title: "ప్రొఫైల్",
      edit: "ప్రొఫైల్ ఎడిట్ చేయండి",
      switchRole: userRole === 'worker' ? "యజమానిగా మారండి" : "కార్మికుడిగా మారండి",
      language: "భాష",
      help: "సహాయం & మద్దతు",
      logout: "లాగౌట్",
      phone: "ఫోన్ నంబర్",
      location: "స్థానం",
      categories: "పని వర్గాలు",
      settings: "సెట్టింగ్స్"
    }
  };

  const currentContent = content[language];

  const menuItems = [
    { icon: Edit, label: currentContent.edit, action: 'edit' },
    { icon: User, label: currentContent.switchRole, action: 'switch-role' },
    { icon: Globe, label: currentContent.language, action: 'language' },
    { icon: Settings, label: currentContent.settings, action: 'settings' },
    { icon: HelpCircle, label: currentContent.help, action: 'help' },
    { icon: LogOut, label: currentContent.logout, action: 'logout', danger: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-bold text-gray-800">
            {currentContent.title}
          </h1>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {user.name}
            </h2>
            <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
              {userRole === 'worker' ? 'Worker' : 'Employer'}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
              <Phone className="w-5 h-5 text-gray-600" />
              <div>
                <div className="text-sm text-gray-600">{currentContent.phone}</div>
                <div className="font-semibold">+91 {user.phoneNumber}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
              <MapPin className="w-5 h-5 text-gray-600" />
              <div>
                <div className="text-sm text-gray-600">{currentContent.location}</div>
                <div className="font-semibold">{user.location}</div>
              </div>
            </div>

            {userRole === 'worker' && user.categories && (
              <div className="p-3 bg-gray-50 rounded-xl">
                <div className="text-sm text-gray-600 mb-2">{currentContent.categories}</div>
                <div className="flex flex-wrap gap-2">
                  {user.categories.map((category: string) => (
                    <span
                      key={category}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {menuItems.map((item, index) => (
            <button
              key={item.action}
              className={`w-full flex items-center space-x-4 p-4 hover:bg-gray-50 transition-colors ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              } ${item.danger ? 'text-red-600 hover:bg-red-50' : 'text-gray-800'}`}
            >
              <item.icon className="w-6 h-6" />
              <span className="font-medium">{item.label}</span>
              <div className="flex-1"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </button>
          ))}
        </div>

        {/* App Info */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Kaarya Mithr v1.0.0
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Connecting Communities, Creating Opportunities
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;