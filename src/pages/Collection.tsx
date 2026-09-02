import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'rating'

const sortOptions: { value: SortKey; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
  { value: 'rating', label: 'Top rated' },
]

export default function Collection() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')
  const [sort, setSort] = useState<SortKey>('featured')

  const visible = useMemo(() => {
    const list = [...products]
    switch (sort) {
      case 'price-asc':
        return list.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return list.sort((a, b) => b.price - a.price)
      case 'rating':
        return list.sort((a, b) => b.rating - a.rating)
      default:
        return list
    }
  }, [sort])

  const title = category
    ? `${category.charAt(0).toUpperCase()}${category.slice(1)} Collection`
    : 'Collection'

  return (
    <>
      <PageBanner
        title={title}
        crumbs={[{ label: 'Home', to: '/' }, { label: title }]}
      />

      <section className="container-page py-12 lg:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
          <p className="text-sm text-gray-body">
            Showing <span className="font-semibold text-ink">{visible.length}</span>{' '}
            products
          </p>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-gray-body">
              Sort by
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
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

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}
