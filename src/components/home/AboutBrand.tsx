import { Link } from 'react-router-dom'
import Reveal from '../Reveal'
import { company } from '../../data/company'

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
          <p className="eyebrow">About us</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            {company.tagline}
          </h2>
          {company.summary.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 font-body leading-relaxed text-gray-body"
            >
              {paragraph}
            </p>
          ))}
          <Link
            to="/about"
            className="mt-8 inline-block rounded-card bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            Read our full story
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
