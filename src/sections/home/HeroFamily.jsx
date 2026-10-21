import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { heroSlides, editorial } from '../../data/content'
import { Img } from '../../components/ui/Img'
import { Button } from '../../components/ui/Button'
import { cn } from '../../lib/cn'

const HOLD = 6500
const EASE = [0.23, 1, 0.32, 1]

/**
 * Hero after the inspo's split banner: photographs on the left, a centred line and an outlined
 * "Shop now" on the right. Three families take turns: Women, Men and Kids. Women fill the
 * left half with one large photo; men and kids, whose photos are smaller, stand two side by
 * side. The tabs underline the family on show and fill with the timer, which stops once one
 * is chosen.
 */
export function HeroFamily() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [pinned, setPinned] = useState(false)
  const [paused, setPaused] = useState(false)
  const slide = heroSlides[i]

  useEffect(() => {
    if (pinned || paused || reduce) return
    const t = setTimeout(() => setI((n) => (n + 1) % heroSlides.length), HOLD)
    return () => clearTimeout(t)
  }, [i, pinned, paused, reduce])

  const pick = (n) => {
    setI(n)
    setPinned(true)
  }

  return (
    <section aria-labelledby="hero-title" className="border-b border-line" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto grid max-w-[1440px] lg:min-h-[min(640px,calc(100dvh-130px))] lg:grid-cols-[1.25fr_1fr]">
        {/* The photographs */}
        <div className="relative aspect-[4/5] overflow-hidden bg-sand sm:aspect-[16/12] lg:aspect-auto">
          <AnimatePresence initial={false}>
            <motion.div
              key={slide.id}
              className={cn('absolute inset-0 grid', slide.images.length > 1 ? 'grid-cols-2 gap-1.5 bg-paper' : 'grid-cols-1')}
              initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 100% 0 0)' }}
              animate={reduce ? { opacity: 1 } : { clipPath: 'inset(0 0% 0 0)' }}
              exit={{ opacity: 1 }}
              transition={{ duration: reduce ? 0.3 : 0.9, ease: [0.77, 0, 0.175, 1] }}
            >
              {slide.images.map((img, k) =>
                slide.images.length > 1 ? (
                  <motion.div
                    key={img}
                    className="relative overflow-hidden"
                    initial={reduce ? false : { scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.6, delay: k * 0.08, ease: EASE }}
                  >
                    <Img id={img} alt="" priority className="absolute! inset-0" position="50% 18%" />
                  </motion.div>
                ) : (
                  <motion.img
                    key={img}
                    src={editorial(img)}
                    alt=""
                    fetchPriority="high"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover object-[50%_22%]"
                    initial={reduce ? false : { scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.8, ease: EASE }}
                  />
                ),
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* The line */}
        <div className="flex flex-col items-center justify-center px-6 py-12 text-center sm:px-10 lg:py-16">
          <div role="tablist" aria-label="Shop for" className="flex gap-1">
            {heroSlides.map((s, n) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={n === i}
                onClick={() => pick(n)}
                className={cn('relative h-10 px-4 text-[12px] font-bold tracking-[0.14em] uppercase transition-colors', n === i ? 'text-ink' : 'text-ink-soft hover:text-ink')}
              >
                {s.label}
                <span className="absolute inset-x-3 bottom-1 h-px overflow-hidden bg-line-strong">
                  {n === i && (
                    <span
                      key={`${i}-${pinned}-${paused}`}
                      className="absolute inset-0 origin-left bg-red"
                      style={pinned || paused || reduce ? undefined : { animation: `hero-progress ${HOLD}ms linear both` }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id}
              className="mt-10 flex flex-col items-center"
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } } }}
            >
              <h1 id="hero-title" className="display text-[44px] text-ink sm:text-[56px] lg:text-[64px]">
                {slide.title.map((t) => (
                  <motion.span key={t} className="block" variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}>
                    {t}
                  </motion.span>
                ))}
              </h1>
              <motion.p variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }} className="mt-6 max-w-[38ch] text-[15px] leading-relaxed text-ink-soft">
                {slide.body}
              </motion.p>
              <motion.div variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }} className="mt-8">
                <Button to={slide.to} variant="outline" arrow>
                  Shop {slide.label.toLowerCase()}
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
