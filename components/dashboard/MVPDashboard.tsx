'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AIClientReplyGenerator } from '@/components/dashboard/AIReplyGenerator';
import { LeadTracker } from '@/components/dashboard/LeadTracker';
import { FollowUpGenerator } from '@/components/dashboard/FollowUpGenerator';
import { ProposalGenerator } from '@/components/dashboard/ProposalGeneratorV2';
import { Sparkles, FileText, Users, Clock } from 'lucide-react';

export const MVPDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'AI Reply',
      icon: Sparkles,
      component: AIClientReplyGenerator,
      color: 'from-blue-500 to-purple-600',
      description: 'Generate professional client replies',
    },
    {
      label: 'Proposals',
      icon: FileText,
      component: ProposalGenerator,
      color: 'from-purple-500 to-pink-600',
      description: 'Create winning proposals instantly',
    },
    {
      label: 'Leads',
      icon: Users,
      component: LeadTracker,
      color: 'from-green-500 to-teal-600',
      description: 'Track and manage your leads',
    },
    {
      label: 'Follow-ups',
      icon: Clock,
      component: FollowUpGenerator,
      color: 'from-orange-500 to-red-600',
      description: 'Smart follow-up messages',
    },
  ];

  const ActiveComponent = tabs[activeTab].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Freelancer Command Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            4 AI-powered tools to win more projects, faster. Everything you need to scale your freelance business.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-2 mb-12 overflow-x-auto"
        >
          <div className="flex gap-2 min-w-max md:min-w-0">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              const isActive = activeTab === i;

              return (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                    isActive
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <ActiveComponent />
        </motion.div>

        {/* Feature Cards Grid - Below main content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 40 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={i}
                whileHover={{ y: -4 }}
                onClick={() => setActiveTab(i)}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-gray-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${tab.color} rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-left">{tab.label}</h3>
                <p className="text-sm text-gray-600 mt-1 text-left">{tab.description}</p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-gray-600 text-sm"
        >
          <p>
            🚀 Join freelancers who've increased their income by automating proposals, replies, and follow-ups
          </p>
        </motion.div>
      </div>
    </div>
  );
};
