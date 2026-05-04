'use client'
import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, Zap } from 'lucide-react';
import axios from 'axios';

export const AIClientReplyGenerator: React.FC = () => {
  const [clientMessage, setClientMessage] = useState('');
  const [serviceType, setServiceType] = useState('web design');
  const [generatedReply, setGeneratedReply] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const serviceOptions = [
    'web design',
    'web development',
    'graphic design',
    'content writing',
    'social media management',
    'digital marketing',
    'SEO optimization',
    'video editing',
    'mobile app development',
    'branding',
  ];

  const handleGenerate = async () => {
    if (!clientMessage.trim()) {
      setError('Please enter a client message');
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedReply('');

    try {
      const response = await axios.post('/api/generate-reply', {
        clientMessage: clientMessage.trim(),
        serviceType,
      });

      setGeneratedReply(response.data.reply);
      setCopied(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate reply');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedReply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleGenerate();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3"
      >
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">AI Reply Generator</h1>
          <p className="text-gray-600 mt-1">Generate professional client replies instantly</p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Input Section */}
        <Card hoverable className="md:col-span-2 p-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="space-y-6">
            {/* Client Message Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Client Message
              </label>
              <textarea
                value={clientMessage}
                onChange={(e) => setClientMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Paste the client's message here..."
                className="w-full h-32 p-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none text-gray-700"
              />
              <p className="text-xs text-gray-500 mt-2">💡 Tip: Ctrl+Enter to generate</p>
            </div>

            {/* Service Type Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Your Service
              </label>
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all text-gray-700 bg-white"
              >
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service.charAt(0).toUpperCase() + service.slice(1)}
                  </option>
                ))}
              </select>
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
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg"
              size="lg"
            >
              <Zap className="w-5 h-5 mr-2" />
              Generate Professional Reply
            </Button>
          </div>
        </Card>

        {/* Info Card */}
        <Card hoverable className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            How It Works
          </h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">1.</span>
              <span>Paste the client message</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">2.</span>
              <span>Select your service type</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">3.</span>
              <span>Click "Generate" or press Ctrl+Enter</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600 font-bold">4.</span>
              <span>Copy and send to client</span>
            </li>
          </ul>
          <div className="mt-6 p-3 bg-white rounded-lg border border-blue-200">
            <p className="text-xs text-gray-600">
              ⚡ Professional • Time-saving • Customizable
            </p>
          </div>
        </Card>
      </div>

      {/* Generated Reply Section */}
      {generatedReply && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <Card hoverable className="p-8 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-2 border-green-200 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Your Reply</h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  copied
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 border-2 border-green-300 hover:bg-green-50'
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
              value={generatedReply}
              onChange={(e) => setGeneratedReply(e.target.value)}
              className="w-full h-64 p-4 border-2 border-green-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 font-medium resize-none"
            />

            <div className="mt-6 flex gap-3">
              <Button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600" size="lg">
                ✓ Send to Client
              </Button>
              <Button variant="secondary" className="flex-1" size="lg">
                📝 Save as Template
              </Button>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Empty State */}
      {!generatedReply && !isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-500 text-lg">No reply generated yet</p>
          <p className="text-gray-400 text-sm mt-1">Generate your first professional reply above</p>
        </motion.div>
      )}
    </div>
  );
};
