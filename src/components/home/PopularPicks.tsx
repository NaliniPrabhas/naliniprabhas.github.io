import { popularPicks } from '../../data/content'
import Reveal from '../Reveal'

/**
 * Horizontal scroll rail. Native scroll-snap replaces the template's Swiper
 * dependency and keeps keyboard/touch behaviour for free.
 */
export default function PopularPicks() {
  return (
    <section
      id="popular-products"
      className="scroll-mt-20 bg-surface py-16 lg:py-20"
    >
      <div className="container-page">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">Popular Picks</h2>
          <p className="mt-3 max-w-xl font-body text-gray-body">
            Our popular picks for most favorited Men&apos;s &amp; Women&apos;s
            shoes.
          </p>
        </Reveal>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]">
          {popularPicks.map((image, i) => (
            <figure
              key={`${image}-${i}`}
              className="w-[280px] shrink-0 snap-start overflow-hidden rounded-card bg-white sm:w-[340px]"
            >
              <img
                src={image}
                alt={`Popular pick ${i + 1}`}
                loading="lazy"
                className="h-[300px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[380px]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
