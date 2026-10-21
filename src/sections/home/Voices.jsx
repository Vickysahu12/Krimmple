import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { testimonials, perks, stories } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Title } from './Title'
import { cn } from '../../lib/cn'

/**
 * The client note (ref: the photo on the left, one big quote on the right). The photo is the
 * piece the note is about; both change together on a timer that pauses on hover.
 */
export function Testimonial() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const t = testimonials[i]
  const p = getProductSync(t.productId)

  useEffect(() => {
    if (paused || reduce) return
    const id = setTimeout(() => setI((n) => (n + 1) % testimonials.length), 6500)
    return () => clearTimeout(id)
  }, [i, paused, reduce])

  return (
    <section className="mt-16 lg:mt-24" aria-label="What customers say" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto grid max-w-[1440px] bg-mist lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden bg-sand lg:aspect-auto lg:min-h-[520px]">
          <AnimatePresence initial={false}>
            <motion.div key={p.id} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.7 }}>
              {p.wear[0] === 'women' ? (
                <Img id={p.images[0]} alt={p.name} className="h-full w-full" position="50% 6%" />
              ) : (
                // Men's and kids' photos are small: show the look and a close view side by side.
                <div className="grid h-full grid-cols-2 gap-1.5 bg-paper">
                  <Img id={p.images[0]} alt={p.name} className="h-full" position="50% 6%" />
                  <Img id={p.images[1]} alt="" className="h-full" position="50% 30%" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <Link to={`/product/${p.slug}`} className="group absolute bottom-5 left-5 flex items-center gap-3 bg-white px-4 py-3 shadow-float">
            <span className="text-[13px] text-ink">{p.name}</span>
            <Icon name="arrow" size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center px-6 py-14 text-center sm:px-12 lg:px-16">
          <span className="flex gap-0.5 text-red" aria-label={`${t.rating} out of 5`}>
            {Array.from({ length: 5 }, (_, k) => (
              <Icon key={k} name="star" size={15} weight={k < t.rating ? 'fill' : 'regular'} />
            ))}
          </span>
          <div className="relative mt-6 min-h-[200px] sm:min-h-[170px]" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}>
                <blockquote className="display text-[22px] leading-snug text-ink sm:text-[28px]">“{t.text}”</blockquote>
                <figcaption className="mt-6 text-[14px] text-ink">
                  <span className="font-bold">{t.name}</span>
                  <span className="block text-[12.5px] text-ink-soft">{t.city}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex gap-1.5" role="group" aria-label="Choose a note">
            {testimonials.map((r, n) => (
              <button key={r.name} type="button" onClick={() => setI(n)} aria-label={`Note ${n + 1}`} aria-pressed={n === i} className="grid h-6 place-items-center px-0.5">
                <span className={cn('block h-1.5 rounded-full transition-[width,background-color] duration-300 ease-[var(--ease-out)]', n === i ? 'w-6 bg-red' : 'w-1.5 bg-line-strong hover:bg-ink-soft')} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Three services (ref: Free shipping / Money guarantee / Online support). */
export function Services() {
  return (
    <ul className="mx-auto grid max-w-[1440px] divide-y divide-line border-b border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0" aria-label="Our promises">
      {perks.map((p) => (
        <li key={p.title} className="group flex flex-col items-center px-6 py-9 text-center">
          <Icon name={p.icon} size={28} weight="light" className="text-ink transition-[color,translate] duration-300 group-hover:-translate-y-1 group-hover:text-red" />
          <span className="mt-3 text-[15px] font-bold text-ink">{p.title}</span>
          <span className="mt-1 text-[13px] text-ink-soft">{p.body}</span>
        </li>
      ))}
    </ul>
  )
}

/** "Our story" (ref: three blog cards), each opening a page that exists. */
export function Stories() {
  const ref = useReveal()
  return (
    <section ref={ref} className="shell pt-16 lg:pt-24" aria-labelledby="stories-title">
      <Title id="stories-title" to="/about" cta="About Krimmple">
        Our story
      </Title>
      <ul className="mt-7 grid gap-8 md:grid-cols-3 md:gap-5">
        {stories.map((s, i) => (
          <li key={s.title} data-reveal style={{ '--reveal-delay': `${i * 80}ms` }}>
            <Link to={s.to} className="group block">
              <span className="block overflow-hidden bg-sand">
                <Img id={s.image} alt="" className="aspect-[4/3]" position="50% 8%" imgClassName="transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
              </span>
              <span className="mt-4 flex items-center gap-3 text-[11px] font-bold tracking-[0.12em] text-ink-soft uppercase">
                <span className="bg-red px-2 py-0.5 text-white">{s.tag}</span>
                {s.date}
              </span>
              <span className="headline mt-3 block text-[19px] text-ink transition-colors group-hover:text-red">{s.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
