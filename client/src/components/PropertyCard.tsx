import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Ruler, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import type { Property } from "@shared/schema";
import { motion } from "framer-motion";
import { Link } from "wouter";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { language, t } = useLanguage();
  
  const title = language === "en" ? property.titleEn : property.titleAr;
  const description = language === "en" ? property.descriptionEn : property.descriptionAr;
  const features = (property.features as string[]) || [];

  return (
    <Link href={`/property/${property.id}`}>
      <motion.div
        whileHover={{ y: -12, rotateY: 2 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="h-full perspective-container cursor-pointer"
      >
        <Card className="overflow-hidden glass-card h-full flex flex-col relative group card-3d border-none">
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-cyan-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-cyan-500/10 group-hover:to-pink-500/10 transition-all duration-500 rounded-3xl pointer-events-none z-10" />
        
        <div className="relative h-72 overflow-hidden rounded-t-3xl">
          <motion.img
            src={property.imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2 z-20">
            <Badge className="gradient-bg-accent text-white font-bold uppercase tracking-wider px-4 py-1.5 rounded-xl backdrop-blur-sm border-0 shadow-lg">
              {property.type}
            </Badge>
            {property.isFeatured && (
              <Badge className="gradient-bg-primary text-white font-bold px-4 py-1.5 rounded-xl backdrop-blur-sm border-0 shadow-lg neon-glow">
                ⭐ Featured
              </Badge>
            )}
          </div>
          
          {/* Price Tag */}
          <div className="absolute bottom-4 left-4 right-4 z-20">
            <div className="glass-card-light px-5 py-3 rounded-2xl inline-block">
              <p className="text-white text-3xl font-black gradient-text-gold">
                AED {property.price.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <CardHeader className="pb-3 pt-6 relative z-10">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full gradient-bg-primary" />
                <p className="text-xs font-bold uppercase tracking-widest gradient-text-primary">
                  {property.category}
                </p>
              </div>
              <h3 className="text-2xl font-black line-clamp-1 text-foreground group-hover:gradient-text-primary transition-all duration-300">
                {title}
              </h3>
            </div>
          </div>
          <div className="flex items-center text-muted-foreground text-sm gap-1.5">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="font-medium">{property.location}</span>
          </div>
        </CardHeader>

        <CardContent className="flex-grow pt-2 relative z-10">
          <p className="text-muted-foreground line-clamp-2 text-sm mb-5 leading-relaxed">
            {description}
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-card-light p-3 rounded-xl flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-bg-primary flex items-center justify-center">
                <Ruler className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Area</div>
                <div className="text-sm font-bold">{property.area} {t("featured.sqft")}</div>
              </div>
            </div>
            
            {features.slice(0, 1).map((feat, idx) => (
              <div key={idx} className="glass-card-light p-3 rounded-xl flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg gradient-bg-accent flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Type</div>
                  <div className="text-sm font-bold line-clamp-1">{feat}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-4 relative z-10">
          <Button className="w-full gradient-bg-primary hover:opacity-90 text-white font-bold py-6 rounded-2xl btn-3d group/btn">
            <span>{t("featured.view")}</span>
            <ArrowRight className={`w-5 h-5 transition-transform ${language === 'ar' ? 'rotate-180 group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`} />
          </Button>
        </CardFooter>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 pointer-events-none rounded-3xl" />
      </Card>
    </motion.div>
    </Link>
  );
}
