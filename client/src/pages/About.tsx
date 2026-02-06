import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { Award, Users, Building2, TrendingUp, Target, Eye } from "lucide-react";

export default function About() {
  const { t, dir } = useLanguage();

  const stats = [
    { icon: Building2, number: "500+", label: "Properties Sold" },
    { icon: Users, number: "1000+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: TrendingUp, number: "98%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide exceptional real estate services in Dubai and Abu Dhabi, helping clients find their dream properties while ensuring transparency and professionalism."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the leading real estate agency in the UAE, recognized for innovation, integrity, and outstanding customer service in luxury property markets."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Excellence, Integrity, Innovation, and Client-First approach define everything we do. We believe in building lasting relationships through trust and results."
    }
  ];

  return (
    <div className="min-h-screen bg-background luxury-bg-pattern relative" dir={dir}>
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img src="/dubai-night-smart-cities.jpg" className="w-full h-full object-cover opacity-10" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm font-bold tracking-widest uppercase gradient-text-accent mb-4 block">
              About Land AI
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Your Trusted Partner in <span className="gradient-text-accent">UAE Real Estate</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              With over 15 years of experience in Dubai and Abu Dhabi's luxury property market, 
              we deliver exceptional service and outstanding results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl text-center"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <div className="text-4xl font-black gradient-text-gold mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold tracking-widest uppercase gradient-text-primary mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Building Dreams in the Heart of Dubai
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded with a vision to revolutionize real estate services in the UAE, 
                Land AI has grown from a small boutique agency to one of the most trusted names 
                in Dubai and Abu Dhabi's luxury property market.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Under the leadership of Mr. Bassam Hussein, we've helped thousands of clients 
                find their perfect homes, from beachfront villas to sky-high penthouses, 
                and lucrative investment opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-4 rounded-3xl">
                <img 
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800" 
                  alt="Dubai Skyline"
                  className="w-full h-[400px] object-cover rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold tracking-widest uppercase gradient-text-accent mb-4 block">
              What Drives Us
            </span>
            <h2 className="text-4xl md:text-6xl font-black">
              Our Core Principles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-2xl font-black mb-4 gradient-text-primary">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold tracking-widest uppercase gradient-text-accent mb-4 block">
              Leadership
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Meet Our Founder
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-card p-12 rounded-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1 flex justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 gradient-bg-accent rounded-3xl opacity-20 blur-2xl" />
                  <div className="relative w-full h-full gradient-bg-primary rounded-3xl flex items-center justify-center">
                    <span className="text-6xl font-black gradient-text-gold">BH</span>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <h3 className="text-3xl font-black gradient-text-primary mb-2">Mr. Bassam Hussein</h3>
                <p className="text-lg font-semibold text-purple-500 mb-4">Founder & CEO</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 15 years of experience in Dubai's real estate market, Mr. Bassam Hussein 
                  has established Land AI as a premier destination for luxury properties.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  His commitment to excellence, integrity, and client satisfaction drives every aspect 
                  of our operations, ensuring that each client receives personalized service and 
                  exceptional results.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
