'use client'

import { useEffect } from 'react'
import type { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import { useAppStore } from "@/store";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ClientReplyAssistant } from "@/components/dashboard/ClientReplyAssistant";

export const metadata: Metadata = {
  title: 'Client Reply Assistant - AI Freelancer OS',
  description: 'AI-powered client replies',
}

export default function Replies() {
  const router = useRouter();
  const { isAuthenticated } = useAppStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <DashboardLayout>
      <ClientReplyAssistant />
    </DashboardLayout>
  );
}