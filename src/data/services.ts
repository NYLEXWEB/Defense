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
    id: "maintenance-and-repair",
    number: "03",
    title: "Maintenance and Repair",
    description: "Regular maintenance and repair services for your CCTV system",
    image: "/images/services/maintenance-repair.jpg",
    iconName: "Wrench",
  },
  {
    id: "monitoring-and-response",
    number: "04",
    title: "Monitoring and Response",
    description: "24/7 monitoring and response services for your security system",
    image: "/images/services/monitoring-response.jpg",
    iconName: "Monitor",
  },
];

