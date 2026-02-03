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
    <div className="min-h-screen bg-background font-sans" dir={dir}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Dubai Skyline / Luxury Home Placeholder */}
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea904ac6605?q=80&w=2070&auto=format&fit=crop"
            alt="Dubai Skyline"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <motion.div 
            className="max-w-2xl text-white space-y-6"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg">
              {t("hero.subtitle")}
            </p>
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 h-14 rounded-full">
                {t("hero.cta")}
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full">
                {t("contact.title")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary dark:text-white">{t("services.title")}</h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 dark:bg-accent/20 rounded-xl flex items-center justify-center mb-6 text-primary dark:text-accent">
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary dark:text-white">{t("featured.title")}</h2>
              <div className="w-20 h-1 bg-accent rounded-full" />
            </div>
            <Button variant="outline">{t("hero.cta")}</Button>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-muted animate-pulse rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties?.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 text-accent mb-4">
                <TrendingUp className="w-6 h-6" />
                <span className="font-bold tracking-widest uppercase">ROI Focused</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("investors.title")}</h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t("investors.desc")}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Market Analysis & Trends</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>High Yield Opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>End-to-End Asset Management</span>
                </li>
              </ul>
              <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
                Start Investing
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl" />
              <img 
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1287&auto=format&fit=crop" 
                alt="Investment" 
                className="relative rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section id="management" className="py-24 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-primary dark:text-white">{t("management.title")}</h2>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-left space-y-6">
              <h3 className="text-3xl font-bold text-accent">Mr. Bassam Hussein</h3>
              <p className="text-lg font-medium text-muted-foreground uppercase tracking-wider">{t("management.role")}</p>
              <p className="text-muted-foreground leading-relaxed">
                With years of visionary leadership in the UAE real estate market, Mr. Bassam Hussein has built Land AI into a premier destination for luxury property solutions. His commitment to integrity, innovation, and client satisfaction drives every aspect of our operations.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-accent rounded-full opacity-20 translate-x-4 translate-y-4" />
                <div className="absolute inset-0 bg-primary rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
                  BH
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
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
