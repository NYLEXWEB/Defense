import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Camera,
  CheckCircle2,
  Phone,
  ArrowRight,
  Smartphone,
  HardDrive,
  MapPin,
  HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  ServiceJsonLd,
  FAQJsonLd,
} from "@/components/seo/JsonLd";
import { FAQItem } from "@/data/faq";

export const metadata: Metadata = constructMetadata({
  title: "Best CCTV Installation in Kollam | CCTV Camera Dealers & Service - Defense Security",
  description:
    "Looking for top-rated CCTV installation in Kollam? Defense Security Systems provides professional IP, HD & wireless WiFi surveillance camera setups, DVR/NVR storage, and fast on-site service across Kollam, Kerala.",
  canonicalPath: "/cctv-installation-kollam",
  keywords: [
    "CCTV installation in Kollam",
    "Best CCTV installation in Kollam",
    "CCTV camera installation in Kollam",
    "Best CCTV installation company in Kollam",
    "CCTV camera dealers in Kollam",
    "CCTV service in Kollam",
    "CCTV cameras in Kollam",
    "Security systems in Kollam",
    "Security system company in Kollam",
    "Home security systems in Kollam",
    "Commercial CCTV installation in Kollam",
    "IP camera installation in Kollam",
    "CCTV installation near me",
    "CCTV service near me",
    "Hikvision CCTV installation Kollam",
    "Dahua security camera dealer Kollam",
    "CP PLUS CCTV camera installation Kerala",
    "WiFi smart camera home security Kollam",
    "CCTV repair and AMC service Kollam",
    "Defense Security Systems Thevally Kollam",
  ],
});

const cctvPageFaqs: FAQItem[] = [
  {
    id: "why-choose-defense-kollam",
    question: "Why is Defense Security Systems rated among the best CCTV installation providers in Kollam?",
    answer:
      "Since 2016, Defense Security Systems has delivered reliable, high-definition electronic surveillance across Kollam and Kerala. Our certified technicians provide free on-site site surveys, neat conduit cabling, genuine warranty-backed equipment from Hikvision, Dahua, and CP PLUS, seamless mobile app live streaming setup, and dependable 24/7 after-sales technical service.",
    category: "cctv",
  },
  {
    id: "installation-cost-breakdown",
    question: "What is the cost of installing CCTV cameras in Kollam?",
    answer:
      "The total CCTV camera installation cost depends on your building layout, number of cameras (e.g. 4-channel, 8-channel, 16-channel), camera type (2MP HD, 4MP/8MP 4K IP, or wireless WiFi), storage drive size (1TB to 4TB surveillance-grade HDD), and required cabling distance. We offer transparent, competitive packages with zero hidden costs and provide free initial site surveys.",
    category: "pricing",
  },
  {
    id: "ip-vs-hd-cameras",
    question: "What is the difference between IP cameras and HD analog cameras for homes in Kollam?",
    answer:
      "HD analog cameras transmit video over coaxial cables to a DVR and offer cost-effective, dependable 1080p surveillance. IP (Internet Protocol) cameras connect over Cat6 network cables with PoE (Power over Ethernet), delivering superior 4K resolution, AI motion detection (filtering out pets and rain), wider dynamic range, and digital zoom capabilities.",
    category: "cctv",
  },
  {
    id: "mobile-remote-viewing-setup",
    question: "Can I monitor my Kollam property CCTV cameras live on my phone while travelling?",
    answer:
      "Yes. Every CCTV surveillance setup configured by Defense Security Systems includes secure cloud mobile connectivity. You can view live camera feeds, playback recorded footage, receive real-time push alerts, and take snapshots directly from your Android or iPhone device anywhere in the world.",
    category: "services",
  },
  {
    id: "cctv-repair-and-amc",
    question: "Do you repair existing CCTV systems and provide Annual Maintenance Contracts (AMC) in Kollam?",
    answer:
      "Yes. We service both new and existing CCTV installations regardless of the original installer. Our technicians troubleshoot video loss, replace faulty power supplies, fix damaged cabling, replace hard drives, update NVR/DVR firmware, and provide structured AMCs for commercial offices, schools, and apartment complexes.",
    category: "support",
  },
  {
    id: "kollam-service-coverage",
    question: "Which areas in Kollam district do you cover for CCTV installation?",
    answer:
      "Our mobile installation team covers all areas across Kollam district including Thevally, Kadappakada, Chinnakkada, Karunagappally, Kottarakkara, Paravur, Kundara, Chathannoor, Punalur, Anchal, Pathanapuram, Ashramam, Kavanad, Mayyanad, and neighboring regions in Kerala.",
    category: "services",
  },
];

