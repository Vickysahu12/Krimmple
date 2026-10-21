import { Link } from 'react-router'
import { Icon } from '../../components/ui/Icon'
import { cn } from '../../lib/cn'

/** A section title in the inspo's manner: a light Lexend heading on the left, "View all" on the right. */
export function Title({ id, children, to, cta = 'View all', className, aside }) {
  return (
    <div className={cn('flex flex-wrap items-end justify-between gap-x-6 gap-y-3', className)}>
      <h2 id={id} className="display text-[28px] sm:text-[34px]">
        {children}
      </h2>
      {aside}
      {to && (
        <Link to={to} className="group flex shrink-0 items-center gap-2 pb-1.5 text-[13px] text-ink">
          <span className="link-line">{cta}</span>
          <Icon name="arrow" size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  )
}
