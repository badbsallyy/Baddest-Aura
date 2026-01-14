import { motion } from 'framer-motion'
import { Zap, Github, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'

const footerLinks = {
  produkt: [
    { name: 'Alle Deals', href: '#deals' },
    { name: 'Kategorien', href: '#categories' },
    { name: 'Top Angebote', href: '#featured' },
    { name: 'Flash Sales', href: '#' },
  ],
  unternehmen: [
    { name: 'Über uns', href: '#' },
    { name: 'Karriere', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Presse', href: '#' },
  ],
  support: [
    { name: 'FAQ', href: '#' },
    { name: 'Kontakt', href: '#' },
    { name: 'Partner werden', href: '#' },
    { name: 'Feedback', href: '#' },
  ],
  rechtliches: [
    { name: 'Impressum', href: '#' },
    { name: 'Datenschutz', href: '#' },
    { name: 'AGB', href: '#' },
    { name: 'Cookies', href: '#' },
  ],
}

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
]

export function Footer() {
  return (
    <footer className="relative pt-24 pb-8 px-4">
      {/* Background */}
      <div className="absolute inset-0 border-t border-white/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                DealsDrop
              </span>
            </motion.a>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Die beste Plattform für Deals, Angebote und Rabatte. Spare jeden Tag mit handverlesenen Schnäppchen.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <social.icon className="w-4 h-4 text-gray-400" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              © {new Date().getFullYear()} DealsDrop. Made with{' '}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Germany.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Datenschutz
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                AGB
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
