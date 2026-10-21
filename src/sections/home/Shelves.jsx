import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { categoryTiles, familyCards, deal, tickerIds, editorial } from '../../data/content'
import { products } from '../../data/products'
import { getProductSync } from '../../services/catalog'
import { useReveal } from '../../hooks/useReveal'
import { ProductCard } from '../../features/product/ProductCard'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Title } from './Title'

const count = (id) => products.filter((p) => p.category === id).length

/** "Shop by categories" (ref: six photos with the name under each). */
export function CategoryTiles() {
  const ref = useReveal()
  return (
    <section ref={ref} className="shell pt-14 lg:pt-20" aria-labelledby="cats-title">
      <Title id="cats-title" to="/shop" cta="Shop all">
        Shop by categories
      </Title>
      <ul className="mt-7 grid grid-cols-3 gap-x-3 gap-y-7 lg:grid-cols-6 lg:gap-x-4">
        {categoryTiles.map((c, i) => (
          <li key={c.id} data-reveal style={{ '--reveal-delay': `${i * 60}ms` }}>
            <Link to={c.to} className="group block">
              <span className="block overflow-hidden bg-sand">
                <Img id={c.image} alt="" className="aspect-[4/5]" position="50% 10%" imgClassName="transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.06]" />
              </span>
              <span className="mt-3 flex items-baseline justify-between gap-2">
                <span className="text-[14px] text-ink transition-colors group-hover:text-red">{c.label}</span>
                <span className="text-[12px] text-ink-soft tabular-nums">{count(c.id)}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** Three tall cards, one per family (ref: the three photo panels with "Explore now"). */
export function FamilyCards() {
  const ref = useReveal()
  return (
    <section ref={ref} className="pt-14 lg:pt-20" aria-label="Shop by family">
      <ul className="mx-auto grid max-w-[1440px] gap-1.5 sm:grid-cols-3">
        {familyCards.map((c, i) => (
          <li key={c.id} data-reveal-frame style={{ '--reveal-delay': `${i * 90}ms` }}>
            <Link to={c.to} className="group relative isolate block aspect-[4/5] overflow-hidden bg-sand sm:aspect-[3/4.2]">
              {c.editorial ? (
                <img src={editorial(c.image)} alt="" loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover object-[50%_6%] transition-transform duration-[1400ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
              ) : (
                <Img id={c.image} alt="" className="absolute! inset-0 -z-10" position="50% 8%" imgClassName="transition-transform duration-[1400ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
              )}
              <span aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <span className="absolute inset-x-6 bottom-6 text-white">
                <span className="display block text-[28px] sm:text-[30px]">{c.title}</span>
                <span className="mt-2 block max-w-[30ch] text-[13.5px] text-white/85">{c.body}</span>
                <span className="mt-5 inline-flex h-10 items-center gap-2 bg-white px-5 text-[11px] font-bold tracking-[0.12em] text-ink uppercase transition-[background-color,color] duration-300 group-hover:bg-red group-hover:text-white">
                  Explore now <Icon name="arrow" size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** Time left until midnight, split for the countdown. */
function useUntilMidnight() {
  const calc = () => {
    const now = new Date()
    const end = new Date(now)
    end.setHours(24, 0, 0, 0)
    const s = Math.max(0, Math.floor((end - now) / 1000))
    return { h: Math.floor(s / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 }
  }
  const [t, setT] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

/** "Deal of the day" with a running countdown to midnight (ref: the red counter). */
export function DealOfDay() {
  const ref = useReveal()
  const t = useUntilMidnight()
  const items = deal.ids.map(getProductSync)
  const unit = (v, label) => (
    <span className="flex items-baseline gap-1">
      <span key={v} className="anim-fade-up display text-[30px] text-red tabular-nums sm:text-[34px]" style={{ '--delay': '0ms' }}>
        {String(v).padStart(2, '0')}
      </span>
      <span className="text-[11px] text-ink-soft">{label}</span>
    </span>
  )
  return (
    <section ref={ref} id="deal" className="shell scroll-mt-28 pt-14 lg:pt-20" aria-labelledby="deal-title">
      <Title
        id="deal-title"
        to="/shop?sale=1"
        cta="All offers"
        aside={
          <p className="flex items-baseline gap-4 lg:mr-auto lg:ml-10" role="timer" aria-label={`Ends in ${t.h} hours ${t.m} minutes`}>
            {unit(t.h, 'Hrs')}
            {unit(t.m, 'Min')}
            {unit(t.s, 'Sec')}
          </p>
        }
      >
        {deal.title}
      </Title>
      <ul className="mt-7 grid grid-cols-2 gap-x-3 gap-y-9 lg:grid-cols-4 lg:gap-x-5">
        {items.map((p, i) => (
          <li key={p.id} data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </section>
  )
}

/** A running line of product names with small photos (ref: "Activewear Jacket in SoftMove ..."). */
export function Ticker() {
  const items = tickerIds.map(getProductSync)
  const run = [...items, ...items]
  return (
    <div className="mt-16 overflow-hidden border-y border-line bg-mist py-5 lg:mt-24">
      <ul className="marquee items-center">
        {run.map((p, i) => (
          <li key={`${p.id}-${i}`} className="shrink-0 px-6" aria-hidden={i >= items.length || undefined}>
            <Link to={`/product/${p.slug}`} tabIndex={i >= items.length ? -1 : undefined} className="group flex items-center gap-4">
              <Img id={p.images[0]} alt="" className="size-12 rounded-full" position="50% 18%" />
              <span className="display text-[22px] whitespace-nowrap transition-colors group-hover:text-red sm:text-[26px]">{p.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
