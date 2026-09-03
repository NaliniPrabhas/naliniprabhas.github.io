import { Link } from 'react-router-dom'

type ProductCardProps = {
  name: string
  category: string
  image: string
  /** Where the thumbnail, the name and the button all point. */
  to: string
  /**
   * Cutout PNGs need `contain` and padding; photographs need `cover`.
   * Defaults to `contain` for the placeholder product images.
   */
  fit?: 'contain' | 'cover'
}

/**
 * Listing card shared by the catalog, the homepage rows and the Specialities
 * page. Deliberately takes primitives rather than a product object so any data
 * shape can render through it.
 *
 * Price is intentionally absent — it is shown on the product page only.
 */
export default function ProductCard({
  name,
  category,
  image,
  to,
  fit = 'contain',
}: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white transition-shadow hover:shadow-lg">
      <Link to={to} className="block overflow-hidden bg-surface">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className={`h-56 w-full transition-transform duration-500 group-hover:scale-105 ${
            fit === 'cover' ? 'object-cover' : 'object-contain p-6'
          }`}
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h5 className="text-base font-semibold">
          <Link to={to} className="hover:text-navy">
            {name}
          </Link>
        </h5>
        <p className="mt-1 text-sm text-gray-body">{category}</p>

        {/* mt-auto keeps buttons aligned across cards with differing name lengths. */}
        <div className="mt-auto pt-5">
          <Link
            to={to}
            className="block rounded-card bg-navy px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            View Product
          </Link>
        </div>
      </div>
    </article>
  )
}
