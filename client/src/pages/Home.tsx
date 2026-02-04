import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";
import { useProperties } from "@/hooks/use-properties";
import { PropertyCard } from "@/components/PropertyCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, Key, Hammer, TrendingUp, Smartphone, Users, MapPin } from "lucide-react";

export default function Home() {
  const { t, dir } = useLanguage();
  const { data: properties, isLoading } = useProperties();

  // Animations
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    { icon: Key, title: t("services.brokerage"), desc: t("services.brokerage.desc") },
    { icon: Users, title: t("services.management"), desc: t("services.management.desc") },
    { icon: Hammer, title: t("services.maintenance"), desc: t("services.maintenance.desc") },
    { icon: MapPin, title: t("services.land"), desc: t("services.land.desc") },
    { icon: Smartphone, title: t("services.ecommerce"), desc: t("services.ecommerce.desc") },
  ];

  return (
    <div className="min-h-screen bg-background font-sans relative overflow-hidden luxury-bg-pattern" dir={dir}>
      {/* Animated Background Mesh */}
      <div className="fixed inset-0 gradient-bg-mesh opacity-20 dark:opacity-30 pointer-events-none" />
      
      {/* Luxury Background Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(251, 191, 36, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(245, 158, 11, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(251, 191, 36, 0.05) 0%, transparent 60%)
          `,
          backgroundAttachment: 'fixed'
        }} />
      </div>
      
      <Navbar />

      {/* Hero Section - 12D Immersive Dubai Skyline */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden perspective-container">
        {/* Multi-Layer Parallax Background - 12D Effect */}
        <div className="absolute inset-0 z-0">
          {/* Layer 1 - Far Background Sky */}
          <motion.div 
            className="absolute inset-0"
            style={{ transform: 'translateZ(-100px) scale(1.1)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-black/50 to-black/80" />
          </motion.div>

          {/* Layer 2 - Custom Background Image */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ transform: 'translateZ(-50px)' }}
          >
            <img 
              src="/fon5.jpg"
              alt="Dubai Luxury Real Estate"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Layer 3 - Atmospheric Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/85 to-black/90 dark:from-black/95 dark:via-gray-950/90 dark:to-black/95"
            style={{ transform: 'translateZ(-30px)' }}
          />

          {/* Layer 4 - Floating Gold Particles */}
          <div className="absolute inset-0" style={{ transform: 'translateZ(-20px)' }}>
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-purple-400/40 rounded-full blur-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 10 + Math.random() * 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          {/* Layer 5 - Animated Golden Orbs */}
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{ transform: 'translateZ(-10px)' }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            style={{ transform: 'translateZ(-10px)' }}
          />

          {/* Layer 6 - Light Rays */}
          <motion.div 
            className="absolute inset-0 opacity-30"
            style={{ transform: 'translateZ(0px)' }}
          >
            <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-amber-400/50 via-amber-400/10 to-transparent rotate-12 blur-xl" />
            <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-yellow-400/40 via-yellow-400/10 to-transparent -rotate-12 blur-xl" />
          </motion.div>

          {/* Layer 7 - Foreground Shimmer Grid */}
          <motion.div
            className="absolute inset-0"
            style={{ 
              backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(251, 191, 36, 0.03) 50%, transparent 100%)',
              backgroundSize: '100px 100%',
              transform: 'translateZ(10px)'
            }}
            animate={{ backgroundPosition: ['0% 0%', '100% 0%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        {/* Content - Floating Above Everything */}
        <div className="container relative z-50 px-4 md:px-6">
          <motion.div 
            className="max-w-3xl space-y-8"
            initial="initial"
            animate="animate"
            variants={fadeIn}
            style={{ transform: 'translateZ(50px)' }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-white"
              style={{ textShadow: '0 10px 40px rgba(0,0,0,0.5), 0 0 80px rgba(251, 191, 36, 0.3)' }}
            >
              <motion.span 
                className="block"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Find Your Dream Luxury Home in UAE
              </motion.span>
              <motion.span 
                className="block gradient-text-accent mt-2 text-6xl md:text-7xl"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                In Dubai & UAE
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-100 leading-relaxed max-w-2xl font-light"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.7)' }}
            >
              Exclusive properties in Dubai & Abu Dhabi tailored to your lifestyle.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-5 pt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Elegant Primary Button */}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <Button 
                  size="lg" 
                  className="btn-elegant btn-elegant-primary px-10 py-6 h-auto rounded-lg text-base font-semibold tracking-wide"
                >
                  <span className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Explore Properties
                  </span>
                </Button>
              </motion.div>

              {/* Elegant Secondary Button */}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <Button 
                  size="lg" 
                  className="btn-elegant btn-elegant-secondary px-10 py-6 h-auto rounded-lg text-base font-semibold tracking-wide"
                >
                  <span className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    Contact Us
                  </span>
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Stats - Calm Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
              className="flex gap-6 pt-8"
            >
              {[
                { num: "500+", label: "Properties" },
                { num: "1000+", label: "Happy Clients" },
                { num: "50+", label: "Expert Agents" }
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  className="text-center glass-card-light px-6 py-4 rounded-xl border border-purple-500/20"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + i * 0.2, duration: 1, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text-gold">{stat.num}</div>
                  <div className="text-sm text-gray-300 mt-1 font-normal">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator - Floating */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ transform: 'translateZ(30px)' }}
        >
          <div className="w-6 h-10 border-2 border-purple-500/70 rounded-full flex justify-center pt-2 backdrop-blur-sm bg-black/20 shadow-lg">
            <motion.div 
              className="w-1.5 h-1.5 bg-purple-400 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative overflow-hidden">
        {/* Custom Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img src="/dubai-night-smart-cities.jpg" className="w-full h-full object-cover opacity-20" />
        </div>
        
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background/85 z-10" />
        <div className="absolute inset-0 opacity-40 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 15% 30%, rgba(251, 191, 36, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 85% 70%, rgba(245, 158, 11, 0.08) 0%, transparent 40%),
              repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(251, 191, 36, 0.02) 80px, rgba(251, 191, 36, 0.02) 81px)
            `,
            backgroundAttachment: 'fixed'
          }} />
        </div>
        
        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold tracking-widest uppercase gradient-text-primary mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
              {t("services.title")}
            </h2>
            <div className="w-32 h-2 gradient-bg-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, rotateX: 3 }}
                className="group relative"
              >
                <div className="glass-card p-8 rounded-3xl card-3d h-full relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 gradient-bg-primary rounded-2xl flex items-center justify-center mb-6 text-white neon-glow group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4 text-foreground group-hover:gradient-text-primary transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  
                  {/* Shine Effect */}
                  <div className="absolute top-0 left-0 w-full h-full shimmer opacity-0 group-hover:opacity-100 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-32 relative overflow-hidden">
        {/* Custom Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img src="/dubai-night-smart-cities.jpg" className="w-full h-full object-cover opacity-22" />
        </div>
        
        {/* Elegant Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background/80 z-10" />
        <div className="absolute inset-0 opacity-50 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 40%, rgba(251, 191, 36, 0.1) 0%, transparent 45%),
              radial-gradient(circle at 75% 60%, rgba(245, 158, 11, 0.1) 0%, transparent 45%),
              repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(251, 191, 36, 0.02) 100px, rgba(251, 191, 36, 0.02) 101px)
            `,
            backgroundAttachment: 'fixed'
          }} />
        </div>
        
        {/* Animated Decorative Elements */}
        <motion.div 
          className="absolute top-40 left-20 w-72 h-72 bg-purple-400/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1], 
            opacity: [0.4, 0.6, 0.4],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 right-20 w-96 h-96 bg-blue-400/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.4, 0.6, 0.4],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="text-sm font-bold tracking-widest uppercase gradient-text-accent mb-3 block">Exclusive Collection</span>
              <h2 className="text-4xl md:text-6xl font-black mb-3 text-foreground">
                {t("featured.title")}
              </h2>
              <div className="w-28 h-2 gradient-bg-accent rounded-full" />
            </div>
            
            {/* Elegant Button */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <Button className="btn-elegant btn-elegant-primary px-8 py-5 h-auto rounded-lg font-semibold tracking-wide">
                View All Properties
              </Button>
            </motion.div>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[500px] glass-card animate-pulse rounded-3xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties?.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-32 gradient-bg-primary text-white relative overflow-hidden">
        {/* Custom Background Image Layer */}
        <div className="absolute inset-0 opacity-25 z-0">
          <img src="/dubai-night-smart-cities.jpg" className="w-full h-full object-cover" />
        </div>
        
        {/* Enhanced Pattern Overlay */}
        <div className="absolute inset-0 opacity-60 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(251, 191, 36, 0.03) 3px, rgba(251, 191, 36, 0.03) 4px),
              repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(251, 191, 36, 0.03) 3px, rgba(251, 191, 36, 0.03) 4px)
            `
          }} />
        </div>
        
        {/* Animated Decorative Orbs */}
        <motion.div 
          className="absolute top-10 right-10 w-80 h-80 bg-purple-400/25 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.5, 0.7, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.25, 1], 
            opacity: [0.5, 0.7, 0.5],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-300/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Light Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-300/40 rounded-full"
            style={{
              left: `${5 + i * 8}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 8 + i * 1.2,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut"
            }}
          />
        ))}
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-purple-500/30">
                  <TrendingUp className="w-6 h-6 text-purple-300" />
                </div>
                <span className="font-black tracking-widest uppercase text-purple-300">ROI Focused</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                {t("investors.title")}
              </h2>
              
              <p className="text-xl text-gray-100 mb-10 leading-relaxed font-light">
                {t("investors.desc")}
              </p>
              
              <ul className="space-y-5 mb-10">
                {["Market Analysis & Trends", "High Yield Opportunities", "End-to-End Asset Management"].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-xl gradient-bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Elegant Button */}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <Button className="btn-elegant btn-elegant-secondary px-12 py-7 h-auto rounded-lg font-semibold tracking-wide">
                  Start Investing
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50, rotateY: -20 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-8 gradient-bg-accent rounded-full blur-3xl opacity-30" />
              <div className="relative glass-card p-4 rounded-3xl neon-glow">
                <img 
                  src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1287&auto=format&fit=crop" 
                  alt="Investment" 
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section id="management" className="py-32 relative overflow-hidden">
        {/* Custom Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img src="/dubai-night-smart-cities.jpg" className="w-full h-full object-cover opacity-22" />
        </div>
        
        {/* Elegant Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/82 via-background/88 to-background/82 z-10" />
        <div className="absolute inset-0 opacity-50">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30% 30%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
              repeating-linear-gradient(-45deg, transparent, transparent 70px, rgba(251, 191, 36, 0.02) 70px, rgba(251, 191, 36, 0.02) 71px)
            `,
            backgroundAttachment: 'fixed'
          }} />
        </div>
        
        {/* Animated Decorative Elements */}
        <motion.div 
          className="absolute top-32 right-32 w-72 h-72 bg-purple-400/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.4, 0.7, 0.4],
            x: [0, -25, 0],
            y: [0, 25, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 left-32 w-80 h-80 bg-blue-400/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.25, 1], 
            opacity: [0.4, 0.7, 0.4],
            x: [0, 25, 0],
            y: [0, -25, 0]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        
        {/* Subtle Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/25 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${25 + Math.random() * 50}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 7 + i * 1.8,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "easeInOut"
            }}
          />
        ))}
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold tracking-widest uppercase gradient-text-primary mb-4 block">Leadership Excellence</span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-foreground">{t("management.title")}</h2>
            <div className="w-32 h-2 gradient-bg-accent mx-auto rounded-full" />
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="glass-card p-12 md:p-16 rounded-3xl layer-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div 
                  className="order-1 md:order-2 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative perspective-container">
                    <div className="absolute inset-0 gradient-bg-accent rounded-full opacity-30 blur-3xl animate-pulse" />
                    <div className="relative w-64 h-64 md:w-80 md:h-80 neon-glow">
                      <div className="absolute inset-0 gradient-bg-primary rounded-3xl rotate-6" />
                      <div className="absolute inset-0 gradient-bg-accent rounded-3xl -rotate-6" />
                      <div className="absolute inset-0 glass-card rounded-3xl flex items-center justify-center">
                        <div className="text-6xl md:text-7xl font-black gradient-text-accent">
                          BH
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="order-2 md:order-1 text-left space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-4xl md:text-5xl font-black gradient-text-primary">Mr. Bassam Hussein</h3>
                  <div className="inline-block px-6 py-3 glass-card-light rounded-2xl">
                    <p className="text-base font-bold uppercase tracking-wider gradient-text-accent">{t("management.role")}</p>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With years of visionary leadership in the UAE real estate market, Mr. Bassam Hussein has built Land AI into a premier destination for luxury property solutions. His commitment to integrity, innovation, and client satisfaction drives every aspect of our operations.
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6">
                    {[
                      { num: "15+", label: "Years" },
                      { num: "2000+", label: "Deals" },
                      { num: "98%", label: "Satisfaction" }
                    ].map((stat, i) => (
                      <div key={i} className="text-center glass-card-light p-4 rounded-2xl">
                        <div className="text-2xl md:text-3xl font-black gradient-text-primary">{stat.num}</div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative overflow-hidden">
        {/* Custom Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img src="/dubai-night-smart-cities.jpg" className="w-full h-full object-cover opacity-20" />
        </div>
        
        {/* Elegant Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/85 to-background/80 z-10" />
        <div className="absolute inset-0 opacity-55 z-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.12) 0%, transparent 45%),
              radial-gradient(circle at 80% 50%, rgba(245, 158, 11, 0.12) 0%, transparent 45%),
              repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(251, 191, 36, 0.025) 60px, rgba(251, 191, 36, 0.025) 61px)
            `,
            backgroundAttachment: 'fixed'
          }} />
        </div>
        
        {/* Animated Decorative Elements */}
        <motion.div 
          className="absolute top-20 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.5, 0.8, 0.5],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.35, 1], 
            opacity: [0.5, 0.8, 0.5],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        
        {/* Enhanced Floating Particles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-400/30 rounded-full"
            style={{
              width: `${2 + Math.random() * 2}px`,
              height: `${2 + Math.random() * 2}px`,
              left: `${8 + i * 10}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -70, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.8, 1]
            }}
            transition={{
              duration: 9 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.9,
              ease: "easeInOut"
            }}
          />
        ))}
        <div className="container px-4 md:px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary dark:text-white">{t("contact.title")}</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Ready to find your perfect property? Get in touch with our expert team today.
              </p>
              
              <div className="space-y-8 mt-12">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary dark:text-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Visit Us</h4>
                    <p className="text-muted-foreground">Dubai & Abu Dhabi,<br/>United Arab Emirates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary dark:text-accent">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-muted-foreground">+971 52 285 0625</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
