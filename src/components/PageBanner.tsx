import { Link } from 'react-router-dom'

type Crumb = { label: string; to?: string }

type PageBannerProps = {
  title: string
  crumbs: Crumb[]
}

/** Inner-page hero with breadcrumbs, matching the template's collection header. */
export default function PageBanner({ title, crumbs }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      {/* Soft navy wash instead of the template's seamed background SVG. */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-navy/5 blur-3xl"
      />
      <div className="container-page relative py-12 lg:py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-3">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-body">
            {crumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-navy">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="font-medium text-ink">
                    {crumb.label}
                  </span>
                )}
                {i < crumbs.length - 1 && (
                  <span aria-hidden="true" className="text-line">
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
