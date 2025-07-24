import React from 'react';
import { MapPin, Clock, IndianRupee, User, Volume2, Phone, MessageCircle } from 'lucide-react';

type Language = 'te' | 'hi' | 'en';

interface Job {
  id: number;
  title: string;
  category: string;
  location: string;
  distance: string;
  duration: string;
  payment: number;
  employer: string;
  description: string;
  urgency: 'high' | 'medium' | 'low';
}

interface JobCardProps {
  job: Job;
  language: Language;
  onCall?: () => void;
  onMessage?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, language, onCall, onMessage }) => {
  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Farming': '🌾',
      'Construction': '🏗️',
      'Gardening': '🌱',
      'Driving': '🚗',
      'Cleaning': '🧹',
      'Cooking': '👨‍🍳'
    };
    return icons[category] || '💼';
  };

  const content = {
    en: {
      call: "Call",
      message: "Message",
      urgent: "Urgent",
      normal: "Normal",
      low: "Low Priority"
    },
    hi: {
      call: "कॉल",
      message: "संदेश",
      urgent: "जरूरी",
      normal: "सामान्य",
      low: "कम प्राथमिकता"
    },
    te: {
      call: "కాల్",
      message: "సందేశం",
      urgent: "అత్యవసరం",
      normal: "సాధారణ",
      low: "తక్కువ ప్రాధాన్యత"
    }
  };

  const currentContent = content[language];

  const getUrgencyText = (urgency: string) => {
    switch (urgency) {
      case 'high': return currentContent.urgent;
      case 'medium': return currentContent.normal;
      case 'low': return currentContent.low;
      default: return currentContent.normal;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{getCategoryIcon(job.category)}</div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.category}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getUrgencyColor(job.urgency)}`}>
              {getUrgencyText(job.urgency)}
            </span>
            <Volume2 className="w-5 h-5 text-green-600" />
          </div>
        </div>

        <p className="text-gray-700 mb-4">{job.description}</p>

        {/* Job Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <div>
              <div className="text-sm font-medium">{job.location}</div>
              <div className="text-xs">{job.distance} away</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <div>
              <div className="text-sm font-medium">{job.duration}</div>
              <div className="text-xs">Duration</div>
            </div>
          </div>
        </div>

        {/* Payment and Employer */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <IndianRupee className="w-5 h-5 text-green-600" />
            <span className="text-2xl font-bold text-green-600">₹{job.payment}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">{job.employer}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex space-x-3">
          <button 
            onClick={onCall}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>{currentContent.call}</span>
          </button>
          <button 
            onClick={onMessage}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{currentContent.message}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;