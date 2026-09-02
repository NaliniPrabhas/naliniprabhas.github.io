import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import Stars from './Stars'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-shadow hover:shadow-lg">
      <Link
        to={`/product/${product.slug}`}
        className="block overflow-hidden bg-surface"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-56 w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h5 className="text-base font-semibold">
          <Link to={`/product/${product.slug}`} className="hover:text-navy">
            {product.name}
          </Link>
        </h5>

        <Stars rating={product.rating} className="mt-2" />

        <p className="mt-3 text-lg font-bold text-navy">${product.price}</p>
        <p className="mt-1 text-sm text-gray-body">{product.category}</p>

        <Link
          to={`/product/${product.slug}`}
          className="mt-5 rounded-card bg-navy px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
        >
          View Product
        </Link>
      </div>
    </article>
  )
}
