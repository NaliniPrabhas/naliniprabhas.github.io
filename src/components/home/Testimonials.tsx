import { testimonials } from '../../data/content'
import Reveal from '../Reveal'
import Stars from '../Stars'

export default function Testimonials() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="container-page">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-2xl leading-snug font-bold italic sm:text-3xl lg:text-4xl">
            &ldquo;Style is a way to say who you are without having to
            speak&rdquo;
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-card bg-white p-7">
                <img
                  src="/assets/img/ic-invertedcomma.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6"
                />
                <blockquote className="mt-5 flex-1 font-body text-sm leading-relaxed text-gray-body">
                  {testimonial.quote}
                </blockquote>
                <Stars rating={testimonial.rating} className="mt-5" />
                <figcaption className="mt-4 flex items-center gap-3">
                  <img
                    src="/assets/img/reivew-img.jpg"
                    alt=""
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <span className="text-sm font-semibold">
                    {testimonial.name}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
