export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  category: "cctv" | "access" | "infrastructure" | "automation";
  isFeatured?: boolean;
  image: string;
}

export const productsData: ProductItem[] = [
  {
    id: "wifi-camera",
    name: "WiFi Camera",
    subtitle: "Wireless Security",
    description: "WiFi cameras provide wireless security with rapid deployment and remote smart viewing.",
    features: [
      "Wireless hassle-free connectivity",
      "Real-time mobile streaming",
      "Motion detection alerts",
      "Night vision capability",
    ],
    category: "cctv",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "cctv-ip-hd",
    name: "CCTV Cameras IP & HD",
    subtitle: "High Definition & Network Surveillance",
    description: "Indoor, outdoor, dome, bullet, and PTZ cameras engineered for crystal-clear 24/7 observation.",
    features: [
      "Indoor & outdoor dome architectures",
      "Long-range bullet cameras",
      "Pan-Tilt-Zoom (PTZ) 360° coverage",
      "High-definition optical clarity & AI detection",
    ],
    category: "cctv",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "dvr-nvr",
    name: "DVR and NVR",
    subtitle: "Digital & Network Video Recorders",
    description: "Digital video recorders and network video recorders ensuring continuous, secure multi-channel archiving.",
    features: [
      "Multi-channel synchronized recording",
      "High-capacity storage management",
      "Secure encrypted playback",
      "Remote mobile and desktop access",
    ],
    category: "cctv",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "video-door-phones",
    name: "Video Door Phones",
    subtitle: "Visitor Video & Audio Communication",
    description: "Video door phones enhance security with visitor video and audio communication before granting entry.",
    features: [
      "Two-way high-fidelity audio communication",
      "Crystal-clear color video monitor",
      "Electronic lock integration",
      "Night vision door station camera",
    ],
    category: "access",
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "wifi-network",
    name: "Wifi Network",
    subtitle: "Wireless Internet Connectivity",
    description: "WiFi networking enables reliable wireless internet connectivity across complete estates and facilities.",
    features: [
      "Enterprise mesh coverage",
      "High bandwidth data throughput",
      "Stable connectivity for surveillance streams",
      "Secure guest & internal network partitioning",
    ],
    category: "infrastructure",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "remote-gate",
    name: "Remote Gate",
    subtitle: "Touch Access Control",
    description: "Allowing you to control access from anywhere with just a touch for total perimeter command.",
    features: [
      "Motorized sliding and swing gate automation",
      "Remote handheld & smartphone access",
      "Obstacle detection safety sensors",
      "Rugged weatherproof mechanical drive",
    ],
    category: "access",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "inverter-system",
    name: "Inverter System",
    subtitle: "Continuous Power Backup",
    description: "Efficient inverter systems optimize energy usage, reduce consumption, and save costs while keeping security operational.",
    features: [
      "Uninterrupted surveillance power backup",
      "Intelligent battery health management",
      "Pure sine wave output for sensitive electronics",
      "High energy efficiency and cost optimization",
    ],
    category: "infrastructure",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "home-automation",
    name: "Home Automation",
    subtitle: "Intelligent Living & Energy Efficiency",
    description: "Home automation enhances convenience, security, and energy efficiency effortlessly through unified controls.",
    features: [
      "Unified smart device ecosystem",
      "Automated lighting, climate, and locks",
      "Custom security trigger routines",
      "Effortless smartphone & voice integration",
    ],
    category: "automation",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
  },
];
