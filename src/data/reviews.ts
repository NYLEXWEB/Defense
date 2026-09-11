export interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  role: string;
  rating: number;
  highlight: string;
  fullReview: string[];
}

export const reviewsData: ReviewItem[] = [
  {
    id: "rajesh-k",
    name: "Rajesh K",
    initials: "R",
    role: "Homeowner, Residential Installation",
    rating: 5,
    highlight: "Installation occurring the very next day after our initial contact. Wiring was installed flawlessly.",
    fullReview: [
      "Excellent service from the start..I am really happy to express my satisfaction with the recent CCTV installation service provided at my home by defense security system teams. The response time from defense team was remarkably fast, with installation occurring the very next day after our initial contact.",
      "The wiring was installed flawlessly, and the connection was executed in a highly professional manner. I was particularly impressed by the quality of the cameras used, which have exceeded my expectations. It is commendable how your experienced team handled the entire process, ensuring that everything was set up to the highest standards",
      "I appreciate how well the workings of the CCTV cameras were explained to me, ensuring that I am fully aware of their functionalities. Thanks Mr.Gokul and team for your excellent service and commitment. I will gladly recommend your services to friends and others who may require similar installations in the future.",
    ],
  },
  {
    id: "hari-sankar",
    name: "Hari Sankar",
    initials: "HS",
    role: "Homeowner, AI IP Surveillance",
    rating: 5,
    highlight: "Mr Gokul is a sincere and humble person, well versed in the latest technologies like Hikvision AcuSense with AI.",
    fullReview: [
      "I came across Defense Security when I was planning to install CCTV surveillance system at my home. While speaking to Mr Gokul, I realised that he is a sincere and humble person, who is very well versed in the latest technologies in the CCTV industry and in fact he even took the extra effort to enquire and learn more about Hikvision acusense IP camera surveillance system with AI capabilities, which was not widely used locally. This convinced me to choose the Defense Security team to install the system at my home.",
      "The system was installed and configured within 2 days (including all structural work) and I just had to sit back and relax since the highly capable team planned everything really well from top to bottom for the installation. I would wholeheartedly recommend the services of the Defense Security team to anyone who is planning to install any state-of-the-art CCTV system for home use.",
    ],
  },
  {
    id: "rahulkrishnan-nr",
    name: "Rahulkrishnan NR",
    initials: "R",
    role: "Verified Client",
    rating: 5,
    highlight: "Very smooth interaction with Gokul and team. Excellent know-how of technology and helped arrange broadband on short notice.",
    fullReview: [
      "I recommend this team from my personal experience. It was a very smooth interaction with Gokul and the team from my initial enquiry through the execution. Their excellent know-how of the technology and the choices presented will help you decide the best-suited option. They have also helped me arrange broadband internet on short notice and coordinated well with them. Overall, engaging with the Defense team was a very good experience.",
    ],
  },
];
