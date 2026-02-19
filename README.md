# E&L Studio - Premium Fashion E-Commerce

A professional, modern e-commerce website for a premium women's fashion brand built with Next.js, TypeScript, and TailwindCSS.

## 🌟 Features

- **Modern Stack**: Next.js 15 (App Router), React 19, TypeScript
- **Elegant Design**: Minimalist, editorial-style layout inspired by premium fashion brands
- **Smooth Animations**: Framer Motion for refined micro-interactions
- **Responsive**: Fully responsive design that works on all devices
- **Shopping Cart**: Fully functional cart with add/remove/update functionality
- **Product Filtering**: Advanced filtering by category, size, and price
- **Optimized Images**: Next.js Image component for optimal performance
- **Type-Safe**: Full TypeScript implementation

## 🎨 Design Philosophy

E&L Studio embodies:
- Sophisticated minimalism
- Editorial aesthetics (Vogue/Zara/Aritzia inspired)
- Contemporary European style
- Clean design with generous white space
- Typography-driven layout
- High-impact photography

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd "e&l"
```

2. Install dependencies (already installed):
```bash
npm install
```

3. Run the development server:

**Important**: Due to the `&` character in the folder name, you need to run Next.js directly:

```bash
node node_modules/next/dist/bin/next dev
```

Alternatively, you can use the npm scripts (may require escaping on Windows):
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

> **Note**: If you encounter path issues on Windows due to the `&` in the folder name, either use the direct node command above or rename the folder to "el-studio" and update the references accordingly.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   ├── shop/
│   │   └── page.tsx        # Shop page with filters
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx    # Product detail page
│   ├── about/
│   │   └── page.tsx        # About page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   ├── Cart.tsx            # Shopping cart drawer
│   └── CartProvider.tsx    # Cart state management
├── lib/
│   └── data.ts             # Product and category data
├── types/
│   └── index.ts            # TypeScript type definitions
└── public/                 # Static assets
```

## 🛍️ Pages

1. **Home** (`/`)
   - Fullscreen hero with editorial imagery
   - Featured categories
   - New collection showcase
   - Editorial content section

2. **Shop** (`/shop`)
   - Product grid with filtering
   - Category, size, and price filters
   - Responsive layout

3. **Product Detail** (`/product/[id]`)
   - Large product images with gallery
   - Size selector
   - Add to cart functionality
   - Related products section

4. **About** (`/about`)
   - Brand story
   - Values and mission
   - Editorial imagery

## 🎨 Color Palette

- White (#FFFFFF)
- Black (#000000)
- Beige variations (#FAF9F7 - #B8A999)
- Gray tones

## 🔤 Typography

- **Serif**: Playfair Display (headings, brand)
- **Sans-serif**: Inter (body text, UI)

## 🛠️ Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Images**: Next.js Image (Unsplash)

## 📦 Build

To create a production build:

```bash
npm run build
npm start
```

## 🎯 Future Enhancements

- Backend integration (API routes)
- User authentication
- Payment processing
- Wishlist functionality
- Product reviews
- Search functionality
- Newsletter subscription
- Blog/Editorial section

## 📝 License

This is a demo project for educational purposes.

## 👥 Credits

- Images: [Unsplash](https://unsplash.com)
- Icons: [Lucide](https://lucide.dev)
- Fonts: [Google Fonts](https://fonts.google.com)

---

Built with ❤️ for modern fashion brands
