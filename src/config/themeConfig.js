// Theme Configuration for Universal Power Systems
// Centralized design tokens and configuration

export const themeConfig = {
  // Brand Colors
  colors: {
    primary: '#DC2626',
    primaryLight: '#FEF2F2',
    primaryDark: '#B91C1C',
    white: '#FFFFFF',
    black: '#171717',
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5',
      200: '#E5E5E5',
      300: '#D4D4D4',
      400: '#A3A3A3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
  },

  // Typography
  fonts: {
    display: "'Georgia', 'Cambria', 'Times New Roman', serif",
    body: "'Inter', system-ui, sans-serif",
  },

  // Spacing Scale
  spacing: {
    section: {
      sm: '4rem',    // 64px
      md: '6rem',    // 96px
      lg: '8rem',    // 128px
    },
    container: {
      padding: '1rem',
      maxWidth: '80rem', // 1280px
    },
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Animation Durations
  animation: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },

  // Border Radius
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
};

// Company Information
export const companyInfo = {
  name: 'Universal Power Systems',
  tagline: 'Trusted Power Solutions Since 1997',
  established: 1997,
  yearsOfExperience: new Date().getFullYear() - 1997,
  hondaDealerYears: 3,
  phone: '+91 XXXXX XXXXX', // Replace with actual phone
  email: 'info@universalpowersystems.com', // Replace with actual email
  whatsapp: '+91XXXXXXXXXX', // Replace with actual WhatsApp number
  address: {
    line1: 'Your Address Line 1',
    line2: 'Your Address Line 2',
    city: 'City',
    state: 'State',
    pincode: 'XXXXXX',
    country: 'India',
  },
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
};

// Navigation Links
export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

// Services List
export const services = [
  {
    id: 1,
    title: 'Sales & Service of Honda Power Products',
    description: 'Complete range of genuine Honda power products with expert sales consultation.',
    icon: 'ShoppingBag',
  },
  {
    id: 2,
    title: 'Authorized Honda Service Support',
    description: 'Factory-trained technicians providing authentic Honda service support.',
    icon: 'BadgeCheck',
  },
  {
    id: 3,
    title: 'Generator Installation, Repair & Maintenance',
    description: 'Professional installation and comprehensive maintenance services for all generator types.',
    icon: 'Zap',
  },
  {
    id: 4,
    title: 'Genuine Honda Spare Parts Supply',
    description: 'Original Honda spare parts ensuring optimal performance and longevity.',
    icon: 'Package',
  },
  {
    id: 5,
    title: 'Preventive & Annual Maintenance Services',
    description: 'Scheduled maintenance programs to prevent breakdowns and extend equipment life.',
    icon: 'Calendar',
  },
  {
    id: 6,
    title: 'Breakdown & Emergency Repair Services',
    description: '24/7 emergency response for critical power system failures.',
    icon: 'AlertTriangle',
  },
  {
    id: 7,
    title: 'On-Site / Doorstep Service',
    description: 'Convenient service at your location, minimizing downtime.',
    icon: 'MapPin',
  },
  {
    id: 8,
    title: 'Warranty & Post-Warranty Support',
    description: 'Comprehensive support throughout and beyond the warranty period.',
    icon: 'Shield',
  },
  {
    id: 9,
    title: 'Performance Inspection & Load Testing',
    description: 'Thorough testing to ensure your generators perform at peak efficiency.',
    icon: 'Activity',
  },
];

// Timeline Milestones
export const milestones = [
  {
    year: 1997,
    title: 'Foundation',
    description: 'Universal Power Systems was established with a vision to provide reliable power solutions.',
  },
  {
    year: 2005,
    title: 'Expansion',
    description: 'Expanded service offerings to include comprehensive maintenance programs.',
  },
  {
    year: 2010,
    title: 'Growth',
    description: 'Established a strong customer base across residential and commercial sectors.',
  },
  {
    year: 2015,
    title: 'Modernization',
    description: 'Upgraded facilities and invested in advanced diagnostic equipment.',
  },
  {
    year: 2022,
    title: 'Honda Partnership',
    description: 'Became an Authorized Dealer of Honda Power Products.',
  },
  {
    year: 2024,
    title: 'Present Day',
    description: '25+ years of excellence, continuing to deliver trusted power solutions.',
  },
];

export default themeConfig;
