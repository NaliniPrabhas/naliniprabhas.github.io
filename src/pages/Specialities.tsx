import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { ListingToolbar, ProductGrid } from '../components/ProductListing'
import { productCategories, products, type ProductCategory } from '../products'
import { sortProducts, type SortKey } from '../products/sorting'

function isCategory(value: string | null): value is ProductCategory {
  return productCategories.some((c) => c === value)
}

/**
 * Products grouped by speciality, with a category filter. `?category=` opens
 * the page on one category, which is how the homepage tiles link straight to
 * their own products.
 */
export default function Specialities() {
  const [searchParams] = useSearchParams()
  const category = searchParams.get('category')

  // A category in the URL narrows the initial selection; otherwise the page
  // opens on the full catalogue.
  const [selected, setSelected] = useState<ProductCategory[]>(
    isCategory(category) ? [category] : [...productCategories],
  )
  const [sort, setSort] = useState<SortKey>('name')

  // Clicking a second homepage tile reuses this component, so the URL change
  // has to reset the filter rather than leaving the previous selection.
  useEffect(() => {
    setSelected(isCategory(category) ? [category] : [...productCategories])
  }, [category])

  const toggleCategory = (value: ProductCategory) => {
    setSelected((current) =>
      current.includes(value)
        ? current.filter((c) => c !== value)
        : // Keep the declared category order regardless of click order.
          productCategories.filter((c) => c === value || current.includes(c)),
    )
  }

  const visible = useMemo(
    () =>
      sortProducts(
        products.filter((p) => selected.includes(p.productCategory)),
        sort,
      ),
    [selected, sort],
  )

  return (
    <>
      <PageBanner
        variant="brand"
        title={isCategory(category) ? category : 'Specialities'}
        subtitle="Bamboo, leather, Bhut Jolokia and areca-leaf disposables — the four things we know best."
        crumbs={
          isCategory(category)
            ? [
                { label: 'Home', to: '/' },
                { label: 'Specialities', to: '/specialities' },
                { label: category },
              ]
            : [{ label: 'Home', to: '/' }, { label: 'Specialities' }]
        }
      />

      <div className="container-page grid gap-10 py-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12 lg:py-16">
        {/* Category filter */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <fieldset className="rounded-card border border-line p-5">
            <legend className="px-2 text-sm font-semibold">Specialities</legend>
            <ul className="mt-2 space-y-3">
              {productCategories.map((value) => (
                <li key={value}>
                  <label className="flex cursor-pointer items-center gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={selected.includes(value)}
                      onChange={() => toggleCategory(value)}
                      className="h-4 w-4 shrink-0 accent-navy"
                    />
                    <span>{value}</span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        </aside>

        <section>
          <ListingToolbar
            count={visible.length}
            sort={sort}
            onSortChange={setSort}
          />

          {visible.length > 0 ? (
            <ProductGrid items={visible} className="sm:grid-cols-2 xl:grid-cols-3" />
          ) : (
            <p className="mt-10 font-body text-gray-body">
              No categories selected. Tick one to see products.
            </p>
          )}
        </section>
      </div>
    </>
  )
}
