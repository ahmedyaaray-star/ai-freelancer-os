"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isAuthenticated) {
      router.push("/auth/login");
    }
  }, [mounted, isAuthenticated, router]);

  // prevent SSR + hydration issues
  if (!mounted) return null;
  if (!isAuthenticated) return null;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Workflow Automation</h1>
            <p className="text-gray-600 mt-2">
              Create automation rules without coding
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            New Rule
          </Button>
        </div>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Create Automation Rule
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                When This Happens
              </label>
              <select className="w-full px-4 py-2 border rounded-lg">
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
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>Create Task</option>
                <option>Send Reminder</option>
                <option>Schedule Follow-up</option>
                <option>Send Email</option>
              </select>
            </div>

            <div className="flex items-end">
              <Button className="w-full">Create Rule</Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Active Rules</h2>

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
                className="flex justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-orange-500" />
                    <h3 className="font-semibold">{rule.name}</h3>
                    <Badge
                      variant={rule.status === "active" ? "success" : "gray"}
                    >
                      {rule.status}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-600">
                    When {rule.trigger} → {rule.action}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Executed {rule.executions} times
                  </p>
                </div>

                <div className="flex gap-2">
                  <button>
                    {rule.status === "active" ? (
                      <Pause className="w-4 h-4" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                  </button>
                  <button className="text-red-600">
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