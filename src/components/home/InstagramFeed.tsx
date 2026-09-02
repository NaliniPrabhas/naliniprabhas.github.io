import { instagramPosts } from '../../data/content'
import Reveal from '../Reveal'

export default function InstagramFeed() {
  return (
    <section className="container-page py-16 lg:py-20">
      <Reveal>
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Follow products on Instagram
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {instagramPosts.map((post, i) => (
          <Reveal key={`${post}-${i}`} delay={i * 60}>
            <a
              href="#"
              aria-label="Instagram Post"
              className="group relative block aspect-square overflow-hidden rounded-card"
            >
              <img
                src={post}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/50 opacity-0 transition-opacity group-hover:opacity-100">
                <img
                  src="/assets/img/ic-instagram-w.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6"
                />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
