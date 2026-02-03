import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";
import { useProperties } from "@/hooks/use-properties";
import { PropertyCard } from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function Properties() {
  const { t, dir } = useLanguage();
  const { data: properties, isLoading } = useProperties();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = properties?.filter(p => 
    p.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.titleAr.includes(searchTerm) ||
    p.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Navbar />
      
      <div className="pt-32 pb-12 bg-muted/20">
        <div className="container px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary dark:text-white">{t("nav.properties")}</h1>
          
          <div className="flex flex-col md:flex-row gap-4 bg-card p-4 rounded-xl shadow-sm border border-border">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Search by location or name..." 
                className="pl-10 h-12 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button size="lg" variant="outline" className="h-12 px-6">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button size="lg" className="h-12 px-8 bg-primary text-white">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="container px-4 py-12">
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
