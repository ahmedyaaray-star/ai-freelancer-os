'use client'
import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  TrendingUp,
  Users,
  FileText,
  Clock,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { formatCurrency } from "@/utils/helpers";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  icon,
  trend = "neutral",
}) => {
  return (
    <Card className="p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {change !== undefined && (
            <p
              className={`text-sm mt-2 font-medium ${
                trend === "up"
                  ? "text-green-600"
                  : trend === "down"
                  ? "text-red-600"
                  : "text-gray-600"
              }`}
            >
              {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"} {Math.abs(
                change
              )}% vs last month
            </p>
          )}
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-2xl">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back! 👋</h1>
        <p className="text-gray-600 mt-2">
          Here's what's happening with your business today
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value={formatCurrency(12850)}
          change={15}
          trend="up"
          icon="💰"
        />
        <MetricCard
          title="Active Projects"
          value={8}
          change={2}
          trend="up"
          icon="📊"
        />
        <MetricCard
          title="Pending Proposals"
          value={12}
          change={-3}
          trend="down"
          icon="📝"
        />
        <MetricCard
          title="Overdue Items"
          value={2}
          change={0}
          trend="neutral"
          icon="⏰"
        />
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Recent Proposals */}
        <Card className="md:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Proposals</h2>
            <Badge variant="info">5 Pending</Badge>
          </div>

          <div className="space-y-4">
            {[
              {
                client: "Design Agency Co.",
                amount: 2500,
                status: "sent",
              },
              {
                client: "Tech Startup Inc.",
                amount: 5000,
                status: "pending",
              },
              {
                client: "Creative Studio",
                amount: 1800,
                status: "accepted",
              },
            ].map((proposal, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    {proposal.client}
                  </p>
                  <p className="text-sm text-gray-600">
                    {formatCurrency(proposal.amount)}
                  </p>
                </div>
                <Badge
                  variant={
                    proposal.status === "accepted"
                      ? "success"
                      : proposal.status === "sent"
                      ? "info"
                      : "warning"
                  }
                >
                  {proposal.status.charAt(0).toUpperCase() +
                    proposal.status.slice(1)}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 h-fit">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" /> New Proposal
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4" /> Add Client
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-3 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
            >
              <Clock className="w-4 h-4" /> Schedule Follow-up
            </motion.button>
          </div>
        </Card>
      </div>

      {/* Upcoming Deadlines */}
      <Card className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Upcoming Deadlines
        </h2>

        <div className="space-y-4">
          {[
            { project: "Website Redesign", daysLeft: 3, priority: "urgent" },
            { project: "Content Writing Project", daysLeft: 7, priority: "high" },
            { project: "Logo Design", daysLeft: 14, priority: "medium" },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-medium text-gray-900">{item.project}</p>
                  <p className="text-sm text-gray-600">
                    {item.daysLeft} days remaining
                  </p>
                </div>
                <Badge
                  variant={
                    item.priority === "urgent"
                      ? "danger"
                      : item.priority === "high"
                      ? "warning"
                      : "info"
                  }
                >
                  {item.priority}
                </Badge>
              </div>
              <ProgressBar
                progress={(item.daysLeft / 30) * 100}
                showLabel={false}
                color={
                  item.priority === "urgent"
                    ? "red"
                    : item.priority === "high"
                    ? "orange"
                    : "blue"
                }
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
