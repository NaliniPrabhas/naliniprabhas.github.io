type LogoProps = {
  /** 'light' inverts the colours for use on dark backgrounds. */
  variant?: 'dark' | 'light'
  className?: string
}

/**
 * Wordmark lockup: a large "N&P" monogram, then the expanded name set on two
 * lines whose combined line-height equals the monogram's height, so both sides
 * of the divider are exactly the same height.
 *
 * Monogram 32px / lines 16px  → mobile
 * Monogram 44px / lines 22px  → sm and up
 */
export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const isLight = variant === 'light'

  return (
    <span className={`inline-flex items-center gap-3 sm:gap-4 ${className}`}>
      <span
        aria-hidden="true"
        className={`text-[32px] leading-none font-extrabold tracking-tight sm:text-[44px] ${
          isLight ? 'text-white' : 'text-ink'
        }`}
      >
        N<span className="text-gold">&amp;</span>P
      </span>

      <span
        aria-hidden="true"
        className={`h-8 w-px shrink-0 sm:h-11 ${
          isLight ? 'bg-white/25' : 'bg-line'
        }`}
      />

      <span
        className={`flex flex-col text-[12px] leading-[16px] font-semibold tracking-[0.12em] uppercase sm:text-base sm:leading-[22px] ${
          isLight ? 'text-white/80' : 'text-gray-body'
        }`}
      >
        <span>Nalini &amp;</span>
        <span>Prabha&rsquo;s</span>
      </span>
    </span>
  )
}
