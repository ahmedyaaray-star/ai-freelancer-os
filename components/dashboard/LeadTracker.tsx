'use client'
import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Plus, Trash2, Edit2, Users, TrendingUp } from 'lucide-react';

interface Lead {
  id: string;
  clientName: string;
  platform: 'Fiverr' | 'Upwork' | 'LinkedIn' | 'Direct';
  status: 'Contacted' | 'Replied' | 'Proposal Sent' | 'Closed' | 'Won';
  date: string;
}

export const LeadTracker: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([
    {
      id: '1',
      clientName: 'TechCorp Inc',
      platform: 'Fiverr',
      status: 'Replied',
      date: '2024-05-04',
    },
    {
      id: '2',
      clientName: 'Design Agency',
      platform: 'Upwork',
      status: 'Proposal Sent',
      date: '2024-05-03',
    },
    {
      id: '3',
      clientName: 'StartupXYZ',
      platform: 'LinkedIn',
      status: 'Contacted',
      date: '2024-05-02',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    platform: 'Fiverr' as const,
    status: 'Contacted' as const,
  });

  const platformColors: Record<string, string> = {
    Fiverr: 'bg-green-100 text-green-800',
    Upwork: 'bg-blue-100 text-blue-800',
    LinkedIn: 'bg-indigo-100 text-indigo-800',
    Direct: 'bg-purple-100 text-purple-800',
  };

  const statusColors: Record<string, string> = {
    Contacted: 'bg-yellow-100 text-yellow-800',
    Replied: 'bg-blue-100 text-blue-800',
    'Proposal Sent': 'bg-purple-100 text-purple-800',
    Closed: 'bg-gray-100 text-gray-800',
    Won: 'bg-green-100 text-green-800',
  };

  const handleAddLead = () => {
    if (!formData.clientName.trim()) return;

    const newLead: Lead = {
      id: Date.now().toString(),
      clientName: formData.clientName,
      platform: formData.platform,
      status: formData.status,
      date: new Date().toISOString().split('T')[0],
    };

    setLeads([newLead, ...leads]);
    setFormData({ clientName: '', platform: 'Fiverr', status: 'Contacted' });
    setShowForm(false);
  };

  const updateStatus = (id: string, newStatus: Lead['status']) => {
    setLeads(leads.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead)));
  };

  const deleteLead = (id: string) => {
    setLeads(leads.filter((lead) => lead.id !== id));
  };

  const stats = {
    total: leads.length,
    replied: leads.filter((l) => l.status === 'Replied').length,
    won: leads.filter((l) => l.status === 'Won').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Lead Tracker</h2>
            <p className="text-gray-600 mt-1">Manage your freelance leads</p>
          </div>
        </div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-green-600 to-teal-600"
          size="lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Lead
        </Button>
      </motion.div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: 'Total Leads', value: stats.total, color: 'from-blue-500 to-blue-600' },
          { label: 'Replied', value: stats.replied, color: 'from-purple-500 to-purple-600' },
          { label: 'Won', value: stats.won, color: 'from-green-500 to-green-600' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className={`p-6 bg-gradient-to-br ${stat.color} text-white`}>
              <p className="text-sm font-medium opacity-90">{stat.label}</p>
              <p className="text-4xl font-bold mt-2">{stat.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Add Lead Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="grid md:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Client name"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-all"
              />
              <select
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value as any })}
                className="p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-all bg-white"
              >
                <option>Fiverr</option>
                <option>Upwork</option>
                <option>LinkedIn</option>
                <option>Direct</option>
              </select>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                className="p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-green-500 transition-all bg-white"
              >
                <option>Contacted</option>
                <option>Replied</option>
                <option>Proposal Sent</option>
                <option>Won</option>
              </select>
              <div className="flex gap-2">
                <Button onClick={handleAddLead} className="flex-1 bg-gradient-to-r from-green-600 to-teal-600">
                  Add
                </Button>
                <Button
                  onClick={() => setShowForm(false)}
                  variant="secondary"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* Leads Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Platform</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Users className="w-8 h-8 text-gray-300" />
                      <p className="text-gray-500">No leads yet. Add one to get started!</p>
                    </div>
                  </td>
                </tr>
              ) : (
                leads.map((lead, i) => (
                  <motion.tr
                    key={lead.id}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900">{lead.clientName}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${platformColors[lead.platform]}`}>
                        {lead.platform}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={lead.status}
                        onChange={(e) => updateStatus(lead.id, e.target.value as Lead['status'])}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border-0 focus:outline-none focus:ring-2 focus:ring-green-500 ${statusColors[lead.status]}`}
                      >
                        <option>Contacted</option>
                        <option>Replied</option>
                        <option>Proposal Sent</option>
                        <option>Closed</option>
                        <option>Won</option>
                      </select>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-600">{lead.date}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          onClick={() => deleteLead(lead.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
