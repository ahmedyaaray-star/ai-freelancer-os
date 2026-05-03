import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export const LandingNavbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
            AI
          </div>
          <span className="hidden sm:inline">AI Freelancer OS</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
            FAQ
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/auth/login"
            className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-gray-200 bg-white"
        >
          <div className="px-6 py-4 space-y-4">
            <a href="#features" className="block text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#pricing" className="block text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#testimonials" className="block text-gray-600 hover:text-gray-900">
              Testimonials
            </a>
            <a href="#faq" className="block text-gray-600 hover:text-gray-900">
              FAQ
            </a>
            <Link
              href="/auth/login"
              className="block text-gray-600 hover:text-gray-900"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center font-medium"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
