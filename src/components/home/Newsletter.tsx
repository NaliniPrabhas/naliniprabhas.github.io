import { useState } from 'react'

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="bg-navy py-16 text-white">
      <div className="container-page max-w-2xl text-center">
        <h2 className="text-2xl font-bold sm:text-3xl">
          Or subscribe to the newsletter
        </h2>

        {submitted ? (
          <p className="mt-8 font-body text-white/85" role="status">
            Thanks — you&apos;re on the list.
          </p>
        ) : (
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
              // Static site: no backend yet. Wire to a mail provider later.
              setSubmitted(true)
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 rounded-card bg-white px-5 py-3.5 text-sm text-ink placeholder:text-gray-muted focus:outline-2 focus:outline-offset-2 focus:outline-gold"
            />
            <button
              type="submit"
              className="rounded-card bg-gold px-8 py-3.5 text-sm font-bold tracking-wide text-ink uppercase transition-opacity hover:opacity-90"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
