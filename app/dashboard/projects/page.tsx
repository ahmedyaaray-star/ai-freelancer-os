'use client'
export const dynamic = "force-dynamic";

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from "@/store";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ProjectKanban } from "@/components/dashboard/ProjectKanban";



export default function Projects() {
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
      <ProjectKanban />
    </DashboardLayout>
  );
}