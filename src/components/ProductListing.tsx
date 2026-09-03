import type { Product } from '../products'
import { sortOptions, type SortKey } from '../products/sorting'
import ProductCard from './ProductCard'

/**
 * The count line and sort dropdown shared by the Catalog and Specialities
 * pages. Both pages keep their own layout; only these controls are common.
 */
export function ListingToolbar({
  count,
  sort,
  onSortChange,
}: {
  count: number
  sort: SortKey
  onSortChange: (sort: SortKey) => void
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
      <p className="text-sm text-gray-body">
        Showing <span className="font-semibold text-ink">{count}</span>{' '}
        {count === 1 ? 'product' : 'products'}
      </p>

      <div className="flex items-center gap-2">
        <label htmlFor="sort" className="text-sm text-gray-body">
          Sort by
        </label>
        <select
          id="sort"
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortKey)}
          className="rounded-card border border-line bg-white px-3 py-2 text-sm focus:outline-2 focus:outline-offset-2 focus:outline-navy"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

/**
 * Grid of product cards. `className` carries the column count, since the
 * Catalog has the full width and the Specialities page gives up a sidebar.
 */
export function ProductGrid({
  items,
  className = 'sm:grid-cols-2 lg:grid-cols-3',
}: {
  items: Product[]
  className?: string
}) {
  return (
    <div className={`mt-8 grid gap-6 ${className}`}>
      {items.map((product) => (
        <ProductCard
          key={product.productId}
          name={product.productName}
          category={product.productCategory}
          image={product.productImages[0]}
          to={`/product/${product.productId}`}
          fit="cover"
        />
      ))}
    </div>
  )
}
