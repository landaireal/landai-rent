import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";
import { useProperties } from "@/hooks/use-properties";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, X, ArrowUpDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export default function Properties() {
  const { t, dir } = useLanguage();
  const { data: properties, isLoading } = useProperties();
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);

  // Advanced filtering and sorting
  const filteredProperties = properties
    ?.filter(p => {
      const matchesSearch = p.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.titleAr.includes(searchTerm) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = typeFilter === "all" || p.type === typeFilter;
      const matchesCategory = categoryFilter === "all" || p.category === categoryFilter;
      return matchesSearch && matchesType && matchesCategory;
    })
    ?.sort((a, b) => {
      switch(sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "area-large": return b.area - a.area;
        case "area-small": return a.area - b.area;
        case "featured": return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
        default: return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background luxury-bg-pattern relative" dir={dir}>
      {/* Custom Background Image */}
      <div className="fixed inset-0 pointer-events-none">
        <img src="/dubai-night-smart-cities.jpg" className="w-full h-full object-cover opacity-15" />
      </div>
      
      {/* Luxury Background Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background/85" />
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
      
      <div className="pt-32 pb-12 relative overflow-hidden">
        {/* Optimized Animated Background Elements */}
        <motion.div 
          className="absolute top-40 left-1/4 w-96 h-96 bg-purple-400/6 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1], 
            opacity: [0.35, 0.5, 0.35],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 right-1/4 w-[500px] h-[500px] bg-blue-400/6 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.35, 0.55, 0.35],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        
        {/* Refined Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-purple-400/25 rounded-full"
            style={{
              width: `${1 + Math.random() * 0.5}px`,
              height: `${1 + Math.random() * 0.5}px`,
              left: `${15 + i * 14}%`,
              top: `${30 + Math.random() * 40}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.25, 0.6, 0.25],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
        <div className="container px-4">
          <motion.h1 
            className="text-5xl md:text-6xl font-black mb-12 gradient-text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t("nav.properties")}
          </motion.h1>
          
          {/* Enhanced Search & Filter Bar */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4 glass-card p-6 rounded-3xl shadow-2xl border-2 border-purple-500/20">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-500 w-6 h-6" />
                <Input 
                  placeholder="Search by location or name..." 
                  className="pl-12 h-14 text-lg rounded-2xl glass-card-light border-2 border-purple-500/30 focus:border-purple-500/60"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Sort Dropdown */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="btn-elegant btn-elegant-secondary h-14 px-6 rounded-lg font-semibold tracking-wide w-full md:w-auto">
                  <ArrowUpDown className="w-5 h-5 mr-2" />
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent className="glass-card border-2 border-purple-500/20">
                  <SelectItem value="featured">Featured First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="area-large">Area: Largest First</SelectItem>
                  <SelectItem value="area-small">Area: Smallest First</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Filter Toggle Button */}
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              >
                <Button 
                  size="lg" 
                  onClick={() => setShowFilters(!showFilters)}
                  className="btn-elegant btn-elegant-primary h-14 px-8 rounded-lg font-semibold tracking-wide w-full md:w-auto"
                >
                  {showFilters ? <X className="w-5 h-5 mr-2" /> : <SlidersHorizontal className="w-5 h-5 mr-2" />}
                  {showFilters ? "Close Filters" : "Filters"}
                </Button>
              </motion.div>
            </div>

            {/* Advanced Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="glass-card p-6 rounded-3xl border-2 border-purple-500/20 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Type Filter */}
                      <div>
                        <label className="text-sm font-semibold mb-2 block gradient-text-primary">Property Type</label>
                        <Select value={typeFilter} onValueChange={setTypeFilter}>
                          <SelectTrigger className="glass-card-light border-2 border-purple-500/20 rounded-xl h-12">
                            <SelectValue placeholder="All Types" />
                          </SelectTrigger>
                          <SelectContent className="glass-card border-2 border-purple-500/20">
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="sale">For Sale</SelectItem>
                            <SelectItem value="rent">For Rent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Category Filter */}
                      <div>
                        <label className="text-sm font-semibold mb-2 block gradient-text-primary">Category</label>
                        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                          <SelectTrigger className="glass-card-light border-2 border-purple-500/20 rounded-xl h-12">
                            <SelectValue placeholder="All Categories" />
                          </SelectTrigger>
                          <SelectContent className="glass-card border-2 border-purple-500/20">
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="land">Land</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Active Filters */}
                    {(typeFilter !== "all" || categoryFilter !== "all") && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-purple-500/20">
                        <span className="text-sm font-semibold text-muted-foreground">Active Filters:</span>
                        {typeFilter !== "all" && (
                          <Badge className="bg-amber-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30">
                            Type: {typeFilter}
                            <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setTypeFilter("all")} />
                          </Badge>
                        )}
                        {categoryFilter !== "all" && (
                          <Badge className="bg-amber-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30">
                            Category: {categoryFilter}
                            <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setCategoryFilter("all")} />
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Results Counter */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-bold gradient-text-gold">{filteredProperties?.length || 0}</span> properties
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12 relative">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 90px, rgba(251, 191, 36, 0.02) 90px, rgba(251, 191, 36, 0.02) 91px)
          `,
        }} />
        
        {/* Optimized Floating Elements for Content Area */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1], 
            opacity: [0.3, 0.45, 0.3]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-72 h-72 bg-blue-400/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.15, 1], 
            opacity: [0.3, 0.45, 0.3]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        {isLoading ? (
          <div className="flex justify-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            {filteredProperties?.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                No properties found matching your search.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties?.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
      
      <Footer />
    </div>
  );
}
