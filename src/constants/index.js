
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
  laravel,
  php,
  nextjs,
  casewise,
  python,
  casewiselogo,
  trektooProject,
  webIcon,
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
    title: "Team Lead (Web & Mobile App)",
    icon: web,
  },
  {
    title: "Full Stack Solution Architect",
    icon: mobile,
  },
  {
    title: "Backend Architect (Laravel & API)",
    icon: backend,
  },
  {
    title: "Custom SaaS & ERP Developer",
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
    title: "Full Stack Developer",
    company_name: "Enscyd Technologies",
    icon: web,
    iconBg: "#383E56",
    date: "Jul 2025 - Present",
    type: "full-time",
    points: [
      "Designing and developing scalable web and mobile products.",
      "Implementing high-performance backend systems and clean UI components.",
      "Collaborating on system architecture and product strategy.",
    ],
  },
  {
    title: "CTO & Team Lead",
    company_name: "Trektoo",
    icon: trektooicon || "TK",
    iconBg: "#E6DEDD",
    date: "Apr 2025 - Present",
    type: "remote",
    points: [
      "Managing the development team and focusing on company-wide growth.",
      "Architected and built the project from scratch with a dedicated development team.",
      "Leading the upgrading and scaling of the business into its next levels through advanced technical solutions.",
    ],
  },
  {
    title: "Project Manager & Full Stack Developer",
    company_name: "Devloop Technologies",
    icon: devloops,
    iconBg: "#383E56",
    date: "Feb 2025 - Jul 2025",
    type: "full-time",
    points: [
      "Led Laravel-based SaaS and enterprise application projects.",
      "Managed teams for HRM systems, dashboards, and subscriptions.",
      "Implemented scalable backend architecture and payment gateways.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "LaundryDay",
    icon: laundaryday || "LD",
    iconBg: "#F0F0F0",
    date: "Jan 2025 - Jul 2025",
    type: "remote",
    points: [
      "Created Laravel-based admin panel for laundry logistics.",
      "Integrated real-time tracking with Google Maps.",
      "Worked on service forms and vendor management.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Casewise (FYP)",
    icon: casewiselogo || "TK",
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    type: "remote",
    points: [
      "Developing AI-powered legal services platform using React.js and Laravel.",
      "Integrated TF-IDF + Naive Bayes law matcher and chatbot using Python Flask.",
      "Implemented role-based access and Law filtering.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Devfor",
    icon: devfor || "DF",
    iconBg: "#E6DEDD",
    date: "Dec 2024 - Jan 2025",
    type: "full-time",
    points: [
      "Developed dynamic Laravel modules for business applications.",
      "Built dashboards, APIs, and authentication flows.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Mighty Media Technologies, RYK",
    icon: mightymedia,
    iconBg: "#DDEEFF",
    date: "Sept 2024 – Oct 2024",
    type: "full-time",
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
    type: "full-time",
    points: [
      "Learned core concepts of PHP, Laravel, and MVC architecture.",
      "Built small web applications under mentorship.",
    ],
  },
  {
    title: "Freelancing & Learning",
    company_name: "Self-Employed",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Apr 2024",
    type: "remote",
    points: [
      "Explored various technologies and improved full-stack skills.",
      "Completed freelance projects for diverse clients.",
      "Deepened knowledge in Laravel, React, and system design.",
    ],
  },
  {
    title: "Trainee Web Developer",
    company_name: "ICR",
    icon: web,
    iconBg: "#383E56",
    date: "Jul 2022 - Aug 2022",
    type: "full-time",
    points: [
      "First professional experience focusing on Frontend Development.",
      "Learned core HTML, CSS, and JavaScript principles.",
      "Assisted in building responsive web components.",
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
    
  },
  {
    testimonial:
      "Ahmad built a robust laundry management system from scratch with advanced admin features, real-time tracking, and seamless user flows. He exceeded our expectations.",
    name: "Suleman Abrar",
    designation: "App Developer",
    company: "LaundryDay",
    
  },
  {
    testimonial:
      "Ahmad delivered high-quality work on time for my e-commerce clients. His freelance support and Laravel expertise made a big difference in our business growth.",
    name: "Hamza Tariq",
    designation: "Freelance Client",
    company: "Self-Employed",
    
  },
];

const projects = [
  {
    name: "Trektoo – Travel Booking Platform",
    description:
      "Role: Team Lead (Web + Mobile App)\n• Led full product development (web + mobile)\n• Managed team (web + mobile developers)\n• Designed booking engine, APIs, and integrations\n• Architected scalable system",
    tags: [
      { name: "web-mobile-app", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "nextjs", color: "orange-text-gradient" },
      { name: "laravel", color: "red-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:plane.svg?color=white",
    live_link: "https://trektoo.com",
  },
  {
    name: "BannuGul – Food Delivery",
    description:
      "Role: Team Lead (Web + Mobile App)\n• Built multi-vendor marketplace (restaurants)\n• Designed order & delivery lifecycle\n• Guided frontend mobile app developer",
    tags: [
      { name: "web-mobile-app", color: "pink-text-gradient" },
      { name: "laravel", color: "red-text-gradient" },
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:utensils.svg?color=white",
    live_link: "#",
  },
  {
    name: "LaundryDay – Management System",
    description:
      "Role: Team Lead (Web + Mobile App)\n• Designed APIs and database structure\n• Managed vendor, order, and delivery systems\n• Worked with frontend mobile developer",
    tags: [
      { name: "web-mobile-app", color: "pink-text-gradient" },
      { name: "laravel", color: "red-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "google-maps", color: "pink-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:washing-machine.svg?color=white",
    live_link: "#",
  },
  {
    name: "Buddy – Service Marketplace",
    description:
      "Role: Team Lead (Web + Mobile App)\n• Built services marketplace (home services)\n• Designed scalable backend system\n• Led mobile app flow and logic",
    tags: [
      { name: "web-mobile-app", color: "pink-text-gradient" },
      { name: "laravel", color: "red-text-gradient" },
      { name: "php", color: "blue-text-gradient" },
      { name: "apis", color: "orange-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:hammer.svg?color=white",
    live_link: "#",
  },
  {
    name: "Floorlink – Labour Management",
    description:
      "Role: Full Stack Web Dev\n• Workforce and job assignment system\n• Order tracking and management\n• Designed backend architecture",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "system-design", color: "pink-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:hard-hat.svg?color=white",
    live_link: "#",
  },
  {
    name: "Accounts Management System (AMS)",
    description:
      "Role: Full Stack Web Dev\n• Admin + Client panels\n• Invoicing, billing, revenue/expense tracking\n• Python-based PDF generation (multi-theme)",
    tags: [
      { name: "python", color: "green-text-gradient" },
      { name: "laravel", color: "red-text-gradient" },
      { name: "mysql", color: "blue-text-gradient" },
      { name: "pdf-generation", color: "pink-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:calculator.svg?color=white",
    live_link: "#",
  },
  {
    name: "Energy Billing System",
    description:
      "Role: Full Stack Web Dev\n• Electricity & gas billing system\n• Admin, staff, and customer portals\n• Meter reading & bill generation",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:zap.svg?color=white",
    live_link: "#",
  },
  {
    name: "Axis Properties – Real Estate",
    description:
      "Role: Full Stack Web Dev\n• Property listing & inventory management\n• Advanced filtering (location, price, type)\n• Admin panel for listings and clients",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:home.svg?color=white",
    live_link: "#",
  },
  {
    name: "Ecommerce Platforms",
    description:
      "Role: Full Stack Web Dev\n• Built multiple ecommerce platforms (Claudia & Rathore)\n• Payment, inventory, and order management",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "payment-gateways", color: "green-text-gradient" },
      { name: "mysql", color: "blue-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:shopping-bag.svg?color=white",
    live_link: "#",
  },
  {
    name: "YumGrills – RMS",
    description:
      "Role: Full Stack Web Dev\n• Single vendor restaurant management system\n• Order and delivery management\n• Real-time order tracking",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:flame.svg?color=white",
    live_link: "#",
  },
  {
    name: "IT Work Center – Training & HR",
    description:
      "Role: Full Stack Web Dev\n• Student enrollment and fee management\n• HR, attendance, and payroll system",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "php", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:graduation-cap.svg?color=white",
    live_link: "#",
  },
  {
    name: "HRM System (Devfor)",
    description:
      "Role: Full Stack Web Dev\n• Employee management system\n• Attendance, leave, and salary tracking\n• Automated payroll generation",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "hrm", color: "blue-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:users.svg?color=white",
    live_link: "#",
  },

  {
    name: "CaseWise – AI-Based Law Firm",
    description:
      "Role: Full Stack + AI Integration\n• ML-based legal chatbot & recommendation system\n• Pakistani law dataset integration\n• Case & hearing management",
    tags: [
      { name: "python", color: "green-text-gradient" },
      { name: "ml", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "laravel", color: "red-text-gradient" },
    ],
    image: "https://api.iconify.design/lucide:gavel.svg?color=white",
    live_link: "#",
    badge: "University Project",
  },
];


export { services, technologies, experiences, testimonials, projects };