const serviceLocalities = [
  "Thevally",
  "Kadappakada",
  "Chinnakkada",
  "Karunagappally",
  "Kottarakkara",
  "Paravur",
  "Kundara",
  "Chathannoor",
  "Punalur",
  "Anchal",
  "Pathanapuram",
  "Ashramam",
  "Kavanad",
  "Mayyanad",
  "Eravipuram",
  "Kilikollur",
  "Tangasseri",
];

export default function CctvInstallationKollamPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "CCTV Installation in Kollam",
            url: "/cctv-installation-kollam",
          },
        ]}
      />
      <ServiceJsonLd
        name="CCTV Camera Installation in Kollam"
        description="Comprehensive residential and commercial CCTV camera installation, HD & IP surveillance setups, DVR/NVR configuration, and maintenance in Kollam, Kerala."
        url={`${siteConfig.siteUrl}/cctv-installation-kollam`}
        serviceType="CCTV Camera Installation & Electronic Security"
        areaServed="Kollam, Kerala"
      />
      <FAQJsonLd items={cctvPageFaqs} />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>Kollam&apos;s Trusted Security Specialist Since 2016</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                CCTV Installation in Kollam, Kerala
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#555c59] leading-relaxed">
                Looking for the <strong>best CCTV installation company in Kollam</strong>? Defense Security Systems delivers certified high-definition IP camera setups, smart wireless WiFi surveillance, DVR/NVR network recording, and 24/7 technical support for homes, retail stores, and commercial premises across Kollam.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Hikvision &amp; Dahua</span>
                </div>
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Clean Conduit Wiring</span>
                </div>
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Free Site Inspection</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <a
                  href={`tel:${siteConfig.phones[0].raw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shadow-md active:scale-95 shine-btn"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteConfig.phones[0].display}</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#06221a] text-white hover:bg-neutral-800 transition-all shadow-sm active:scale-95"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="w-4 h-4 text-[#00C689]" />
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#00C689]/30 shadow-2xl bg-[#06221a] aspect-4/3 sm:aspect-square">
                <Image
                  src="/images/services/cctv-installation.jpg"
                  alt="Professional CCTV camera technician installing security surveillance camera system in Kollam Kerala"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-white">
                  <p className="text-xs font-mono text-[#00C689] uppercase tracking-wider">
                    Defense Security Systems • Thevally, Kollam
                  </p>
                  <p className="text-sm font-bold mt-1">
                    Certified Installation &amp; Smart Mobile Surveillance Setup
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: TYPES OF CCTV SYSTEMS WE INSTALL */}
        <section className="bg-[#F8FAF9] py-16 md:py-24 border-y border-neutral-200/70 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-block bg-[#00C689] px-6 py-2 sm:px-7 sm:py-2.5 mb-4 shadow-sm">
                <span className="text-white font-extrabold uppercase tracking-wider text-sm sm:text-base block">
                  SURVEILLANCE SOLUTIONS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight">
                CCTV Camera Systems We Supply &amp; Install in Kollam
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#555c59]">
                From compact residential security cameras to advanced industrial IP surveillance networks, we offer tailored configurations to suit your security requirements and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: IP Network Cameras */}
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00C689]/15 flex items-center justify-center text-[#008D62]">
                    <Camera className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#222524]">
                    Ultra HD IP &amp; PoE Cameras (4K / 8MP)
                  </h3>
                  <p className="text-sm text-[#555c59] leading-relaxed">
                    High-performance digital network cameras powered over Ethernet (PoE). Featuring AI motion tracking, vehicle/person distinction, color night vision, and license plate recognition.
                  </p>
                  <ul className="space-y-2 text-xs font-semibold text-[#333836] pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                      <span>4K &amp; 8MP Ultra High Definition Optics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                      <span>Full-Color Night Vision &amp; IR Illuminators</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                      <span>PoE Cat6 Single Cable Cabling</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-neutral-100 mt-6">
                  <Link
                    href="/cctv-camera"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008D62] group-hover:text-[#00C689] transition-colors"
                  >
                    <span>Learn more about IP Cameras</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 2: Wireless Smart WiFi Cameras */}
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00C689]/15 flex items-center justify-center text-[#008D62]">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#222524]">
                    Wireless Smart WiFi Security Cameras
                  </h3>
                  <p className="text-sm text-[#555c59] leading-relaxed">
                    Ideal for apartments, boutique shops, and residences in Kollam. Features 360° pan-and-tilt rotation, two-way audio communication, motion tracking alerts, and cloud backup.
                  </p>
                  <ul className="space-y-2 text-xs font-semibold text-[#333836] pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                      <span>360° Pan &amp; Tilt Panoramic Coverage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                      <span>Two-Way Audio Intercom (Speak &amp; Listen)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                      <span>MicroSD &amp; Cloud Secure Storage</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-neutral-100 mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008D62] group-hover:text-[#00C689] transition-colors"
                  >
                    <span>Get WiFi Camera Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 3: HD Analog & DVR Systems */}
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00C689]/15 flex items-center justify-center text-[#008D62]">
                    <HardDrive className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#222524]">
                    HD Turbo Analog &amp; DVR Systems
                  </h3>
                  <p className="text-sm text-[#555c59] leading-relaxed">
                    Budget-friendly, ultra-reliable wired security camera packages. Perfect for continuous recording with long storage retention periods for homes and retail stores.
                  </p>
                  <ul className="space-y-2 text-xs font-semibold text-[#333836] pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                      <span>2MP to 5MP Crisp HD Video Output</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                      <span>Robust Coaxial &amp; 3+1 Shielded Cabling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                      <span>Surveillance-Grade Hard Disk Recording</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-neutral-100 mt-6">
                  <Link
                    href="/dvr-nvr"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008D62] group-hover:text-[#00C689] transition-colors"
                  >
                    <span>Explore DVR &amp; NVR Systems</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: STEP-BY-STEP INSTALLATION PROCESS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block bg-[#00C689] px-6 py-2 sm:px-7 sm:py-2.5 mb-4 shadow-sm">
              <span className="text-white font-extrabold uppercase tracking-wider text-sm sm:text-base block">
                ENGINEERED QUALITY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight">
              Our Professional CCTV Installation Process
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#555c59]">
              Every installation carried out by Defense Security Systems follows a strict quality standard to guarantee maximum camera coverage and long-term durability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#00C689] bg-[#00C689]/10 px-3 py-1 rounded-full inline-block">
                STEP 01
              </span>
              <h3 className="text-lg font-bold text-[#222524]">
                Free On-Site Inspection &amp; Vulnerability Survey
              </h3>
              <p className="text-sm text-[#555c59] leading-relaxed">
                Our senior technician inspects your property in Kollam, identifies blind spots, analyzes light conditions, entry points, and designs optimal camera angles.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#00C689] bg-[#00C689]/10 px-3 py-1 rounded-full inline-block">
                STEP 02
              </span>
              <h3 className="text-lg font-bold text-[#222524]">
                System Engineering &amp; Equipment Selection
              </h3>
              <p className="text-sm text-[#555c59] leading-relaxed">
                We select the right lenses (wide-angle vs telephoto), night-vision illuminators, and calculate exact hard disk storage requirements based on your desired retention days.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#00C689] bg-[#00C689]/10 px-3 py-1 rounded-full inline-block">
                STEP 03
              </span>
              <h3 className="text-lg font-bold text-[#222524]">
                Clean Conduit Cabling &amp; Weatherproof Mounting
              </h3>
              <p className="text-sm text-[#555c59] leading-relaxed">
                Wiring is routed through heavy-duty PVC conduits or concealed tracks. Cameras are mounted using IP66/IP67 weatherproof junction boxes to protect against rain and dust.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#00C689] bg-[#00C689]/10 px-3 py-1 rounded-full inline-block">
                STEP 04
              </span>
              <h3 className="text-lg font-bold text-[#222524]">
                DVR / NVR Configuration &amp; Storage Setup
              </h3>
              <p className="text-sm text-[#555c59] leading-relaxed">
                We set up surveillance-grade hard drives with H.265+ smart video encoding, configure continuous or motion-triggered recording schedules, and optimize bitrate.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#00C689] bg-[#00C689]/10 px-3 py-1 rounded-full inline-block">
                STEP 05
              </span>
              <h3 className="text-lg font-bold text-[#222524]">
                Secure Mobile App Configuration &amp; Live Stream
              </h3>
              <p className="text-sm text-[#555c59] leading-relaxed">
                We connect the system to your broadband router, configure encrypted P2P cloud accounts, and test live viewing on your smartphones, tablets, and laptops.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
              <span className="text-xs font-mono font-bold text-[#00C689] bg-[#00C689]/10 px-3 py-1 rounded-full inline-block">
                STEP 06
              </span>
              <h3 className="text-lg font-bold text-[#222524]">
                Client Walkthrough &amp; Ongoing After-Sales Support
              </h3>
              <p className="text-sm text-[#555c59] leading-relaxed">
                We provide a full demonstration on footage playback, event search, and mobile notifications, backed by our prompt local technical team in Thevally, Kollam.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: RESIDENTIAL VS COMMERCIAL CCTV */}
        <section className="bg-[#06221a] py-16 md:py-24 text-white mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-[#00C689] px-5 py-2 rounded-sm text-xs font-extrabold uppercase tracking-wider text-[#06221a]">
                  SPECIALIZED APPLICATION
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Residential &amp; Commercial CCTV Solutions in Kollam
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  Different premises have unique security challenges. Defense Security Systems provides tailored camera architectures for every environment:
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <h3 className="text-lg font-bold text-[#00C689]">
                      🏠 Residential Home &amp; Villa Security
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300">
                      Protect your family, compound gates, driveways, and backyards. Integrated with video door phones, smart mobile alerts, and discrete indoor cameras for baby and elder monitoring.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <h3 className="text-lg font-bold text-[#00C689]">
                      🏢 Retail Shops, Offices &amp; Showrooms
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300">
                      High-resolution cameras over billing counters, inventory storerooms, customer entrances, and staff desks to prevent pilferage and resolve customer disputes.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <h3 className="text-lg font-bold text-[#00C689]">
                      🏫 Schools, Colleges &amp; Hospitals
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300">
                      Multi-channel network surveillance across corridors, campus gates, parking facilities, and school buses with centralized monitoring stations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-white/10 border border-[#00C689]/30 space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    Need CCTV Repair, Maintenance or AMC in Kollam?
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    Experiencing black screens, camera offline errors, DVR beeping noises, hard drive recording failure, or damaged cables? Our expert repair technicians in Thevally, Kollam provide swift on-site troubleshooting.
                  </p>
                  <div className="space-y-2.5 text-xs text-neutral-200">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                      <span>Hard drive diagnostic &amp; recording recovery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                      <span>Power supply (SMPS) &amp; DC pin replacement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                      <span>Camera realignment, lens cleaning &amp; refocusing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                      <span>Router re-configuration for smartphone live view</span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#00C689] text-[#06221a] hover:bg-white transition-all shadow-md"
                  >
                    <span>Book Repair / Maintenance</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: LOCAL COVERAGE IN KOLLAM */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="bg-[#F8FAF9] p-8 sm:p-12 rounded-3xl border border-neutral-200/80">
            <div className="max-w-3xl mb-8">
              <div className="flex items-center gap-2 text-[#008D62] text-xs font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-4 h-4 text-[#00C689]" />
                <span>Local Service Areas</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222524] tracking-tight">
                CCTV Camera Installation Service Across Kollam District
              </h2>
              <p className="mt-3 text-sm text-[#555c59] leading-relaxed">
                Defense Security Systems provides fast on-site survey and installation services throughout Kollam and surrounding regions in Kerala:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
              {serviceLocalities.map((loc) => (
                <div
                  key={loc}
                  className="bg-white p-3 rounded-xl border border-neutral-200/70 text-center text-xs font-bold text-[#222524] shadow-2xs hover:border-[#00C689] transition-colors"
                >
                  📍 {loc}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#00C689] px-6 py-2 mb-4 shadow-sm">
              <span className="text-white font-extrabold uppercase tracking-wider text-sm block">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight">
              CCTV Camera Installation in Kollam - FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {cctvPageFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200/80 shadow-xs space-y-2.5"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#222524] flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#00C689] shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed pl-7.5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CONVERSION CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#06221a] p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#00C689]/30">
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Ready for the Best CCTV Installation in Kollam?
              </h3>
              <p className="text-sm text-neutral-300 max-w-xl">
                Contact Defense Security Systems in Thevally, Kollam today for a free on-site survey and customized security estimate.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`tel:${siteConfig.phones[0].raw}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-white text-[#06221a] hover:bg-neutral-100 transition-all shadow-md"
              >
                <span>Book Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
