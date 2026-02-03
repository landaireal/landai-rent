import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Home, Ruler, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import type { Property } from "@shared/schema";
import { motion } from "framer-motion";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { language, t } = useLanguage();
  
  const title = language === "en" ? property.titleEn : property.titleAr;
  const description = language === "en" ? property.descriptionEn : property.descriptionAr;
  const features = (property.features as string[]) || [];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col bg-card">
        <div className="relative h-64 overflow-hidden">
          <img
            src={property.imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-accent text-accent-foreground font-semibold uppercase tracking-wider">
              {property.type}
            </Badge>
            {property.isFeatured && (
              <Badge className="bg-primary text-white">Featured</Badge>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white text-2xl font-bold">
              AED {property.price.toLocaleString()}
            </p>
          </div>
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-primary font-medium uppercase tracking-wide mb-1">
                {property.category}
              </p>
              <h3 className="text-xl font-bold line-clamp-1 text-foreground">{title}</h3>
            </div>
          </div>
          <div className="flex items-center text-muted-foreground mt-1 text-sm">
            <MapPin className="w-4 h-4 mr-1 ml-1" />
            {property.location}
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-muted-foreground line-clamp-2 text-sm mb-4">
            {description}
          </p>
          
          <div className="grid grid-cols-2 gap-2 mt-auto">
            <div className="flex items-center text-sm font-medium text-foreground/80">
              <Ruler className="w-4 h-4 mr-2 text-accent" />
              <span>{property.area} {t("featured.sqft")}</span>
            </div>
            {features.slice(0, 1).map((feat, idx) => (
              <div key={idx} className="flex items-center text-sm font-medium text-foreground/80">
                <Home className="w-4 h-4 mr-2 text-accent" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter className="pt-2 border-t border-border/50 bg-muted/20">
          <Button variant="ghost" className="w-full justify-between group hover:text-accent">
            {t("featured.view")}
            <ArrowRight className={`w-4 h-4 transition-transform ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
