export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "CCTV" | "Gate Automation" | "Networking" | "Security Setup";
  description: string;
}

export const galleryImages: GalleryItem[] = [
  {
    id: "1",
    src: "/Gallery Images/file_000000002bd482079bc63ffaa39809a6.png",
    title: "High-Definition IP CCTV Installation",
    category: "CCTV",
    description: "Professional camera positioning and cable management for commercial premise surveillance.",
  },
  {
    id: "2",
    src: "/Gallery Images/file_00000000382081fa82d35e42abd05811.png",
    title: "Automatic Remote Gate Automation",
    category: "Gate Automation",
    description: "Motorized gate automation setup with remote control and safety sensors.",
  },
  {
    id: "3",
    src: "/Gallery Images/file_0000000044888206959f7d8944f25186.png",
    title: "Commercial Surveillance Control Station",
    category: "CCTV",
    description: "Multi-channel DVR/NVR monitoring center with real-time video feeds.",
  },
  {
    id: "4",
    src: "/Gallery Images/file_0000000096208207a013e5dd1d9152ad.png",
    title: "Outdoor Perimeter Night Vision Setup",
    category: "CCTV",
    description: "Weatherproof infrared cameras for 24/7 night vision perimeter defense.",
  },
  {
    id: "5",
    src: "/Gallery Images/file_000000009718821195e87e56e07ac197.png",
    title: "Structured Network Rack Integration",
    category: "Networking",
    description: "Neat network cabling, switch routing, and fiber integration for seamless connectivity.",
  },
  {
    id: "6",
    src: "/Gallery Images/file_00000000b7808211ab9deace7b0f5baf.png",
    title: "Smart WiFi Camera & App Connectivity",
    category: "CCTV",
    description: "Wireless AI tracking camera synced to mobile devices for instant alerts.",
  },
  {
    id: "7",
    src: "/Gallery Images/file_00000000b90c8211a43c28243c77e33e.png",
    title: "Video Door Phone & Intercom System",
    category: "Security Setup",
    description: "Two-way audio visual door station for controlled visitor entry.",
  },
  {
    id: "8",
    src: "/Gallery Images/file_00000000c8a88211955cfa19066c23d3.png",
    title: "Institutional Campus Security System",
    category: "CCTV",
    description: "Wide-area multi-building camera network for educational campus protection.",
  },
  {
    id: "9",
    src: "/Gallery Images/file_00000000ee4c8211909bc8374ee6ce6e.png",
    title: "Inverter Power Backup & Surge Protection",
    category: "Security Setup",
    description: "Dedicated UPS power backup to keep security cameras running during power cuts.",
  },
  {
    id: "10",
    src: "/Gallery Images/file_00000000f9448211aad437c034cc4b19.png",
    title: "Precision Mounting & Final Testing",
    category: "Security Setup",
    description: "Certified technical testing and calibration of camera view angles.",
  },
];
