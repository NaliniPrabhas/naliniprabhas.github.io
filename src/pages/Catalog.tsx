import { useMemo, useState } from 'react'
import PageBanner from '../components/PageBanner'
import { ListingToolbar, ProductGrid } from '../components/ProductListing'
import { products } from '../products'
import { sortProducts, type SortKey } from '../products/sorting'

/**
 * The full catalogue in one plain grid — everything we carry, no filtering.
 * The Specialities page is the filtered view over the same products.
 */
export default function Catalog() {
  const [sort, setSort] = useState<SortKey>('name')
  const visible = useMemo(() => sortProducts(products, sort), [sort])

  return (
    <>
      <PageBanner
        variant="brand"
        title="Catalog"
        subtitle="Everything we carry, sourced from across the Seven Sister States of Northeast India."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Catalog' }]}
      />

      <section className="container-page py-12 lg:py-16">
        <ListingToolbar
          count={visible.length}
          sort={sort}
          onSortChange={setSort}
        />
        <ProductGrid items={visible} />
      </section>
    </>
  )
}
