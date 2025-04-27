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