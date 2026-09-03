import { socialIcons, trustBadges } from '../data/content'
import Logo from './Logo'

export default function Footer() {
  return (
    <>
      {/* Trust bar */}
      <section className="border-y border-line bg-surface">
        <div className="container-page grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge) => (
            <div key={badge} className="flex items-center gap-3">
              {/* ic-check is a white stroke, so it needs a dark disc behind it. */}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy">
                <img
                  src="/assets/img/ic-check.svg"
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </span>
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-ink text-white">
        {/* Brand on the left, socials pushed to the right edge; they stack
            under the brand once there is no room for two columns. */}
        <div className="container-page flex flex-col gap-10 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xs">
            <Logo variant="light" />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Complete your style with awesome clothes from us.
            </p>
          </div>

          <div className="flex gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                // Icons are navy, so the chip stays light for contrast.
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors hover:bg-gold"
              >
                <img
                  src={social.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10">
          <p className="container-page py-6 text-center text-xs text-white/50">
            &copy; {new Date().getFullYear()} Nalini &amp; Prabha&rsquo;s. All
            rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
