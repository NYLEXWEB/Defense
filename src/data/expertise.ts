export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  scope: string[];
}

export const expertiseData: ExpertiseItem[] = [
  {
    id: "monitoring-surveillance",
    number: "01",
    title: "24/7 Monitoring & Surveillance",
    description:
      "Continuous, uninterrupted vigilance over critical premises. High-definition live feeds and proactive alert monitoring ensure immediate anomaly detection at any hour.",
    scope: [
      "Real-time video feed supervision",
      "Perimeter intrusion detection",
      "Night vision & low-light coverage",
      "Uninterrupted feed recording and logging",
    ],
  },
  {
    id: "incident-response",
    number: "02",
    title: "Incident Response & Reporting",
    description:
      "Rapid protocols to verify security threats and coordinate corrective measures. Detailed incident reporting logs and evidence packages for authorities or management.",
    scope: [
      "Immediate alert triage and verification",
      "Escalation pathways to on-site personnel",
      "Digital timestamped incident archiving",
      "Comprehensive post-incident audits",
    ],
  },
  {
    id: "cctv-operators",
    number: "03",
    title: "Highly Skilled CCTV Operators",
    description:
      "Experienced technical specialists trained in surveillance observation, rapid device troubleshooting, PTZ tracking, and multi-screen control operations.",
    scope: [
      "Trained in surveillance analysis",
      "Proficient across multi-vendor VMS platforms",
      "Fast troubleshooting and maintenance handling",
      "Dedicated focus on client privacy & security protocols",
    ],
  },
  {
    id: "advanced-technology",
    number: "04",
    title: "Advanced Security Technology",
    description:
      "Leveraging modern AI-driven motion analytics, AcuSense smart filtering, facial recognition, and high-resolution IP optics for maximum situational awareness.",
    scope: [
      "AI-powered person and vehicle classification",
      "False-alarm reduction filters",
      "High-efficiency H.265+ video encoding",
      "Cloud and on-prem hybrid redundancy",
    ],
  },
  {
    id: "access-control",
    number: "05",
    title: "Access Control & Perimeter Security",
    description:
      "Restricting and auditing physical entry points with smart video door stations, biometric terminals, RFID gates, and barrier integrations.",
    scope: [
      "Video door phone verification",
      "Automated boom barriers and sliding gates",
      "Biometric and keycard reader integration",
      "Multi-tier visitor management",
    ],
  },
  {
    id: "risk-assessment",
    number: "06",
    title: "Risk Assessment & Security Consultation",
    description:
      "Thorough site evaluation to identify blind spots, vulnerabilities, and physical security risks, followed by engineered recommendations tailored to budget and scale.",
    scope: [
      "Physical facility vulnerability surveys",
      "Blind-spot analysis and coverage heatmaps",
      "Technology refresh roadmaps",
      "Cost-optimized deployment plans",
    ],
  },
];
