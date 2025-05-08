export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export interface Provider {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  location: string;
  verified: boolean;
  services: string[];
  description: string;
}

export interface SubItem {
  title: string;
  href: string;
  icon?: React.ElementType<{ className?: string }>; // Correctly type 'icon' as a React component
}
export interface NavItem {
  title: string;
  href: string;
  icon?: React.ElementType<{ className?: string }>; // Add the 'icon' property
  subItems?: SubItem[];
}
export interface Testimonial {
  name: string;
  company: string;
  comment: string;
  image: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceType {
  name: string;
  id: string;
}

export interface QuoteRequest {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  moveDate: Date;
  serviceType: string;
  fromLocation: string;
  toLocation: string;
  description: string;
}
// lib/types.ts
export interface NavItem {
  title: string;
  href: string;
  subItems?: SubItem[];
}

export interface SubItem {
  title: string;
  href: string;
}