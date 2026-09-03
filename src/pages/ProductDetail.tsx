import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import ProductCard from '../components/ProductCard'
import { findProduct, products } from '../products'

const detailTabs = [
  { key: 'details', label: 'Details', icon: '/assets/img/ic-description.svg' },
  {
    key: 'specifications',
    label: 'Specifications',
    icon: '/assets/img/ic-specifications.svg',
  },
] as const

/** Renders one optional attribute row only when the product defines it. */
function AttributeRow({ label, values }: { label: string; values?: string[] }) {
  if (!values || values.length === 0) return null

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2 py-3">
      <dt className="w-28 shrink-0 text-sm font-semibold">{label}</dt>
      <dd className="flex flex-wrap gap-2">
        {values.map((value) => (
          <span
            key={value}
            className="rounded-card border border-line px-3 py-1 text-sm text-gray-body"
          >
            {value}
          </span>
        ))}
      </dd>
    </div>
  )
}

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>()
  const product = productId ? findProduct(productId) : undefined

  const [activeTab, setActiveTab] =
    useState<(typeof detailTabs)[number]['key']>('details')
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <section className="container-page py-24 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <p className="mt-4 text-gray-body">
          That item may have moved or been renamed.
        </p>
        <Link
          to="/specialities"
          className="mt-8 inline-block rounded-card bg-navy px-8 py-3.5 text-sm font-semibold text-white"
        >
          Back to Specialities
        </Link>
      </section>
    )
  }

  const related = products
    .filter((p) => p.productId !== product.productId)
    .slice(0, 3)

  const tabContent: Record<(typeof detailTabs)[number]['key'], string> = {
    details: product.productDetails,
    specifications: product.productSpecification,
  }

  return (
    <>
      <PageBanner
        title={product.productName}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Specialities', to: '/specialities' },
          { label: product.productName },
        ]}
      />

      <section className="container-page py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-card bg-surface">
              <img
                src={product.productImages[activeImage]}
                alt={product.productName}
                className="h-80 w-full object-cover lg:h-[26rem]"
              />
            </div>

            {product.productImages.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.productImages.map((image, i) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    aria-pressed={activeImage === i}
                    className={`h-20 w-20 overflow-hidden rounded-card border-2 transition-colors ${
                      activeImage === i ? 'border-navy' : 'border-line'
                    }`}
                  >
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <p className="eyebrow">{product.productCategory}</p>
            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
              {product.productName}
            </h1>

            {/* Price lives here rather than on the listing cards. */}
            <p className="mt-6 text-3xl font-bold text-navy">
              ${product.productPrice}
            </p>

            <p className="mt-5 font-body leading-relaxed text-gray-body">
              {product.productDescription}
            </p>

            {/* Colours, sizes and weights are all optional — most of the
                catalogue defines only some of them. */}
            <dl className="mt-8 divide-y divide-line border-y border-line">
              <AttributeRow label="Colours" values={product.productColors} />
              <AttributeRow label="Sizes" values={product.productSizes} />
              <AttributeRow label="Weights" values={product.productWeights} />
            </dl>

            {/* Catalogue is browse-only for now — no cart wired up. */}
            <div className="mt-9">
              <a
                href="#"
                className="inline-block rounded-card bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
              >
                Enquire about this item
              </a>
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
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold sm:text-3xl">You may also like</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard
                  key={item.productId}
                  name={item.productName}
                  category={item.productCategory}
                  image={item.productImages[0]}
                  to={`/product/${item.productId}`}
                  fit="cover"
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}
