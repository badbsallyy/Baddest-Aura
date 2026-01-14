import { motion } from 'framer-motion'

const marqueeItems = [
  '🔥 Flash Sale: Bis zu 70% Rabatt',
  '⚡ Neue Deals jede Stunde',
  '🎁 Exklusive Member-Angebote',
  '🚀 Kostenloser Versand ab 50€',
  '💎 Premium Deals verfügbar',
  '✨ Über 10.000 aktive Angebote',
  '🏆 Beste Preise garantiert',
  '💰 Täglich neue Schnäppchen',
]

export function Marquee() {
  return (
    <div className="relative py-6 overflow-hidden border-y border-white/5 bg-gradient-to-r from-indigo-900/20 via-purple-900/20 to-indigo-900/20">
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
          <span
            key={index}
            className="text-sm font-medium text-gray-300 flex items-center gap-2"
          >
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
