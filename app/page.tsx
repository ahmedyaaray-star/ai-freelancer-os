import type { Metadata } from 'next'
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: 'AI Freelancer Operating System - Run Your Business on Autopilot',
  description: 'Automate proposals, manage clients, track deadlines, and grow your freelance income. The all-in-one platform for modern freelancers.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <LandingNavbar />
      <div className="pt-16">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}