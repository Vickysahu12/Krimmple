// Brand-level settings. Change the name, offers, fees or contact details here, not in components.
export const site = {
  name: 'Krimmple',
  tagline: 'Dressing the whole family',
  currency: 'INR',
  locale: 'en-IN',
  freeShippingOver: 1499,
  shippingFee: 79,
  codFee: 49,
  stitchFee: 0,
  orderPrefix: 'KM',
  instagram: '@krimmple',
  phone: '+91 98201 33870',
  email: 'hello@krimmple.in',

  announcements: ['New season: kurta sets, linen shirts and little prints', 'Twin with your family: 10% off a set of three with FAMILY10', 'Free shipping and easy returns above ₹1,499', 'First order? Take 10% off with KRIMMPLE10'],

  // Coupon codes accepted at bag / checkout (demo).
  coupons: {
    KRIMMPLE10: { type: 'percent', value: 10, label: '10% off your first order' },
    FAMILY10: { type: 'percent', value: 10, label: '10% off your family set' },
    FESTIVE300: { type: 'flat', value: 300, label: '₹300 off orders above ₹2,999', min: 2999 },
  },

  footer: {
    blurb: 'Kurta sets and dresses for her, shirts and trousers for him, little prints for the kids. Dressing the whole family.',
    columns: [
      {
        title: 'Shop',
        links: [
          { label: 'Women', to: '/shop?occasion=women' },
          { label: 'Kurta sets', to: '/shop/kurta-sets' },
          { label: 'Dresses', to: '/shop/dresses' },
          { label: 'Men', to: '/shop?occasion=men' },
          { label: 'Men’s shirts', to: '/shop/men-shirts' },
          { label: 'Kids', to: '/shop?occasion=kids' },
          { label: 'Kids’ shirts', to: '/shop/kids-shirts' },
        ],
      },
      {
        title: 'Help',
        links: [
          { label: 'Size guide', to: '/help#sizing' },
          { label: 'Shipping', to: '/help#shipping' },
          { label: 'Returns', to: '/help#returns' },
          { label: 'Track order', to: '/account' },
          { label: 'Contact', to: '/help#contact' },
        ],
      },
      {
        title: 'Krimmple',
        links: [
          { label: 'About us', to: '/about' },
          { label: 'Twin with your family', to: '/#family' },
          { label: 'Wishlist', to: '/wishlist' },
          { label: 'Privacy', to: '/help#privacy' },
        ],
      },
    ],
    social: [
      { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com' },
      { label: 'Facebook', icon: 'facebook', href: 'https://facebook.com' },
      { label: 'Pinterest', icon: 'pinterest', href: 'https://pinterest.com' },
      { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com' },
    ],
  },
}
