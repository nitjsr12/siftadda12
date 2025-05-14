import { Home, Wrench, Truck, Map, Package, Warehouse, Info, Rss, Phone,Briefcase,Car,Box,Globe,FacebookIcon, Instagram, Linkedin, LinkedinIcon, TwitchIcon, X } from "lucide-react";

export const siteConfig = {
  
  name: "Shiftadda",
  description: "Shiftadda – India’s trusted B2C platform for packers and movers.From local moves to intercity shifting – we’ve got you covered.Get instant quotes, and shift stress-free.",
  socialLinks: [
    {
      name: "Facebook",
      href: "#",
      icon: FacebookIcon // Import from lucide-react
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram // Import from lucide-react
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/Shiftadda-com/",
      icon: LinkedinIcon // Import from lucide-react
    },
    {
      name: "Twitter",
      href: "#",
      icon: X // Import from lucide-react
    },
    
  ],
  services: [
    {
      name: "Local Moving",
      href: "/services"
    },
    {
      name: "Long Distance Moving",
      href: "/services"
    },
    {
      name: "Packing Services",
      href: "/services"
    },
    {
      name: "Storage Solutions",
      href: "/services"
    },
    
    // Add other services
  ],
  companyLinks: [
    {
      name: "About Us",
      href: "/about"
    },
    {
      name: "Careers",
      href: "/careers"
    },
    {
      name: "Blog",
      href: "/blog"
    },
    {
      name: "Contact Us",
      href: "/contact"
    },
    {
      name: "Terms of Service",
      href: "/terms"
    },
    {
      name: "FAQ",
      href: "/faq"
    },

    // Add other company links
  ],
  footerLinks: [
    {
      name: "Privacy Policy",
      href: "/privacy"
    },
    // Add other footer links
  ],
  mainNav: [
    {
      title: "Home",
      href: "/",
      icon: Home // Import from lucide-react
    },
    {
      title: "About Us",
      href: "/about",
      icon: Info
    },
    {
      title: "Services",
      href: "/services",
      icon: Wrench,
      // subItems: [
      //   {
      //     title: "Local Moving",
      //     href: "/services/local-moving",
      //     icon: Truck
      //   },
      //   {
      //     title: "Long Distance",
      //     href: "/services/long-distance",
      //     icon: Map
      //   },
      //   {
      //     title: "Packing Services",
      //     href: "/services/packing",
      //     icon: Package
      //   },
      //   {
      //     title: "Storage Solutions",
      //     href: "/services/storage",
      //     icon: Warehouse
      //   },
      //   {
      //     title: "Find Movers",
      //     href: "/providers",
      //   },
      //   {
      //     title: "For Businesses",
      //     href: "/for-business",
      //   },
      //   {
      //     title: "For Providers",
      //     href: "/for-providers",
      //   },
      //   {
      //     title: "How It Works",
      //     href: "/how-it-works",
      //   }
      // ]
    },
    
    {
      title: "Blog",
      href: "/blog",
      icon: Rss
    },
    {
      title: "Contact",
      href: "/contact",
      icon: Phone
    }
  ],
} 

export const serviceTypes = [
  {
    id: "house",
    name: "Household Items",
    icon: Home
  },
  {
    id: "office",
    name: "Office Equipment",
    icon: Briefcase
  },
  {
    id: "vehicle",
    name: "Vehicle Transport",
    icon: Car
  },
  {
    id: "packing",
    name: "Packing Only",
    icon: Box
  },
  {
    id: "storage",
    name: "Storage Needed",
    icon: Warehouse
  },
  {
    id: "international",
    name: "International Move",
    icon: Globe
  }
];
export const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: FacebookIcon // Import from lucide-react
  },
]
export const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Surat",
  "Jaipur"
];
export const howItWorksSteps = [
  {
    title: "Request a Free Quote",
    description: "Fill out our quick form or give us a call—we’ll get the details we need to start your move.",
    icon: "ClipboardList",
  },
  {
    title: "Get an Estimate",
    description: "Receive a clear, all-inclusive quote with no hidden charges.",
    icon: "Wallet",
  },
  {
    title: "Schedule Your Move",
    description: "Pick a date and time that works for you—we’ll take care of the rest.",
    icon: "Calendar",
  },
  {
    title: "Relax While We Shift You",
    description: "Our expert team handles packing, lifting, and delivery—so you don’t have to lift a finger.",
    icon: "Truck",
  },
];

