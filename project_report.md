# Project Report: Maison de Couture

**Maison de Couture** (formerly Luxury Couture House / Luxnibal) is a sophisticated, full-featured e-commerce platform designed for a high-end fashion boutique. The project features a beautifully designed public-facing storefront and a comprehensive, fully-functional administrative dashboard.

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v4) with custom theme configuration
- **State Management**: Zustand
- **Icons**: Lucide React & Google Material Symbols
- **Forms & Validation**: React Hook Form + Zod
- **Database/Backend (Prepared)**: Supabase integration ready (`@supabase/ssr`, `@supabase/supabase-js`)
- **Animation**: Framer Motion

## 🏗️ Architecture & Structure

The project uses Next.js App Router and is cleanly separated into two main routing groups:

### 1. Storefront (`src/app/(store)`)
The public-facing website where customers browse and purchase products.

- **`/` (Home)**: High-impact hero section, featured collections, and brand storytelling.
- **`/collection`**: Product catalog with filtering, sorting, and a "Favorites" toggle view.
- **`/product/[id]`**: Detailed product view with image galleries, sizing charts, and "Add to Cart" functionality.
- **`/cart` & `/checkout`**: Streamlined shopping cart and checkout flow.
- **`/about`**: Brand history, founder details, and heritage information.
- **`/contact`**: Customer support and inquiry forms.

### 2. Admin Dashboard (`src/app/admin`)
A deeply comprehensive back-office system for managing the entire business.

- **Dashboard Home**: High-level analytics, sales metrics, and recent activity.
- **Order Management (`/admin/orders`)**: View, process, and export orders (CSV). Includes a new order creation flow.
- **Product Management (`/admin/products`)**: Full CRUD interface for catalog items. Includes a dedicated `/admin/products/new` route.
- **Collections & Categories**: Grouping and tagging systems for organizing the catalog.
- **Inventory (`/admin/inventory`)**: Stock level tracking and quick-update sync buttons.
- **Customer Relations (`/admin/messages`, `/admin/customers`, `/admin/reviews`)**: Tools for responding to inquiries, managing user data, and moderating reviews.
- **Operations**: Routes for Delivery, Payments, Coupons, and general Store Settings.

## 🎨 Design System & Branding

- **Global Theme**: Defined in `src/app/globals.css`. It uses an elegant, minimalist color palette with an off-white background (`#fbf9f8`), deep charcoal text, and gold/champagne accents (`#C8A96A`).
- **Typography**: Uses modern Next.js optimized fonts (`Geist`, `Geist_Mono`) combined with tailored Tailwind typography classes for headings (`font-display-lg`, `font-label-caps`).
- **Recent Rebranding**: The entire application has been successfully rebranded to **Maison de Couture**. This includes:
  - Global `storeSettings` updates
  - Updated SEO Metadata
  - A newly integrated, gold "NR" logo with seamless background blending.

## ✅ Recent Enhancements

1. **Dashboard Interactivity**: Action buttons across the Admin Dashboard (Add Product, Export CSV, Save Changes, Update Stock) have been fully wired up with `onClick` handlers, alerts, and functional routing.
2. **New Creation Routes**: Dedicated UI pages have been built for creating new Products, Orders, and Collections, moving away from simple popups to robust, full-page forms.
3. **Logo & Header Optimization**: The main navigation header was updated to support the new transparent logo, gracefully replacing the legacy image and removing conflicting CSS blending modes.
4. **Dashboard Redirection**: Added a smart redirect from `/dashboard` to `/admin` to prevent 404 errors and improve administrative user experience.

## 🚀 Next Steps & Recommendations

- **Database Hookup**: The UI and state are fully built. The next major phase is connecting the mock data arrays to the actual Supabase backend using the installed `@supabase/ssr` packages.
- **Authentication**: Implementing Next.js middleware to protect the `/admin` routes so only authenticated staff can access the dashboard.
- **Image Hosting**: Migrating local static images (currently in `public/images`) to a cloud storage bucket (like Supabase Storage) for easier management via the admin panel.
