// Navigation content: the mega-menu panels (desktop), menu tabs (phone) and quick chips.

export const megaMenus = [
  {
    id: 'women',
    label: 'Women',
    to: '/shop?occasion=women',
    columns: [
      {
        title: 'Women',
        items: [
          { label: 'Kurta sets', desc: 'With dupattas', image: 'w05-1', to: '/shop/kurta-sets' },
          { label: 'Anarkalis', desc: 'Flared and festive', image: 'w06-1', to: '/shop/anarkalis' },
          { label: 'Dresses', desc: 'Tiered, midi, short', image: 'w09-1', to: '/shop/dresses' },
          { label: 'Co-ords', desc: 'And tunics', image: 'w22-1', to: '/shop/co-ords' },
          { label: 'Bestsellers', desc: 'Most loved', image: 'w02-1', to: '/shop?occasion=women&bestseller=1' },
        ],
      },
    ],
    feature: { image: 'w02-1', title: 'The Magenta Floral Anarkali', to: '/product/magenta-floral-anarkali-set' },
  },
  {
    id: 'men',
    label: 'Men',
    to: '/shop?occasion=men',
    columns: [
      {
        title: 'Men',
        items: [
          { label: 'Linen shirts', desc: 'Rust, grey, charcoal', image: 'm11-1', to: '/shop/men-shirts' },
          { label: 'Print shirts', desc: 'Block-style, half sleeve', image: 'm06-1', to: '/shop/men-shirts' },
          { label: 'Kurta shirts', desc: 'Band collars', image: 'm07-1', to: '/product/beige-mandarin-kurta-shirt' },
          { label: 'Trousers', desc: 'Linen and chinos', image: 'm08-1', to: '/shop/men-trousers' },
          { label: 'Overshirts', desc: 'To layer', image: 'm16-1', to: '/product/grey-linen-overshirt' },
        ],
      },
    ],
    feature: { image: 'm11-1', title: 'The Rust Linen Shirt', to: '/product/rust-linen-shirt' },
  },
  {
    id: 'kids',
    label: 'Kids',
    to: '/shop?occasion=kids',
    columns: [
      {
        title: 'Kids, 2 to 11 years',
        items: [
          { label: 'Ombre shirts', desc: 'Red and blue', image: 'k02-1', to: '/shop/kids-shirts' },
          { label: 'Print shirts', desc: 'Florals and ikats', image: 'k04-1', to: '/shop/kids-shirts' },
          { label: 'Kurta shirts', desc: 'For festivals', image: 'k13-1', to: '/shop/kids-kurtas' },
          { label: 'Full sleeve', desc: 'Sleeves to roll', image: 'k01-1', to: '/shop/kids-shirts' },
          { label: 'Twin with family', desc: 'Matching sets', image: 'k07-1', to: '/#family' },
        ],
      },
    ],
    feature: { image: 'k02-1', title: 'The Red Ombre Shirt', to: '/product/red-ombre-shirt' },
  },
]

export const navLinks = [
  { label: 'Deals', to: '/#deal', badge: 'Hot', accent: true },
  { label: 'Family sets', to: '/#family' },
]

export const quickChips = [
  { label: 'Women', to: '/shop?occasion=women' },
  { label: 'Men', to: '/shop?occasion=men' },
  { label: 'Kids', to: '/shop?occasion=kids' },
  { label: 'Kurta sets', to: '/shop/kurta-sets' },
  { label: 'Dresses', to: '/shop/dresses' },
  { label: 'Men’s shirts', to: '/shop/men-shirts' },
  { label: 'Kids’ shirts', to: '/shop/kids-shirts' },
  { label: 'Sale', to: '/shop?sale=1', accent: true },
]
