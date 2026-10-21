# Krimmple

A demo storefront for Krimmple, for the whole family:
- women: kurta sets, anarkalis, dresses and co-ords
- men: shirts and trousers
- kids: shirts and kurta shirts

53 pieces from ₹699 to ₹2,999.

## Run it

```bash
npm install
npm run dev
```

Build with `npm run build`, then preview with `npm run preview`.

## What works

- **Home:**
  - A split hero with Women / Men / Kids tabs.
  - Shop by categories and three family cards.
  - Deal of the day, with a live countdown to midnight.
  - A running ticker of product names.
  - **Twin with your family:** choose a colour story, then sizes for her, him and the kids, and add the set in one go. FAMILY10 (10% off) is applied automatically.
  - Customer notes, services, our story, coupon codes and an Instagram wall.
- **Shop:**
  - Women, Men and Kids menus, and a Family filter.
  - Categories:
    - Women: Kurta sets, Anarkalis, Dresses, Co-ords
    - Men: Men's shirts, Trousers
    - Kids: Kids' shirts, Kids' kurta shirts
  - Filters in the URL: fabric, family, colour, price.
  - Sort, and search with suggestions.
- **Product page:**
  - Gallery with zoom and colour siblings.
  - Sizes:
    - adults: XS to XXL, or waist 28 to 38 for trousers
    - kids: 2-3Y to 10-11Y
  - A size guide for adults and kids.
  - Pincode check, reviews, related and recently viewed.
- **Bag:**
  - Drawer and full page, with free shipping over ₹1,499.
  - Coupons: `KRIMMPLE10`, `FAMILY10`, `FESTIVE300` (₹2,999+).
- **Checkout:**
  - Address with pincode autofill, then UPI, card, net banking or COD (₹49).
  - Order confirmation and order history on this device.
- **Also:** wishlist, account, help/FAQ, about us, a 404 page and an error page.

All data is local (`src/data`). The cart, wishlist and orders are saved in localStorage. No real payment is taken. Reviews and customer notes are sample content.

## Stack

- Vite, React 19, React Router 7, Tailwind CSS v4
- Motion, Lenis, Phosphor icons
- Lexend and Karla fonts
