export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
  buttonText?: string;
  buttonLink?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "cctv-installation-",
    number: "01",
    title: "CCTV Installation",
    description: "Professional installation of CCTV systems",
    image: "/images/services/cctv-installation.jpg",
    iconName: "Camera",
    buttonText: "CCTV Installation in Kollam",
    buttonLink: "/cctv-installation-kollam",
  },
  {
    id: "system-design-and-integration",
    number: "02",
    title: "System Design and Integration",
    description: "Customized security solutions for your specific needs",
    image: "/images/services/system-design.jpg",
    iconName: "Settings",
    buttonText: "System Design & Integration",
    buttonLink: "/system-design-and-integration",
  },
  {
    id: "solar-system-installation",
    number: "03",
    title: "Solar System Installation",
    description: "Complete solar panel fitting, grid connections, and solar energy system maintenance for homes and commercial facilities.",
    image: "/images/sectors/solar-panel.jpg",
    iconName: "Sun",
    buttonText: "Solar System Installation",
    buttonLink: "/solar-system-installation",
  },
  {
    id: "maintenance-and-repair",
    number: "04",
    title: "Maintenance and Repair",
    description: "Regular maintenance and repair services for your CCTV and security systems",
    image: "/images/services/maintenance-repair.jpg",
    iconName: "Wrench",
    buttonText: "Maintenance & Repair Services",
    buttonLink: "/maintenance-and-repair",
  },
  {
    id: "monitoring-and-response",
    number: "05",
    title: "Monitoring and Response",
    description: "24/7 monitoring and response services for your security system",
    image: "/images/services/monitoring-response.jpg",
    iconName: "Monitor",
    buttonText: "24/7 Monitoring & Response",
    buttonLink: "/monitoring-and-response",
  },
];

