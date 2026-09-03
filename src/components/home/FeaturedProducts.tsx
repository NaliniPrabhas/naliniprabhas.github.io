import { featuredProducts } from '../../data/products'
import ProductCard from '../ProductCard'
import Reveal from '../Reveal'

export default function FeaturedProducts() {
  return (
    <section
      id="specialities"
      className="container-page scroll-mt-20 py-16 lg:py-20"
    >
      <Reveal>
        <h2 className="text-3xl font-bold sm:text-4xl">Specialities</h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product, i) => (
          <Reveal key={product.slug} delay={i * 80}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
