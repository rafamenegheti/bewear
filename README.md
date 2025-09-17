# 👗 BEWEAR - Modern E-commerce Fashion Platform

A modern, responsive e-commerce website built with Next.js 15, featuring a complete shopping experience for fashion and accessories.

![Next.js](https://img.shields.io/badge/Next.js-15.4.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🛍️ **E-commerce Core**

- **Product Catalog**: Browse products with categories, variants, and detailed views
- **Shopping Cart**: Add/remove items with quantity management
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Product Variants**: Multiple options (colors, sizes) for each product

### 🔐 **Authentication & User Management**

- **Secure Authentication**: Email/password login with BetterAuth
- **User Sessions**: Persistent login across sessions
- **Protected Routes**: Cart and checkout require authentication
- **Modern Auth UI**: Split-screen design with brand presentation

### 🎨 **Modern UI/UX**

- **Responsive Layout**: Mobile-first design with desktop enhancements
- **Component Library**: Built with shadcn/ui and Radix UI
- **Smooth Animations**: Hover effects and transitions
- **Toast Notifications**: Real-time user feedback
- **Dark Mode Ready**: Next Themes integration

### 🏗️ **Technical Excellence**

- **Type Safety**: Full TypeScript implementation
- **Database**: PostgreSQL with Drizzle ORM
- **Form Validation**: React Hook Form with Zod schemas
- **State Management**: TanStack Query for server state
- **Performance**: Next.js 15 App Router with optimizations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd bewear-bootcamp
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure your environment variables:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/bewear"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**

   ```bash
   npm run db:push
   npm run db:seed
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (pages)/                 # Route groups
│   │   ├── page.tsx            # Home page
│   │   ├── authentication/     # Auth pages
│   │   ├── product-variant/    # Product detail pages
│   │   └── cart/              # Shopping cart flow
│   ├── api/                    # API routes
│   └── globals.css            # Global styles
├── components/                  # Reusable components
│   ├── common/                 # Shared components
│   └── ui/                    # shadcn/ui components
├── actions/                    # Server actions
├── hooks/                      # Custom React hooks
│   ├── mutations/             # TanStack Query mutations
│   └── queries/              # TanStack Query queries
├── db/                        # Database configuration
│   ├── schema.ts             # Drizzle schema
│   ├── index.ts              # Database connection
│   └── seed.ts               # Database seeding
├── lib/                       # Utility libraries
└── providers/                 # React providers
```

## 🛠️ Tech Stack

### **Frontend**

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod
- **State**: TanStack Query
- **Icons**: Lucide React

### **Backend**

- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Authentication**: BetterAuth
- **Validation**: Zod schemas
- **API**: Next.js Server Actions

### **Developer Experience**

- **Linting**: ESLint + Prettier
- **Type Checking**: TypeScript
- **Database Tools**: Drizzle Kit
- **Package Manager**: npm/yarn/pnpm/bun

## 📱 Key Pages

- **`/`** - Homepage with featured products and categories
- **`/authentication`** - Sign in / Sign up with modern UI
- **`/product-variant/[slug]`** - Product detail page with variants
- **`/category/[slug]`** - Category product listing
- **`/cart/identification`** - Cart and address management

## 🎯 Features Overview

### **Homepage**

- Hero section with call-to-action
- Featured products carousel
- Category showcase
- Responsive grid layouts

### **Product Pages**

- High-quality product images
- Variant selection (colors, sizes)
- Add to cart functionality
- Product recommendations
- Breadcrumb navigation

### **Authentication**

- Split-screen design
- Email/password authentication
- Session management
- Protected routes

### **Shopping Cart**

- Item quantity management
- Address management
- Cart persistence
- Checkout flow

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:push      # Push schema changes
npm run db:studio    # Open Drizzle Studio
npm run db:seed      # Seed database with sample data
```

## 🌟 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.
