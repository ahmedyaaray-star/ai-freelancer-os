import { Plan, PlanType } from "@/types";

export const PLANS: Record<PlanType, Plan> = {
  free: {
    id: "free",
    name: "Starter",
    description: "Perfect for new freelancers",
    price: 0,
    billingCycle: "monthly",
    features: [
      "Basic proposal generator",
      "Up to 10 clients",
      "Task management",
      "Basic reports",
      "Email support",
    ],
    limits: {
      proposalsPerMonth: 50,
      clientLimit: 10,
      projectLimit: 5,
      automationRules: 2,
      teamMembers: 1,
    },
  },
  pro: {
    id: "pro",
    name: "Pro",
    description: "For established freelancers",
    price: 29,
    billingCycle: "monthly",
    features: [
      "Advanced AI proposal writer",
      "Unlimited clients",
      "Advanced analytics",
      "Email automation",
      "Priority support",
      "Custom templates",
      "CRM features",
      "API access",
    ],
    limits: {
      proposalsPerMonth: 500,
      clientLimit: 100,
      projectLimit: 50,
      automationRules: 20,
      teamMembers: 1,
    },
    popular: true,
  },
  agency: {
    id: "agency",
    name: "Agency",
    description: "For growing agencies",
    price: 99,
    billingCycle: "monthly",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "White-label options",
      "Advanced workflows",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced reporting",
      "24/7 priority support",
    ],
    limits: {
      proposalsPerMonth: -1,
      clientLimit: -1,
      projectLimit: -1,
      automationRules: -1,
      teamMembers: 10,
    },
  },
};

export const PROPOSAL_PLATFORMS = [
  "upwork",
  "fiverr",
  "linkedin",
  "email",
  "direct",
] as const;

export const TONE_STYLES = [
  "professional",
  "friendly",
  "persuasive",
  "premium_agency",
] as const;

export const PROJECT_STATUSES = [
  "planning",
  "in_progress",
  "review",
  "completed",
  "cancelled",
] as const;

export const TASK_STATUSES = [
  "todo",
  "in_progress",
  "in_review",
  "done",
] as const;

export const PRIORITY_LEVELS = [
  "low",
  "medium",
  "high",
  "urgent",
] as const;

export const FOLLOW_UP_TYPES = [
  "inquiry",
  "revision",
  "negotiation",
  "scheduled_follow_up",
  "payment_reminder",
] as const;

export const REPORT_TYPES = [
  "weekly",
  "monthly",
  "project_delivery",
  "performance",
  "revenue",
] as const;

export const PAYMENT_STATUSES = [
  "paid",
  "pending",
  "overdue",
] as const;

export const FEATURES = [
  {
    title: "AI Proposal Writer",
    description: "Generate high-converting proposals in minutes",
    icon: "Lightbulb",
  },
  {
    title: "Client Reply Assistant",
    description: "Smart AI-generated responses for any situation",
    icon: "MessageCircle",
  },
  {
    title: "Automation Engine",
    description: "Create powerful workflows without coding",
    icon: "Zap",
  },
  {
    title: "Project Dashboard",
    description: "Kanban boards and visual project management",
    icon: "Trello",
  },
  {
    title: "CRM System",
    description: "Manage all client relationships in one place",
    icon: "Users",
  },
  {
    title: "Advanced Reports",
    description: "Beautiful analytics and performance insights",
    icon: "BarChart3",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    title: "Freelance Product Designer",
    content:
      "I've tripled my proposal conversion rate since using AI Freelancer OS. The AI proposals feel personal while saving me hours every week.",
    avatar: "SC",
  },
  {
    name: "Marco Rodriguez",
    title: "Full Stack Developer",
    content:
      "The automation features have been game-changing. I now spend less time on admin work and more time coding. Best investment in my freelance business.",
    avatar: "MR",
  },
  {
    name: "Priya Patel",
    title: "Freelance Writer & Content Creator",
    content:
      "From managing clients to tracking deadlines, everything is in one place. The follow-up automation alone has helped me close 40% more deals.",
    avatar: "PP",
  },
  {
    name: "James Wilson",
    title: "Digital Marketing Consultant",
    content:
      "The reports are incredibly insightful. I can now show clients ROI and growth metrics effortlessly. Simply incredible platform.",
    avatar: "JW",
  },
];

export const FAQ = [
  {
    question: "How does the AI proposal writer work?",
    answer:
      "Our AI analyzes your project details, client requirements, and expertise to generate a compelling, personalized proposal that matches the client's needs and showcases your unique value.",
  },
  {
    question: "Can I use this for multiple freelance platforms?",
    answer:
      "Absolutely! You can manage proposals for Upwork, Fiverr, LinkedIn, email outreach, and direct client work all from one dashboard.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use enterprise-grade encryption, GDPR compliance, and regular security audits to protect your data. Your information is never shared with third parties.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and wire transfers for annual plans. Enterprise customers can contact our sales team.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes! You can cancel your subscription anytime with no penalties. Your data remains accessible for 30 days after cancellation.",
  },
];

export const AUTOMATION_TEMPLATES = [
  {
    name: "Proposal Follow-up",
    description: "Auto-create followup 3 days after proposal sent",
    trigger: "proposal_sent",
    delay: 3,
  },
  {
    name: "Project Start Tasks",
    description: "Automatically create tasks when project starts",
    trigger: "project_starts",
    delay: 0,
  },
  {
    name: "Payment Reminder",
    description: "Send reminder when payment is 7 days overdue",
    trigger: "payment_overdue",
    delay: 7,
  },
  {
    name: "Deadline Alert",
    description: "Get alert 3 days before project deadline",
    trigger: "deadline_approaching",
    delay: 3,
  },
];
