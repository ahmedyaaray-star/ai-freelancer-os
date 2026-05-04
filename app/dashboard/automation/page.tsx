"use client";

import { useEffect } from 'react'
import type { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import { useAppStore } from "@/store";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Plus, Zap, Play, Pause, Trash2 } from "lucide-react";




export default function Automation() {
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
            <h1 className="text-3xl font-bold text-gray-900">Workflow Automation</h1>
            <p className="text-gray-600 mt-2">Create automation rules without coding</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Rule
          </Button>
        </div>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Create Automation Rule</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                When This Happens
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Proposal Sent</option>
                <option>Project Starts</option>
                <option>Payment Overdue</option>
                <option>Deadline Approaching</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Then Do This
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Create Task</option>
                <option>Send Reminder</option>
                <option>Schedule Follow-up</option>
                <option>Send Email</option>
              </select>
            </div>
            <div className="flex items-end gap-3">
              <Button className="flex-1">Create Rule</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Active Rules</h2>

          <div className="space-y-4">
            {[
              {
                name: "Auto Follow-up",
                trigger: "Proposal Sent",
                action: "Schedule Follow-up",
                status: "active",
                executions: 24,
              },
              {
                name: "Payment Reminder",
                trigger: "Payment Overdue",
                action: "Send Email",
                status: "active",
                executions: 8,
              },
              {
                name: "Project Tasks",
                trigger: "Project Starts",
                action: "Create Tasks",
                status: "inactive",
                executions: 5,
              },
            ].map((rule, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-orange-500" />
                    <h3 className="font-semibold text-gray-900">{rule.name}</h3>
                    <Badge
                      variant={rule.status === "active" ? "success" : "gray"}
                    >
                      {rule.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 ml-8">
                    When {rule.trigger} → {rule.action}
                  </p>
                  <p className="text-xs text-gray-500 ml-8 mt-1">
                    Executed {rule.executions} times
                  </p>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                    {rule.status === "active" ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </button>
                  <button className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
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