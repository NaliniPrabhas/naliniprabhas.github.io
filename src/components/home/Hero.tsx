import { useState } from 'react'
import { Link } from 'react-router-dom'

const VIDEO_ID = 'wWY_clozJlU'

export default function Hero() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="container-page grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="eyebrow">The New 2023</p>
          <h1 className="mt-4 text-5xl leading-[1.05] font-extrabold sm:text-6xl lg:text-7xl">
            AIR JORDAN
          </h1>
          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-gray-body">
            We know how large objects will act, but things on a small scale just
            do not act that way. Built for the way you actually move.
          </p>

          <div className="mt-9 flex items-center gap-6">
            <Link
              to="/collection"
              className="rounded-card bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
            >
              Shop now
            </Link>

            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="flex items-center gap-3 text-sm font-medium text-ink hover:text-navy"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md">
                <img
                  src="/assets/img/ic-play-dark.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </span>
              Play Video
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/assets/img/banner-img-lg.png"
            alt="Featured sneaker"
            className="mx-auto w-full max-w-xl"
          />
        </div>
      </div>

      {/* Video lightbox */}
      {playing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Product video"
        >
          <button
            type="button"
            onClick={() => setPlaying(false)}
            aria-label="Close video"
            className="absolute top-6 right-6 text-3xl leading-none text-white"
          >
            &times;
          </button>
          <div className="aspect-video w-full max-w-4xl">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
              title="Product video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full rounded-card"
            />
          </div>
        </div>
      )}
    </section>
  )
}
