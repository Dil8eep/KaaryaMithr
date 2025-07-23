import React from 'react';
import { Users, Briefcase, Volume2, ArrowRight } from 'lucide-react';

type UserRole = 'worker' | 'employer';
type Language = 'te' | 'hi' | 'en';

interface RoleSelectionProps {
  onRoleSelect: (role: UserRole) => void;
  language: Language;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onRoleSelect, language }) => {
  const content = {
    en: {
      title: "What brings you here?",
      subtitle: "Choose your role to get started",
      worker: {
        title: "I am looking for work",
        subtitle: "Find jobs in your area",
        description: "Connect with employers and find daily work opportunities"
      },
      employer: {
        title: "I am offering work",
        subtitle: "Find reliable workers",
        description: "Post jobs and connect with skilled workers in your area"
      },
      voiceHelp: "Tap the speaker icon for voice assistance"
    },
    hi: {
      title: "आप यहाँ क्यों आए हैं?",
      subtitle: "शुरू करने के लिए अपनी भूमिका चुनें",
      worker: {
        title: "मैं काम की तलाश में हूँ",
        subtitle: "अपने क्षेत्र में नौकरी खोजें",
        description: "नियोक्ताओं से जुड़ें और दैनिक काम के अवसर खोजें"
      },
      employer: {
        title: "मैं काम दे रहा हूँ",
        subtitle: "भरोसेमंद कामगार खोजें",
        description: "नौकरी पोस्ट करें और अपने क्षेत्र के कुशल कामगारों से जुड़ें"
      },
      voiceHelp: "आवाज सहायता के लिए स्पीकर आइकन दबाएं"
    },
    te: {
      title: "మీరు ఇక్కడికి ఎందుకు వచ్చారు?",
      subtitle: "ప్రారంభించడానికి మీ పాత్రను ఎంచుకోండి",
      worker: {
        title: "నేను పని వెతుకుతున్నాను",
        subtitle: "మీ ప్రాంతంలో ఉద్యోగాలు కనుగొనండి",
        description: "యజమానులతో కలుసుకోండి మరియు రోజువారీ పని అవకాశాలను కనుగొనండి"
      },
      employer: {
        title: "నేను పని ఇస్తున్నాను",
        subtitle: "నమ్మకమైన కార్మికులను కనుగొనండి",
        description: "ఉద్యోగాలను పోస్ట్ చేయండి మరియు మీ ప్రాంతంలోని నైపుణ్యం గల కార్మికులతో కనెక్ట్ అవ్వండి"
      },
      voiceHelp: "వాయిస్ సహాయం కోసం స్పీకర్ ఐకాన్‌ను నొక్కండి"
    }
  };

  const currentContent = content[language];

  const handleRoleSelect = (role: UserRole) => {
    // Simulate voice feedback
    console.log(`Voice: Role ${role} selected`);
    onRoleSelect(role);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 px-6 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {currentContent.title}
          </h1>
          <p className="text-lg text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {/* Worker Role */}
          <button
            onClick={() => handleRoleSelect('worker')}
            className="w-full bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-green-400 hover:shadow-xl transition-all duration-300 p-6 group"
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-green-700">
                  {currentContent.worker.title}
                </h3>
                <p className="text-lg text-green-600 mb-2 font-semibold">
                  {currentContent.worker.subtitle}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {currentContent.worker.description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Volume2 className="w-6 h-6 text-green-600 group-hover:text-green-700" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </button>

          {/* Employer Role */}
          <button
            onClick={() => handleRoleSelect('employer')}
            className="w-full bg-white rounded-2xl shadow-lg border-2 border-gray-100 hover:border-orange-400 hover:shadow-xl transition-all duration-300 p-6 group"
          >
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <Briefcase className="w-8 h-8 text-orange-600" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-orange-700">
                  {currentContent.employer.title}
                </h3>
                <p className="text-lg text-orange-600 mb-2 font-semibold">
                  {currentContent.employer.subtitle}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {currentContent.employer.description}
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Volume2 className="w-6 h-6 text-orange-600 group-hover:text-orange-700" />
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
            <Volume2 className="w-4 h-4" />
            <span>{currentContent.voiceHelp}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;