import { Link } from 'react-router-dom'
import Reveal from '../Reveal'

const images = [
  '/assets/img/about-img-01.jpg',
  '/assets/img/about-img-02.jpg',
  '/assets/img/about-img-03.jpg',
]

export default function AboutBrand() {
  return (
    <section id="about-us" className="container-page scroll-mt-20 py-16 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">About the Brand</h2>
          <p className="mt-5 font-body leading-relaxed text-gray-body">
            We started in a single workshop with a simple idea: make gear that
            holds up. Every pair is tested by people who actually run, hoop and
            skate in them before it ever reaches a shelf.
          </p>
          <p className="mt-4 font-body leading-relaxed text-gray-body">
            No shortcuts on materials, no seasonal gimmicks. Just well-made
            pieces you can wear until they wear out, then replace with the same
            model next year.
          </p>
          <Link
            to="/collection"
            className="mt-8 inline-block rounded-card bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            Shop now
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {images.map((image, i) => (
            <Reveal
              key={image}
              delay={i * 100}
              className={i === 0 ? 'col-span-2' : ''}
            >
              <img
                src={image}
                alt=""
                loading="lazy"
                className={`w-full rounded-card object-cover ${
                  i === 0 ? 'h-56 sm:h-64' : 'h-40 sm:h-48'
                }`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
