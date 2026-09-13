export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "cctv" | "services" | "pricing" | "support";
}

export const homeFaqs: FAQItem[] = [
  {
    id: "best-cctv-company-kollam",
    question: "Which is the best CCTV camera installation company in Kollam?",
    answer:
      "Defense Security Systems, established in 2016 and located in Thevally, Kollam, is widely recognized as one of the leading CCTV installation and surveillance providers. We specialize in HD IP cameras, wireless smart WiFi systems, DVR/NVR setups, video door phones, and automatic remote gates with expert on-site technical support across Kollam and Kerala.",
    category: "cctv",
  },
  {
    id: "cctv-brands-installed",
    question: "What brands of CCTV security cameras do you install?",
    answer:
      "We supply and install genuine, warranty-backed surveillance equipment from top global manufacturers including Hikvision, Dahua Technology, CP PLUS, Ezviz, Imou, UNV (Uniview), and Matrix, ensuring crystal-clear night vision, AI motion detection, and reliable remote mobile app viewing.",
    category: "cctv",
  },
  {
    id: "cctv-installation-cost-kollam",
    question: "How much does CCTV camera installation cost in Kollam, Kerala?",
    answer:
      "CCTV installation costs depend on the number of cameras (e.g., 2, 4, 8, or 16-channel setups), resolution (2MP, 4MP, 4K/8MP IP cameras), storage capacity (1TB to 4TB surveillance hard drives), and wiring distance. Defense Security Systems provides free on-site inspections and transparent, customized estimates with zero hidden charges.",
    category: "pricing",
  },
  {
    id: "remote-viewing-mobile",
    question: "Can I view my CCTV cameras live on my mobile phone when away from home?",
    answer:
      "Yes! All our modern IP and HD CCTV setups include secure cloud remote access configuration. You can view live video feeds, playback recorded footage, receive instant motion alerts, and capture snapshots directly on your Android or iOS smartphone anywhere in the world.",
    category: "services",
  },
  {
    id: "cctv-maintenance-repair",
    question: "Do you provide CCTV repair, maintenance, and AMC services in Kollam?",
    answer:
      "Yes, we offer comprehensive CCTV repair and Annual Maintenance Contracts (AMC) for homes, offices, schools, and commercial facilities. Our services include camera realignment, lens cleaning, DVR/NVR firmware updates, hard drive replacements, cable troubleshooting, and power supply repairs.",
    category: "support",
  },
  {
    id: "service-areas-kerala",
    question: "Which areas in Kollam and Kerala does Defense Security Systems cover?",
    answer:
      "We actively provide on-site security installation and maintenance across all areas of Kollam district including Thevally, Kadappakada, Chinnakkada, Karunagappally, Kottarakkara, Paravur, Kundara, Chathannoor, Punalur, Anchal, as well as neighboring regions across Kerala.",
    category: "services",
  },
];
