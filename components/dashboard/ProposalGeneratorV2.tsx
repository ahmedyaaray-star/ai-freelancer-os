'use client'
import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Zap, Copy, Check, Download } from 'lucide-react';
import axios from 'axios';

export const ProposalGenerator: React.FC = () => {
  const [projectDescription, setProjectDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [skills, setSkills] = useState('web development');
  const [proposal, setProposal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const skillOptions = [
    'web development',
    'graphic design',
    'content writing',
    'digital marketing',
    'SEO optimization',
    'mobile app development',
    'UI/UX design',
    'video editing',
    'social media management',
    'copywriting',
  ];

  const handleGenerate = async () => {
    if (!projectDescription.trim() || !budget.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    setError('');
    setProposal('');

    try {
      const response = await axios.post('/api/generate-proposal', {
        projectDescription: projectDescription.trim(),
        budget: budget.trim(),
        skills,
      });

      setProposal(response.data.proposal);
      setCopied(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate proposal');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(proposal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3"
      >
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Proposal Generator</h2>
          <p className="text-gray-600 mt-1">Create winning freelance proposals instantly</p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Input Section */}
        <Card hoverable className="md:col-span-2 p-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="space-y-6">
            {/* Project Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Project Description
              </label>
              <textarea
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Describe the project requirements..."
                className="w-full h-28 p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none text-gray-700"
              />
            </div>

            {/* Skills Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Your Expertise
              </label>
              <select
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-all text-gray-700 bg-white"
              >
                {skillOptions.map((skill) => (
                  <option key={skill} value={skill}>
                    {skill.charAt(0).toUpperCase() + skill.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Budget Range
              </label>
              <input
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="e.g., $500-1000 or $50/hour"
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all text-gray-700"
              />
            </div>

            {/* Error Display */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              isLoading={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg"
              size="lg"
            >
              <Zap className="w-5 h-5 mr-2" />
              Generate Professional Proposal
            </Button>
          </div>
        </Card>

        {/* Info Card */}
        <Card hoverable className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100">
          <h3 className="font-bold text-gray-900 mb-4">Pro Tips 💡</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">→</span>
              <span>Be specific about the project</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">→</span>
              <span>Match your expertise to client needs</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">→</span>
              <span>Highlight your experience</span>
            </li>
            <li className="flex gap-2">
              <span className="text-purple-600 font-bold">→</span>
              <span>Always customize before sending</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Generated Proposal */}
      {proposal && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Card hoverable className="p-8 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 border-2 border-purple-200 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Generated Proposal</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  copied
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 border-2 border-purple-300 hover:bg-purple-50'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </motion.button>
            </div>

            <textarea
              value={proposal}
              onChange={(e) => setProposal(e.target.value)}
              className="w-full h-72 p-4 border-2 border-purple-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 font-medium resize-none"
            />

            <div className="mt-6 flex gap-3">
              <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600" size="lg">
                ✓ Send to Client
              </Button>
              <Button variant="secondary" className="flex-1" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
};
