"use client";
export const dynamic = "force-dynamic";

import Link from 'next/link'
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage users, subscriptions, and system settings
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Users", value: "1,234" },
            { label: "Active Subscriptions", value: "$45,600" },
            { label: "Growth Rate", value: "+12.5%" },
            { label: "System Health", value: "98.5%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-6">
                <p className="text-gray-600 mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              User Management
            </h2>
            <Button className="w-full mb-4">Manage Users</Button>
            <Button variant="secondary" className="w-full">
              View Analytics
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Subscription Management
            </h2>
            <Button className="w-full mb-4">Manage Plans</Button>
            <Button variant="secondary" className="w-full">
              View Revenue
            </Button>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}