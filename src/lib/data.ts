import type { Feature, PricingPlan, Testimonial, Stat, FAQ, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const stats: Stat[] = [
  { value: '50K', label: 'Teams worldwide', suffix: '+' },
  { value: '99.9', label: 'Uptime SLA', suffix: '%' },
  { value: '4.9', label: 'Average rating', suffix: '/5' },
  { value: '2M', label: 'Tasks completed', suffix: '+' },
];

export const features: Feature[] = [
  {
    id: 'f1',
    icon: 'Zap',
    title: 'Lightning-Fast Workflows',
    description: 'Automate repetitive tasks and eliminate bottlenecks with AI-powered workflow automation that adapts to your team.',
    tag: 'AI-Powered',
  },
  {
    id: 'f2',
    icon: 'Users',
    title: 'Real-Time Collaboration',
    description: 'Work together seamlessly with live cursors, instant updates, and smart conflict resolution across your entire team.',
  },
  {
    id: 'f3',
    icon: 'BarChart3',
    title: 'Deep Analytics',
    description: 'Get actionable insights into team performance, project health, and productivity trends with powerful dashboards.',
    tag: 'New',
  },
  {
    id: 'f4',
    icon: 'Shield',
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified with end-to-end encryption, SSO, SAML, and granular access controls built-in.',
  },
  {
    id: 'f5',
    icon: 'Puzzle',
    title: '200+ Integrations',
    description: 'Connect your favourite tools — Slack, GitHub, Jira, Figma, Notion and hundreds more out of the box.',
  },
  {
    id: 'f6',
    icon: 'Globe',
    title: 'Global Infrastructure',
    description: 'Deployed on 12 regions worldwide with 99.9% uptime SLA and sub-100ms response times everywhere.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 0,
    period: 'month',
    description: 'Perfect for individuals and small teams just getting started.',
    features: [
      'Up to 5 users',
      '10 active projects',
      '5 GB storage',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get started free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    period: 'month',
    description: 'For growing teams that need more power and collaboration.',
    features: [
      'Unlimited users',
      'Unlimited projects',
      '100 GB storage',
      'Advanced analytics',
      'Priority support',
      'AI automation (100 runs/mo)',
      'Custom integrations',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    period: 'month',
    description: 'For large organisations with advanced security and compliance needs.',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      'Dedicated infrastructure',
      'SSO / SAML',
      'SLA guarantee',
      'Unlimited AI runs',
      'Custom onboarding',
    ],
    cta: 'Contact sales',
    highlighted: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'Head of Engineering',
    company: 'Prismatic',
    avatar: 'SC',
    quote: 'Lumio cut our sprint planning time in half. The AI suggestions are uncannily accurate and our team\'s velocity has never been higher.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Marcus Rivera',
    role: 'Product Manager',
    company: 'Cloudwave',
    avatar: 'MR',
    quote: 'We evaluated 12 tools before choosing Lumio. Nothing else comes close to the depth of integrations and the quality of the UX.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Anya Patel',
    role: 'CTO',
    company: 'Streamline AI',
    avatar: 'AP',
    quote: 'The enterprise security features gave our compliance team peace of mind. Rolled out to 200 people in under a week.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Tom Walkers',
    role: 'Design Lead',
    company: 'Pixel Studio',
    avatar: 'TW',
    quote: 'Finally a productivity tool that designers actually love to use. The attention to detail in the UI is inspirational.',
    rating: 5,
  },
  {
    id: 't5',
    name: 'Lena Bauer',
    role: 'Operations Director',
    company: 'Nexora',
    avatar: 'LB',
    quote: 'Our cross-functional teams are aligned like never before. Lumio\'s dashboards surface the right data at the right time.',
    rating: 5,
  },
  {
    id: 't6',
    name: 'James O\'Brien',
    role: 'VP Engineering',
    company: 'Helix Corp',
    avatar: 'JO',
    quote: 'Migrated from three different tools to Lumio. Setup was seamless and ROI was visible within the first month.',
    rating: 5,
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Our Pro plan comes with a 14-day free trial — no credit card required. You get full access to all Pro features during the trial.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings. Changes take effect at the next billing cycle.',
  },
  {
    question: 'How does the AI automation work?',
    answer: 'Our AI models analyse your existing workflows and suggest optimisations. You can automate task assignments, status updates, deadline reminders, and custom triggers — all without writing a single line of code.',
  },
  {
    question: 'What integrations are available?',
    answer: 'We natively support 200+ integrations including Slack, GitHub, GitLab, Jira, Confluence, Figma, Google Workspace, Microsoft 365, Salesforce, HubSpot, and many more. You can also build custom integrations via our REST API.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Security is our top priority. Lumio is SOC 2 Type II certified, GDPR compliant, and ISO 27001 certified. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We perform regular penetration tests and security audits.',
  },
  {
    question: 'Do you offer onboarding support?',
    answer: 'Every Pro plan includes access to our onboarding docs, video library, and live chat support. Enterprise plans include a dedicated customer success manager and custom onboarding sessions.',
  },
];
