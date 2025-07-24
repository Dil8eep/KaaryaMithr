import React, { useState } from 'react';
import { ArrowLeft, Search, MapPin, Star, Phone, MessageCircle, Volume2, Filter } from 'lucide-react';

type Language = 'te' | 'hi' | 'en';

interface Worker {
  id: number;
  name: string;
  categories: string[];
  location: string;
  distance: string;
  rating: number;
  completedJobs: number;
  hourlyRate: number;
  isAvailable: boolean;
  profileImage?: string;
}

interface WorkersListProps {
  onBack: () => void;
  language: Language;
}

const WorkersList: React.FC<WorkersListProps> = ({ onBack, language }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const content = {
    en: {
      title: "Find Workers",
      search: "Search workers...",
      filter: "Filter",
      all: "All Categories",
      available: "Available",
      notAvailable: "Busy",
      rating: "Rating",
      jobs: "jobs completed",
      perHour: "/hour",
      call: "Call",
      message: "Message",
      noWorkers: "No workers found"
    },
    hi: {
      title: "कामगार खोजें",
      search: "कामगार खोजें...",
      filter: "फिल्टर",
      all: "सभी श्रेणियां",
      available: "उपलब्ध",
      notAvailable: "व्यस्त",
      rating: "रेटिंग",
      jobs: "काम पूरे किए",
      perHour: "/घंटा",
      call: "कॉल",
      message: "संदेश",
      noWorkers: "कोई कामगार नहीं मिला"
    },
    te: {
      title: "కార్మికులను కనుగొనండి",
      search: "కార్మికులను వెతకండి...",
      filter: "ఫిల్టర్",
      all: "అన్ని వర్గాలు",
      available: "అందుబాటులో",
      notAvailable: "బిజీ",
      rating: "రేటింగ్",
      jobs: "పనులు పూర్తి చేశారు",
      perHour: "/గంట",
      call: "కాల్",
      message: "సందేశం",
      noWorkers: "కార్మికులు కనుగొనబడలేదు"
    }
  };

  const categories = {
    en: [
      { id: 'all', name: 'All Categories' },
      { id: 'farming', name: 'Farming', icon: '🌾' },
      { id: 'construction', name: 'Construction', icon: '🏗️' },
      { id: 'driving', name: 'Driving', icon: '🚗' },
      { id: 'cleaning', name: 'Cleaning', icon: '🧹' },
      { id: 'cooking', name: 'Cooking', icon: '👨‍🍳' },
      { id: 'gardening', name: 'Gardening', icon: '🌱' }
    ],
    hi: [
      { id: 'all', name: 'सभी श्रेणियां' },
      { id: 'farming', name: 'खेती', icon: '🌾' },
      { id: 'construction', name: 'निर्माण', icon: '🏗️' },
      { id: 'driving', name: 'ड्राइविंग', icon: '🚗' },
      { id: 'cleaning', name: 'सफाई', icon: '🧹' },
      { id: 'cooking', name: 'खाना बनाना', icon: '👨‍🍳' },
      { id: 'gardening', name: 'बागवानी', icon: '🌱' }
    ],
    te: [
      { id: 'all', name: 'అన్ని వర్గాలు' },
      { id: 'farming', name: 'వ్యవసాయం', icon: '🌾' },
      { id: 'construction', name: 'నిర్మాణం', icon: '🏗️' },
      { id: 'driving', name: 'డ్రైవింగ్', icon: '🚗' },
      { id: 'cleaning', name: 'శుభ్రపరచడం', icon: '🧹' },
      { id: 'cooking', name: 'వంట', icon: '👨‍🍳' },
      { id: 'gardening', name: 'తోటపని', icon: '🌱' }
    ]
  };

  const sampleWorkers: Worker[] = [
    {
      id: 1,
      name: "రాజు కుమార్",
      categories: ['farming', 'gardening'],
      location: "Rajam Village",
      distance: "1.2 km",
      rating: 4.8,
      completedJobs: 45,
      hourlyRate: 150,
      isAvailable: true
    },
    {
      id: 2,
      name: "సుధాకర్ రెడ్డి",
      categories: ['construction'],
      location: "Narasapur",
      distance: "3.5 km",
      rating: 4.6,
      completedJobs: 32,
      hourlyRate: 200,
      isAvailable: true
    },
    {
      id: 3,
      name: "లక్ష్మీ దేవి",
      categories: ['cooking', 'cleaning'],
      location: "Vizianagaram",
      distance: "2.8 km",
      rating: 4.9,
      completedJobs: 67,
      hourlyRate: 120,
      isAvailable: false
    }
  ];

  const currentContent = content[language];
  const currentCategories = categories[language];

  const filteredWorkers = sampleWorkers.filter(worker => {
    const matchesSearch = worker.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || worker.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
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
          <Volume2 className="w-6 h-6 text-blue-600 ml-auto" />
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={currentContent.search}
              className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-700">{currentContent.filter}</span>
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {currentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50'
                }`}
              >
                {category.icon && <span>{category.icon}</span>}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Workers List */}
        <div className="space-y-4">
          {filteredWorkers.length > 0 ? (
            filteredWorkers.map((worker) => (
              <div key={worker.id} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  {/* Profile Image */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {worker.name.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1">
                    {/* Name and Availability */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-800">
                        {worker.name}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        worker.isAvailable
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {worker.isAvailable ? currentContent.available : currentContent.notAvailable}
                      </span>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {worker.categories.map((categoryId) => {
                        const category = currentCategories.find(c => c.id === categoryId);
                        return category && (
                          <span key={categoryId} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                            {category.icon} {category.name}
                          </span>
                        );
                      })}
                    </div>

                    {/* Location and Distance */}
                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{worker.location} • {worker.distance}</span>
                    </div>

                    {/* Rating and Stats */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-semibold">{worker.rating}</span>
                        </div>
                        <span className="text-sm text-gray-600">
                          {worker.completedJobs} {currentContent.jobs}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          ₹{worker.hourlyRate}{currentContent.perHour}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2">
                        <Phone className="w-5 h-5" />
                        <span>{currentContent.call}</span>
                      </button>
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2">
                        <MessageCircle className="w-5 h-5" />
                        <span>{currentContent.message}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600">{currentContent.noWorkers}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkersList;