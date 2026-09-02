import { featuredProducts } from '../../data/products'
import ProductCard from '../ProductCard'
import Reveal from '../Reveal'

export default function FeaturedProducts() {
  return (
    <section className="container-page py-16 lg:py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product, i) => (
          <Reveal key={product.slug} delay={i * 80}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
