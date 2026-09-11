export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  description: string;
  deliverables: string[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "cctv-installation",
    number: "01",
    title: "CCTV Installation",
    shortDesc: "Professional installation of CCTV systems",
    description:
      "Professional installation of CCTV systems executed to the highest engineering standards. Our certified technicians plan precision camera placement, execute clean concealed cabling, and configure viewing stations for immediate, flawless operation.",
    deliverables: [
      "Site assessment & field-of-view optimization",
      "Concealed, weather-protected cable routing",
      "Mounting of dome, bullet, and PTZ cameras",
      "Network recorder configuration & mobile app setup",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "system-design-and-integration",
    number: "02",
    title: "System Design and Integration",
    shortDesc: "Customized security solutions for your specific needs",
    description:
      "Customized security solutions for your specific needs. We integrate CCTV, biometric access control, smart sensors, and network infrastructure into a unified, seamless command matrix tailored precisely to your property architecture.",
    deliverables: [
      "Architectural blueprint security layout design",
      "Integration of video surveillance with perimeter alarms",
      "Centralized server rack and network infrastructure",
      "Scalable architecture for future facility expansion",
    ],
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "maintenance-and-repair",
    number: "03",
    title: "Maintenance and Repair",
    shortDesc: "Regular maintenance and repair services for your CCTV system",
    description:
      "Regular maintenance and repair services for your CCTV system to ensure 100% operational uptime. From optical lens calibration and power supply testing to firmware security patching and storage health audits.",
    deliverables: [
      "Scheduled preventive health inspections",
      "Optical lens cleaning, alignment & focus calibration",
      "Power backup and storage integrity diagnostics",
      "Rapid emergency on-site technician response",
    ],
    image:
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "monitoring-and-response",
    number: "04",
    title: "Monitoring and Response",
    shortDesc: "24/7 monitoring and response services for your security system",
    description:
      "24/7 monitoring and response services for your security system. Our vigilant control protocols ensure instant detection of unusual activity, perimeter breaches, and rapid coordination with emergency contacts.",
    deliverables: [
      "Around-the-clock live feed supervision",
      "Instant smart trigger & motion anomaly verification",
      "Priority notification to property owners",
      "Comprehensive incident audit logs and reports",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
];
