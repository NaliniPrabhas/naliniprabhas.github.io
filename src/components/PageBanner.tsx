import { Link } from 'react-router-dom'

type Crumb = { label: string; to?: string }

type PageBannerProps = {
  title: string
  crumbs: Crumb[]
  /** Optional backdrop photograph; the banner switches to light-on-dark. */
  image?: string
}

/** Inner-page hero with breadcrumbs, matching the template's collection header. */
export default function PageBanner({ title, crumbs, image }: PageBannerProps) {
  const onImage = Boolean(image)

  return (
    <section
      className={`relative isolate overflow-hidden ${
        onImage ? 'bg-ink' : 'border-b border-line bg-surface'
      }`}
    >
      {image ? (
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
      ) : (
        /* Soft navy wash instead of the template's seamed background SVG. */
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full bg-navy/5 blur-3xl"
        />
      )}

      <div
        className={`container-page relative ${
          onImage ? 'py-24 lg:py-40' : 'py-12 lg:py-16'
        }`}
      >
        <h1
          className={`text-3xl font-bold sm:text-4xl ${
            onImage ? 'text-white lg:text-5xl' : ''
          }`}
        >
          {title}
        </h1>
        <nav aria-label="Breadcrumb" className="mt-3">
          <ol
            className={`flex flex-wrap items-center gap-2 text-sm ${
              onImage ? 'text-white/70' : 'text-gray-body'
            }`}
          >
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {crumb.to ? (
                  <Link
                    to={crumb.to}
                    className={onImage ? 'hover:text-white' : 'hover:text-navy'}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    aria-current="page"
                    className={`font-medium ${
                      onImage ? 'text-white' : 'text-ink'
                    }`}
                  >
                    {crumb.label}
                  </span>
                )}
                {i < crumbs.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={onImage ? 'text-white/40' : 'text-line'}
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
