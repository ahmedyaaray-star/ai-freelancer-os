'use client'
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Freelance Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers who've already saved hundreds of hours and increased their income by automating their entire workflow.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-2xl transition-all inline-flex items-center gap-2"
          >
            Start Your Free Trial <ArrowRight className="w-4 h-4" />
          </motion.button>

          <p className="mt-6 text-blue-100 text-sm">
            ✓ No credit card required • ✓ 14-day free trial • ✓ Full access to all features
          </p>
        </motion.div>
      </div>
    </section>
  );
};
