import type { ReactNode } from 'react'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { company } from '../data/company'

/** Section heading used down the length of the page. */
function Heading({ children }: { children: ReactNode }) {
  return <h2 className="text-2xl font-bold sm:text-3xl">{children}</h2>
}

export default function About() {
  const { contact } = company

  return (
    <>
      <PageBanner
        title="About Us"
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        image="/assets/img/about-banner.jpg"
      />

      <div className="container-page grid gap-14 py-14 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16 lg:py-20">
        <div className="space-y-14">
          {/* Who we are */}
          <Reveal>
            <section>
              <p className="eyebrow">Who we are</p>
              <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
                {company.tagline}
              </h2>
              {company.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-5 font-body leading-relaxed text-gray-body"
                >
                  {paragraph}
                </p>
              ))}

              <ul className="mt-7 flex flex-wrap gap-2.5">
                {company.sevenSisters.map((state) => (
                  <li
                    key={state}
                    className="rounded-full bg-surface px-4 py-2 font-body text-sm text-ink"
                  >
                    {state}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* Our Journey */}
          <Reveal>
            <section id="journey" className="scroll-mt-28">
              <Heading>Our Journey</Heading>
              {company.journey.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-5 font-body leading-relaxed text-gray-body"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          </Reveal>

          {/* What We Do */}
          <Reveal>
            <section id="what-we-do" className="scroll-mt-28">
              <Heading>What We Do</Heading>
              <p className="mt-5 font-body leading-relaxed text-gray-body">
                {company.whatWeDoIntro}
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {company.productCategories.map((category) => (
                  <li
                    key={category}
                    className="flex items-start gap-3 rounded-card border border-line bg-white p-4 font-body text-sm text-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    />
                    {category}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* Our Focus Areas */}
          <Reveal>
            <section id="focus-areas" className="scroll-mt-28">
              <Heading>Our Focus Areas</Heading>
              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                {company.focusAreas.map((area) => (
                  <article
                    key={area.title}
                    className="rounded-card bg-surface p-6"
                  >
                    <h3 className="text-lg font-semibold">{area.title}</h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-gray-body">
                      {area.body}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>

          {/* Ethos: vision and mission */}
          <Reveal>
            <section id="vision" className="scroll-mt-28">
              <Heading>Our Vision</Heading>
              <p className="mt-5 font-body leading-relaxed text-gray-body">
                {company.vision}
              </p>

              <div className="mt-8 rounded-card bg-navy p-8 text-white sm:p-10">
                <p className="eyebrow">Our Mission</p>
                <p className="mt-4 font-body text-lg leading-relaxed">
                  {company.mission}
                </p>
              </div>

              <p className="mt-8 font-body leading-relaxed text-gray-body">
                {company.closing}
              </p>
            </section>
          </Reveal>

          {/* Contact Us */}
          <Reveal>
            <section id="contact" className="scroll-mt-28">
              <Heading>Contact Us</Heading>
              <p className="mt-5 font-body leading-relaxed text-gray-body">
                For sourcing enquiries, samples, private-label projects or
                partnership conversations, reach out to us directly.
              </p>

              <dl className="mt-7 grid gap-6 sm:grid-cols-2">
                <div className="rounded-card border border-line p-6">
                  <dt className="text-xs font-semibold tracking-[0.14em] text-gray-muted uppercase">
                    Email
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-body break-all text-ink hover:text-navy"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div className="rounded-card border border-line p-6">
                  <dt className="text-xs font-semibold tracking-[0.14em] text-gray-muted uppercase">
                    Phone
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${contact.phoneHref}`}
                      className="font-body text-ink hover:text-navy"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
            </section>
          </Reveal>
        </div>

        {/* Company details, kept alongside the copy on wide screens. */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-card border border-line bg-surface p-6">
            <h2 className="text-base font-semibold">Company Details</h2>
            <dl className="mt-5 space-y-5">
              {company.registrations.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold tracking-[0.14em] text-gray-muted uppercase">
                    {item.label}
                  </dt>
                  <dd className="mt-1.5 font-body text-sm break-all text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-t border-line pt-5 font-body text-xs leading-relaxed text-gray-muted">
              {company.legalName} &middot; Northeast India
            </p>
          </div>
        </aside>
      </div>
    </>
  )
}
