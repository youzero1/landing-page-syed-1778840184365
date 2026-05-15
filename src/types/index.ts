export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
  tag?: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
};

export type Stat = {
  value: string;
  label: string;
  suffix?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};
