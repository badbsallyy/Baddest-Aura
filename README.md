# DealsDrop - Modern Deals & Offers Website

A modern, futuristic deals and offers website built for a young audience. Features stunning animations, smooth components, and a clean UI inspired by premium Framer websites.

![Hero Section](https://github.com/user-attachments/assets/cf017853-428f-4af5-b5d9-11f1a31ccdb3)

## ✨ Features

- **🎨 Modern Futuristic Design** - Dark theme with gradient effects, glassmorphism, and smooth animations
- **🚀 Hero Section** - Animated gradient orbs, floating particles, statistics display
- **📂 Categories** - Icon-based category cards with hover animations
- **🔥 Deals Section** - Filterable deal cards with category tabs, discount badges, ratings
- **⭐ Featured Deals** - Parallax-enabled featured product showcase with rankings
- **📧 Newsletter** - Email subscription section with animated form
- **📱 Fully Responsive** - Optimized for all device sizes

## 🛠 Tech Stack

- **React 19** with TypeScript
- **Vite** for lightning-fast builds
- **Tailwind CSS 4.0** for modern styling
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/badbsallyy/Baddest-Aura.git

# Navigate to project directory
cd Baddest-Aura

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Navigation with glassmorphism
│   ├── Hero.tsx          # Hero section with animations
│   ├── Categories.tsx    # Category cards
│   ├── DealsSection.tsx  # Main deals grid with filtering
│   ├── DealCard.tsx      # Individual deal card
│   ├── FeaturedDeals.tsx # Featured products section
│   ├── Newsletter.tsx    # Email subscription
│   ├── Marquee.tsx       # Scrolling ticker
│   └── Footer.tsx        # Site footer
├── data/
│   └── deals.ts          # Deal data and categories
├── lib/
│   └── utils.ts          # Utility functions (cn)
├── App.tsx               # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles & Tailwind
```

## 🎯 Deployment

This project is configured for Vercel deployment. Simply connect your repository to Vercel and it will automatically detect the Vite configuration.

## 📄 License

MIT License - feel free to use this project for your own purposes.
