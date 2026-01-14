export interface Deal {
  id: number
  title: string
  description: string
  originalPrice: number
  discountPrice: number
  discount: number
  category: string
  image: string
  brand: string
  rating: number
  reviews: number
  featured: boolean
  hot: boolean
  endDate: string
  link: string
}

export const deals: Deal[] = [
  {
    id: 1,
    title: "Apple AirPods Pro 2",
    description: "Aktive Geräuschunterdrückung mit Adaptive Transparency",
    originalPrice: 279,
    discountPrice: 199,
    discount: 29,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop",
    brand: "Apple",
    rating: 4.9,
    reviews: 12453,
    featured: true,
    hot: true,
    endDate: "2024-12-31",
    link: "#"
  },
  {
    id: 2,
    title: "Nike Air Max 90",
    description: "Klassiker neu interpretiert mit Max Air Dämpfung",
    originalPrice: 159,
    discountPrice: 89,
    discount: 44,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    brand: "Nike",
    rating: 4.7,
    reviews: 8234,
    featured: true,
    hot: false,
    endDate: "2024-12-28",
    link: "#"
  },
  {
    id: 3,
    title: "Sony WH-1000XM5",
    description: "Premium Noise Cancelling Kopfhörer",
    originalPrice: 399,
    discountPrice: 279,
    discount: 30,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=400&fit=crop",
    brand: "Sony",
    rating: 4.8,
    reviews: 6721,
    featured: false,
    hot: true,
    endDate: "2024-12-25",
    link: "#"
  },
  {
    id: 4,
    title: "Samsung Galaxy S24 Ultra",
    description: "Das ultimative Smartphone mit Galaxy AI",
    originalPrice: 1449,
    discountPrice: 1099,
    discount: 24,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    brand: "Samsung",
    rating: 4.6,
    reviews: 3456,
    featured: true,
    hot: false,
    endDate: "2024-12-30",
    link: "#"
  },
  {
    id: 5,
    title: "Dyson V15 Detect",
    description: "Kabelloser Staubsauger mit Laser-Erkennung",
    originalPrice: 749,
    discountPrice: 549,
    discount: 27,
    category: "Home",
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
    brand: "Dyson",
    rating: 4.8,
    reviews: 2198,
    featured: false,
    hot: true,
    endDate: "2024-12-27",
    link: "#"
  },
  {
    id: 6,
    title: "PlayStation 5 Bundle",
    description: "Konsole + 2 Controller + FIFA 25",
    originalPrice: 599,
    discountPrice: 449,
    discount: 25,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
    brand: "Sony",
    rating: 4.9,
    reviews: 15678,
    featured: true,
    hot: true,
    endDate: "2024-12-24",
    link: "#"
  },
  {
    id: 7,
    title: "Adidas Ultraboost Light",
    description: "Leichtester Ultraboost aller Zeiten",
    originalPrice: 190,
    discountPrice: 119,
    discount: 37,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&h=400&fit=crop",
    brand: "Adidas",
    rating: 4.5,
    reviews: 4532,
    featured: false,
    hot: false,
    endDate: "2024-12-29",
    link: "#"
  },
  {
    id: 8,
    title: "MacBook Air M3",
    description: "Superleicht. Superschnell. Superlang.",
    originalPrice: 1299,
    discountPrice: 1099,
    discount: 15,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    brand: "Apple",
    rating: 4.9,
    reviews: 7823,
    featured: true,
    hot: false,
    endDate: "2024-12-31",
    link: "#"
  },
  {
    id: 9,
    title: "Bose QuietComfort Ultra",
    description: "Immersive Audio mit Spatial Sound",
    originalPrice: 449,
    discountPrice: 349,
    discount: 22,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop",
    brand: "Bose",
    rating: 4.7,
    reviews: 3421,
    featured: false,
    hot: true,
    endDate: "2024-12-26",
    link: "#"
  },
  {
    id: 10,
    title: "Nintendo Switch OLED",
    description: "Das ultimative Handheld-Gaming-Erlebnis",
    originalPrice: 349,
    discountPrice: 289,
    discount: 17,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop",
    brand: "Nintendo",
    rating: 4.8,
    reviews: 9876,
    featured: true,
    hot: false,
    endDate: "2024-12-28",
    link: "#"
  },
  {
    id: 11,
    title: "North Face Nuptse Jacket",
    description: "Ikonische Daunenjacke für den Winter",
    originalPrice: 350,
    discountPrice: 245,
    discount: 30,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1544923246-77307dd628b0?w=400&h=400&fit=crop",
    brand: "The North Face",
    rating: 4.6,
    reviews: 2134,
    featured: false,
    hot: true,
    endDate: "2024-12-25",
    link: "#"
  },
  {
    id: 12,
    title: "LG OLED65C4",
    description: "65 Zoll OLED TV mit AI Processor",
    originalPrice: 2499,
    discountPrice: 1699,
    discount: 32,
    category: "Home",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    brand: "LG",
    rating: 4.9,
    reviews: 1876,
    featured: true,
    hot: true,
    endDate: "2024-12-30",
    link: "#"
  }
]

export const categories = [
  { name: "Alle", icon: "🔥" },
  { name: "Tech", icon: "💻" },
  { name: "Fashion", icon: "👟" },
  { name: "Gaming", icon: "🎮" },
  { name: "Home", icon: "🏠" },
]
