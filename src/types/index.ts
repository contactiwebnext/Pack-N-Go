export interface Category {
  id: string;
  name: string;
  shortDesc: string;
  tagline: string;
  itemCount: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  dimensions: string;
  weight: string;
  capacity: string;
  material: string;
  lockType: string;
  wheels: string;
  airlineCarryOnCompliant: boolean;
  inStockAtSFO: boolean;
  badge?: string;
  images: string[];
  features: string[];
  colors: { name: string; hex: string }[];
}

export interface AirlineGuide {
  airline: string;
  code: string;
  logoText: string;
  carryOnMaxDimensions: string;
  carryOnMaxWeight: string;
  personalItemLimit: string;
  sfoTerminal: string;
  verifiedYear: string;
}

export interface StoreInfo {
  name: string;
  location: string;
  airport: string;
  phone: string;
  emails: string[];
  hoursNote: string;
  daysOpen: string;
}
