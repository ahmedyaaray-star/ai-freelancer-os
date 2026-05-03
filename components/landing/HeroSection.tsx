import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Check } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Powered by AI • Built for Freelancers</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Run Your Freelance Business on
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Autopilot
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              AI Freelancer Operating System – The all-in-one platform that automates proposals, manages clients, tracks deadlines, and grows your income without the chaos.
            </p>

            <div className="flex gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-semibold hover:shadow-2xl transition-all"
              >
                Start Free Trial <ArrowRight className="w-4 h-4 inline ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-gray-400 text-gray-200 rounded-lg font-semibold hover:bg-white/5 transition-all"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>14-day free trial</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-gray-700 p-6 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg" />
                      <div>
                        <p className="text-sm font-medium">AI Proposal</p>
                        <p className="text-xs text-gray-400">Generated in 30 seconds</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      Ready
                    </div>
                  </div>
                  <div className="h-32 bg-slate-700/30 rounded-lg" />
                  <div className="flex gap-3">
                    <div className="flex-1 h-10 bg-slate-700/30 rounded-lg" />
                    <div className="flex-1 h-10 bg-blue-600 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
