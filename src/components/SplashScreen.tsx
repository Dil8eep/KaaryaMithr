import React, { useEffect } from 'react';
import { Users, Heart } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 to-orange-500 flex flex-col items-center justify-center text-white px-6">
      <div className="text-center animate-fade-in">
        <div className="mb-8 relative">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse">
            <Users className="w-12 h-12 text-green-600" />
          </div>
          <Heart className="w-6 h-6 text-red-400 absolute top-2 right-1/3 animate-bounce" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2 tracking-wide">
          కార్య మిత్ర
        </h1>
        <h2 className="text-2xl font-semibold mb-4">
          Kaarya Mithr
        </h2>
        <p className="text-lg opacity-90 max-w-sm mx-auto leading-relaxed">
          Connecting Rural Workers with Opportunities
        </p>
        <p className="text-base opacity-75 mt-2">
          గ్రామీణ కార్మికులను అవకాశాలతో కలుపుతోంది
        </p>
      </div>
      
      <div className="absolute bottom-8 flex space-x-2">
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  );
};

export default SplashScreen;