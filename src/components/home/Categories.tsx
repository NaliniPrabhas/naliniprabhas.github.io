import { Link } from 'react-router-dom'
import { categories } from '../../data/content'
import Reveal from '../Reveal'

export default function Categories() {
  return (
    <section
      id="specialities"
      className="container-page scroll-mt-20 py-16 lg:py-24"
    >
      <Reveal>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Explore more categories
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <Reveal key={category.title} delay={i * 90}>
            <Link
              to={category.to}
              className="group relative block h-72 overflow-hidden rounded-card"
            >
              <img
                src={category.image}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h5 className="text-lg font-semibold">{category.title}</h5>
                <span className="mt-2 inline-flex items-center gap-2 text-sm text-gold">
                  Explore Now!
                  {/* Inline so the arrow inherits the gold link colour. */}
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M2 8h11M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
