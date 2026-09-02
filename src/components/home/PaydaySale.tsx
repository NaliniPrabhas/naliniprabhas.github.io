import { Link } from 'react-router-dom'
import Reveal from '../Reveal'

export default function PaydaySale() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <img
        src="/assets/img/payday-sale-img.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Scrim keeps the copy legible without washing the photo out. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60"
      />
      <div className="container-page relative py-20 lg:py-28">
        <Reveal className="max-w-xl">
          <h2 className="text-4xl leading-tight font-extrabold sm:text-5xl">
            Payday sale
            <br />
            now
          </h2>
          <p className="mt-5 font-body text-white/85">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <p className="mt-4 text-sm font-medium text-gold">
            1 June - 10 June 2025
          </p>
          <p className="mt-1 text-xs text-white/60">*Terms &amp; Conditions apply</p>
          <Link
            to="/collection"
            className="mt-8 inline-block rounded-card bg-white px-8 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold"
          >
            Shop now
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
