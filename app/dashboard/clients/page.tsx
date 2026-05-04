'use client'
export const dynamic = "force-dynamic";

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAppStore } from "@/store";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Plus, Mail, Phone, ExternalLink } from "lucide-react";
import { formatCurrency } from "@/utils/helpers";


export default function Clients() {
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
            <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
            <p className="text-gray-600 mt-2">Manage all your client relationships</p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Client
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <p className="text-gray-600 mb-2">Total Clients</p>
            <p className="text-3xl font-bold text-gray-900">28</p>
          </Card>
          <Card className="p-6">
            <p className="text-gray-600 mb-2">Active Projects</p>
            <p className="text-3xl font-bold text-gray-900">12</p>
          </Card>
          <Card className="p-6">
            <p className="text-gray-600 mb-2">Total Revenue</p>
            <p className="text-3xl font-bold text-gray-900">{formatCurrency(45600)}</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Client List</h2>
          <div className="space-y-4">
            {[
              { name: "TechCorp Inc", status: "active", projects: 3, revenue: 15000 },
              { name: "StartupXYZ", status: "active", projects: 2, revenue: 8000 },
              { name: "Design Agency", status: "inactive", projects: 1, revenue: 5000 },
            ].map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-gray-900">{client.name}</h3>
                  <p className="text-sm text-gray-600">{client.projects} projects • {formatCurrency(client.revenue)}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={client.status === "active" ? "success" : "gray"}>
                    {client.status}
                  </Badge>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Phone className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}