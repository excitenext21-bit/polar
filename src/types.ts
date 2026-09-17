export interface ServiceItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'emergency' | 'maintenance' | 'installation';
  tagline: string;
  description: string;
  highlights: string[];
  startingPrice: string;
  turnaround: string;
  popular?: boolean;
  warranty: string;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  serviceNeeded: string;
  description: string;
  preferredDate: string;
  preferredTimeSlot: string;
  isEmergency: boolean;
  address?: string;
  zipCode?: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  location: string;
  rating: number;
  date: string;
  serviceUsed: string;
  reviewText: string;
  verifiedHomeowner: boolean;
  avatar?: string;
  role?: string;
}

export interface MaintenancePlan {
  id: string;
  name: string;
  tier: 'silver' | 'gold' | 'platinum';
  priceMonthly: number;
  priceAnnual: number;
  popular?: boolean;
  features: string[];
  bestFor: string;
}

export interface ServiceArea {
  name: string;
  zipCodes: string[];
  responseTime: string;
  isPrimary: boolean;
}
