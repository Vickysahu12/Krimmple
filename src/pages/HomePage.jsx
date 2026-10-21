import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { HeroFamily } from '../sections/home/HeroFamily'
import { CategoryTiles, FamilyCards, DealOfDay, Ticker } from '../sections/home/Shelves'
import { FamilySet } from '../sections/home/FamilySet'
import { Testimonial, Services, Stories } from '../sections/home/Voices'
import { Closing } from '../sections/home/Closing'

// In the inspo's order: the split hero, shop by categories, three tall cards, deal of the day,
// the running ticker, the matching set, the client note, services and the story; then codes
// and the Instagram wall.
export function HomePage() {
  useDocumentTitle()
  return (
    <>
      <HeroFamily />
      <CategoryTiles />
      <FamilyCards />
      <DealOfDay />
      <Ticker />
      <FamilySet />
      <Testimonial />
      <Services />
      <Stories />
      <Closing />
    </>
  )
}
