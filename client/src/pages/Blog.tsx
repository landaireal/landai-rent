import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const { dir } = useLanguage();

  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Neighborhoods in Dubai for 2026",
      excerpt: "Discover the most sought-after areas in Dubai offering luxury living, great amenities, and excellent investment returns.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?auto=format&fit=crop&q=80&w=800",
      category: "Market Insights",
      author: "Sarah Ahmed",
      date: "Feb 1, 2026",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Investment Guide: Abu Dhabi Real Estate 2026",
      excerpt: "Everything you need to know about investing in Abu Dhabi's booming real estate market this year.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=800",
      category: "Investment",
      author: "Mohammed Al-Rashid",
      date: "Jan 28, 2026",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "How to Finance Your Property Purchase in UAE",
      excerpt: "A complete guide to mortgages, bank loans, and financing options available for property buyers in the UAE.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      category: "Buying Guide",
      author: "Fatima Hassan",
      date: "Jan 25, 2026",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Luxury Living: Dubai Marina vs Palm Jumeirah",
      excerpt: "Compare two of Dubai's most prestigious waterfront communities to find your perfect luxury home.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
      category: "Lifestyle",
      author: "Alex Thompson",
      date: "Jan 22, 2026",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Understanding UAE Property Laws for Foreigners",
      excerpt: "Essential legal information every expat should know before buying property in the United Arab Emirates.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
      category: "Legal",
      author: "Khalid Ibrahim",
      date: "Jan 18, 2026",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Smart Home Technology in UAE Properties",
      excerpt: "How modern technology is transforming luxury real estate in Dubai and Abu Dhabi.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
      category: "Technology",
      author: "Lisa Chen",
      date: "Jan 15, 2026",
      readTime: "5 min read"
    }
  ];

  const categories = ["All", "Market Insights", "Investment", "Buying Guide", "Lifestyle", "Legal", "Technology"];

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Real Estate <span className="gradient-text-accent">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Expert advice, market trends, and guides to help you navigate the UAE real estate market
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-12">
        <div className="container px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Button
                  variant={i === 0 ? "default" : "outline"}
                  className={`rounded-full ${i === 0 ? 'btn-elegant btn-elegant-primary' : 'btn-elegant btn-elegant-secondary'}`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-purple-600 text-white">
                    {post.category}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text-primary transition-all">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border/50 pt-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="mt-4 flex items-center gap-2 text-purple-500 font-bold group-hover:gap-4 transition-all">
                    <span>Read More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button className="btn-elegant btn-elegant-primary px-10 py-6 h-auto rounded-2xl">
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
