import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, IndianRupee, Users, FileText, Volume2, Plus } from 'lucide-react';

type Language = 'te' | 'hi' | 'en';

interface JobPostFormProps {
  onBack: () => void;
  onSubmit: (jobData: any) => void;
  language: Language;
}

const JobPostForm: React.FC<JobPostFormProps> = ({ onBack, onSubmit, language }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
    duration: '',
    payment: '',
    workersNeeded: '1',
    urgency: 'medium'
  });

  const content = {
    en: {
      title: "Post a Job",
      jobTitle: "Job Title",
      jobTitlePlaceholder: "e.g., Farm work needed",
      category: "Work Category",
      description: "Job Description",
      descriptionPlaceholder: "Describe the work in detail...",
      location: "Work Location",
      locationPlaceholder: "Village/Area name",
      duration: "Duration",
      payment: "Payment Amount",
      paymentPlaceholder: "Amount in ₹",
      workersNeeded: "Workers Needed",
      urgency: "Urgency Level",
      urgencyOptions: {
        low: "Low Priority",
        medium: "Normal",
        high: "Urgent"
      },
      postJob: "Post Job",
      cancel: "Cancel"
    },
    hi: {
      title: "काम पोस्ट करें",
      jobTitle: "काम का शीर्षक",
      jobTitlePlaceholder: "जैसे, खेत का काम चाहिए",
      category: "काम की श्रेणी",
      description: "काम का विवरण",
      descriptionPlaceholder: "काम का विस्तार से वर्णन करें...",
      location: "काम का स्थान",
      locationPlaceholder: "गांव/क्षेत्र का नाम",
      duration: "अवधि",
      payment: "भुगतान राशि",
      paymentPlaceholder: "₹ में राशि",
      workersNeeded: "कामगार चाहिए",
      urgency: "जरूरत का स्तर",
      urgencyOptions: {
        low: "कम प्राथमिकता",
        medium: "सामान्य",
        high: "जरूरी"
      },
      postJob: "काम पोस्ट करें",
      cancel: "रद्द करें"
    },
    te: {
      title: "పని పోస్ట్ చేయండి",
      jobTitle: "పని శీర్షిక",
      jobTitlePlaceholder: "ఉదా., వ్యవసాయ పని అవసరం",
      category: "పని వర్గం",
      description: "పని వివరణ",
      descriptionPlaceholder: "పనిని వివరంగా వర్ణించండి...",
      location: "పని స్థానం",
      locationPlaceholder: "గ్రామం/ప్రాంత పేరు",
      duration: "వ్యవధి",
      payment: "చెల్లింపు మొత్తం",
      paymentPlaceholder: "₹లో మొత్తం",
      workersNeeded: "కార్మికులు అవసరం",
      urgency: "అత్యవసర స్థాయి",
      urgencyOptions: {
        low: "తక్కువ ప్రాధాన్యత",
        medium: "సాధారణ",
        high: "అత్యవసరం"
      },
      postJob: "పని పోస్ట్ చేయండి",
      cancel: "రద్దు చేయండి"
    }
  };

  const categories = {
    en: [
      { id: 'farming', name: 'Farming', icon: '🌾' },
      { id: 'construction', name: 'Construction', icon: '🏗️' },
      { id: 'driving', name: 'Driving', icon: '🚗' },
      { id: 'cleaning', name: 'Cleaning', icon: '🧹' },
      { id: 'cooking', name: 'Cooking', icon: '👨‍🍳' },
      { id: 'gardening', name: 'Gardening', icon: '🌱' }
    ],
    hi: [
      { id: 'farming', name: 'खेती', icon: '🌾' },
      { id: 'construction', name: 'निर्माण', icon: '🏗️' },
      { id: 'driving', name: 'ड्राइविंग', icon: '🚗' },
      { id: 'cleaning', name: 'सफाई', icon: '🧹' },
      { id: 'cooking', name: 'खाना बनाना', icon: '👨‍🍳' },
      { id: 'gardening', name: 'बागवानी', icon: '🌱' }
    ],
    te: [
      { id: 'farming', name: 'వ్యవసాయం', icon: '🌾' },
      { id: 'construction', name: 'నిర్మాణం', icon: '🏗️' },
      { id: 'driving', name: 'డ్రైవింగ్', icon: '🚗' },
      { id: 'cleaning', name: 'శుభ్రపరచడం', icon: '🧹' },
      { id: 'cooking', name: 'వంట', icon: '👨‍🍳' },
      { id: 'gardening', name: 'తోటపని', icon: '🌱' }
    ]
  };

  const currentContent = content[language];
  const currentCategories = categories[language];

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const isFormValid = formData.title && formData.category && formData.description && 
                     formData.location && formData.duration && formData.payment;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
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
          <Volume2 className="w-6 h-6 text-orange-600 ml-auto" />
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Job Title */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            {currentContent.jobTitle}
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            placeholder={currentContent.jobTitlePlaceholder}
            className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
          />
        </div>

        {/* Category Selection */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            {currentContent.category}
          </label>
          <div className="grid grid-cols-3 gap-3">
            {currentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFormData({...formData, category: category.id})}
                className={`p-4 rounded-xl border-2 transition-all ${
                  formData.category === category.id
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-orange-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <div className="text-sm font-medium">{category.name}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            {currentContent.description}
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder={currentContent.descriptionPlaceholder}
            rows={4}
            className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none resize-none"
          />
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <label className="block text-lg font-semibold text-gray-700 mb-3">
            {currentContent.location}
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              placeholder={currentContent.locationPlaceholder}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Duration and Payment */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              {currentContent.duration}
            </label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                value={formData.duration}
                onChange={(e) => setFormData({...formData, duration: e.target.value})}
                placeholder="4 hours"
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              {currentContent.payment}
            </label>
            <div className="relative">
              <IndianRupee className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="number"
                value={formData.payment}
                onChange={(e) => setFormData({...formData, payment: e.target.value})}
                placeholder={currentContent.paymentPlaceholder}
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Workers Needed and Urgency */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              {currentContent.workersNeeded}
            </label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="number"
                value={formData.workersNeeded}
                onChange={(e) => setFormData({...formData, workersNeeded: e.target.value})}
                min="1"
                className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              {currentContent.urgency}
            </label>
            <select
              value={formData.urgency}
              onChange={(e) => setFormData({...formData, urgency: e.target.value})}
              className="w-full px-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none"
            >
              <option value="low">{currentContent.urgencyOptions.low}</option>
              <option value="medium">{currentContent.urgencyOptions.medium}</option>
              <option value="high">{currentContent.urgencyOptions.high}</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-4">
          <button
            onClick={onBack}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-4 px-6 rounded-xl text-lg transition-colors"
          >
            {currentContent.cancel}
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className="flex-1 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 text-white font-bold py-4 px-6 rounded-xl text-lg transition-colors flex items-center justify-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>{currentContent.postJob}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPostForm;