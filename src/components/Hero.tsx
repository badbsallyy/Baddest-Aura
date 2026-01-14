import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, TrendingUp, Clock } from 'lucide-react'

// Pre-generated particle positions for stable renders
const particleData = [
  { left: 15, top: 20, duration: 3.5, delay: 0.3 },
  { left: 85, top: 15, duration: 4.2, delay: 1.1 },
  { left: 45, top: 80, duration: 3.8, delay: 0.7 },
  { left: 70, top: 45, duration: 4.5, delay: 1.5 },
  { left: 25, top: 60, duration: 3.2, delay: 0.2 },
  { left: 90, top: 70, duration: 4.0, delay: 1.8 },
  { left: 10, top: 85, duration: 3.6, delay: 0.9 },
  { left: 55, top: 30, duration: 4.3, delay: 1.3 },
  { left: 35, top: 90, duration: 3.4, delay: 0.5 },
  { left: 75, top: 10, duration: 4.1, delay: 1.7 },
  { left: 5, top: 50, duration: 3.9, delay: 0.1 },
  { left: 60, top: 65, duration: 4.4, delay: 1.0 },
  { left: 40, top: 25, duration: 3.3, delay: 0.6 },
  { left: 80, top: 55, duration: 4.6, delay: 1.4 },
  { left: 20, top: 75, duration: 3.7, delay: 0.8 },
  { left: 95, top: 35, duration: 4.2, delay: 1.6 },
  { left: 30, top: 5, duration: 3.1, delay: 0.4 },
  { left: 65, top: 95, duration: 4.0, delay: 1.2 },
  { left: 50, top: 40, duration: 3.5, delay: 0.0 },
  { left: 8, top: 12, duration: 4.3, delay: 1.9 },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[150px]"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Floating Particles */}
        {particleData.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm text-gray-300">Über 10.000+ aktive Deals</span>
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="block text-white">Die besten</span>
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Deals & Angebote
          </span>
          <span className="block text-white">für dich.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Entdecke exklusive Rabatte, Flash Sales und unschlagbare Angebote.
          Spare jeden Tag bares Geld mit unseren handverlesenen Deals.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold flex items-center gap-3 hover:shadow-xl hover:shadow-purple-500/30 transition-all"
          >
            Deals entdecken
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl glass text-white font-semibold hover:bg-white/10 transition-all"
          >
            Newsletter abonnieren
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: TrendingUp, value: '10k+', label: 'Aktive Deals' },
            { icon: Clock, value: '24/7', label: 'Updates' },
            { icon: Sparkles, value: '50%', label: 'Durchschnittliche Ersparnis' },
            { icon: TrendingUp, value: '100k+', label: 'Happy Users' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="glass rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all group"
            >
              <stat.icon className="w-6 h-6 text-indigo-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
