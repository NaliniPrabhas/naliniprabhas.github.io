import { Link } from 'react-router-dom'

type Crumb = { label: string; to?: string }

type PageBannerProps = {
  title: string
  crumbs: Crumb[]
  /** Optional backdrop photograph; the banner switches to light-on-dark. */
  image?: string
  /**
   * `brand` swaps the flat grey for the navy/gold treatment used on the
   * listing pages — richer than `plain` without a photograph competing with
   * the product cards below it.
   */
  variant?: 'plain' | 'brand'
  /** Short line under the title. Only rendered on the `brand` variant. */
  subtitle?: string
}

/**
 * Fine diagonal pinstripe, a nod to woven bamboo. Kept single-direction and
 * very low contrast — a crosshatch at this scale reads as graph paper.
 */
const weave = {
  backgroundImage: `repeating-linear-gradient(45deg, rgba(255,255,255,0.045) 0 1px, transparent 1px 16px)`,
}

/**
 * Lighter-blue spotlight top-right for depth. Deliberately blue, not gold:
 * a broad gold wash over navy desaturates to grey-olive whatever the blend
 * mode, so the gold is carried by the thin arcs and hairline instead.
 */
const spotlight = {
  backgroundImage: `radial-gradient(46rem 24rem at 88% -14%, rgba(43,105,180,0.7), transparent 66%)`,
}

/** Deepens the headline side so white type keeps its contrast. */
const vignette = {
  backgroundImage: `radial-gradient(65% 120% at 0% 55%, rgba(13,13,17,0.45), transparent 70%)`,
}

/** Inner-page hero with breadcrumbs. */
export default function PageBanner({
  title,
  crumbs,
  image,
  variant = 'plain',
  subtitle,
}: PageBannerProps) {
  const onImage = Boolean(image)
  const brand = !onImage && variant === 'brand'
  // Both the photograph and the navy panel need light type.
  const light = onImage || brand

  return (
    <section
      className={`relative isolate overflow-hidden ${
        light ? 'bg-ink' : 'border-b border-line bg-surface'
      }`}
    >
      {onImage && (
        <>
          {/* Cropped below centre so the strip keeps the horizon and the road
              rather than mostly sky, and kept dark on the headline side so
              white type stays legible. */}
          <img
            src={image}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_70%] brightness-115"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/15" />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 via-ink/35 to-transparent"
          />
        </>
      )}

      {brand && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-br from-navy via-navy-dark to-ink"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            style={spotlight}
          />
          {/* Concentric arcs, echoing a coiled bamboo weave. Thin strokes keep
              the gold reading as gold. */}
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            fill="none"
            /* Smaller and pushed further off on phones, where a full-size arc
               set would sit right behind the headline. */
            className="absolute -top-36 -right-44 -z-10 h-[24rem] w-[24rem] text-gold/30 sm:-top-60 sm:-right-52 sm:h-[42rem] sm:w-[42rem]"
          >
            <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="74" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="52" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <div aria-hidden="true" className="absolute inset-0 -z-10" style={vignette} />
          <div aria-hidden="true" className="absolute inset-0 -z-10" style={weave} />
          {/* Gold hairline along the bottom edge, tying into the trust bar. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent"
          />
        </>
      )}

      {variant === 'plain' && !onImage && (
        /* Soft navy wash instead of the template's seamed background SVG. */
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-navy/5 blur-3xl"
        />
      )}

      <div
        className={`container-page relative ${
          onImage ? 'py-24 lg:py-40' : brand ? 'py-16 lg:py-24' : 'py-12 lg:py-16'
        }`}
      >
        <h1
          className={`text-3xl font-bold sm:text-4xl ${
            light ? 'text-white lg:text-5xl' : ''
          }`}
        >
          {title}
        </h1>

        {brand && subtitle && (
          <p className="mt-4 max-w-xl font-body leading-relaxed text-white/75">
            {subtitle}
          </p>
        )}

        <nav aria-label="Breadcrumb" className={brand && subtitle ? 'mt-6' : 'mt-3'}>
          <ol
            className={`flex flex-wrap items-center gap-2 text-sm ${
              light ? 'text-white/70' : 'text-gray-body'
            }`}
          >
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className={light ? 'hover:text-white' : 'hover:text-navy'}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    aria-current="page"
                    className={`font-medium ${light ? 'text-white' : 'text-ink'}`}
                  >
                    {crumb.label}
                  </span>
                )}
                {i < crumbs.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={light ? 'text-white/40' : 'text-line'}
                  >
                    /
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}
