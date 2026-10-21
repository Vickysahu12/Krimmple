import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { familySets, familyCode, editorial } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { useCart } from '../../features/cart/CartContext'
import { useToast } from '../../features/toast/Toast'
import { imageSet } from '../../data/media'
import { flyToCart } from '../../lib/flyToCart'
import { formatPrice } from '../../lib/format'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { cn } from '../../lib/cn'

const WHO = [
  { key: 'women', label: 'For her' },
  { key: 'men', label: 'For him' },
  { key: 'kids', label: 'For the little one' },
]

/**
 * Twin with your family (ref: "Men's Fashion Sets Enhance", with its ticked list and one
 * add-to-cart button): pick a colour story and the three matching looks appear, one each for
 * her, him and the little one. Untick anyone who is not joining in, choose sizes, and add the
 * set in one go; with all three, FAMILY10 is applied for 10% off. The family portrait on the
 * right brings forward whoever you point at in the list.
 */
export function FamilySet() {
  const reduce = useReducedMotion()
  const [setId, setSetId] = useState(familySets[0].id)
  const [on, setOn] = useState({ women: true, men: true, kids: true })
  const [sizes, setSizes] = useState({})
  const [errors, setErrors] = useState({})
  const [focus, setFocus] = useState(null)
  const portrait = useRef(null)
  const { add, applyCoupon, setOpen } = useCart()
  const { show } = useToast()

  const set = familySets.find((s) => s.id === setId)
  const pieces = Object.fromEntries(WHO.map((w) => [w.key, getProductSync(set[w.key])]))
  const chosen = WHO.filter((w) => on[w.key])
  const full = chosen.reduce((sum, w) => sum + pieces[w.key].price, 0)
  const all = chosen.length === 3
  const total = all ? Math.round(full * 0.9) : full

  const changeSet = (id) => {
    setSetId(id)
    setSizes({})
    setErrors({})
  }

  const addSet = () => {
    const missing = Object.fromEntries(chosen.filter((w) => !sizes[w.key]).map((w) => [w.key, 'Pick a size']))
    setErrors(missing)
    if (!chosen.length || Object.keys(missing).length) return
    chosen.forEach((w) => add(pieces[w.key].id, sizes[w.key]))
    if (all) applyCoupon(familyCode)
    flyToCart(portrait.current, imageSet(pieces.women.images[0]).srcSm)
    show({
      title: all ? 'Family set added' : `${chosen.length} ${chosen.length === 1 ? 'piece' : 'pieces'} added`,
      body: all ? `${familyCode} applied: 10% off the set` : chosen.map((w) => pieces[w.key].name).join(', '),
      image: pieces.women.images[0],
      action: { label: 'View bag', onClick: () => setOpen(true) },
    })
  }

  return (
    <section id="family" className="shell scroll-mt-28 pt-16 lg:pt-24" aria-labelledby="family-title">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <div className="min-w-0">
          <h2 id="family-title" className="display text-[32px] sm:text-[40px]">
            Twin with your family
          </h2>
          <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-ink-soft">
            One colour story, three looks: a kurta set for her, a shirt for him and a little one for the kids. Add all three and take 10% off the set.
          </p>

          {/* Colour stories */}
          <div className="mt-7 flex flex-wrap gap-2" role="radiogroup" aria-label="Colour story">
            {familySets.map((s) => (
              <button
                key={s.id}
                type="button"
                role="radio"
                aria-checked={s.id === setId}
                onClick={() => changeSet(s.id)}
                className={cn('press flex h-11 items-center gap-2.5 border px-4 text-[13.5px] transition-colors duration-200', s.id === setId ? 'border-ink bg-ink text-white' : 'border-line-strong text-ink hover:border-ink')}
              >
                <span className="size-4 rounded-full ring-1 ring-white/40" style={{ backgroundColor: s.hex }} />
                {s.label}
              </button>
            ))}
          </div>

          {/* The three pieces */}
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {WHO.map((w) => {
              const p = pieces[w.key]
              return (
                <li key={w.key} onMouseEnter={() => setFocus(w.key)} onMouseLeave={() => setFocus(null)} className={cn('flex items-center gap-4 py-4 transition-opacity duration-300', !on[w.key] && 'opacity-45')}>
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={on[w.key]}
                    aria-label={`Include ${p.name}`}
                    onClick={() => setOn((o) => ({ ...o, [w.key]: !o[w.key] }))}
                    className={cn('press grid size-6 shrink-0 place-items-center rounded-full border transition-colors', on[w.key] ? 'border-red bg-red text-white' : 'border-line-strong text-transparent hover:border-ink')}
                  >
                    <Icon name="check" size={13} weight="bold" />
                  </button>
                  <Link to={`/product/${p.slug}`} className="shrink-0 overflow-hidden bg-sand" tabIndex={-1} aria-hidden="true">
                    <Img id={p.images[0]} alt="" className="aspect-[4/5] w-14" position="50% 18%" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold tracking-[0.12em] text-ink-soft uppercase">{w.label}</p>
                    <Link to={`/product/${p.slug}`} className="link-line mt-0.5 block truncate text-[14.5px] text-ink">
                      {p.name}
                    </Link>
                    <p className="text-[13.5px] text-ink tabular-nums">{formatPrice(p.price)}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <label className="sr-only" htmlFor={`size-${w.key}`}>
                      Size for {p.name}
                    </label>
                    <select
                      id={`size-${w.key}`}
                      value={sizes[w.key] ?? ''}
                      disabled={!on[w.key]}
                      onChange={(e) => {
                        setSizes((s) => ({ ...s, [w.key]: e.target.value }))
                        setErrors((er) => ({ ...er, [w.key]: undefined }))
                      }}
                      aria-invalid={Boolean(errors[w.key])}
                      className={cn('h-10 w-[92px] border sm:w-[104px] bg-paper px-2.5 text-[13px] text-ink outline-none focus:border-ink', errors[w.key] ? 'border-danger' : 'border-line-strong')}
                    >
                      <option value="" disabled>
                        Size
                      </option>
                      {p.sizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <p role="alert" className="mt-1 h-4 text-[11.5px] text-danger">
                      {errors[w.key]}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>

          <button type="button" onClick={addSet} disabled={!chosen.length} className="btn mt-6 h-13 w-full gap-3 text-[12px]">
            <Icon name="bag" size={17} />
            Add {all ? 'the family set' : chosen.length === 1 ? '1 piece' : `${chosen.length} pieces`}
            <span className="h-4 w-px bg-white/30" aria-hidden="true" />
            <span className="tabular-nums">{formatPrice(total)}</span>
            {all && <span className="text-white/60 line-through tabular-nums">{formatPrice(full)}</span>}
          </button>
          <p className="mt-3 text-center text-[13px] text-ink-soft">
            {all ? (
              <>
                You save <span className="font-bold text-red">{formatPrice(full - total)}</span> with {familyCode}, applied for you.
              </>
            ) : (
              'Tick all three to save 10% on the set.'
            )}
          </p>
        </div>

        {/* The family portrait */}
        <div ref={portrait} className="relative min-h-[460px] overflow-hidden bg-sand sm:min-h-[560px]">
          <AnimatePresence initial={false}>
            <motion.div key={set.id} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
              <img
                src={editorial(set.women)}
                alt={pieces.women.name}
                loading="lazy"
                className={cn('absolute inset-y-0 left-0 h-full w-[68%] object-cover object-[50%_6%] transition-[filter,opacity] duration-500', focus && focus !== 'women' && 'opacity-60 saturate-50')}
              />
              {[
                ['men', 'right-4 top-6 w-[40%] sm:right-6 sm:top-8'],
                ['kids', 'right-10 bottom-6 w-[34%] sm:right-14 sm:bottom-8'],
              ].map(([key, pos], k) => (
                <motion.div
                  key={key}
                  className={cn('absolute bg-paper p-1.5 shadow-lift transition-[scale,opacity] duration-500 ease-[var(--ease-out)]', pos, focus === key && 'z-10 scale-[1.04]', focus && focus !== key && 'opacity-70')}
                  initial={reduce ? false : { y: 24, opacity: 0, rotate: k ? 3 : -3 }}
                  animate={{ y: 0, opacity: 1, rotate: k ? 2 : -2 }}
                  transition={{ duration: 0.7, delay: 0.2 + k * 0.12, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Img id={pieces[key].images[0]} alt={pieces[key].name} className="aspect-[4/5] w-full" position="50% 18%" />
                </motion.div>
              ))}
              <span className="absolute bottom-5 left-5 flex items-center gap-2 bg-white px-3 py-2 text-[12px] font-bold tracking-[0.1em] text-ink uppercase">
                <span className="bubble-mark w-4" /> {set.label}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
