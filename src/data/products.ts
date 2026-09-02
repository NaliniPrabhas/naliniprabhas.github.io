export type Product = {
  slug: string
  name: string
  price: number
  category: string
  rating: number
  image: string
  colors: string[]
  sizes: number[]
  description: string
}

/**
 * Placeholder catalogue. Images point at /public/assets/img and are meant to be
 * swapped for real product photography later.
 */
export const products: Product[] = [
  {
    slug: 'air-max-pegasus-37',
    name: 'Air Max pegasus 37',
    price: 189,
    category: "Women's Running shoe",
    rating: 4,
    image: '/assets/img/product-sm-01.png',
    colors: ['#113869', '#e0c340', '#0d0d11'],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5],
    description:
      'A responsive ride for everyday miles. Breathable mesh upper with a foam midsole that keeps its shape mile after mile.',
  },
  {
    slug: 'air-zoom-structure',
    name: 'Air Zoom Structure',
    price: 165,
    category: "Men's Running shoe",
    rating: 4,
    image: '/assets/img/product-sm-02.png',
    colors: ['#0d0d11', '#717171', '#ea0606'],
    sizes: [8, 8.5, 9, 9.5, 10, 11],
    description:
      'Stability where you need it. A firmer heel counter and wider base steady each landing without adding bulk.',
  },
  {
    slug: 'court-vision-low',
    name: 'Court Vision Low',
    price: 129,
    category: "Men's Court shoe",
    rating: 5,
    image: '/assets/img/product-sm-03.png',
    colors: ['#ffffff', '#113869', '#fbcf33'],
    sizes: [8, 9, 9.5, 10, 10.5, 11, 12],
    description:
      'Retro basketball lines in a clean leather build. Cushioned collar and a rubber cupsole for all-day wear.',
  },
  {
    slug: 'react-infinity-run',
    name: 'React Infinity Run',
    price: 199,
    category: "Women's Running shoe",
    rating: 4,
    image: '/assets/img/product-sm-04.png',
    colors: ['#e0c340', '#113869', '#ffffff'],
    sizes: [5.5, 6, 6.5, 7, 8, 8.5],
    description:
      'Soft, springy foam underfoot and a wider forefoot for a smoother transition through every stride.',
  },
  {
    slug: 'blazer-mid-77',
    name: 'Blazer Mid 77',
    price: 145,
    category: 'Unisex Lifestyle shoe',
    rating: 5,
    image: '/assets/img/product-sm-05.png',
    colors: ['#ffffff', '#0d0d11', '#ea0606'],
    sizes: [7, 8, 9, 10, 11, 12],
    description:
      'A vintage silhouette with exposed foam tongue and crisp overlays. Wears in beautifully over time.',
  },
  {
    slug: 'pegasus-trail-gtx',
    name: 'Pegasus Trail GTX',
    price: 215,
    category: "Men's Trail shoe",
    rating: 4,
    image: '/assets/img/product-sm-06.png',
    colors: ['#113869', '#717171', '#e0c340'],
    sizes: [8, 8.5, 9, 10, 10.5, 11],
    description:
      'Weather-ready trail build with an aggressive outsole pattern that grips loose gravel and wet rock.',
  },
]

export const featuredProducts = products.slice(0, 4)

export function findProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
