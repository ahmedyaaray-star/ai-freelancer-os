'use client'
import React from "react";
import { motion } from "framer-motion";
import { PLANS } from "@/utils/constants";
import { Check, ArrowRight } from "lucide-react";

export const PricingSection: React.FC = () => {
  const planArray = Object.values(PLANS);

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
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your freelance business. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {planArray.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={plan.popular ? { y: -10 } : undefined}
              className={`rounded-2xl border transition-all ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-50 to-purple-50 border-blue-300 ring-2 ring-blue-600 shadow-2xl"
                  : "bg-white border-gray-200 hover:border-gray-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  {plan.price > 0 && (
                    <p className="text-sm text-gray-600 mt-2">
                      or ${Math.round(plan.price * 0.8 * 12)} annually (Save 20%)
                    </p>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-6 transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>

                <div className="space-y-3">
                  {plan.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12">
          All plans include: Priority email support • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};
