export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "CCTV" | "Gate Automation" | "Networking" | "Security Setup";
  description: string;
  alt: string;
}

export const galleryImages: GalleryItem[] = [
  {
    id: "1",
    src: "/images/gallery/cctv-camera-installation-thevally-kollam.png",
    title: "High-Definition IP CCTV Installation",
    category: "CCTV",
    description: "Professional high-definition IP camera positioning, weatherproofing, and conduit cable management for residential and commercial premises in Kollam.",
    alt: "HD IP CCTV camera installation and conduit wiring by Defense Security Systems in Thevally, Kollam, Kerala",
  },
  {
    id: "2",
    src: "/images/gallery/automatic-sliding-remote-gate-kollam.png",
    title: "Automatic Sliding Remote Gate Automation",
    category: "Gate Automation",
    description: "Heavy-duty motorized sliding remote gate automation setup with wireless remote controllers, safety optical sensors, and smartphone integration.",
    alt: "Automatic motorized sliding remote gate system installed in Kollam Kerala by Defense Security",
  },
  {
    id: "3",
    src: "/images/gallery/multi-channel-nvr-surveillance-control-room.png",
    title: "Commercial NVR Surveillance Control Station",
    category: "CCTV",
    description: "Multi-channel DVR and NVR central surveillance monitoring room with real-time HD video playback and remote backup storage.",
    alt: "Commercial multi-screen NVR CCTV surveillance monitoring control room in Kollam",
  },
  {
    id: "4",
    src: "/images/gallery/outdoor-weatherproof-night-vision-cctv-kollam.png",
    title: "Outdoor Weatherproof Color Night Vision Setup",
    category: "CCTV",
    description: "IP67 weatherproof color night vision surveillance cameras providing 24/7 crystal-clear perimeter defense in all Kerala weather conditions.",
    alt: "Outdoor weatherproof color night vision CCTV security camera mounted on building exterior in Kerala",
  },
  {
    id: "5",
    src: "/images/gallery/structured-network-rack-poe-cabling-kerala.png",
    title: "Structured Network Rack & PoE Cabling",
    category: "Networking",
    description: "Organized server rack cabling, gigabit PoE switches, fiber optic patch panels, and enterprise WiFi access points for seamless CCTV networking.",
    alt: "Structured server network rack cabling and gigabit PoE switch installation in Kollam",
  },
  {
    id: "6",
    src: "/images/gallery/wireless-smart-wifi-camera-mobile-viewing.png",
    title: "Smart WiFi Camera & Mobile App Live Viewing",
    category: "CCTV",
    description: "Wireless AI motion tracking smart WiFi camera configured for instant smartphone live view, two-way talk, and mobile alerts anywhere.",
    alt: "Wireless smart WiFi security camera with smartphone mobile app remote live viewing setup",
  },
  {
    id: "7",
    src: "/images/gallery/hd-video-door-phone-intercom-system-kollam.png",
    title: "HD Video Door Phone & Intercom System",
    category: "Security Setup",
    description: "Touchscreen video door phone with wide-angle outdoor camera, electronic door lock release, and two-way audio intercom for modern homes.",
    alt: "HD video door phone outdoor camera station with two-way intercom installed in Kollam Kerala",
  },
  {
    id: "8",
    src: "/images/gallery/campus-institutional-cctv-surveillance-kerala.png",
    title: "Institutional Campus CCTV Security Network",
    category: "CCTV",
    description: "Comprehensive multi-zone camera coverage for educational institutions, colleges, and schools across Kollam with centralized recording.",
    alt: "School and college educational campus CCTV camera security surveillance network in Kollam",
  },
  {
    id: "9",
    src: "/images/gallery/cctv-inverter-ups-power-backup-system.png",
    title: "Inverter UPS Power Backup & Surge Protection",
    category: "Security Setup",
    description: "Pure sine wave inverter and UPS power backup units ensuring uninterrupted 24/7 continuous recording during power outages.",
    alt: "Uninterruptible power supply UPS inverter system for 24/7 continuous CCTV camera recording",
  },
  {
    id: "10",
    src: "/images/gallery/cctv-camera-mounting-technician-service-kollam.png",
    title: "Precision Camera Mounting & Angle Calibration",
    category: "Security Setup",
    description: "Expert technician mounting, focus adjustment, and precision blind-spot elimination for complete property surveillance.",
    alt: "Defense Security certified CCTV technician mounting and testing surveillance camera angles in Kollam",
  },
];
