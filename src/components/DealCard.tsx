import { motion } from 'framer-motion'
import { Star, Clock, ExternalLink, Flame } from 'lucide-react'
import type { Deal } from '../data/deals'
import { cn } from '../lib/utils'

interface DealCardProps {
  deal: Deal
  index: number
}

export function DealCard({ deal, index }: DealCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="glass rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={deal.image}
            alt={deal.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {deal.hot && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold"
              >
                <Flame className="w-3 h-3" />
                Hot
              </motion.div>
            )}
            {deal.featured && (
              <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold">
                Featured
              </div>
            )}
          </div>
          
          {/* Discount Badge */}
          <div className="absolute top-4 right-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">-{deal.discount}%</span>
            </div>
          </div>
          
          {/* Category & Brand */}
          <div className="absolute bottom-4 left-4">
            <span className="text-xs text-gray-300 uppercase tracking-wider">{deal.brand}</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1 group-hover:text-indigo-300 transition-colors">
            {deal.title}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-gray-400 mb-4 line-clamp-2">
            {deal.description}
          </p>
          
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-white font-medium">{deal.rating}</span>
            </div>
            <span className="text-sm text-gray-500">({deal.reviews.toLocaleString()} Bewertungen)</span>
          </div>
          
          {/* Price */}
          <div className="flex items-end justify-between mb-4">
            <div>
              <span className="text-sm text-gray-500 line-through">{deal.originalPrice}€</span>
              <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {deal.discountPrice}€
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <Clock className="w-3.5 h-3.5" />
              <span>Endet bald</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <motion.a
            href={deal.link}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-sm transition-all",
              "bg-gradient-to-r from-indigo-500 to-purple-600 text-white",
              "hover:shadow-lg hover:shadow-purple-500/25"
            )}
          >
            Deal ansehen
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
