import { site } from '../../config/site'

// Top strip in charcoal (ref: the inspo's running ticker): the offers scroll past, separated
// by the logo's little heart bubble, and pause under the pointer.
export function AnnouncementBar() {
  const run = [...site.announcements, ...site.announcements]
  return (
    <div className="overflow-hidden bg-ink text-paper" aria-label={site.announcements.join('. ')}>
      <ul className="marquee h-9 items-center text-[12px] font-medium tracking-[0.04em] uppercase" aria-hidden="true">
        {[...run, ...run].map((t, i) => (
          <li key={i} className="flex shrink-0 items-center gap-6 px-6">
            <span className="whitespace-nowrap">{t}</span>
            <span className="bubble-mark w-3.5" />
          </li>
        ))}
      </ul>
    </div>
  )
}
