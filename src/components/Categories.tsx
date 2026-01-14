import { motion } from 'framer-motion'
import { Laptop, Shirt, Gamepad2, Home, Headphones, Watch } from 'lucide-react'

const categoryData = [
  { name: 'Technik', icon: Laptop, color: 'from-blue-500 to-cyan-500', deals: '2.4k' },
  { name: 'Fashion', icon: Shirt, color: 'from-pink-500 to-rose-500', deals: '1.8k' },
  { name: 'Gaming', icon: Gamepad2, color: 'from-purple-500 to-indigo-500', deals: '1.2k' },
  { name: 'Home', icon: Home, color: 'from-orange-500 to-amber-500', deals: '980' },
  { name: 'Audio', icon: Headphones, color: 'from-green-500 to-emerald-500', deals: '756' },
  { name: 'Uhren', icon: Watch, color: 'from-indigo-500 to-violet-500', deals: '432' },
]

export function Categories() {
  return (
    <section id="categories" className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-purple-400 mb-4">
            📂 Kategorien
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Finde dein{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              perfektes Deal
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Durchstöbere unsere Kategorien und entdecke tausende von Angeboten.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryData.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Name */}
                <h3 className="text-white font-semibold mb-1 group-hover:text-indigo-300 transition-colors">
                  {category.name}
                </h3>
                
                {/* Deal Count */}
                <p className="text-sm text-gray-500">
                  {category.deals} Deals
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
