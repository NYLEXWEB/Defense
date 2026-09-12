export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

export const productsData: ProductItem[] = [
  {
    id: "cctv-surveillance-systems",
    name: "CCTV Cameras, WiFi Cameras & DVR / NVR Systems",
    description: "Indoor & outdoor IP/HD cameras, wireless WiFi smart cameras, and digital DVR/NVR video recorders for complete premises surveillance.",
    image: "/images/products/cctv-ip-hd.png",
    whatsappMessage: "Hi Defense Security, I am interested in CCTV Cameras, WiFi Cameras, and DVR/NVR Surveillance Systems. Please share pricing and details.",
  },
  {
    id: "video-door-phones",
    name: "Video Door Phones",
    description: "Video door phones enhance security with video, voice and audio communication",
    image: "/images/products/video-door-phones.jpg",
    whatsappMessage: "Hi Defense Security, I am interested in Video Door Phone intercom systems. Please share pricing and details.",
  },
  {
    id: "wifi-network",
    name: "Wifi Network",
    description: "WiFi networking enables wireless internet connectivity",
    image: "/images/products/wifi-network.jpg",
    whatsappMessage: "Hi Defense Security, I am interested in WiFi Network solutions. Please share pricing and details.",
  },
  {
    id: "remote-gate",
    name: "Remote Gate",
    description: "A Remote gate to control access from anywhere with just a touch",
    image: "/images/products/remote-gate.jpg",
    whatsappMessage: "Hi Defense Security, I am interested in Motorized Remote Gate automation. Please share pricing and details.",
  },
  {
    id: "inverter-system",
    name: "Inverter System",
    description: "Efficient inverter systems optimize energy usage, reduce consumption, and save costs.",
    image: "/images/products/inverter-system.jpg",
    whatsappMessage: "Hi Defense Security, I am interested in Inverter & Solar Power Backup systems. Please share pricing and details.",
  },
  {
    id: "home-automation",
    name: "Home Automation",
    description: "Home automation enhances convenience, security, and energy efficiency effortlessly.",
    image: "/images/products/home-automation.jpg",
    whatsappMessage: "Hi Defense Security, I am interested in Smart Home Automation solutions. Please share pricing and details.",
  },
];