export const testimonials = [
  {
    name: "Ankit R",
    company: "HSR Layout",
    comment: "Shiftadda made my 2BHK move seamless! The team was punctual, careful, and friendly.",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  {
    name: "Priya M",
    company: "Whitefield.",
    comment: "I’ve used big-name movers before, but Shiftadda’s service was better and affordable.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
  },
  
  {
    name: "Himanshu",
    company: "Delhi.",
    comment: "I was worried about my expensive furniture, but the team handled everything with care. They even helped me set up my new place!",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
  },
  {
    name: "supriya",
    company: "Bangalore.",
    comment: "my experience with Shiftadda was fantastic! The team was professional, punctual, and took great care of my belongings. They made the entire process smooth and stress-free. I highly recommend them for anyone looking to move.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
  },
  {
    name: "Sandeep Kumar",
    company: "Bangalore.",
    comment: "i had a great experience with Shiftadda. The team was professional, punctual, and took great care of my belongings. They made the entire process smooth and stress-free. I highly recommend them for anyone looking to move.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
  },
  {
    name: "Aditi Sharma",
    company: "Bangalore.",
    comment: "I was impressed with the level of service provided by Shiftadda. The team was professional, efficient, and took great care of my belongings. I would highly recommend them to anyone looking for a reliable moving service.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  {
    name: "Rahul Gupta",
    company: "Bangalore.",
    comment: "I had a great experience with Shiftadda. The team was professional, punctual, and took great care of my belongings. They made the entire process smooth and stress-free. I highly recommend them for anyone looking to move.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
  },
  {
    name: "Neha Singh",
    company: "Bangalore.",
    comment: "I was impressed with the level of service provided by Shiftadda. The team was professional, efficient, and took great care of my belongings. I would highly recommend them to anyone looking for a reliable moving service.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    company: "Bangalore.",
    comment: "I had a great experience with Shiftadda. The team was professional, punctual, and took great care of my belongings. They made the entire process smooth and stress-free. I highly recommend them for anyone looking to move.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
  },
  {
    name: "Ravi Kumar",
    company: "Bangalore.",
    comment: "Shiftadda made my 2BHK move seamless! The team was punctual, careful, and friendly. I highly recommend them for anyone looking to move.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "How does Shiftadda vet service providers?",
    answer: "We have a rigorous verification process that includes business registration checks, insurance verification, service history review, and customer feedback analysis. Only providers meeting our quality standards are featured on our platform."
  },
  {
    question: "What kind of businesses can use Shiftadda?",
    answer: "Shiftadda caters to businesses of all sizes - from small startups to large enterprises. Whether you're relocating an office, moving inventory between warehouses, or need specialized equipment transport, our platform connects you with the right professionals."
  },
  {
    question: "How quickly can I expect quotes after submitting my requirements?",
    answer: "Most businesses receive their first quotes within 24 hours of submitting their requirements. For urgent moves, you can indicate your timeline, and our system will prioritize your request with providers who can accommodate expedited services."
  },
  {
    question: "Is there a fee to use Shiftadda as a business?",
    answer: "Businesses can browse providers and request quotes for free. We only charge a small service fee when you confirm a booking through our platform, which helps us maintain the quality of our service and provide booking protection."
  },
  {
    question: "What if I'm not satisfied with the moving service?",
    answer: "Customer satisfaction is our priority. All bookings through Shiftadda include our Service Guarantee. If a service doesn't meet the agreed standards, our dedicated resolution team will work with you and the provider to resolve the issue."
  }
];

export const providerFeatures = [
  {
    title: "Home Shifting (1 BHK to 5 BHK)",
    description: "Safe packing, loading/unloading, and transport—your home is in secure hands.",
    icon: "Home",
  },
  {
    title: "Office Relocation",
    description: "Quick, organized moves with disassembly and reinstallation—minimal disruption.",
    icon: "Briefcase",
  },
  {
    title: "Local & Intercity Moves",
    description: "We handle relocations across Bangalore and major Indian cities.",
    icon: "MapPin",
  },
  {
    title: "Packing Services Only",
    description: "Need help packing? We supply high-quality materials and professional packers.",
    icon: "Boxes",
  },
  {
    title: "Two-Wheeler & Car Transport",
    description: "Vehicles moved with care in secure, enclosed carriers.",
    icon: "Car",
  },
  {
    title: "Storage Services (Coming Soon)",
    description: "Short-term storage with 24/7 security and flexible access.",
    icon: "ShieldCheck",
  },
];

export const businessFeatures = [
  {
    title: "Transparent Pricing",
    description: "No hidden fees—just honest, upfront rates you can trust.",
    icon: "BadgeCheck",
  },
  {
    title: "Reliable, On-Time Service",
    description: "We value your time and always deliver as promised.",
    icon: "Clock",
  },
  {
    title: "High-Quality Packing Materials",
    description: "Top-grade materials to keep your items safe in transit.",
    icon: "Package",
  },
  {
    title: "Friendly Support from Start to Finish",
   description: "Helpful, caring support at every step of your move.",
    icon: "Headphones",
  },
];

export const dummyProviders = [
  {
    id: "provider1",
    name: "ExpressMove Logistics",
    image: "https://images.pexels.com/photos/4246196/pexels-photo-4246196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.8,
    reviewCount: 183,
    location: "Mumbai",
    verified: true,
    services: ["Office Relocation", "Equipment Transport", "Storage Solutions"],
    description: "Specializing in efficient business relocations with minimal downtime. Our team handles everything from packing to setup at your new location.",
  },
  {
    id: "provider2",
    name: "Global Shift Movers",
    image: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.7,
    reviewCount: 156,
    location: "Delhi",
    verified: true,
    services: ["Warehouse Moving", "International Shipping", "Equipment Transport"],
    description: "Specialist in international logistics and heavy equipment transport. Licensed for both domestic and international commercial moves.",
  },
  {
    id: "provider3",
    name: "TechMove Solutions",
    image: "https://images.pexels.com/photos/6170441/pexels-photo-6170441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.9,
    reviewCount: 92,
    location: "Bengaluru",
    verified: true,
    services: ["Office Relocation", "Equipment Transport", "Retail Relocation"],
    description: "IT and tech-focused moving service with specialized experience in handling sensitive equipment and server relocations.",
  },
  {
    id: "provider4",
    name: "Swift Corporate Relocations",
    image: "https://images.pexels.com/photos/6170464/pexels-photo-6170464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.6,
    reviewCount: 138,
    location: "Hyderabad",
    verified: true,
    services: ["Office Relocation", "Warehouse Moving", "Storage Solutions"],
    description: "Full-service corporate relocation specialists with a focus on efficiency and business continuity planning.",
  },
];