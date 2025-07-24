import React, { useState } from 'react';
import { ArrowLeft, Send, Mic, Camera, Phone, Video, Volume2, MoreVertical } from 'lucide-react';

type Language = 'te' | 'hi' | 'en';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'other';
  timestamp: string;
  type: 'text' | 'voice' | 'image';
}

interface ChatScreenProps {
  onBack: () => void;
  language: Language;
  contactName: string;
  contactType: 'worker' | 'employer';
}

const ChatScreen: React.FC<ChatScreenProps> = ({ onBack, language, contactName, contactType }) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const content = {
    en: {
      typing: "Type a message...",
      online: "Online",
      offline: "Last seen recently",
      send: "Send",
      record: "Record voice message",
      camera: "Take photo",
      call: "Voice call",
      videoCall: "Video call"
    },
    hi: {
      typing: "संदेश टाइप करें...",
      online: "ऑनलाइन",
      offline: "हाल ही में देखा गया",
      send: "भेजें",
      record: "आवाज संदेश रिकॉर्ड करें",
      camera: "फोटो लें",
      call: "आवाज कॉल",
      videoCall: "वीडियो कॉल"
    },
    te: {
      typing: "సందేశం టైప్ చేయండి...",
      online: "ఆన్‌లైన్",
      offline: "ఇటీవల చూశారు",
      send: "పంపండి",
      record: "వాయిస్ మెసేజ్ రికార్డ్ చేయండి",
      camera: "ఫోటో తీయండి",
      call: "వాయిస్ కాల్",
      videoCall: "వీడియో కాల్"
    }
  };

  const sampleMessages: Message[] = [
    {
      id: 1,
      text: "Hello! I saw your job posting for farm work. I'm interested.",
      sender: 'other',
      timestamp: '10:30 AM',
      type: 'text'
    },
    {
      id: 2,
      text: "Great! Can you come tomorrow at 6 AM?",
      sender: 'user',
      timestamp: '10:32 AM',
      type: 'text'
    },
    {
      id: 3,
      text: "Yes, I'll be there. What's the exact location?",
      sender: 'other',
      timestamp: '10:35 AM',
      type: 'text'
    },
    {
      id: 4,
      text: "Near the old temple, behind the school. I'll share location.",
      sender: 'user',
      timestamp: '10:37 AM',
      type: 'text'
    }
  ];

  const currentContent = content[language];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">
              {contactName.charAt(0)}
            </span>
          </div>
          
          <div className="flex-1">
            <h1 className="text-lg font-bold text-gray-800">
              {contactName}
            </h1>
            <p className="text-sm text-green-600">
              {currentContent.online}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Phone className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Video className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <MoreVertical className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-6 py-4 space-y-4 overflow-y-auto">
        {sampleMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                msg.sender === 'user'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-800 shadow-sm'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <div className={`flex items-center justify-end space-x-2 mt-2 ${
                msg.sender === 'user' ? 'text-green-100' : 'text-gray-500'
              }`}>
                <span className="text-xs">{msg.timestamp}</span>
                {msg.sender === 'user' && (
                  <Volume2 className="w-3 h-3" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleRecording}
            className={`p-3 rounded-full transition-colors ${
              isRecording
                ? 'bg-red-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
            }`}
          >
            <Mic className="w-6 h-6" />
          </button>

          <button className="p-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors">
            <Camera className="w-6 h-6" />
          </button>

          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={currentContent.typing}
              className="w-full px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Volume2 className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="p-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white rounded-full transition-colors"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>

        {isRecording && (
          <div className="mt-3 flex items-center justify-center space-x-2 text-red-600">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Recording...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatScreen;