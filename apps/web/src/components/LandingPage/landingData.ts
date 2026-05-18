export const navItems = ["Challenges", "Pricing"];

export const stats = [
  { label: "Engineers Trained", value: "10k+" },
  { label: "System Scenarios", value: "500+" },
  { label: "Course Uptime", value: "99.9%" },
];

export type ChallengeDifficulty = "Easy" | "Medium" | "Hard";
export type ChallengeVisual = "warp" | "atlas" | "beam";

export type Challenge = {
  title: string;
  difficulty: ChallengeDifficulty;
  description: string;
  time: string;
  visual: ChallengeVisual;
};

export const challenges: Challenge[] = [
  {
    title: "The Read Scalability Challenge",
    difficulty: "Easy",
    description:
      "Design a system capable of handling 1,000 req/sec with high availability requirements.",
    time: "30 min",
    visual: "warp",
  },
  {
    title: "Global Chat System",
    difficulty: "Medium",
    description:
      "Optimize for low latency message delivery across multiple geographical regions.",
    time: "45 min",
    visual: "atlas",
  },
  {
    title: "E-commerce Flash Sale",
    difficulty: "Hard",
    description:
      "Prevent database bottlenecks during a 100x traffic spike event. Ensure consistency.",
    time: "60 min",
    visual: "beam",
  },
];
