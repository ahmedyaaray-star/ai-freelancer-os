'use client'
import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { SendHorizontal, Copy, Check, Clock } from 'lucide-react';
import axios from 'axios';

export const FollowUpGenerator: React.FC = () => {
  const [originalMessage, setOriginalMessage] = useState('');
  const [tone, setTone] = useState<'professional' | 'friendly' | 'urgent'>('professional');
  const [followUp, setFollowUp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const toneOptions = [
    { value: 'professional' as const, label: 'Professional', icon: '💼' },
    { value: 'friendly' as const, label: 'Friendly', icon: '😊' },
    { value: 'urgent' as const, label: 'Urgent', icon: '⚡' },
  ];

  const handleGenerate = async () => {
    if (!originalMessage.trim()) {
      setError('Please enter your original message');
      return;
    }

    setIsLoading(true);
    setError('');
    setFollowUp('');

    try {
      const response = await axios.post('/api/generate-followup', {
        originalMessage: originalMessage.trim(),
        tone,
      });

      setFollowUp(response.data.followUp);
      setCopied(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate follow-up');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(followUp);
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
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
          <Clock className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Follow-up Generator</h2>
          <p className="text-gray-600 mt-1">Never lose a lead - send smart follow-ups</p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Input Section */}
        <Card hoverable className="md:col-span-2 p-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="space-y-6">
            {/* Original Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Your Original Message
              </label>
              <textarea
                value={originalMessage}
                onChange={(e) => setOriginalMessage(e.target.value)}
                placeholder="Paste your original message or proposal..."
                className="w-full h-28 p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none text-gray-700"
              />
            </div>

            {/* Tone Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Follow-up Tone
              </label>
              <div className="grid grid-cols-3 gap-3">
                {toneOptions.map((option) => (
                  <motion.button
                    key={option.value}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setTone(option.value)}
                    className={`p-3 rounded-lg border-2 font-medium transition-all ${
                      tone === option.value
                        ? 'bg-orange-100 border-orange-500 text-orange-700'
                        : 'bg-gray-100 border-gray-300 text-gray-700 hover:border-gray-400'
                    }`}
                  >
                    <span className="text-lg">{option.icon}</span>
                    <p className="text-sm mt-1">{option.label}</p>
                  </motion.button>
                ))}
              </div>
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
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:shadow-lg"
              size="lg"
            >
              <SendHorizontal className="w-5 h-5 mr-2" />
              Generate Follow-up
            </Button>
          </div>
        </Card>

        {/* Benefits Card */}
        <Card hoverable className="p-6 bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-100">
          <h3 className="font-bold text-gray-900 mb-4">Why Follow Up? 📈</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-2">
              <span>✓</span>
              <span>Increase response rates</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Stay top of mind</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Win more projects</span>
            </li>
            <li className="flex gap-2">
              <span>✓</span>
              <span>Build relationships</span>
            </li>
          </ul>
          <div className="mt-6 p-3 bg-white rounded-lg border border-orange-200">
            <p className="text-xs text-gray-600">
              💡 Follow up 2-3 times before giving up
            </p>
          </div>
        </Card>
      </div>

      {/* Generated Follow-up */}
      {followUp && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Card hoverable className="p-8 bg-gradient-to-br from-orange-50 via-red-50 to-orange-50 border-2 border-orange-200 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Your Follow-up</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  copied
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 border-2 border-orange-300 hover:bg-orange-50'
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
              value={followUp}
              onChange={(e) => setFollowUp(e.target.value)}
              className="w-full h-56 p-4 border-2 border-orange-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 font-medium resize-none"
            />

            <div className="mt-6 flex gap-3">
              <Button className="flex-1 bg-gradient-to-r from-orange-600 to-red-600" size="lg">
                <SendHorizontal className="w-4 h-4 mr-2" />
                Send Now
              </Button>
              <Button variant="secondary" className="flex-1" size="lg">
                📋 Save Template
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
};
