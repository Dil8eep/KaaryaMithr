import React, { useState } from 'react';
import { Phone, Shield, Volume2, ArrowRight } from 'lucide-react';

type Language = 'te' | 'hi' | 'en';

interface PhoneLoginProps {
  onLoginSuccess: (userData: any) => void;
  language: Language;
}

const PhoneLogin: React.FC<PhoneLoginProps> = ({ onLoginSuccess, language }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const content = {
    en: {
      title: "Welcome to Kaarya Mithr",
      subtitle: "Enter your phone number to continue",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Enter 10-digit mobile number",
      sendOtp: "Send OTP",
      otpTitle: "Verify Your Number",
      otpSubtitle: "Enter the 6-digit code sent to",
      otpLabel: "OTP Code",
      otpPlaceholder: "Enter 6-digit OTP",
      verify: "Verify & Continue",
      resend: "Resend OTP",
      privacy: "Your number is safe and secure with us"
    },
    hi: {
      title: "कार्य मित्र में आपका स्वागत है",
      subtitle: "जारी रखने के लिए अपना फोन नंबर डालें",
      phoneLabel: "फोन नंबर",
      phonePlaceholder: "10 अंकों का मोबाइल नंबर डालें",
      sendOtp: "OTP भेजें",
      otpTitle: "अपना नंबर सत्यापित करें",
      otpSubtitle: "पर भेजा गया 6 अंकों का कोड डालें",
      otpLabel: "OTP कोड",
      otpPlaceholder: "6 अंकों का OTP डालें",
      verify: "सत्यापित करें और जारी रखें",
      resend: "OTP फिर से भेजें",
      privacy: "आपका नंबर हमारे साथ सुरक्षित है"
    },
    te: {
      title: "కార్య మిత్రకు స్వాగతం",
      subtitle: "కొనసాగించడానికి మీ ఫోన్ నంబర్ ఎంటర్ చేయండి",
      phoneLabel: "ఫోన్ నంబర్",
      phonePlaceholder: "10 అంకెల మొబైల్ నంబర్ ఎంటర్ చేయండి",
      sendOtp: "OTP పంపండి",
      otpTitle: "మీ నంబర్‌ను వెరిఫై చేయండి",
      otpSubtitle: "కి పంపిన 6 అంకెల కోడ్ ఎంటర్ చేయండి",
      otpLabel: "OTP కోడ్",
      otpPlaceholder: "6 అంకెల OTP ఎంటర్ చేయండి",
      verify: "వెరిఫై చేసి కొనసాగించండి",
      resend: "OTP మళ్లీ పంపండి",
      privacy: "మీ నంబర్ మాతో సురక్షితంగా ఉంటుంది"
    }
  };

  const currentContent = content[language];

  const handleSendOtp = async () => {
    if (phoneNumber.length !== 10) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsOtpSent(true);
      setIsLoading(false);
      console.log(`Voice: OTP sent to ${phoneNumber}`);
    }, 2000);
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const userData = {
        phoneNumber,
        isRegistered: Math.random() > 0.5, // Random for demo
        name: 'Demo User',
        location: 'Demo Location'
      };
      onLoginSuccess(userData);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 px-6 py-12">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            {isOtpSent ? <Shield className="w-8 h-8 text-blue-600" /> : <Phone className="w-8 h-8 text-blue-600" />}
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {isOtpSent ? currentContent.otpTitle : currentContent.title}
          </h1>
          <p className="text-lg text-gray-600">
            {isOtpSent ? `${currentContent.otpSubtitle} +91 ${phoneNumber}` : currentContent.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          {!isOtpSent ? (
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  {currentContent.phoneLabel}
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                    <span className="text-lg font-semibold text-gray-600">+91</span>
                  </div>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder={currentContent.phonePlaceholder}
                    className="w-full pl-16 pr-12 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                  />
                  <Volume2 className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-600" />
                </div>
              </div>

              <button
                onClick={handleSendOtp}
                disabled={phoneNumber.length !== 10 || isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>{currentContent.sendOtp}</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-3">
                  {currentContent.otpLabel}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder={currentContent.otpPlaceholder}
                    className="w-full pl-4 pr-12 py-4 text-lg text-center tracking-widest border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                  />
                  <Volume2 className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-600" />
                </div>
              </div>

              <button
                onClick={handleVerifyOtp}
                disabled={otp.length !== 6 || isLoading}
                className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>{currentContent.verify}</span>
                    <Shield className="w-5 h-5" />
                  </>
                )}
              </button>

              <button
                onClick={() => setIsOtpSent(false)}
                className="w-full text-blue-600 hover:text-blue-700 font-semibold py-2 transition-colors"
              >
                {currentContent.resend}
              </button>
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>{currentContent.privacy}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneLogin;