'use client'

import { useEffect } from 'react'
import type { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import { useAppStore } from "@/store";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Plus, Calendar, Clock, Check } from "lucide-react";

export const metadata: Metadata = {
  title: 'Follow-ups - AI Freelancer OS',
}

export default function FollowUps() {
  const router = useRouter();
  const { isAuthenticated } = useAppStore();

  useEffect(() => {
    if (!isAuthenticated) router.push("/auth/login");
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Follow-ups</h1>
            <p className="text-gray-600 mt-2">Automated follow-up management</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Schedule Follow-up
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <p className="text-gray-600 mb-2">Pending</p>
            <p className="text-3xl font-bold text-gray-900">8</p>
            <p className="text-sm text-gray-600 mt-2">Due in next 7 days</p>
          </Card>
          <Card className="p-6">
            <p className="text-gray-600 mb-2">Completed</p>
            <p className="text-3xl font-bold text-gray-900">24</p>
            <p className="text-sm text-gray-600 mt-2">This month</p>
          </Card>
          <Card className="p-6">
            <p className="text-gray-600 mb-2">Success Rate</p>
            <p className="text-3xl font-bold text-gray-900">85%</p>
            <p className="text-sm text-gray-600 mt-2">Response rate</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Follow-ups</h2>
          <div className="space-y-4">
            {[
              { client: "TechCorp Inc", type: "Proposal Follow-up", due: "Tomorrow", status: "pending" },
              { client: "StartupXYZ", type: "Project Check-in", due: "In 3 days", status: "pending" },
              { client: "Design Agency", type: "Payment Reminder", due: "In 5 days", status: "pending" },
            ].map((followup, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{followup.client}</h3>
                  <p className="text-sm text-gray-600">{followup.type} • Due {followup.due}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={followup.status === "pending" ? "warning" : "success"}>
                    {followup.status}
                  </Badge>
                  <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}