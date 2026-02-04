import { useLanguage } from "@/hooks/use-language";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";
import logo2 from "@assets/logo_2_1770120807165.jpeg";

export function Footer() {
  const { t, dir } = useLanguage();

  return (
    <footer className="gradient-bg-primary text-white pt-24 pb-12 relative overflow-hidden" dir={dir}>
      {/* Custom Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img src="/dubai-night-smart-cities.jpg" className="w-full h-full object-cover opacity-20" />
      </div>
      
      {/* Animated Background Elements - Gold Theme */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 gradient-bg-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <img 
                  src={logo2} 
                  alt="Logo" 
                  className="w-16 h-16 rounded-2xl border-2 border-white/20 relative z-10 shadow-2xl" 
                />
              </div>
              <div>
                <span className="text-3xl font-black gradient-text-gold">Land AI</span>
                <div className="text-xs text-gray-300 font-medium">Real Estate Solutions</div>
              </div>
            </div>
            
            <p className="text-gray-200 leading-relaxed max-w-xs font-light">
              {t("hero.subtitle")}
            </p>
            
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 glass-card-light hover:gradient-bg-accent rounded-2xl flex items-center justify-center transition-all duration-300 group/social"
                >
                  <social.icon className="w-5 h-5 group-hover/social:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-black mb-8 gradient-text-gold">{t("contact.title")}</h3>
            <ul className="space-y-5 text-gray-200">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-2xl glass-card-light flex items-center justify-center flex-shrink-0 group-hover:gradient-bg-primary transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="leading-relaxed">Dubai & Abu Dhabi,<br/>United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-2xl glass-card-light flex items-center justify-center flex-shrink-0 group-hover:gradient-bg-primary transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <a href="tel:+971522850625" className="hover:gradient-text-gold transition-all font-medium">+971 52 285 0625</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-2xl glass-card-light flex items-center justify-center flex-shrink-0 group-hover:gradient-bg-primary transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:land.a.i@outlook.com" className="hover:gradient-text-gold transition-all font-medium">land.a.i@outlook.com</a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-black mb-8 gradient-text-gold">{t("nav.services")}</h3>
            <ul className="space-y-4 text-gray-200">
              {[
                { label: t("services.brokerage"), href: "#services" },
                { label: t("services.management"), href: "#services" },
                { label: t("services.maintenance"), href: "#services" },
                { label: t("services.land"), href: "#services" }
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="flex items-center gap-2 hover:gradient-text-gold transition-all font-medium group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 group-hover:bg-yellow-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-black mb-8 gradient-text-gold">{t("management.title")}</h3>
            <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 gradient-bg-accent rounded-2xl flex items-center justify-center font-black text-2xl group-hover:scale-110 transition-transform neon-glow">
                  BH
                </div>
                <div>
                  <p className="font-black text-white text-lg">Mr. Bassam Hussein</p>
                  <p className="text-sm text-gray-300 font-medium">{t("management.role")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p 
              className="text-gray-300 text-sm font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} Land AI Real Estate. All rights reserved.
            </motion.p>
            
            <div className="flex gap-6 text-sm font-medium text-gray-300">
              <a href="#" className="hover:gradient-text-gold transition-all">Privacy Policy</a>
              <a href="#" className="hover:gradient-text-gold transition-all">Terms of Service</a>
              <a href="#" className="hover:gradient-text-gold transition-all">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
