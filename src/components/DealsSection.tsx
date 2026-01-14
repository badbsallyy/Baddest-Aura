import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { deals, categories } from '../data/deals'
import { DealCard } from './DealCard'
import { cn } from '../lib/utils'

export function DealsSection() {
  const [activeCategory, setActiveCategory] = useState('Alle')
  const [showAll, setShowAll] = useState(false)

  const filteredDeals = activeCategory === 'Alle'
    ? deals
    : deals.filter(deal => deal.category === activeCategory)

  const displayedDeals = showAll ? filteredDeals : filteredDeals.slice(0, 8)

  return (
    <section id="deals" className="relative py-24 px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-indigo-400 mb-4"
          >
            🔥 Aktuelle Deals
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entdecke die{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              besten Angebote
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Handverlesene Deals mit bis zu 70% Rabatt. Täglich aktualisiert für maximale Ersparnis.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.name)}
              className={cn(
                "px-6 py-3 rounded-xl text-sm font-medium transition-all",
                activeCategory === category.name
                  ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                  : "glass text-gray-300 hover:text-white hover:bg-white/10"
              )}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Deals Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedDeals.map((deal, index) => (
              <motion.div
                key={deal.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <DealCard deal={deal} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        {filteredDeals.length > 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 rounded-2xl glass text-white font-medium hover:bg-white/10 transition-all"
            >
              {showAll ? 'Weniger anzeigen' : `Alle ${filteredDeals.length} Deals anzeigen`}
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
