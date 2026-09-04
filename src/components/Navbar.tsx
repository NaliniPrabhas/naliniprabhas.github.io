import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../data/content'
import Logo from './Logo'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Only route links get an active state; in-page hash links would all match
  // "/" and light up at once on the homepage.
  const isCurrent = (to: string) =>
    !to.includes('#') && location.pathname === to

  // Close the drawer whenever the route changes.
  useEffect(() => setOpen(false), [location])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Allow Escape to dismiss the drawer.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <nav className="container-page flex h-20 items-center justify-between sm:h-24">
          <Link to="/" className="shrink-0" aria-label="Nalini & Prabha's home">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-navy ${
                    isCurrent(link.to) ? 'text-navy' : 'text-gray-body'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            >
              <span className="block h-0.5 w-6 bg-ink" />
              <span className="block h-0.5 w-6 bg-ink" />
              <span className="block h-0.5 w-4 bg-ink" />
            </button>
          </div>
        </nav>
      </header>

      {/* The drawer lives outside <header> on purpose: the header's
          backdrop-blur creates a containing block for fixed-position
          descendants, which would trap this overlay inside the header box. */}
      <div
        className={`fixed inset-0 z-50 overflow-hidden lg:hidden ${
          open ? '' : 'pointer-events-none'
        }`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <aside
          className={`absolute top-0 right-0 flex h-full w-[85%] max-w-sm flex-col overflow-y-auto bg-white p-6 shadow-xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-2xl leading-none text-gray-body"
            >
              &times;
            </button>
          </div>

          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="block border-b border-line py-3 text-base font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  )
}
