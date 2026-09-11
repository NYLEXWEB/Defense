export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

export const productsData: ProductItem[] = [
  {
    id: "wifi-camera",
    name: "WIFI CAMERA",
    description: "WiFi cameras provide wireless security",
    image: "/images/products/wifi-camera.jpg",
    whatsappMessage: "Hi Defense Security, I am interested in WiFi Camera solutions. Please share pricing and details.",
  },
  {
    id: "cctv-ip-hd",
    name: "CCTV Cameras IP & HD",
    description: "Indoor, outdoor, dome, bullet, and PTZ cameras",
    image: "/images/products/cctv-ip-hd.jpg",
    whatsappMessage: "Hi Defense Security, I am interested in CCTV Cameras IP & HD systems. Please share pricing and details.",
  },
  {
    id: "dvr-nvr",
    name: "DVR and NVR",
    description: "Digital video recorders\nNetwork video recorders",
    image: "/images/products/dvr-nvr.jpg",
    whatsappMessage: "Hi Defense Security, I am interested in DVR and NVR recording units. Please share pricing and details.",
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

