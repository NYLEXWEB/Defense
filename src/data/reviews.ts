export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  badge: string;
  timeAgo: string;
  rating: number;
  highlight: string;
  fullReview: string;
}

export const reviewsData: ReviewItem[] = [
  {
    id: "rajesh-k",
    name: "Rajesh K",
    initials: "R",
    avatarBg: "#1A73E8", // Google Blue
    badge: "Local Guide • 14 reviews",
    timeAgo: "2 months ago",
    rating: 5,
    highlight: "Installation occurring the very next day after our initial contact. Wiring was installed flawlessly.",
    fullReview:
      "Excellent service from the start. I am really happy to express my satisfaction with the recent CCTV installation service provided at my home by Defense Security Systems team. The response time was remarkably fast, with installation occurring the very next day after our initial contact. The wiring was installed flawlessly and the connection was executed in a highly professional manner. Highly recommend Mr. Gokul and team!",
  },
  {
    id: "hari-sankar",
    name: "Hari Sankar",
    initials: "H",
    avatarBg: "#E37400", // Google Orange
    badge: "Verified Customer • Kollam",
    timeAgo: "4 months ago",
    rating: 5,
    highlight: "Mr Gokul is well versed in the latest technologies like Hikvision AcuSense with AI capabilities.",
    fullReview:
      "I came across Defense Security when planning to install CCTV at my home. Mr Gokul is very well versed in the latest technologies in the industry, including Hikvision AcuSense IP cameras with AI capabilities. The system was installed and configured within 2 days with flawless structural work. I wholeheartedly recommend them to anyone!",
  },
  {
    id: "rahulkrishnan-nr",
    name: "Rahulkrishnan NR",
    initials: "R",
    avatarBg: "#1E8E3E", // Google Green
    badge: "Local Guide • 8 reviews",
    timeAgo: "6 months ago",
    rating: 5,
    highlight: "Very smooth interaction with Gokul and team. Excellent know-how of technology and helped arrange broadband.",
    fullReview:
      "I recommend this team from personal experience. Very smooth interaction with Gokul and the team from enquiry through execution. Their excellent know-how of technology helped us decide the best-suited option. They even helped arrange broadband on short notice. Truly 5-star experience!",
  },
  {
    id: "anandhu-m",
    name: "Anandhu Mohan",
    initials: "A",
    avatarBg: "#8430CE", // Google Purple
    badge: "Verified Customer • Thevally",
    timeAgo: "1 month ago",
    rating: 5,
    highlight: "Prompt support and neat camera positioning for complete 360 blind-spot coverage.",
    fullReview:
      "Great experience with Defense Security. The team arrived on time, conducted a thorough site survey, and suggested the exact camera placements to eliminate blind spots. Neat cabling, clean finish, and the mobile app setup was seamless. Outstanding service in Kollam!",
  },
];
