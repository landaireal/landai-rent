import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Complete translation dictionary
const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.services": { en: "Services", ar: "خدماتنا" },
  "nav.properties": { en: "Properties", ar: "العقارات" },
  "nav.investors": { en: "Investors", ar: "المستثمرين" },
  "nav.management": { en: "Management", ar: "الإدارة" },
  "nav.contact": { en: "Contact", ar: "اتصل بنا" },
  
  // Hero Section
  "hero.title": { en: "Find Your Dream Luxury Home in UAE", ar: "اعثر على منزل أحلامك الفاخر في الإمارات" },
  "hero.subtitle": { en: "Exclusive properties in Dubai & Abu Dhabi tailored to your lifestyle.", ar: "عقارات حصرية في دبي وأبوظبي مصممة لتناسب أسلوب حياتك." },
  "hero.cta": { en: "Explore Properties", ar: "تصفح العقارات" },
  
  // Services
  "services.title": { en: "Our Premium Services", ar: "خدماتنا المتميزة" },
  "services.brokerage": { en: "Real Estate Brokerage", ar: "الوساطة العقارية" },
  "services.brokerage.desc": { en: "Buying, selling, and leasing properties with expert guidance.", ar: "شراء وبيع وتأجير العقارات بتوجيه الخبراء." },
  "services.management": { en: "Property Management", ar: "إدارة العقارات" },
  "services.management.desc": { en: "Comprehensive management solutions for your assets.", ar: "حلول إدارة شاملة لأصولك." },
  "services.maintenance": { en: "Building Maintenance", ar: "صيانة المباني" },
  "services.maintenance.desc": { en: "Quality maintenance services to preserve property value.", ar: "خدمات صيانة عالية الجودة للحفاظ على قيمة العقار." },
  "services.land": { en: "Land Trading", ar: "تجارة الأراضي" },
  "services.land.desc": { en: "Strategic buying and selling of prime land plots.", ar: "شراء وبيع استراتيجي لأراضي مميزة." },
  "services.ecommerce": { en: "E-Commerce", ar: "التجارة الإلكترونية" },
  "services.ecommerce.desc": { en: "Marketing via social media platforms.", ar: "التسويق عبر منصات التواصل الاجتماعي." },

  // Properties
  "featured.title": { en: "Featured Properties", ar: "العقارات المميزة" },
  "featured.price": { en: "Price", ar: "السعر" },
  "featured.area": { en: "Area", ar: "المساحة" },
  "featured.sqft": { en: "sqft", ar: "قدم مربع" },
  "featured.view": { en: "View Details", ar: "عرض التفاصيل" },
  "properties.all": { en: "All Properties", ar: "جميع العقارات" },
  "properties.search": { en: "Search by location or name", ar: "البحث حسب الموقع أو الاسم" },
  "properties.filters": { en: "Filters", ar: "التصفية" },
  "properties.sort": { en: "Sort By", ar: "ترتيب حسب" },
  "properties.showing": { en: "Showing", ar: "عرض" },
  "properties.results": { en: "properties", ar: "عقار" },

  // Investors
  "investors.title": { en: "For Investors", ar: "للمستثمرين" },
  "investors.desc": { en: "Maximize your returns with our expert market analysis and premium investment opportunities in the UAE real estate market.", ar: "ضاعف عائداتك مع تحليلاتنا الخبيرة للسوق وفرص الاستثمار المتميزة في سوق العقارات الإماراتي." },
  
  // Management
  "management.title": { en: "Leadership", ar: "القيادة" },
  "management.role": { en: "Owner", ar: "المالك" },
  "management.founder": { en: "Founder & CEO", ar: "المؤسس والرئيس التنفيذي" },
  
  // Contact
  "contact.title": { en: "Contact Us", ar: "اتصل بنا" },
  "contact.name": { en: "Your Name", ar: "اسمك" },
  "contact.email": { en: "Email Address", ar: "البريد الإلكتروني" },
  "contact.phone": { en: "Phone Number", ar: "رقم الهاتف" },
  "contact.message": { en: "Message", ar: "الرسالة" },
  "contact.submit": { en: "Send Message", ar: "إرسال الرسالة" },
  "contact.sending": { en: "Sending...", ar: "جار الإرسال..." },
  "contact.success": { en: "Message Sent!", ar: "تم الإرسال!" },
  "contact.getintouch": { en: "Get In Touch", ar: "تواصل معنا" },
  "contact.locations": { en: "Our Locations", ar: "مواقعنا" },
  "contact.hours": { en: "Business Hours", ar: "ساعات العمل" },
  
  // About
  "about.title": { en: "About Land AI", ar: "عن لاند أي" },
  "about.subtitle": { en: "Your Trusted Partner in UAE Real Estate", ar: "شريكك الموثوق في العقارات الإماراتية" },
  "about.story": { en: "Our Story", ar: "قصتنا" },
  "about.mission": { en: "Our Mission", ar: "رسالتنا" },
  "about.vision": { en: "Our Vision", ar: "رؤيتنا" },
  "about.values": { en: "Our Values", ar: "قيمنا" },
  "about.team": { en: "Our Team", ar: "فريقنا" },
  
  // Common
  "common.home": { en: "Home", ar: "الرئيسية" },
  "common.back": { en: "Back", ar: "رجوع" },
  "common.loading": { en: "Loading", ar: "جاري التحميل" },
  "common.learnmore": { en: "Learn More", ar: "اعرف المزيد" },
  "common.readmore": { en: "Read More", ar: "اقرأ المزيد" },
  "common.viewall": { en: "View All", ar: "عرض الكل" },
  "common.close": { en: "Close", ar: "إغلاق" },
  "common.submit": { en: "Submit", ar: "إرسال" },
  "common.cancel": { en: "Cancel", ar: "إلغاء" },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage, 
        t, 
        dir: language === "ar" ? "rtl" : "ltr" 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
