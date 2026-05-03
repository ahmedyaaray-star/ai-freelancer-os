import React from "react";
import { motion } from "framer-motion";
import { FEATURES } from "@/utils/constants";
import * as Icons from "lucide-react";

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Scale Your Freelance Business
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From proposal to payment, manage every aspect of your freelance business in one powerful platform
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => {
            const IconComponent = (
              Icons as Record<string, React.ComponentType<Icons.LucideProps>>
            )[feature.icon] || Icons.Sparkles;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
