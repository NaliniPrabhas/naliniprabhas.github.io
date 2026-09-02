import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-page py-24 text-center lg:py-32">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
        This page went missing
      </h1>
      <p className="mx-auto mt-5 max-w-md font-body text-gray-body">
        The link may be out of date, or the page has moved somewhere else.
      </p>
      <Link
        to="/"
        className="mt-9 inline-block rounded-card bg-navy px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
      >
        Back to home
      </Link>
    </section>
  )
}
