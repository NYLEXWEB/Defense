export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "cctv-installation",
    number: "01",
    title: "CCTV Installation",
    description: "Professional installation of CCTV systems",
    image: "/images/services/cctv-installation.jpg",
    iconName: "Camera",
  },
  {
    id: "system-design-and-integration",
    number: "02",
    title: "System Design and Integration",
    description: "Customized security solutions for your specific needs",
    image: "/images/services/system-design.jpg",
    iconName: "Settings",
  },
  {
    id: "solar-system-installation",
    number: "03",
    title: "Solar System Installation",
    description: "Complete solar panel fitting, grid connections, and solar energy system maintenance for homes and commercial facilities.",
    image: "/images/sectors/solar.jpg",
    iconName: "Sun",
  },
  {
    id: "maintenance-and-repair",
    number: "04",
    title: "Maintenance and Repair",
    description: "Regular maintenance and repair services for your CCTV and security systems",
    image: "/images/services/maintenance-repair.jpg",
    iconName: "Wrench",
  },
  {
    id: "monitoring-and-response",
    number: "05",
    title: "Monitoring and Response",
    description: "24/7 monitoring and response services for your security system",
    image: "/images/services/monitoring-response.jpg",
    iconName: "Monitor",
  },
];

