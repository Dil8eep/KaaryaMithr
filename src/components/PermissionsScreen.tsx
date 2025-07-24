import React, { useState } from 'react';
import { MapPin, Mic, Camera, Shield, CheckCircle, AlertCircle, Volume2 } from 'lucide-react';

type Language = 'te' | 'hi' | 'en';

interface PermissionsScreenProps {
  onComplete: () => void;
  language: Language;
}

const PermissionsScreen: React.FC<PermissionsScreenProps> = ({ onComplete, language }) => {
  const [permissions, setPermissions] = useState({
    location: false,
    microphone: false,
    camera: false
  });

  const content = {
    en: {
      title: "App Permissions",
      subtitle: "We need these permissions to serve you better",
      location: {
        title: "Location Access",
        description: "Find jobs and workers near you",
        required: true
      },
      microphone: {
        title: "Microphone Access",
        description: "Voice assistance and audio messages",
        required: false
      },
      camera: {
        title: "Camera Access",
        description: "Add photos to your profile",
        required: false
      },
      continue: "Continue",
      privacy: "Your privacy is protected. We only use these for app features.",
      allow: "Allow",
      allowed: "Allowed"
    },
    hi: {
      title: "ऐप अनुमतियां",
      subtitle: "आपकी बेहतर सेवा के लिए हमें इन अनुमतियों की आवश्यकता है",
      location: {
        title: "स्थान पहुंच",
        description: "अपने पास काम और कामगार खोजें",
        required: true
      },
      microphone: {
        title: "माइक्रोफोन पहुंच",
        description: "आवाज सहायता और ऑडियो संदेश",
        required: false
      },
      camera: {
        title: "कैमरा पहुंच",
        description: "अपनी प्रोफाइल में फोटो जोड़ें",
        required: false
      },
      continue: "जारी रखें",
      privacy: "आपकी गोपनीयता सुरक्षित है। हम इन्हें केवल ऐप सुविधाओं के लिए उपयोग करते हैं।",
      allow: "अनुमति दें",
      allowed: "अनुमति दी गई"
    },
    te: {
      title: "యాప్ అనుమతులు",
      subtitle: "మీకు మెరుగైన సేవ అందించడానికి మాకు ఈ అనుమతులు అవసరం",
      location: {
        title: "లొకేషన్ యాక్సెస్",
        description: "మీ దగ్గర పనులు మరియు కార్మికులను కనుగొనండి",
        required: true
      },
      microphone: {
        title: "మైక్రోఫోన్ యాక్సెస్",
        description: "వాయిస్ సహాయం మరియు ఆడియో సందేశాలు",
        required: false
      },
      camera: {
        title: "కెమెరా యాక్సెస్",
        description: "మీ ప్రొఫైల్‌కు ఫోటోలను జోడించండి",
        required: false
      },
      continue: "కొనసాగించండి",
      privacy: "మీ గోప్యత రక్షించబడుతుంది. మేము వీటిని యాప్ ఫీచర్లకు మాత్రమే ఉపయోగిస్తాము.",
      allow: "అనుమతించండి",
      allowed: "అనుమతించబడింది"
    }
  };

  const currentContent = content[language];

  const handlePermissionRequest = async (type: keyof typeof permissions) => {
    // Simulate permission request
    setPermissions(prev => ({ ...prev, [type]: true }));
  };

  const canContinue = permissions.location; // Location is required

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 px-6 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {currentContent.title}
          </h1>
          <p className="text-lg text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {/* Location Permission */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {currentContent.location.title}
                  </h3>
                  {currentContent.location.required && (
                    <span className="px-2 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium">
                      Required
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">
                  {currentContent.location.description}
                </p>
                <button
                  onClick={() => handlePermissionRequest('location')}
                  disabled={permissions.location}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                    permissions.location
                      ? 'bg-green-100 text-green-700'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {permissions.location ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>{currentContent.allowed}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-5 h-5" />
                      <span>{currentContent.allow}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Microphone Permission */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mic className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {currentContent.microphone.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {currentContent.microphone.description}
                </p>
                <button
                  onClick={() => handlePermissionRequest('microphone')}
                  disabled={permissions.microphone}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                    permissions.microphone
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {permissions.microphone ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>{currentContent.allowed}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-5 h-5" />
                      <span>{currentContent.allow}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Camera Permission */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Camera className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {currentContent.camera.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {currentContent.camera.description}
                </p>
                <button
                  onClick={() => handlePermissionRequest('camera')}
                  disabled={permissions.camera}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                    permissions.camera
                      ? 'bg-green-100 text-green-700'
                      : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
                >
                  {permissions.camera ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>{currentContent.allowed}</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-5 h-5" />
                      <span>{currentContent.allow}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-blue-50 rounded-2xl p-4 mb-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
            <p className="text-sm text-blue-800">
              {currentContent.privacy}
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={onComplete}
          disabled={!canContinue}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <span>{currentContent.continue}</span>
          {!canContinue && <AlertCircle className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );
};

export default PermissionsScreen;