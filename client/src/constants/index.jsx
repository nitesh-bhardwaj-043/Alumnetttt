import { ClipboardPen } from "lucide-react";
import { User } from "lucide-react";
import { Search } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "About mentor", href: "#" },
  { label: "SIT", href: "https://www.sittechno.org/" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon:  <ClipboardPen color="#2b2fab" />,
    text: "User Registration and Authentication",
    description:"Allow college students and alumni to create accounts securely and authenticate their identities to access the platform.",
  },
  {
    icon: <User color="#2b2fab" />,
    text: " User Profile Management",
    description:
      "Enable users to create and manage their profiles, including basic information such as name, contact details, education, and professional background.",
  },
  {
    icon: <Search color="#2b2fab" />,
    text: "Search and Discovery",
    description:
      "Implement a search functionality that enables users to find mentors or mentees based on criteria such as industry, location, or areas of expertise.",
  },
  
];

export const checklistItems = [
  {
    title: "Mentors support growth",
    description:
      "Mentoring is a powerful development tool that can help advance your life goals and aspirations.",
  },
  {
    title: "Accomplish goals",
    description:
      "Mentors play a valuable role in the lives of people looking to achieve new levels of success.",
  },
  {
    title: "Builds confidence",
    description:
      "An increase in confidence can positively impact mental health, particularly as mentees feel supported in their decisions and career path.",
  },
  {
    title: "Mentors are trusted advisers",
    description:
      "Getting a mentor as an impartial third party is a great resource when you need someone you can trust.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "API Reference" },
];


export const communityLinks = [
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
