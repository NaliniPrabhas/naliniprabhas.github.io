/**
 * Hash targets point at homepage section ids, so they work from any route —
 * the router navigates home first, then scrolls.
 */
export const navLinks = [
  { label: 'Popular Products', to: '/#popular-products' },
  { label: 'Specialities', to: '/#specialities' },
  { label: 'Catalog', to: '/collection' },
  { label: 'About Us', to: '/about' },
]

export const drawerLinks = [
  { label: 'Shipping', to: '#' },
  { label: 'Guides', to: '#' },
  { label: 'Terms of Sale', to: '#' },
  { label: 'Terms of Use', to: '#' },
  { label: 'Privacy & Policy', to: '#' },
]

export const popularPicks = [
  '/assets/img/popular-picks-01.jpg',
  '/assets/img/popular-picks-02.jpg',
  '/assets/img/popular-picks-03.jpg',
  '/assets/img/popular-picks-01.jpg',
  '/assets/img/popular-picks-02.jpg',
  '/assets/img/popular-picks-03.jpg',
]

export const categories = [
  {
    title: 'Hoodies & Sweatshirt',
    image: '/assets/img/categories-img-01.jpg',
    to: '/collection?category=hoodies',
  },
  {
    title: 'Shoes & Sneakers',
    image: '/assets/img/categories-img-02.jpg',
    to: '/collection?category=shoes',
  },
  {
    title: 'Tees & T-Shirt',
    image: '/assets/img/categories-img-03.jpg',
    to: '/collection?category=tees',
  },
]

export const faqs = [
  {
    question: 'What services does the studio offer?',
    answer:
      'End-to-end product design: discovery workshops, user flows, wireframes, high-fidelity UI, and a handoff package your engineers can build from directly.',
  },
  {
    question: 'How often will results be reported?',
    answer:
      'You get a written progress note roughly once a week, plus a live walkthrough at the end of each milestone so nothing is a surprise.',
  },
  {
    question: 'What will be delivered, and when?',
    answer:
      'Flows and wireframes first, then visual design, then the build. A typical engagement runs about a month for design plus development time.',
  },
  {
    question: 'Can we work together without a business plan?',
    answer:
      'Yes. If the plan is still forming we start with a short discovery phase to pin down the audience and the one problem worth solving first.',
  },
  {
    question: 'Why choose a design studio over a full-service agency?',
    answer:
      'You work directly with the people doing the work. Fewer handoffs, faster decisions, and no account layer between you and the designers.',
  },
  {
    question: 'How quickly do results appear?',
    answer:
      'Early signal usually shows up within the first week or so of launch, once there is enough traffic to read the numbers honestly.',
  },
]

export const trustBadges = [
  'Duties and Taxes Guaranteed',
  'Free Express Shipping',
  'Customer Love',
  'Easy Returns',
]

export const socialIcons = [
  { name: 'Facebook', icon: '/assets/img/ic-facebook.svg' },
  { name: 'Instagram', icon: '/assets/img/ic-instagram.svg' },
  { name: 'Twitter', icon: '/assets/img/ic-twitter.svg' },
  { name: 'LinkedIn', icon: '/assets/img/ic-linkedin.svg' },
]
