import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export const SignupForm: React.FC = () => {
  const router = useRouter();
  const { signup } = useAuth();
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [agreeToTerms, setAgreeToTerms] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signup(email, password, fullName);
      router.push("/dashboard");
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md w-full"
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Get Started</h1>
        <p className="text-gray-600 mb-8">Create your AI Freelancer OS account</p>

        <form onSubmit={handleSignup} className="space-y-6">
          <Input
            label="Full Name"
            type="text"
            placeholder="Your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            icon={<User className="w-4 h-4" />}
            required
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail className="w-4 h-4" />}
            required
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="w-4 h-4" />}
            required
          />

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="mt-1 rounded"
              required
            />
            <span className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Privacy Policy
              </a>
            </span>
          </label>

          <Button fullWidth isLoading={isLoading} type="submit">
            Create Account <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign in
          </a>
        </p>
      </div>
    </motion.div>
  );
};
