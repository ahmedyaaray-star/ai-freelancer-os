import { Task, Project, FollowUp } from "@/types";

// Format date to readable string
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
};

// Format date with time
export const formatDateTime = (date: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};

// Format currency
export const formatCurrency = (amount: number, currency = "USD"): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

// Calculate days remaining
export const daysRemaining = (date: Date): number => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);
  const timeDiff = targetDate.getTime() - today.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

// Get status badge color
export const getStatusColor = (
  status: string
): "red" | "yellow" | "green" | "blue" | "gray" => {
  switch (status) {
    case "completed":
    case "done":
    case "paid":
    case "active":
      return "green";
    case "in_progress":
    case "pending":
      return "yellow";
    case "cancelled":
    case "rejected":
    case "overdue":
      return "red";
    case "draft":
      return "gray";
    default:
      return "blue";
  }
};

// Get priority color
export const getPriorityColor = (
  priority: string
): "red" | "orange" | "yellow" | "green" => {
  switch (priority) {
    case "urgent":
      return "red";
    case "high":
      return "orange";
    case "medium":
      return "yellow";
    case "low":
      return "green";
    default:
      return "yellow";
  }
};

// Truncate text
export const truncate = (str: string, length: number): string => {
  return str.length > length ? str.substring(0, length) + "..." : str;
};

// Generate unique ID
export const generateId = (): string => {
  return Math.random().toString(36).substr(2, 9);
};

// Get initials from name
export const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

// Calculate project progress
export const calculateProjectProgress = (project: Project): number => {
  if (project.deliverables.length === 0) return 0;
  const completed = project.deliverables.filter(
    (d) => d.status === "approved"
  ).length;
  return Math.round((completed / project.deliverables.length) * 100);
};

// Calculate task progress
export const calculateTaskProgress = (tasks: Task[]): number => {
  if (tasks.length === 0) return 0;
  const completed = tasks.filter((t) => t.status === "done").length;
  return Math.round((completed / tasks.length) * 100);
};

// Get upcoming deadlines
export const getUpcomingDeadlines = (
  projects: Project[],
  days: number = 7
): Project[] => {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + days);

  return projects.filter(
    (p) =>
      new Date(p.deadline) >= today &&
      new Date(p.deadline) <= futureDate &&
      p.status !== "completed"
  );
};

// Get overdue items
export const getOverdueItems = (projects: Project[]): Project[] => {
  const today = new Date();
  return projects.filter(
    (p) =>
      new Date(p.deadline) < today &&
      (p.status === "in_progress" || p.status === "planning")
  );
};

// Calculate revenue metrics
export const calculateRevenueMetrics = (projects: Project[]) => {
  const totalRevenue = projects.reduce((sum, p) => sum + p.budget, 0);
  const totalPaid = projects.reduce((sum, p) => sum + p.paidAmount, 0);
  const pendingRevenue = totalRevenue - totalPaid;
  const averageProjectValue =
    projects.length > 0 ? totalRevenue / projects.length : 0;

  return {
    totalRevenue,
    totalPaid,
    pendingRevenue,
    averageProjectValue,
    completedProjects: projects.filter((p) => p.status === "completed").length,
  };
};

// Format relative time
export const formatRelativeTime = (date: Date): string => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);

  if (seconds < 60) return "Just now";
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
  if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;

  return formatDate(date);
};

// Validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Generate slug from title
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]/g, "");
};

// Parse comma-separated values
export const parseCSV = (csv: string): string[] => {
  return csv.split(",").map((item) => item.trim());
};

// Batch array items
export const batch = <T>(array: T[], size: number): T[][] => {
  const batches: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    batches.push(array.slice(i, i + size));
  }
  return batches;
};

// Debounce function
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
