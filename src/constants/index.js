
import {
  logo,
  trektoo,
  hrm,
  itworkcenter,
  laundry,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  devloops,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  church,
  itwork,
  mightymedia,
  devfor,
  trektooicon,
  laundaryday,
  // github,
  laravel,
  php,
  nextjs,
  casewise,
  python,
  casewiselogo,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web Developer (Laravel & React)",
    icon: web,
  },
  {
    title: "AI Chatbot & NLP Developer (Python)",
    icon: mobile,
  },
  {
    title: "Backend Architect & API Developer",
    icon: backend,
  },
  {
    title: "Relational Database Designer (MySQL)",
    icon: creator,
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
   
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  }, 
  {
    name: "AWS",
    icon: aws,
  }, 
  {
    name: "MySql",
    icon: mysql,
  },
 
   {
    name: "Github",
    icon: github,
  },
   {
    name: "php",
    icon: php,
  },
   {
    name: "laravel",
    icon: laravel,
  },
   {
    name: "nextjs",
    icon: nextjs,
  },
 {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Project Manager & Full Stack Developer",
    company_name: "Devloop Technologies",
  icon: devloops,
      iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Leading Laravel-based SaaS and enterprise application projects.",
      "Managing teams for HRM systems, dashboards, and subscriptions.",
      "Implementing scalable backend architecture and payment gateways.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Trektoo",
    icon: trektooicon || "TK", // fallback to initials
    iconBg: "#E6DEDD",
    date: "Apr 2025 - Present",
    points: [
      "Built travel platform with React, Next.js, and Laravel.",
      "Developed SEO-friendly interfaces and booking flows.",
      "Collaborated with Mahmood Ahmad and team.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "LaundryDay",
    icon: laundaryday || "LD",
    iconBg: "#F0F0F0",
    date: "Jan 2025 - Present",
    points: [
      "Created Laravel-based admin panel for laundry logistics.",
      "Integrated real-time tracking with Google Maps.",
      "Worked with Suleman Abrar on service forms and timing.",
    ],
  },
  {
title: "Full Stack Developer",
    company_name: "Casewise (FYP)",
    icon: casewiselogo || "TK",
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
     "Developing AI-powered legal services platform using React.js and Laravel.",
    "Integrated TF-IDF + Naive Bayes law matcher and chatbot using Python Flask.",
    "Implemented role-based access, lawyer/case modules, scheduling, and law filtering.",
    ],
  },
 
 {
    title: "Full Stack Developer",
    company_name: "Devfor",
    icon: devfor || "DF",
    iconBg: "#E6DEDD",
    date: "Dec 2024 -  Jan 2025",
    points: [
      "Developed dynamic Laravel modules for business applications.",
      "Built dashboards, APIs, and authentication flows.",
      "Worked closely with clients to build custom solutions.",
    ],
  },
    {
    title: "Full Stack Developer Intern",
    company_name: "Mighty Media Technologies, RYK",
    icon: mightymedia,
    iconBg: "#DDEEFF",
    date: "Sept 2024 – Oct 2024",
    points: [
      "Worked on frontend components using Blade and Tailwind.",
      "Assisted in building admin panels and integrating Laravel APIs.",
    ],
  },
  {
    title: "Apprenticeship (Web Development)",
    company_name: "IT Work Center, RYK",
    icon: itwork,
    iconBg: "#FFEFDD",
    date: "Apr 2024 – Aug 2024",
    points: [
      "Learned core concepts of PHP, Laravel, and MVC architecture.",
      "Built small web applications under mentorship.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ahmad helped us scale our travel booking app with clean React code and well-integrated Laravel APIs. His full stack expertise and proactive approach were instrumental in streamlining our platform.",
    name: "Mahmood Ahmad",
    designation: "Founder",
    company: "Trektoo",
    image: firstTestimonial,
  },
  {
    testimonial:
      "Ahmad built a robust laundry management system from scratch with advanced admin features, real-time tracking, and seamless user flows. He exceeded our expectations.",
    name: "Suleman Abrar",
    designation: "App Developer",
    company: "LaundryDay",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Ahmad delivered high-quality work on time for my e-commerce clients. His freelance support and Laravel expertise made a big difference in our business growth.",
    name: "Hamza Tariq",
    designation: "Freelance Client",
    company: "Self-Employed",
    image: thirdTestimonial,
  },
];


const projects = [
 {
  name: "CaseWise AI Law Firm",
  description:
    "Built a smart legal assistant platform with AI chatbot integration to analyze user input, match legal sections, and suggest lawyers based on case categories.",
  tags: [
    { name: "laravel", color: "red-text-gradient" },
    { name: "react", color: "blue-text-gradient" },
    { name: "python", color: "green-text-gradient" },
    // { name: "flask", color: "orange-text-gradient" },
    { name: "machine-learning", color: "pink-text-gradient" },
    { name: "mysql", color: "purple-text-gradient" },
  ],
  image: casewise, // Show "Image not available" in frontend
  source_code_link: "https://github.com/", // Replace with actual link
},

  {
    name: "LaundryDay Admin Panel",
    description:
      "Developed a complete laundry management system with admin and vendor roles. Features include Google Maps tracking, subscriptions, and order management.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "spatie", color: "green-text-gradient" },
      { name: "breeze", color: "blue-text-gradient" },
      { name: "javascript", color: "orange-text-gradient" },
      { name: "google-maps", color: "pink-text-gradient" },
    ],
    image: laundry, // Show "Image not available" in frontend
    source_code_link: "https://github.com/",
  },
  {
    name: "Trektoo Hotel Booking Module",
    description:
      "Currently building a hotel booking module for Trektoo’s travel platform using Laravel and React, focusing on room listings, booking flow, filters, and availability logic.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "reactjs", color: "blue-text-gradient" },
            { name: "nextjs", color: "orange-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: trektoo, // Under development — no image
    source_code_link: "https://github.com/",
  },
  {
    name: "Multi-Tenant System (Church Site)",
    description:
      "A multi-tenant platform for churches, offering role-based access, multiple payment gateways, and subscription-based access for different features.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "breeze", color: "blue-text-gradient" },
      { name: "stripe", color: "green-text-gradient" },
    ],
    image: church,
    source_code_link: "https://github.com/",
  },
  {
    name: "IT Work Center Website",
    description:
      "A complete software house and training center portal featuring student enrollment, role-based dashboards, fee management, attendance tracking, and HR salary management.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: itworkcenter,
    source_code_link: "https://github.com/",
  },
  {
    name: "HRM System (Devfor)",
    description:
      "An internal HRM solution with leave management, salary calculation, attendance (check-in/check-out), and employee detail management developed during Devfor employment.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "bootstrap", color: "blue-text-gradient" },
            { name: "mysql", color: "green-text-gradient" },
      { name: "filament", color: "orange-text-gradient" },

    ],
    image: hrm,
    source_code_link: "https://github.com/",
  },
 
];


export { services, technologies, experiences, testimonials, projects };
