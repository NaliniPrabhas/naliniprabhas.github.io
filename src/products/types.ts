/**
 * The one product shape for the whole site. Specialities are not a separate
 * kind of thing — they are simply products, grouped by category.
 */
export type Product = {
  productId: string
  productName: string
  productCategory: ProductCategory
  /** Short rundown shown on the listing card and under the title. */
  productDescription: string
  productSpecification: string
  productPrice: number
  /** In-depth explanation, shown in the Details tab. */
  productDetails: string
  /** Resolved image URLs; first entry is used as the card thumbnail. */
  productImages: string[]
  productColors?: string[]
  productSizes?: string[]
  productWeights?: string[]
}

/** Filter order on the catalog follows this array. */
export const productCategories = [
  'Bamboo Products',
  'Leather Products',
  'Bhut Jolokia',
  'Disposable Products',
] as const

export type ProductCategory = (typeof productCategories)[number]
