// Editorial content for the storefront. Kept out of components so the client
// (or a CMS later) can change copy and imagery in one place.
// Image ids refer to public/media/products (mNN men, wNN women, kNN kids; -1 the look, -2 a
// second view or close crop). Larger women's photos live in public/media/editorial (wNN.webp).
// Men's and kids' photos are 400px, so they are never shown larger than about 420px wide.

export const editorial = (name) => `/media/editorial/${name}.webp`

// Hero: one slide per family. Women use one large photograph; men and kids, whose photos
// are smaller, use two side by side.
export const heroSlides = [
  { id: 'women', label: 'Women', title: ['Kurta sets', 'and anarkalis'], body: 'Leheriya dupattas, twirling anarkalis and easy co-ords, for festivals and every day in between.', images: ['w02'], to: '/shop?occasion=women' },
  { id: 'men', label: 'Men', title: ['Shirts', 'with a story'], body: 'Linen in rust and grey, block-style prints and band collars, with trousers to match.', images: ['m11-1', 'm06-1'], to: '/shop?occasion=men' },
  { id: 'kids', label: 'Kids', title: ['Little prints', 'big smiles'], body: 'Ombre shirts, floral half sleeves and kurta shirts that twin with Mumma and Papa.', images: ['k04-1', 'k02-1'], to: '/shop?occasion=kids' },
]

export const categoryTiles = [
  { id: 'kurta-sets', label: 'Kurta sets', image: 'w05-1', to: '/shop/kurta-sets' },
  { id: 'dresses', label: 'Dresses', image: 'w09-1', to: '/shop/dresses' },
  { id: 'men-shirts', label: 'Men’s shirts', image: 'm03-1', to: '/shop/men-shirts' },
  { id: 'men-trousers', label: 'Trousers', image: 'm08-1', to: '/shop/men-trousers' },
  { id: 'kids-shirts', label: 'Kids’ shirts', image: 'k03-1', to: '/shop/kids-shirts' },
  { id: 'anarkalis', label: 'Anarkalis', image: 'w06-1', to: '/shop/anarkalis' },
]

// The three tall cards (ref: Lane Cork Sandal / Summer Daily Outfit / Women's Sweatshirts).
export const familyCards = [
  { id: 'women', title: 'The festive edit', body: 'Kurta sets with dupattas, ready for every puja and party.', image: 'w14', editorial: true, to: '/shop?occasion=women' },
  { id: 'men', title: 'Linen for him', body: 'Rust, charcoal and grey linen shirts that only get softer.', image: 'm11-1', to: '/shop?occasion=men' },
  { id: 'kids', title: 'Prints for little ones', body: 'Florals, ombres and kurta shirts in sizes 2 to 11.', image: 'k07-1', to: '/shop?occasion=kids' },
]

export const deal = { title: 'Deal of the day', ids: ['w12', 'm14', 'w23', 'k09'] }

export const tickerIds = ['w02', 'm11', 'k04', 'w22', 'm16', 'k13', 'w09', 'm06']

// Twin with your family: three looks that match, one each for him, her and the little one.
export const familySets = [
  { id: 'red', label: 'Red florals', hex: '#c2343a', men: 'm06', women: 'w05', kids: 'k04' },
  { id: 'green', label: 'Deep greens', hex: '#2f4c44', men: 'm10', women: 'w13', kids: 'k07' },
  { id: 'blue', label: 'Teal and indigo', hex: '#2e5664', men: 'm15', women: 'w06', kids: 'k14' },
]
export const familyCode = 'FAMILY10'

export const perks = [
  { icon: 'package', title: 'Free shipping', body: 'On orders above ₹1,499' },
  { icon: 'cash', title: 'Money back guarantee', body: 'Easy returns within 7 days' },
  { icon: 'chat', title: 'Online support', body: 'WhatsApp us, 7 days a week' },
]

export const categoryLabels = {
  'men-shirts': 'Men’s shirts',
  'men-trousers': 'Men’s trousers',
  'kurta-sets': 'Kurta sets',
  anarkalis: 'Anarkalis',
  dresses: 'Dresses',
  'co-ords': 'Co-ords and tunics',
  'kids-shirts': 'Kids’ shirts',
  'kids-kurtas': 'Kids’ kurta shirts',
}

