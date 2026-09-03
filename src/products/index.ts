/**
 * The product catalogue, collected by category.
 *
 * To add a product: create a folder alongside these, drop its photographs in,
 * write a `product.ts` that default-exports a `Product`, then import it here
 * and list it under its category. Nothing else needs to change — the catalog
 * page derives its filters and its listing from `products`.
 */
import arecaLeafPlates from './areca-leaf-plates/product'
import bambooCaneStool from './bamboo-cane-stool/product'
import bhutJolokiaChilliPaste from './bhut-jolokia-chilli-paste/product'
import leatherWeekenderBag from './leather-weekender-bag/product'
import { productCategories, type Product, type ProductCategory } from './types'

/** Grouped by category, so a new product is added under one obvious key. */
export const productsByCategory: Record<ProductCategory, Product[]> = {
  'Bamboo Products': [bambooCaneStool],
  'Leather Products': [leatherWeekenderBag],
  'Bhut Jolokia': [bhutJolokiaChilliPaste],
  'Disposable Products': [arecaLeafPlates],
}

/** Flattened in category order — what the catalog page renders. */
export const products: Product[] = productCategories.flatMap(
  (category) => productsByCategory[category],
)

export function findProduct(productId: string): Product | undefined {
  return products.find((p) => p.productId === productId)
}

export { productCategories }
export type { Product, ProductCategory }
