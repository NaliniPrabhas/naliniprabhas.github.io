import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import ProductCard from '../components/ProductCard'
import Stars from '../components/Stars'
import { findProduct, products } from '../data/products'

const detailTabs = [
  { key: 'description', label: 'Description', icon: '/assets/img/ic-description.svg' },
  {
    key: 'specifications',
    label: 'Specifications',
    icon: '/assets/img/ic-specifications.svg',
  },
  { key: 'delivery', label: 'Delivery', icon: '/assets/img/ic-delivery.svg' },
  { key: 'reviews', label: 'Reviews', icon: '/assets/img/ic-reviews.svg' },
] as const

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? findProduct(slug) : undefined

  const [activeTab, setActiveTab] =
    useState<(typeof detailTabs)[number]['key']>('description')
  const [size, setSize] = useState<number | null>(null)
  const [color, setColor] = useState(0)

  if (!product) {
    return (
      <section className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <p className="mt-4 text-gray-body">
          That item may have sold out or moved.
        </p>
        <Link
          to="/collection"
          className="mt-8 inline-block rounded-card bg-navy px-8 py-3.5 text-sm font-semibold text-white"
        >
          Back to collection
        </Link>
      </section>
    )
  }

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  const tabContent: Record<(typeof detailTabs)[number]['key'], string> = {
    description: product.description,
    specifications:
      'Synthetic and textile upper, foam midsole, rubber outsole. Imported. Style code shown on the box label.',
    delivery:
      'Free express shipping on orders over $100. Delivery in 2–5 business days. Free returns within 30 days, unworn and in original packaging.',
    reviews:
      'Reviews are collected from verified purchases only. This placeholder catalogue has no live review feed connected yet.',
  }

  return (
    <>
      <PageBanner
        title={product.name}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Collection', to: '/collection' },
          { label: product.name },
        ]}
      />

      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-card bg-surface p-8">
            <img
              src={product.image}
              alt={product.name}
              className="mx-auto w-full max-w-md object-contain"
            />
          </div>

          <div>
            <p className="text-sm text-gray-body">{product.category}</p>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-sm text-gray-body">
                {product.rating}.0 out of 5
              </span>
            </div>

            <p className="mt-6 text-3xl font-bold text-navy">${product.price}</p>
            <p className="mt-4 font-body leading-relaxed text-gray-body">
              {product.description}
            </p>

            <div className="mt-8">
              <h6 className="text-sm font-semibold">Colour</h6>
              <div className="mt-3 flex gap-3">
                {product.colors.map((hex, i) => (
                  <button
                    key={hex}
                    type="button"
                    onClick={() => setColor(i)}
                    aria-label={`Colour option ${i + 1}`}
                    aria-pressed={color === i}
                    style={{ backgroundColor: hex }}
                    className={`h-9 w-9 rounded-full border-2 transition-transform ${
                      color === i
                        ? 'scale-110 border-navy'
                        : 'border-line hover:scale-105'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="mt-7">
              <h6 className="text-sm font-semibold">Size</h6>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    aria-pressed={size === s}
                    className={`min-w-14 rounded-card border px-3 py-2 text-sm font-medium transition-colors ${
                      size === s
                        ? 'border-navy bg-navy text-white'
                        : 'border-line hover:border-navy'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              {/* Catalogue is browse-only for now — no cart wired up. */}
              <a
                href="#"
                className="rounded-card bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
              >
                Enquire about this item
              </a>
              <button
                type="button"
                aria-label="Save to wishlist"
                className="flex h-12 w-12 items-center justify-center rounded-card border border-line transition-colors hover:border-navy"
              >
                <img
                  src="/assets/img/ic-like.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Detail tabs */}
        <div className="mt-16 border-t border-line pt-10">
          <div
            role="tablist"
            aria-label="Product details"
            className="flex flex-wrap gap-2"
          >
            {detailTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 rounded-card px-5 py-2.5 text-sm font-medium transition-colors ${
                  activeTab === tab.key
                    ? 'bg-navy text-white'
                    : 'bg-surface text-gray-body hover:text-navy'
                }`}
              >
                <img
                  src={tab.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4"
                />
                {tab.label}
              </button>
            ))}
          </div>
          <p className="mt-6 max-w-3xl font-body leading-relaxed text-gray-body">
            {tabContent[activeTab]}
          </p>
        </div>

        {/* Related */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold sm:text-3xl">You may also like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
