type StarsProps = {
  rating: number
  total?: number
  className?: string
}

/** Filled/empty star row using the template's star SVGs. */
export default function Stars({ rating, total = 5, className = '' }: StarsProps) {
  return (
    <div
      className={`flex items-center gap-1 ${className}`}
      role="img"
      aria-label={`Rated ${rating} out of ${total} stars`}
    >
      {Array.from({ length: total }, (_, i) => (
        <img
          key={i}
          src={i < rating ? '/assets/img/star-a.svg' : '/assets/img/star.svg'}
          alt=""
          aria-hidden="true"
          className="h-3.5 w-3.5"
        />
      ))}
    </div>
  )
}
