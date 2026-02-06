import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { 
  Building2, 
  Key, 
  Wrench, 
  TrendingUp, 
  FileCheck, 
  Users,
  Shield,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const { t, dir } = useLanguage();

  const mainServices = [
    {
      icon: Building2,
      title: "Real Estate Brokerage",
      description: "Expert guidance in buying, selling, and leasing properties across Dubai and Abu Dhabi's most prestigious locations.",
      features: [
        "Residential & Commercial Properties",
        "Market Analysis & Valuation",
        "Negotiation Support",
        "Legal Documentation Assistance"
      ],
      color: "from-purple-600 to-blue-600"
    },
    {
      icon: Key,
      title: "Property Management",
      description: "Comprehensive property management services to maximize your investment returns and maintain property value.",
      features: [
        "Tenant Screening & Management",
        "Rent Collection",
        "Property Maintenance",
        "Financial Reporting"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: Wrench,
      title: "Building Maintenance",
      description: "Professional maintenance services ensuring your property remains in pristine condition year-round.",
      features: [
        "24/7 Emergency Support",
        "Preventive Maintenance",
        "Renovation Services",
        "Quality Contractors Network"
      ],
      color: "from-cyan-600 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Investment Consultancy",
      description: "Strategic investment advice to help you make informed decisions in UAE's dynamic real estate market.",
      features: [
        "Market Insights & Trends",
        "ROI Analysis",
        "Portfolio Diversification",
        "Risk Assessment"
      ],
      color: "from-purple-600 to-pink-600"
    }
  ];

  const additionalServices = [
    { icon: FileCheck, title: "Legal Documentation", description: "Complete support with contracts and paperwork" },
    { icon: Users, title: "Relocation Services", description: "Helping you settle into your new home" },
    { icon: Shield, title: "Property Insurance", description: "Comprehensive insurance solutions" },
    { icon: Sparkles, title: "Interior Design", description: "Professional design consultancy" }
  ];

  return (
    <div className="min-h-screen bg-background luxury-bg-pattern relative" dir={dir}>
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <img src="/dubai-big-data.jpg" className="w-full h-full object-cover opacity-10" />
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
              Our Services
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Premium Real Estate <span className="gradient-text-accent">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive services designed to meet all your real estate needs in Dubai and Abu Dhabi.
              From finding your dream home to managing your investment portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-3xl font-black mb-4 gradient-text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-purple-500 font-bold group-hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold tracking-widest uppercase gradient-text-accent mb-4 block">
              Additional Services
            </span>
            <h2 className="text-4xl md:text-6xl font-black">
              We've Got You Covered
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 rounded-3xl text-center"
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-16 rounded-3xl text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let our experienced team help you navigate the UAE real estate market 
              with confidence and ease.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="btn-elegant btn-elegant-primary px-10 py-6 h-auto rounded-2xl text-lg">
                    Contact Us Today
                  </Button>
                </motion.div>
              </Link>
              <Link href="/properties">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="btn-elegant btn-elegant-secondary px-10 py-6 h-auto rounded-2xl text-lg">
                    Browse Properties
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
