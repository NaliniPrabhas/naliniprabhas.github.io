import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {/* Backdrop photograph. Two scrim layers sit on top: a flat wash that
          guarantees contrast everywhere and a left-weighted gradient that keeps
          the headline side darkest. */}
      <img
        src="/assets/img/hero-northeast.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover brightness-110 saturate-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-ink/45 lg:bg-ink/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-ink/45 to-transparent"
      />

      <div className="container-page py-24 lg:py-36">
        <div className="max-w-2xl">
          <p className="eyebrow">Northeast India</p>
          <h1 className="mt-4 text-4xl leading-[1.1] font-extrabold text-white sm:text-5xl lg:text-[3.5rem]">
            Bringing the Seven Sister States of India to the World
          </h1>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/80">
            Bamboo, leather, areca, handloom and Bhut Jolokia — sourced with
            artisans, farmers and producer groups across Northeast India, and
            supplied to buyers who care where their products come from.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              to="/collection"
              className="rounded-card bg-white px-8 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white/90"
            >
              Explore the catalog
            </Link>

            <Link
              to="/about"
              className="text-sm font-semibold text-white hover:text-gold"
            >
              About us &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
