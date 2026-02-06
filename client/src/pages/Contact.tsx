import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const { t, dir } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Locations",
      details: ["Dubai & Abu Dhabi", "United Arab Emirates"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+971 52 285 0625"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["land.a.i@outlook.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Sat - Thu: 9AM - 8PM", "Friday: Closed"]
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
      <section className="pt-32 pb-12 relative z-10">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageSquare className="w-8 h-8 text-purple-500" />
              <span className="text-sm font-bold tracking-widest uppercase gradient-text-accent">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Let's Find Your <span className="gradient-text-accent">Dream Property</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions? We're here to help! Reach out to our expert team 
              for personalized assistance with your real estate needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 relative z-10">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card p-6 rounded-3xl text-center"
              >
                <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-purple-500" />
                </div>
                <h3 className="font-bold text-lg mb-3">{info.title}</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="text-sm font-bold tracking-widest uppercase gradient-text-primary mb-3 block">
                  Send Us a Message
                </span>
                <h2 className="text-4xl font-black mb-4">
                  We're Ready to Help
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>
              <ContactForm />
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Map Placeholder */}
              <div className="glass-card p-4 rounded-3xl h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                  <h3 className="text-xl font-bold mb-2">Our Offices</h3>
                  <p className="text-muted-foreground">
                    Serving Dubai & Abu Dhabi
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-2xl font-black mb-6 gradient-text-primary">
                  Why Choose Land AI?
                </h3>
                <ul className="space-y-4">
                  {[
                    "Expert knowledge of Dubai & Abu Dhabi markets",
                    "Personalized property recommendations",
                    "Transparent and professional service",
                    "End-to-end support throughout your journey",
                    "15+ years of proven excellence"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
