# 🛒 বাজার দর | BazarDor

A responsive Bengali market-price application that helps users explore everyday product prices, compare available market information, and make informed shopping decisions.

## 🚀 Features

- **Responsive interface:** Mobile, tablet, and desktop layouts.
- **Product catalog:** Browse everyday products and their prices.
- **Price movements:** Identify products with rising and falling prices when change data is available.
- **Category filtering and sorting:** Browse categories and sort products by numeric price.
- **Product details:** View product information and available market-price comparisons.
- **Authentication:** Email/password registration and login using Better Auth.
- **Social login:** Google and GitHub OAuth integration.
- **Protected pages:** Require authentication to access product details and profile pages.
- **Profile management:** Update your display name.
- **Loading and error states:** Skeleton loaders, empty states, and friendly error pages.
- **Bengali localization:** Bengali labels and number formatting.
- **Deployment-ready:** Built for Next.js deployment on Vercel.

## 🛠️ Technologies

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Better Auth
- MongoDB
- React Hot Toast
- Lucide React
- BazarDor Products API
- Vercel

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd BazarDor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create `.env.local` using `.env.example` as a reference. Configure the product API, MongoDB connection, Better Auth secret, and OAuth credentials.

### 4. Start the development server

```bash
npm run dev
```

Visit http://localhost:3000.

### 5. Build for production

```bash
npm run build
npm run start
```

## 🌐 API Endpoints

Base URL: `https://api.api-store.workers.dev/api/bazardor`

- `GET /products` — All products
- `GET /products?category=chal` — Products filtered by category
- `GET /products/1` — Individual product
- `GET /categories` — All categories
- `GET /categories/chal` — Individual category

An alternative API base URL is provided in the assignment.

## 📁 Project Structure

```text
src/
├── app/
│   ├── api/auth/[...all]/
│   ├── category/[slug]/
│   ├── product/[slug]/
│   ├── signin/
│   ├── signup/
│   ├── profile/
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
├── lib/
└── types/
```



## 📦 Deployment

Deploy the repository to Vercel. Add the required environment variables in the Vercel project settings, then deploy the production build.

## 👩‍💻 Developer

**Khaleda Runa**

Frontend Web Developer | Modern Web Engineering

- GitHub: https://github.com/khaledaruna
- Portfolio: https://khaledaruna.com

---

*বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।*

*সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়.*