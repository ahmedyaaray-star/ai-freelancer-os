import React from "react";
import { motion } from "framer-motion";
import { FAQ } from "@/utils/constants";
import { ChevronDown } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about AI Freelancer OS
          </p>
        </motion.div>

        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 text-left">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-600 border-t border-gray-100">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
