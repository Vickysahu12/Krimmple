// Demo catalogue built from the client's photos, in three families: men (mNN), women (wNN)
// and kids (kNN), as public/media/products/<id>-1 (the look) and -2 (a second view or a close
// crop). Women's photos are high resolution (720 x 900); men's and kids' are 400 x 500.
// `wear` holds the family (men / women / kids), so one filter shops each family.
// `match` ties pieces that make a family set (red, green, blue) for "Twin with your family".
// Shape mirrors what a products API would return, so services/catalog.js can switch to fetch() later.
// Prices sit between ₹599 and ₹3,499; ratings and copy are sample data.

const MEN = ['S', 'M', 'L', 'XL', 'XXL']
const WAIST = ['28', '30', '32', '34', '36', '38']
const WOMEN = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
const KIDS = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y']

const CARE = ['Machine wash cold, gentle', 'Dry in shade', 'Iron on medium']
const ETHNIC_CARE = ['Hand wash or gentle machine wash, separately', 'Dry in shade, inside out', 'Iron on low on the reverse']

const CATEGORY = {
  'men-shirts': { sizes: MEN, includes: 'One shirt', care: CARE, wear: ['men'] },
  'men-trousers': { sizes: WAIST, includes: 'One pair of trousers', care: CARE, wear: ['men'] },
  'kurta-sets': { sizes: WOMEN, includes: 'Kurta, pants and dupatta', care: ETHNIC_CARE, wear: ['women'] },
  anarkalis: { sizes: WOMEN, includes: 'Anarkali, pants and dupatta', care: ETHNIC_CARE, wear: ['women'] },
  dresses: { sizes: WOMEN, includes: 'One dress', care: CARE, wear: ['women'] },
  'co-ords': { sizes: WOMEN, includes: 'Top and bottom', care: CARE, wear: ['women'] },
  'kids-shirts': { sizes: KIDS, includes: 'One shirt', care: CARE, wear: ['kids'] },
  'kids-kurtas': { sizes: KIDS, includes: 'One kurta shirt', care: CARE, wear: ['kids'] },
}

const item = (category, g) => (p) => {
  const base = { category, ...CATEGORY[category], ...p, g }
  return { ...base, occasions: base.wear }
}
const mShirt = item('men-shirts', 'm')
const mTrouser = item('men-trousers', 'm')
const kurta = item('kurta-sets', 'w')
const anarkali = item('anarkalis', 'w')
const dress = item('dresses', 'w')
const coord = item('co-ords', 'w')
const kShirt = item('kids-shirts', 'k')
const kKurta = item('kids-kurtas', 'k')

