'use client'
export const dynamic = "force-dynamic";

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from "@/store";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ClientReplyAssistant } from "@/components/dashboard/ClientReplyAssistant";



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