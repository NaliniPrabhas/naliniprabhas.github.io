import type { Product } from './types'

export type SortKey = 'name' | 'price-asc' | 'price-desc'

export const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'name', label: 'Product name (A–Z)' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]

/** Returns a sorted copy, so callers can pass the shared `products` array. */
export function sortProducts(list: Product[], sort: SortKey): Product[] {
  const sorted = [...list]

  switch (sort) {
    case 'price-asc':
      return sorted.sort((a, b) => a.productPrice - b.productPrice)
    case 'price-desc':
      return sorted.sort((a, b) => b.productPrice - a.productPrice)
    default:
      return sorted.sort((a, b) => a.productName.localeCompare(b.productName))
  }
}
