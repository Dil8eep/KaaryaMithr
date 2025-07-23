import React, { useState } from 'react';
import { User, MapPin, Camera, Volume2, Check } from 'lucide-react';

type Language = 'te' | 'hi' | 'en';

interface WorkerRegistrationProps {
  onComplete: (data: any) => void;
  language: Language;
}

const WorkerRegistration: React.FC<WorkerRegistrationProps> = ({ onComplete, language }) => {
  const [name, setName] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [location, setLocation] = useState('');

  const content = {
    en: {
      title: "Complete Your Profile",
      subtitle: "Help employers find you easily",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your full name",
      categoryLabel: "What work do you do?",
      categorySubtitle: "Select all that apply",
      locationLabel: "Your Location",
      locationPlaceholder: "Village/Town name",
      photoLabel: "Add Photo (Optional)",
      photoSubtitle: "Helps build trust with employers",
      complete: "Complete Registration"
    },
    hi: {
      title: "अपना प्रोफाइल पूरा करें",
      subtitle: "नियोक्ताओं को आपको आसानी से खोजने में मदद करें",
      nameLabel: "आपका नाम",
      namePlaceholder: "अपना पूरा नाम डालें",
      categoryLabel: "आप क्या काम करते हैं?",
      categorySubtitle: "सभी लागू को चुनें",
      locationLabel: "आपका स्थान",
      locationPlaceholder: "गांव/शहर का नाम",
      photoLabel: "फोटो जोड़ें (वैकल्पिक)",
      photoSubtitle: "नियोक्ताओं के साथ भरोसा बनाने में मदद करता है",
      complete: "पंजीकरण पूरा करें"
    },
    te: {
      title: "మీ ప్రొఫైల్‌ను పూర్తి చేయండి",
      subtitle: "యజమానులు మిమ్మల్ని సులభంగా కనుగొనడంలో సహాయపడండి",
      nameLabel: "మీ పేరు",
      namePlaceholder: "మీ పూర్తి పేరును ఎంటర్ చేయండి",
      categoryLabel: "మీరు ఏ పని చేస్తారు?",
      categorySubtitle: "వర్తించే అన్నింటిని ఎంచుకోండి",
      locationLabel: "మీ స్థానం",
      locationPlaceholder: "గ్రామం/పట్టణం పేరు",
      photoLabel: "ఫోటో జోడించండి (ఐచ్ఛికం)",
      photoSubtitle: "యజమానులతో నమ్మకాన్ని పెంపొందించడంలో సహాయపడుతుంది",
      complete: "రిజిస్ట్రేషన్ పూర్తి చేయండి"
    }
  };

  const categories = {
    en: [
      { id: 'farming', name: 'Farming', icon: '🌾' },
      { id: 'construction', name: 'Construction', icon: '🏗️' },
      { id: 'driving', name: 'Driving', icon: '🚗' },
      { id: 'cleaning', name: 'Cleaning', icon: '🧹' },
      { id: 'cooking', name: 'Cooking', icon: '👨‍🍳' },
      { id: 'gardening', name: 'Gardening', icon: '🌱' },
      { id: 'electrical', name: 'Electrical', icon: '⚡' },
      { id: 'plumbing', name: 'Plumbing', icon: '🔧' }
    ],
    hi: [
      { id: 'farming', name: 'खेती', icon: '🌾' },
      { id: 'construction', name: 'निर्माण', icon: '🏗️' },
      { id: 'driving', name: 'ड्राइविंग', icon: '🚗' },
      { id: 'cleaning', name: 'सफाई', icon: '🧹' },
      { id: 'cooking', name: 'खाना बनाना', icon: '👨‍🍳' },
      { id: 'gardening', name: 'बागवानी', icon: '🌱' },
      { id: 'electrical', name: 'इलेक्ट्रिकल', icon: '⚡' },
      { id: 'plumbing', name: 'प्लंबिंग', icon: '🔧' }
    ],
    te: [
      { id: 'farming', name: 'వ్యవసాయం', icon: '🌾' },
      { id: 'construction', name: 'నిర్మాణం', icon: '🏗️' },
      { id: 'driving', name: 'డ్రైవింగ్', icon: '🚗' },
      { id: 'cleaning', name: 'శుభ్రపరచడం', icon: '🧹' },
      { id: 'cooking', name: 'వంట', icon: '👨‍🍳' },
      { id: 'gardening', name: 'తోటపని', icon: '🌱' },
      { id: 'electrical', name: 'ఎలక్ట్రికల్', icon: '⚡' },
      { id: 'plumbing', name: 'ప్లంబింగ్', icon: '🔧' }
    ]
  };

  const currentContent = content[language];
  const currentCategories = categories[language];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleComplete = () => {
    const registrationData = {
      name,
      categories: selectedCategories,
      location,
      isRegistered: true
    };
    onComplete(registrationData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 px-6 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {currentContent.title}
          </h1>
          <p className="text-lg text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {/* Name Input */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              {currentContent.nameLabel}
            </label>
            <div className="relative">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={currentContent.namePlaceholder}
                className="w-full pl-4 pr-12 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
              />
              <Volume2 className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-green-600" />
            </div>
          </div>

          {/* Work Categories */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                {currentContent.categoryLabel}
              </h3>
              <p className="text-sm text-gray-500">
                {currentContent.categorySubtitle}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {currentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => toggleCategory(category.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedCategories.includes(category.id)
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-green-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">{category.icon}</div>
                    <div className="text-sm font-medium text-gray-700">
                      {category.name}
                    </div>
                    {selectedCategories.includes(category.id) && (
                      <Check className="w-5 h-5 text-green-600 mx-auto mt-2" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Location Input */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              {currentContent.locationLabel}
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder={currentContent.locationPlaceholder}
                className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none"
              />
              <Volume2 className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-green-600" />
            </div>
          </div>

          {/* Photo Upload */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">
                {currentContent.photoLabel}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {currentContent.photoSubtitle}
              </p>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors">
                <Camera className="w-5 h-5 inline mr-2" />
                Add Photo
              </button>
            </div>
          </div>

          {/* Complete Button */}
          <button
            onClick={handleComplete}
            disabled={!name.trim() || selectedCategories.length === 0 || !location.trim()}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300"
          >
            {currentContent.complete}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkerRegistration;