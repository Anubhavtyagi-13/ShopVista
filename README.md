# ShopVista - E-Commerce UI

A modern, responsive e-commerce frontend built with React.js and Tailwind CSS.

## Features

- 🛍️ **Product Listing** - Browse products with category filters and search
- 📱 **Product Details** - Detailed product pages with quantity selection
- 🛒 **Shopping Cart** - Add, remove, and update quantities with persistent storage
- 💳 **Checkout Page** - Complete checkout flow (UI only, no payment processing)
- 📱 **Responsive Design** - Works seamlessly on mobile and desktop
- 💾 **Local Storage** - Cart data persists across sessions

## Tech Stack

- React.js 18
- React Router DOM
- Tailwind CSS
- Context API for state management
- LocalStorage for data persistence

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable components
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── context/         # Context API providers
│   └── CartContext.jsx
├── pages/           # Page components
│   ├── ProductListing.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
├── data/            # Static data
│   └── products.json
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```

## Features in Detail

### Product Listing
- Search functionality
- Category filtering
- Responsive grid layout
- Product cards with ratings

### Shopping Cart
- Add/remove items
- Update quantities
- Persistent storage
- Order summary

### Checkout
- Shipping information form
- Order summary
- Form validation
- Demo order placement

## Notes

- This is a frontend-only application
- No backend or payment integration
- Product images use Unsplash placeholders
- Cart data is stored in browser localStorage

---

Made by **Anubhav Tyagi**