export const categorySingular = {
  'men-shirts': 'Shirt',
  'men-trousers': 'Trousers',
  'kurta-sets': 'Kurta set',
  anarkalis: 'Anarkali set',
  dresses: 'Dress',
  'co-ords': 'Co-ord',
  'kids-shirts': 'Kids shirt',
  'kids-kurtas': 'Kids kurta',
}

export const categories = categoryTiles

// The family lives in each product's `occasions`.
export const occasionLabels = {
  women: 'Women',
  men: 'Men',
  kids: 'Kids',
}

export const occasions = Object.entries(occasionLabels).map(([id, label]) => ({ id, label }))

// Sample customer notes (demo content).
export const testimonials = [
  { name: 'Neha & Rahul', city: 'Pune', rating: 5, productId: 'w05', text: 'We bought the red family set for Diwali: my kurta, his shirt and our son’s little floral. The photos are our favourite of the year.' },
  { name: 'Aditi S.', city: 'Jaipur', rating: 5, productId: 'w02', text: 'The magenta anarkali twirls beautifully and the dupatta is so soft. Fit was exactly as the size chart said.' },
  { name: 'Karan M.', city: 'Delhi', rating: 5, productId: 'm11', text: 'The rust linen shirt gets softer every wash. Ordered the grey overshirt next.' },
  { name: 'Pooja K.', city: 'Mumbai', rating: 4, productId: 'k02', text: 'My son refuses to take off the red ombre shirt. Good cotton, colours did not fade.' },
]

export const stories = [
  { date: '14 Oct 2026', tag: 'Family', title: 'How to twin without looking like a uniform', image: 'k04-1', to: '/#family' },
  { date: '30 Sep 2026', tag: 'Women', title: 'Five ways to style a leheriya dupatta', image: 'w08-1', to: '/shop/kurta-sets' },
  { date: '18 Sep 2026', tag: 'Men', title: 'Why linen is the only festive shirt you need', image: 'm16-1', to: '/shop/men-shirts' },
]

export const offers = [
  { title: '10% off your first order', code: 'KRIMMPLE10' },
  { title: '10% off a family set of three', code: 'FAMILY10' },
  { title: '₹300 off orders above ₹2,999', code: 'FESTIVE300' },
]

export const serviceRow = perks

// Review pool used to fill product pages (demo).
export const reviewPool = [
  { name: 'Shreya P.', rating: 5, title: 'Lovely fabric', text: 'Soft, breathable and the colour is exactly as shown.' },
  { name: 'Amit R.', rating: 5, title: 'Great fit', text: 'True to size. The stitching is neat and the finish feels premium.' },
  { name: 'Meera J.', rating: 4, title: 'Slightly long', text: 'Beautiful, though a little long for me. Easy to alter.' },
  { name: 'Rohit V.', rating: 5, title: 'Fast delivery', text: 'Came in three days, well packed. Will order again.' },
  { name: 'Sana K.', rating: 4, title: 'Good value', text: 'Looks far more expensive than it was.' },
]

export const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'new', label: 'New in' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export const priceBands = [
  { id: 'u999', label: 'Under ₹1,000', min: 0, max: 999 },
  { id: '1000-1499', label: '₹1,000 to ₹1,499', min: 1000, max: 1499 },
  { id: '1500-2299', label: '₹1,500 to ₹2,299', min: 1500, max: 2299 },
  { id: '2300-3499', label: '₹2,300 and above', min: 2300, max: 3499 },
]

// Sizes. Adults by body measurement in inches; kids by age.
export const sizeGuide = {
  note: 'Adults: body measurements in inches. Kids: by age, with chest in inches. Between two sizes? Take the larger one.',
  headers: ['Size', 'Chest or bust', 'Waist', 'Length'],
  rows: [
    ['S', '36-38', '30-32', '28'],
    ['M', '38-40', '32-34', '28.5'],
    ['L', '40-42', '34-36', '29'],
    ['XL', '42-44', '36-38', '29.5'],
    ['XXL', '44-46', '38-40', '30'],
    ['Kids 2-3Y', '21', '20', '15'],
    ['Kids 4-5Y', '23', '21', '17'],
    ['Kids 6-7Y', '25', '22', '19'],
    ['Kids 8-9Y', '27', '23', '21'],
    ['Kids 10-11Y', '29', '24', '23'],
  ],
}
