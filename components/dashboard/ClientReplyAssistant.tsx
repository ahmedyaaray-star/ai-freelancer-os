'use client'
import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { Copy, Sparkles } from "lucide-react";

export const ClientReplyAssistant: React.FC = () => {
  const [selectedTone, setSelectedTone] = React.useState<
    "professional" | "friendly" | "persuasive" | "premium_agency"
  >("professional");
  const [replyType, setReplyType] = React.useState<string>("inquiry");
  const [generatedReply, setGeneratedReply] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const toneMap = {
      professional:
        "Thank you for reaching out. I appreciate your interest and would be happy to discuss this further.",
      friendly:
        "Hey! Thanks so much for getting in touch! I'd love to chat more about this.",
      persuasive:
        "This is exactly the kind of project I excel at. I'm confident I can deliver exceptional results.",
      premium_agency:
        "We appreciate your inquiry and believe this presents an excellent opportunity for collaboration.",
    };

    const typeMap = {
      inquiry: `${toneMap[selectedTone]} Could you provide more details about your timeline and budget? I'm ready to proceed quickly.`,
      revision: `${toneMap[selectedTone]} I've carefully reviewed your feedback and will incorporate these changes. New version coming in 24 hours.`,
      negotiation: `${toneMap[selectedTone]} I understand your budget constraints. Let me propose a phased approach that delivers value at your price point.`,
      followup: `${toneMap[selectedTone]} I wanted to check if you're still interested in moving forward. Happy to answer any questions.`,
      payment_reminder: `${toneMap[selectedTone]} Gentle reminder: Invoice #1234 is now due. I accept multiple payment methods for your convenience.`,
    };

    setGeneratedReply(typeMap[replyType as keyof typeof typeMap] || "");
    setIsLoading(false);
  };

  const tones = [
    { label: "Professional", value: "professional" },
    { label: "Friendly", value: "friendly" },
    { label: "Persuasive", value: "persuasive" },
    { label: "Premium Agency", value: "premium_agency" },
  ];

  const replyTypes = [
    { label: "Client Inquiry", value: "inquiry" },
    { label: "Revision Request", value: "revision" },
    { label: "Negotiation", value: "negotiation" },
    { label: "Follow-up", value: "followup" },
    { label: "Payment Reminder", value: "payment_reminder" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Client Reply Assistant
        </h1>
        <p className="text-gray-600 mt-2">
          AI-powered replies tailored to any client situation
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Configuration */}
        <Card className="md:col-span-2 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Generate Smart Reply
          </h2>

          {/* Tone Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Tone Style
            </label>
            <div className="grid grid-cols-2 gap-3">
              {tones.map((tone) => (
                <button
                  key={tone.value}
                  onClick={() =>
                    setSelectedTone(
                      tone.value as
                        | "professional"
                        | "friendly"
                        | "persuasive"
                        | "premium_agency"
                    )
                  }
                  className={`p-3 rounded-lg border-2 transition-all font-medium ${
                    selectedTone === tone.value
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {tone.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reply Type Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Reply Type
            </label>
            <div className="space-y-2">
              {replyTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setReplyType(type.value)}
                  className={`w-full p-3 rounded-lg border-2 transition-all text-left font-medium ${
                    replyType === type.value
                      ? "border-blue-600 bg-blue-50 text-blue-600"
                      : "border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          <Button onClick={handleGenerate} isLoading={isLoading} fullWidth>
            <Sparkles className="w-4 h-4 mr-2" />
            Generate Reply
          </Button>
        </Card>

        {/* Template Info */}
        <Card className="p-6 h-fit bg-gradient-to-br from-purple-50 to-pink-50">
          <h3 className="font-bold text-gray-900 mb-4">How It Works 🚀</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>• Select your desired tone</li>
            <li>• Choose the situation type</li>
            <li>• AI generates personalized reply</li>
            <li>• Edit and customize as needed</li>
            <li>• Send directly to client</li>
          </ul>

          <div className="mt-6 p-3 bg-white rounded-lg border border-purple-200">
            <p className="text-xs text-gray-600">
              💡 Save your best replies as templates for future use
            </p>
          </div>
        </Card>
      </div>

      {/* Generated Reply */}
      {generatedReply && (
        <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              ✅ Your Smart Reply
            </h2>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>

          <textarea
            value={generatedReply}
            onChange={(e) => setGeneratedReply(e.target.value)}
            className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-medium text-gray-700"
          />

          <div className="mt-4 flex gap-3">
            <Button className="flex-1">Send to Client</Button>
            <Button variant="secondary" className="flex-1">
              Save as Template
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};
