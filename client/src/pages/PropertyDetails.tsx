import { useParams, Link } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { useProperties } from "@/hooks/use-properties";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Ruler, 
  Home, 
  Phone, 
  Mail, 
  Share2,
  Heart,
  ArrowLeft,
  Calendar,
  Check
} from "lucide-react";
import { motion } from "framer-motion";

export default function PropertyDetails() {
  const { id } = useParams();
  const { t, language, dir } = useLanguage();
  const { data: properties, isLoading } = useProperties();
  
  const property = properties?.find(p => p.id === parseInt(id || "0"));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background luxury-bg-pattern flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground">Loading property...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-background luxury-bg-pattern">
        <Navbar />
        <div className="container px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-8">The property you're looking for doesn't exist.</p>
          <Link href="/properties">
            <Button className="btn-elegant btn-elegant-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Properties
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const title = language === "ar" ? property.titleAr : property.titleEn;
  const description = language === "ar" ? property.descriptionAr : property.descriptionEn;

  return (
    <div className="min-h-screen bg-background luxury-bg-pattern relative" dir={dir}>
      {/* Luxury Background */}
      <div className="fixed inset-0 pointer-events-none">
        <img src="/dubai-night-smart-cities.jpg" className="w-full h-full object-cover opacity-8" />
      </div>
      
      <Navbar />

      {/* Hero Image Section */}
      <section className="pt-24 pb-12 relative">
        <div className="container px-4 relative z-10">
          {/* Back Button */}
          <Link href="/properties">
            <motion.div
              whileHover={{ x: language === "ar" ? 5 : -5 }}
              className="inline-flex items-center gap-2 mb-6 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <ArrowLeft className={`w-5 h-5 ${language === "ar" ? "rotate-180" : ""}`} />
              <span className="font-medium">Back to Properties</span>
            </motion.div>
          </Link>

          {/* Property Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden glass-card"
          >
            <img 
              src={property.imageUrl} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Badges */}
            <div className="absolute top-6 left-6 flex gap-3">
              <Badge className="bg-purple-600 text-white px-4 py-2 text-base font-bold">
                {property.type === "sale" ? "For Sale" : "For Rent"}
              </Badge>
              {property.isFeatured && (
                <Badge className="bg-amber-500 text-black px-4 py-2 text-base font-bold">
                  ⭐ Featured
                </Badge>
              )}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-6 right-6 flex gap-3">
              <Button size="icon" className="glass-card hover:bg-white/20 rounded-full w-12 h-12">
                <Heart className="w-5 h-5" />
              </Button>
              <Button size="icon" className="glass-card hover:bg-white/20 rounded-full w-12 h-12">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Price */}
            <div className="absolute bottom-6 left-6">
              <div className="glass-card px-6 py-4 rounded-2xl">
                <p className="text-3xl font-black gradient-text-gold">
                  AED {property.price.toLocaleString()}
                  {property.type === "rent" && <span className="text-lg">/year</span>}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 relative">
        <div className="container px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title & Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="flex items-center gap-2 text-purple-500 mb-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-sm font-bold uppercase tracking-wider">{property.category}</span>
                </div>
                <h1 className="text-4xl font-black mb-4">{title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <span className="text-lg">{property.location}, UAE</span>
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card p-8 rounded-3xl"
              >
                <h2 className="text-2xl font-black mb-6 gradient-text-primary">Key Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="glass-card-light p-4 rounded-2xl text-center">
                    <Ruler className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                    <div className="text-2xl font-bold">{property.area}</div>
                    <div className="text-sm text-muted-foreground">sq ft</div>
                  </div>
                  {property.features.map((feature, i) => (
                    <div key={i} className="glass-card-light p-4 rounded-2xl text-center">
                      <Home className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                      <div className="text-lg font-bold">{feature}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 rounded-3xl"
              >
                <h2 className="text-2xl font-black mb-4 gradient-text-primary">Description</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-8 rounded-3xl"
              >
                <h2 className="text-2xl font-black mb-6 gradient-text-primary">Amenities</h2>
                <div className="grid grid-cols-2 gap-4">
                  {property.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-purple-500" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Contact Form */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 rounded-3xl sticky top-24"
              >
                <h3 className="text-2xl font-black mb-6 gradient-text-primary">Contact Agent</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="glass-card-light p-4 rounded-2xl">
                    <div className="font-bold text-lg mb-1">Land AI Real Estate</div>
                    <div className="text-sm text-muted-foreground">Premium Properties</div>
                  </div>
                  
                  <a href="tel:+971522850625" className="block">
                    <Button className="w-full btn-elegant btn-elegant-primary py-6 rounded-2xl">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: +971 52 285 0625
                    </Button>
                  </a>
                  
                  <a href="mailto:land.a.i@outlook.com" className="block">
                    <Button className="w-full btn-elegant btn-elegant-secondary py-6 rounded-2xl">
                      <Mail className="w-5 h-5 mr-2" />
                      Email Us
                    </Button>
                  </a>
                </div>

                <div className="border-t border-border/50 pt-6">
                  <div className="text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>Listed: Recently</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Location: {property.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
