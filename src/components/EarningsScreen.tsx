import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Calendar, IndianRupee, Download, Eye, Volume2 } from 'lucide-react';

type Language = 'te' | 'hi' | 'en';

interface EarningsScreenProps {
  onBack: () => void;
  language: Language;
}

interface EarningRecord {
  id: number;
  jobTitle: string;
  employer: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'paid';
}

const EarningsScreen: React.FC<EarningsScreenProps> = ({ onBack, language }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const content = {
    en: {
      title: "My Earnings",
      totalEarnings: "Total Earnings",
      thisWeek: "This Week",
      thisMonth: "This Month",
      allTime: "All Time",
      recentJobs: "Recent Jobs",
      completed: "Completed",
      pending: "Pending",
      paid: "Paid",
      download: "Download Report",
      viewDetails: "View Details",
      noEarnings: "No earnings yet"
    },
    hi: {
      title: "मेरी कमाई",
      totalEarnings: "कुल कमाई",
      thisWeek: "इस सप्ताह",
      thisMonth: "इस महीने",
      allTime: "सभी समय",
      recentJobs: "हाल के काम",
      completed: "पूर्ण",
      pending: "लंबित",
      paid: "भुगतान",
      download: "रिपोर्ट डाउनलोड करें",
      viewDetails: "विवरण देखें",
      noEarnings: "अभी तक कोई कमाई नहीं"
    },
    te: {
      title: "నా సంపాదన",
      totalEarnings: "మొత్తం సంపాదన",
      thisWeek: "ఈ వారం",
      thisMonth: "ఈ నెల",
      allTime: "అన్ని సమయం",
      recentJobs: "ఇటీవలి పనులు",
      completed: "పూర్తయింది",
      pending: "పెండింగ్",
      paid: "చెల్లించబడింది",
      download: "రిపోర్ట్ డౌన్‌లోడ్ చేయండి",
      viewDetails: "వివరాలు చూడండి",
      noEarnings: "ఇంకా సంపాదన లేదు"
    }
  };

  const earningsData = {
    week: { total: 3200, jobs: 8 },
    month: { total: 12800, jobs: 32 },
    allTime: { total: 45600, jobs: 128 }
  };

  const sampleEarnings: EarningRecord[] = [
    {
      id: 1,
      jobTitle: "Farm Harvesting",
      employer: "Ravi Kumar",
      amount: 800,
      date: "2024-01-15",
      status: 'paid'
    },
    {
      id: 2,
      jobTitle: "House Construction",
      employer: "Lakshmi Devi",
      amount: 1200,
      date: "2024-01-14",
      status: 'completed'
    },
    {
      id: 3,
      jobTitle: "Garden Cleaning",
      employer: "Suresh Babu",
      amount: 600,
      date: "2024-01-13",
      status: 'pending'
    }
  ];

  const currentContent = content[language];
  const currentData = earningsData[selectedPeriod as keyof typeof earningsData];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'paid': return currentContent.paid;
      case 'completed': return currentContent.completed;
      case 'pending': return currentContent.pending;
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
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
          <Volume2 className="w-6 h-6 text-green-600 ml-auto" />
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Period Selection */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {[
            { key: 'week', label: currentContent.thisWeek },
            { key: 'month', label: currentContent.thisMonth },
            { key: 'allTime', label: currentContent.allTime }
          ].map((period) => (
            <button
              key={period.key}
              onClick={() => setSelectedPeriod(period.key)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
                selectedPeriod === period.key
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-green-50'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>

        {/* Earnings Summary */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-lg p-6 mb-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold opacity-90">
              {currentContent.totalEarnings}
            </h2>
            <TrendingUp className="w-6 h-6 opacity-90" />
          </div>
          <div className="text-3xl font-bold mb-2">
            ₹{currentData.total.toLocaleString()}
          </div>
          <div className="flex items-center space-x-4 text-sm opacity-90">
            <span>{currentData.jobs} jobs completed</span>
            <span>•</span>
            <span>₹{Math.round(currentData.total / currentData.jobs)} avg per job</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-800">
                  {currentContent.download}
                </div>
                <div className="text-sm text-gray-600">PDF Report</div>
              </div>
            </div>
          </button>

          <button className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition-all">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-800">
                  {currentContent.viewDetails}
                </div>
                <div className="text-sm text-gray-600">Full History</div>
              </div>
            </div>
          </button>
        </div>

        {/* Recent Jobs */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            {currentContent.recentJobs}
          </h3>

          {sampleEarnings.length > 0 ? (
            <div className="space-y-4">
              {sampleEarnings.map((earning) => (
                <div key={earning.id} className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">
                        {earning.jobTitle}
                      </h4>
                      <p className="text-gray-600">
                        {earning.employer}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(earning.status)}`}>
                      {getStatusText(earning.status)}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">
                        {new Date(earning.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <IndianRupee className="w-5 h-5 text-green-600" />
                      <span className="text-xl font-bold text-green-600">
                        ₹{earning.amount}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <IndianRupee className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-600">{currentContent.noEarnings}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EarningsScreen;