const raw = [
  // Men
  mTrouser({ n: 1, name: 'Charcoal Linen Trousers', fabric: 'Linen Blend', fit: 'Straight', color: 'Charcoal', hex: '#4a4a4c', price: 1499, rating: 4.6, reviews: 58, family: 'linen-trouser', blurb: 'Straight charcoal linen trousers with a flat front.' }),
  mTrouser({ n: 2, name: 'Grey Check Pleated Trousers', fabric: 'Linen Blend', fit: 'Relaxed', color: 'Grey Check', hex: '#8d8c88', price: 1599, rating: 4.5, reviews: 33, blurb: 'Soft grey checks with a front pleat and a relaxed leg.' }),
  mShirt({ n: 3, name: 'Grey Stripe Mandarin Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Grey Stripe', hex: '#a9aeb1', price: 1199, rating: 4.6, reviews: 61, blurb: 'Fine grey stripes and a band collar. Office to dinner.' }),
  mShirt({ n: 4, name: 'Mustard Half Sleeve Shirt', fabric: 'Cotton Linen', fit: 'Regular', color: 'Mustard', hex: '#c9952d', price: 999, rating: 4.5, reviews: 47, family: 'half-solid', blurb: 'A sunny mustard shirt with short sleeves.' }),
  mShirt({ n: 5, name: 'Cocoa Half Sleeve Shirt', fabric: 'Cotton Linen', fit: 'Regular', color: 'Cocoa', hex: '#7a5340', price: 999, rating: 4.6, reviews: 52, family: 'half-solid', blurb: 'The half sleeve shirt in a warm cocoa.' }),
  mShirt({ n: 6, name: 'Red Floral Print Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Red', hex: '#b2373a', price: 1299, rating: 4.7, reviews: 88, match: 'red', bestseller: true, badge: 'Bestseller', blurb: 'Hand-block style florals on a red half sleeve shirt.' }),
  mShirt({ n: 7, name: 'Beige Mandarin Kurta Shirt', fabric: 'Cotton Linen', fit: 'Regular', color: 'Beige', hex: '#cdb898', price: 1399, rating: 4.7, reviews: 64, blurb: 'A short kurta shirt with a band collar and rolled sleeves.' }),
  mTrouser({ n: 8, name: 'Cream Linen Trousers', fabric: 'Linen Blend', fit: 'Straight', color: 'Cream', hex: '#e2dccd', price: 1499, rating: 4.7, reviews: 71, family: 'linen-trouser', blurb: 'Cream linen trousers for every festive shirt you own.' }),
  mTrouser({ n: 9, name: 'Off-White Chino Trousers', fabric: 'Cotton Twill', fit: 'Slim', color: 'Off-White', hex: '#e8e4da', price: 1299, rating: 4.5, reviews: 39, blurb: 'Slim off-white chinos that sit just above the shoe.' }),
  mShirt({ n: 10, name: 'Green Buta Print Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Green', hex: '#2f4a35', price: 1299, rating: 4.7, reviews: 74, match: 'green', blurb: 'Tiny gold butas on a deep green half sleeve shirt.' }),
  mShirt({ n: 11, name: 'Rust Linen Shirt', fabric: 'Linen', fit: 'Regular', color: 'Rust', hex: '#a75a40', price: 1599, rating: 4.8, reviews: 92, isNew: true, badge: 'New', blurb: 'A full sleeve rust linen shirt, soft from the first wear.' }),
  mShirt({ n: 12, name: 'Charcoal Textured Shirt', fabric: 'Cotton Dobby', fit: 'Regular', color: 'Charcoal', hex: '#454646', price: 1399, rating: 4.6, reviews: 49, family: 'textured', blurb: 'A charcoal shirt with a fine woven texture.' }),
  mShirt({ n: 13, name: 'Black Textured Shirt', fabric: 'Cotton Dobby', fit: 'Regular', color: 'Black', hex: '#262423', price: 1399, rating: 4.7, reviews: 58, family: 'textured', blurb: 'The textured shirt in black, worn open over a white tee.' }),
  mShirt({ n: 14, name: 'Olive Leaf Print Shirt', fabric: 'Cotton', fit: 'Relaxed', color: 'Olive', hex: '#5d6040', price: 1199, compareAt: 1499, rating: 4.6, reviews: 37, badge: 'Sale', blurb: 'Big olive leaves on a cream ground. Weekend shirt.' }),
  mShirt({ n: 15, name: 'Teal Ikat Print Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Teal', hex: '#2e5664', price: 1299, rating: 4.7, reviews: 66, match: 'blue', blurb: 'An ikat-style print in teal and indigo.' }),
  mShirt({ n: 16, name: 'Grey Linen Overshirt', fabric: 'Linen', fit: 'Relaxed', color: 'Grey', hex: '#bdb9b2', price: 1799, rating: 4.7, reviews: 43, isNew: true, badge: 'New', blurb: 'A light grey overshirt with patch pockets. Layer it.' }),

  // Women
  kurta({ n: 1, name: 'Lemon Printed Kurta Set', fabric: 'Cotton', fit: 'Straight', color: 'Lemon', hex: '#e8cf6a', price: 1799, rating: 4.7, reviews: 84, blurb: 'A lemon yellow printed kurta with lace trims and white pants.' }),
  anarkali({ n: 2, name: 'Magenta Floral Anarkali Set', fabric: 'Rayon', fit: 'Flared', color: 'Magenta', hex: '#b02566', price: 2799, rating: 4.8, reviews: 112, bestseller: true, badge: 'Bestseller', blurb: 'A twirling magenta anarkali with florals, pants and a dupatta.' }),
  coord({ n: 3, name: 'Floral Peplum Tunic', fabric: 'Rayon', fit: 'Flared', color: 'Floral', hex: '#8f9ab8', price: 1299, rating: 4.5, reviews: 41, blurb: 'A floral peplum tunic with flared sleeves. Pair with black leggings.' }),
  kurta({ n: 4, name: 'Maroon Kurta Set', fabric: 'Viscose', fit: 'Straight', color: 'Maroon', hex: '#6c1c24', price: 2299, rating: 4.7, reviews: 76, blurb: 'A deep maroon kurta with a sheer dupatta.' }),
  kurta({ n: 5, name: 'Red Leheriya Kurta Set', fabric: 'Cotton', fit: 'Straight', color: 'Red', hex: '#c52d36', price: 2199, rating: 4.8, reviews: 94, match: 'red', blurb: 'A red embroidered kurta with a leheriya dupatta.' }),
  anarkali({ n: 6, name: 'Teal Anarkali Set', fabric: 'Rayon', fit: 'Flared', color: 'Teal', hex: '#1f5f6b', price: 2799, rating: 4.8, reviews: 68, match: 'blue', blurb: 'A teal anarkali with an embroidered yoke and a long dupatta.' }),
  dress({ n: 7, name: 'Black Floral Midi Dress', fabric: 'Rayon', fit: 'Flared', color: 'Black Floral', hex: '#2a2220', price: 1799, rating: 4.6, reviews: 52, blurb: 'Big red florals on black, with a tie at the waist.' }),
  kurta({ n: 8, name: 'Lilac Leheriya Kurta Set', fabric: 'Cotton', fit: 'Straight', color: 'Lilac', hex: '#b7a4cf', price: 2199, rating: 4.7, reviews: 57, blurb: 'A lilac kurta with a matching leheriya dupatta.' }),
  dress({ n: 9, name: 'Pink Floral Tiered Dress', fabric: 'Rayon', fit: 'Tiered', color: 'Pink Floral', hex: '#e8a7b5', price: 1999, rating: 4.7, reviews: 63, isNew: true, badge: 'New', blurb: 'A strappy tiered dress with big pink blooms.' }),
  dress({ n: 10, name: 'White Embroidered Kurti Dress', fabric: 'Cotton', fit: 'A-line', color: 'White', hex: '#efece6', price: 1499, rating: 4.6, reviews: 44, blurb: 'A short white kurti dress with floral embroidery at the hem.' }),
  dress({ n: 11, name: 'Blush Floral Ruffle Dress', fabric: 'Rayon', fit: 'Fit and flare', color: 'Blush', hex: '#d8a9a8', price: 1799, rating: 4.6, reviews: 38, blurb: 'Tiny blush florals and a ruffle hem.' }),
  dress({ n: 12, name: 'Black Polka Tiered Dress', fabric: 'Rayon', fit: 'Tiered', color: 'Black Polka', hex: '#242122', price: 1599, compareAt: 1999, rating: 4.6, reviews: 59, badge: 'Sale', blurb: 'White polka dots on black, with a lace-trimmed tier.' }),
  kurta({ n: 13, name: 'Emerald Kurta Set', fabric: 'Viscose', fit: 'Straight', color: 'Emerald', hex: '#1e5a46', price: 2299, rating: 4.7, reviews: 72, match: 'green', blurb: 'An emerald kurta with gota trims and a sheer dupatta.' }),
  kurta({ n: 14, name: 'Yellow Embroidered Kurta Set', fabric: 'Rayon', fit: 'Straight', color: 'Yellow', hex: '#dcb42a', price: 2399, rating: 4.8, reviews: 81, blurb: 'Mustard-yellow with white embroidery and a long dupatta.' }),
  anarkali({ n: 15, name: 'Grey Printed Anarkali Set', fabric: 'Rayon', fit: 'Flared', color: 'Grey', hex: '#5e5c5f', price: 2499, rating: 4.6, reviews: 46, blurb: 'A grey and black printed anarkali with a dupatta.' }),
  kurta({ n: 16, name: 'Mustard Kurta Set', fabric: 'Viscose', fit: 'Straight', color: 'Mustard', hex: '#b28a2e', price: 2299, rating: 4.6, reviews: 49, blurb: 'A mustard kurta with an embroidered neckline and a printed dupatta.' }),
  anarkali({ n: 17, name: 'Plum Anarkali Set', fabric: 'Rayon', fit: 'Flared', color: 'Plum', hex: '#5a2350', price: 2999, rating: 4.8, reviews: 54, blurb: 'A plum anarkali with a gathered yoke and a matching dupatta.' }),
  kurta({ n: 18, name: 'Black and Pink Kurta Set', fabric: 'Viscose', fit: 'Straight', color: 'Black', hex: '#1f1d1e', price: 2499, rating: 4.7, reviews: 61, blurb: 'A black embroidered kurta with a bright pink ombre dupatta.' }),
  kurta({ n: 19, name: 'Black Embroidered Kurta Set', fabric: 'Viscose', fit: 'Straight', color: 'Black', hex: '#1d1b1c', price: 2699, rating: 4.8, reviews: 73, isNew: true, badge: 'New', blurb: 'Black with gold embroidery and a sheer black dupatta.' }),
  kurta({ n: 20, name: 'Dusty Purple Kurta Set', fabric: 'Cotton', fit: 'Straight', color: 'Dusty Purple', hex: '#a28bb3', price: 1999, rating: 4.6, reviews: 42, blurb: 'A soft dusty purple kurta, pants and dupatta.' }),
  kurta({ n: 21, name: 'Off-White Print Kurta Set', fabric: 'Cotton', fit: 'Straight', color: 'Off-White', hex: '#e7e2d8', price: 1999, rating: 4.6, reviews: 37, blurb: 'A black and white printed kurta with a black dupatta.' }),
  coord({ n: 22, name: 'Pastel Lime Floral Co-ord', fabric: 'Cotton', fit: 'Relaxed', color: 'Pastel Lime', hex: '#cfe0bf', price: 1899, rating: 4.7, reviews: 55, isNew: true, badge: 'New', blurb: 'Big green blooms on a cream shirt and wide pants, shown in two poses.' }),
  kurta({ n: 23, name: 'Golden Brown Kurta Set', fabric: 'Viscose', fit: 'Straight', color: 'Golden Brown', hex: '#8f6a2f', price: 2499, compareAt: 2999, rating: 4.7, reviews: 48, badge: 'Sale', blurb: 'A golden brown kurta with a printed dupatta.' }),

  // Kids
  kShirt({ n: 1, name: 'Navy Leaf Print Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Navy', hex: '#26304a', price: 799, rating: 4.7, reviews: 64, family: 'kids-navy', blurb: 'A navy full sleeve shirt with tiny leaves.' }),
  kShirt({ n: 2, name: 'Red Ombre Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Red Ombre', hex: '#c2343a', price: 799, rating: 4.7, reviews: 58, family: 'ombre', blurb: 'Bright red that fades darker at the hem.' }),
  kShirt({ n: 3, name: 'Blue Ombre Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Blue Ombre', hex: '#6fa3c6', price: 799, rating: 4.6, reviews: 47, family: 'ombre', blurb: 'Sky blue fading to indigo, sleeves to roll.' }),
  kShirt({ n: 4, name: 'Red Floral Half Sleeve Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Red Floral', hex: '#b9453e', price: 699, rating: 4.8, reviews: 72, match: 'red', bestseller: true, badge: 'Bestseller', blurb: 'Big red florals on cream. Twin with Papa.' }),
  kShirt({ n: 5, name: 'Mustard Print Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Mustard', hex: '#c4a052', price: 699, rating: 4.6, reviews: 39, blurb: 'A mustard and navy printed half sleeve shirt.' }),
  kShirt({ n: 6, name: 'Ikat Print Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Ivory Ikat', hex: '#e2c9a6', price: 699, rating: 4.6, reviews: 33, blurb: 'A warm ikat-style print on ivory.' }),
  kShirt({ n: 7, name: 'Green Print Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Green', hex: '#2f4c44', price: 799, rating: 4.7, reviews: 51, match: 'green', blurb: 'A deep green printed shirt with sleeves to roll.' }),
  kShirt({ n: 8, name: 'Grey Abstract Print Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Grey', hex: '#aeb2b5', price: 699, rating: 4.5, reviews: 28, blurb: 'Soft grey with a brushstroke print.' }),
  kShirt({ n: 9, name: 'Chevron Stripe Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Multi Stripe', hex: '#b9a083', price: 699, compareAt: 899, rating: 4.6, reviews: 36, badge: 'Sale', blurb: 'Chevron stripes in warm and cool tones.' }),
  kShirt({ n: 10, name: 'Navy Floral Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Navy Floral', hex: '#232c45', price: 799, rating: 4.7, reviews: 44, family: 'kids-navy', blurb: 'Navy with small cream florals.' }),
  kShirt({ n: 11, name: 'Rust Print Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Rust', hex: '#b35a2d', price: 699, rating: 4.6, reviews: 31, isNew: true, badge: 'New', blurb: 'A rust shirt with a tiny geometric print.' }),
  kShirt({ n: 12, name: 'Navy Pinstripe Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Navy Stripe', hex: '#3a3d55', price: 749, rating: 4.6, reviews: 29, blurb: 'Navy with fine stripes and a band collar.' }),
  kKurta({ n: 13, name: 'Maroon Kurta Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Maroon', hex: '#7e2329', price: 899, rating: 4.8, reviews: 46, family: 'kids-kurta', isNew: true, badge: 'New', blurb: 'A short kurta shirt in maroon with contrast piping.' }),
  kKurta({ n: 14, name: 'Indigo Kurta Shirt', fabric: 'Cotton', fit: 'Regular', color: 'Indigo', hex: '#2f4466', price: 899, rating: 4.7, reviews: 38, family: 'kids-kurta', match: 'blue', blurb: 'The kurta shirt in indigo. Twin with Mumma in teal.' }),
]

const VIEWS = { 'w-12': 2, 'w-22': 2 }
const slugify = (s) => s.toLowerCase().replace(/[’']/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const id = (g, n) => `${g}${String(n).padStart(2, '0')}`

const seen = new Map()
export const products = raw.map(({ n, g, ...p }) => {
  // Men's and kids' pieces can share a name; keep slugs unique.
  let slug = slugify(p.name)
  if (seen.has(slug)) slug = `${slug}-${g === 'k' ? 'kids' : g}`
  seen.set(slug, true)
  return {
    id: id(g, n),
    slug,
    images: Array.from({ length: VIEWS[`${g}-${n}`] ?? 2 }, (_, i) => `${id(g, n)}-${i + 1}`),
    cut: `${p.fit} fit`,
    model: p.wear[0] === 'kids' ? '6-7Y' : p.sizes === WAIST ? '32' : p.wear[0] === 'women' ? 'S' : 'M',
    ...p,
  }
})

export const getProduct = (pid) => products.find((p) => p.id === pid)
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)
