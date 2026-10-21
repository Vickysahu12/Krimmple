import { Link } from 'react-router'
import { site } from '../../config/site'
import { cn } from '../../lib/cn'

// The client's logo (public/brand), charcoal and red as drawn. `full` swaps the charcoal for
// white, for the charcoal footer.
export function Logo({ className, full, size = 'md' }) {
  return (
    <Link to="/" aria-label={`${site.name} home`} className={cn('press group relative inline-flex items-center', className)}>
      <img
        src={full ? '/brand/logo-light.png' : '/brand/logo.png'}
        alt={site.name}
        width={500}
        height={125}
        draggable={false}
        className={cn('w-auto transition-[height] duration-300 ease-[var(--ease-out)]', full ? 'h-12' : size === 'sm' ? 'h-8' : 'h-9 lg:h-10')}
      />
    </Link>
  )
}
