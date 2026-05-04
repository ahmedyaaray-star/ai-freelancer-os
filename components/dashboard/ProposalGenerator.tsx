'use client'
import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { Copy, Download, Send } from "lucide-react";

export const ProposalGenerator: React.FC = () => {
  const [formData, setFormData] = React.useState({
    clientName: "",
    projectDescription: "",
    budget: "",
    timeline: "",
    painPoints: "",
    expertise: "",
  });

  const [generatedProposal, setGeneratedProposal] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mockProposal = `
Dear ${formData.clientName},

Thank you for considering me for your project. After reviewing your requirements, I'm confident I can deliver exceptional results.

PROJECT OVERVIEW
${formData.projectDescription}

MY APPROACH
Based on your mentioned pain points (${formData.painPoints}), I'll implement a comprehensive solution that:
• Addresses your specific challenges
• Leverages my expertise in ${formData.expertise}
• Delivers measurable results within ${formData.timeline}

INVESTMENT & TIMELINE
- Project Investment: ${formData.budget}
- Timeline: ${formData.timeline}
- Next Steps: Upon approval, we'll begin immediately with a detailed project plan

WHY CHOOSE ME
With extensive experience in ${formData.expertise}, I've helped similar businesses overcome challenges like yours. I'm committed to delivering quality work on time and within budget.

I'm excited about this opportunity and confident we can achieve great results together.

Best regards,
Your Name
    `;

    setGeneratedProposal(mockProposal);
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">AI Proposal Writer</h1>
        <p className="text-gray-600 mt-2">
          Generate professional, high-converting proposals in minutes
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Form */}
        <Card className="md:col-span-2 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Create New Proposal
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Client Name
              </label>
              <input
                type="text"
                value={formData.clientName}
                onChange={(e) =>
                  setFormData({ ...formData, clientName: e.target.value })
                }
                placeholder="Enter client name"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description
              </label>
              <textarea
                value={formData.projectDescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    projectDescription: e.target.value,
                  })
                }
                placeholder="Describe the project in detail"
                rows={4}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <input
                  type="number"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  placeholder="$"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline
                </label>
                <input
                  type="text"
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  placeholder="e.g., 2 weeks"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Client Pain Points
              </label>
              <input
                type="text"
                value={formData.painPoints}
                onChange={(e) =>
                  setFormData({ ...formData, painPoints: e.target.value })
                }
                placeholder="What problems are they facing?"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Expertise
              </label>
              <input
                type="text"
                value={formData.expertise}
                onChange={(e) =>
                  setFormData({ ...formData, expertise: e.target.value })
                }
                placeholder="Your key skills and experience"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <Button
              onClick={handleGenerate}
              isLoading={isLoading}
              className="w-full"
            >
              ✨ Generate Proposal
            </Button>
          </form>
        </Card>

        {/* Info */}
        <Card className="p-6 h-fit bg-gradient-to-br from-blue-50 to-purple-50">
          <h3 className="font-bold text-gray-900 mb-4">Pro Tips 💡</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>• Be specific about the project scope</li>
            <li>• Highlight client pain points clearly</li>
            <li>• Include relevant expertise examples</li>
            <li>• Save your best proposals as templates</li>
            <li>• Personalize before sending</li>
          </ul>
        </Card>
      </div>

      {/* Generated Proposal */}
      {generatedProposal && (
        <Card className="p-8 bg-white border-2 border-green-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              📄 Generated Proposal
            </h2>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => navigator.clipboard.writeText(generatedProposal)}
              >
                <Copy className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="secondary">
                <Download className="w-4 h-4" />
              </Button>
              <Button size="sm">
                <Send className="w-4 h-4" /> Send
              </Button>
            </div>
          </div>

          <textarea
            value={generatedProposal}
            onChange={(e) => setGeneratedProposal(e.target.value)}
            className="w-full h-96 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
          />

          <p className="text-sm text-gray-600 mt-4">
            💡 Edit the proposal above before sending. Make it more personal and
            specific to your style!
          </p>
        </Card>
      )}
    </div>
  );
};
