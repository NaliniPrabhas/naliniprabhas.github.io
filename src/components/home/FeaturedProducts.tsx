import { Link } from 'react-router-dom'
import { products } from '../../products'
import ProductCard from '../ProductCard'
import Reveal from '../Reveal'

export default function FeaturedProducts() {
  return (
    <section
      id="categories"
      className="container-page scroll-mt-20 py-16 lg:py-20"
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Explore more categories
          </h2>
          {/* Arrow-only link, so the heading carries the label; the aria-label
              is what screen readers announce. */}
          <Link
            to="/collection"
            aria-label="View the full catalog"
            className="group flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-gold hover:text-ink"
          >
            {/* Inline so the arrow inherits the link colour on hover. */}
            <svg
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M2 8h11M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((product, i) => (
          <Reveal key={product.productId} delay={i * 80}>
            <ProductCard
              name={product.productName}
              category={product.productCategory}
              image={product.productImages[0]}
              to={`/product/${product.productId}`}
              fit="cover"
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
