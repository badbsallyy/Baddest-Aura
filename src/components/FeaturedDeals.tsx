import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { deals } from '../data/deals'
import { Star, ArrowRight, Sparkles } from 'lucide-react'

export function FeaturedDeals() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const featuredDeals = deals.filter(deal => deal.featured).slice(0, 3)

  return (
    <section id="featured" ref={containerRef} className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-indigo-600/30 to-transparent rounded-full blur-[150px]"
        />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Handverlesen für dich</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Top{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Featured
            </span>{' '}
            Deals
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Unsere absoluten Highlight-Deals mit maximaler Ersparnis.
          </p>
        </motion.div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredDeals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              
              <div className="relative glass rounded-3xl overflow-hidden">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Rank Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                    <span className="text-black font-bold text-lg">#{index + 1}</span>
                  </div>
                  
                  {/* Discount */}
                  <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-bold text-sm">
                    -{deal.discount}%
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-indigo-400 font-medium uppercase tracking-wider">
                      {deal.brand}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-xs text-gray-500">{deal.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                    {deal.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {deal.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(deal.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      ({deal.reviews.toLocaleString()})
                    </span>
                  </div>
                  
                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500 line-through block">
                        {deal.originalPrice}€
                      </span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                        {deal.discountPrice}€
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all"
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
