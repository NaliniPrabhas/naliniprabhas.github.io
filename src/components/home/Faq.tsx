import { useState } from 'react'
import { faqs } from '../../data/content'
import Reveal from '../Reveal'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="container-page py-16 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Quick Questions to ask
          </h2>
          <p className="mt-5 font-body leading-relaxed text-gray-body">
            The things people ask us most often, answered plainly. If yours
            isn&apos;t here, reach out and a human will get back to you.
          </p>
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={`text-base font-medium ${
                        isOpen ? 'text-navy' : 'text-ink'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <img
                      src="/assets/img/ic-plus.svg"
                      alt=""
                      aria-hidden="true"
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <p className="overflow-hidden font-body text-sm leading-relaxed text-gray-body">
                    <span className="block pb-5">{faq.answer}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
