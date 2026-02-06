import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import { db } from "./db";             // Drizzle instance
import { properties } from "./schema"; // جدول properties

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Properties
  app.get(api.properties.list.path, async (req, res) => {
    const propertiesList = await storage.getProperties();
    res.json(propertiesList);
  });

  app.get(api.properties.get.path, async (req, res) => {
    const property = await storage.getProperty(Number(req.params.id));
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  });

  app.post(api.properties.create.path, async (req, res) => {
    try {
      const input = api.properties.create.input.parse(req.body);
      const property = await storage.createProperty(input);
      res.status(201).json(property);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Inquiries
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // ✅ Endpoint اختبار قاعدة البيانات Drizzle
  app.get("/api/test-db", async (req, res) => {
    if (!db) return res.status(500).json({ error: "DB not connected" });

    try {
      const data = await db.select().from(properties);
      res.json(data); // كل العقارات من جدول properties
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  });


  // Seed Data if empty
  const existingProperties = await storage.getProperties();
  if (existingProperties.length === 0) {
    console.log("Seeding database...");
    await storage.createProperty({
      titleEn: "Luxury Villa in Palm Jumeirah",
      titleAr: "فيلا فاخرة في نخلة جميرا",
      descriptionEn: "Experience the epitome of luxury living in this stunning 5-bedroom villa with private beach access.",
      descriptionAr: "جرب قمة المعيشة الفاخرة في هذه الفيلا المذهلة المكونة من 5 غرف نوم مع مدخل خاص إلى الشاطئ.",
      type: "sale",
      category: "villa",
      location: "Dubai",
      price: 15000000,
      area: 7000,
      imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1600",
      features: ["Sea View", "Private Pool", "Garden", "Maid's Room", "Smart Home"],
      isFeatured: true
    });

    await storage.createProperty({
      titleEn: "Modern Apartment in Downtown",
      titleAr: "شقة حديثة في وسط المدينة",
      descriptionEn: "Stylish 2-bedroom apartment with Burj Khalifa view, walking distance to Dubai Mall.",
      descriptionAr: "شقة أنيقة مكونة من غرفتي نوم مع إطلالة على برج خليفة، على مسافة قريبة من دبي مول.",
      type: "rent",
      category: "apartment",
      location: "Dubai",
      price: 180000,
      area: 1200,
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1600",
      features: ["Burj Khalifa View", "Gym", "Pool", "Parking", "Security"],
      isFeatured: true
    });

    await storage.createProperty({
      titleEn: "Commercial Office in Abu Dhabi",
      titleAr: "مكتب تجاري في أبو ظبي",
      descriptionEn: "Premium office space in the heart of Abu Dhabi business district.",
      descriptionAr: "مساحة مكتبية متميزة في قلب الحي التجاري في أبو ظبي.",
      type: "rent",
      category: "commercial",
      location: "Abu Dhabi",
      price: 95000,
      area: 1500,
      imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
      features: ["Fitted", "City View", "High Floor", "Near Metro"],
      isFeatured: false
    });
     await storage.createProperty({
      titleEn: "Spacious Land in Al Khawaneej",
      titleAr: "أرض واسعة في الخوانيج",
      descriptionEn: "Large residential plot perfect for building your dream family mansion.",
      descriptionAr: "قطعة أرض سكنية كبيرة مثالية لبناء قصر أحلام عائلتك.",
      type: "sale",
      category: "land",
      location: "Dubai",
      price: 3500000,
      area: 15000,
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600",
      features: ["Residential", "Corner Plot", "Freehold"],
      isFeatured: false
    });

    // Additional Premium Properties
    await storage.createProperty({
      titleEn: "Penthouse in Dubai Marina",
      titleAr: "بنتهاوس في دبي مارينا",
      descriptionEn: "Spectacular 4-bedroom penthouse with panoramic marina views and private terrace.",
      descriptionAr: "بنتهاوس رائع من 4 غرف نوم مع إطلالات بانورامية على المارينا وشرفة خاصة.",
      type: "sale",
      category: "apartment",
      location: "Dubai",
      price: 8500000,
      area: 4500,
      imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
      features: ["Marina View", "Private Terrace", "Jacuzzi", "Smart Home", "2 Parking"],
      isFeatured: true
    });

    await storage.createProperty({
      titleEn: "Beachfront Villa in Jumeirah",
      titleAr: "فيلا على الشاطئ في جميرا",
      descriptionEn: "Exclusive beachfront villa with direct beach access and infinity pool.",
      descriptionAr: "فيلا حصرية على الشاطئ مع دخول مباشر للشاطئ ومسبح لا متناهي.",
      type: "sale",
      category: "villa",
      location: "Dubai",
      price: 22000000,
      area: 9500,
      imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600",
      features: ["Beach Access", "Infinity Pool", "6 Bedrooms", "Cinema Room", "Gym"],
      isFeatured: true
    });

    await storage.createProperty({
      titleEn: "Studio Apartment in Business Bay",
      titleAr: "شقة استوديو في الخليج التجاري",
      descriptionEn: "Modern furnished studio with stunning canal views and premium amenities.",
      descriptionAr: "استوديو حديث مفروش مع إطلالات رائعة على القناة ووسائل راحة ممتازة.",
      type: "rent",
      category: "apartment",
      location: "Dubai",
      price: 65000,
      area: 550,
      imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1600",
      features: ["Furnished", "Canal View", "Pool", "Gym", "Concierge"],
      isFeatured: false
    });

    await storage.createProperty({
      titleEn: "Townhouse in Arabian Ranches",
      titleAr: "تاون هاوس في المرابع العربية",
      descriptionEn: "Family-friendly 3-bedroom townhouse in gated community with parks and schools.",
      descriptionAr: "تاون هاوس من 3 غرف نوم مناسب للعائلات في مجمع مسور مع حدائق ومدارس.",
      type: "rent",
      category: "villa",
      location: "Dubai",
      price: 145000,
      area: 2200,
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
      features: ["Gated Community", "Garden", "Garage", "Near School", "Park View"],
      isFeatured: false
    });

    await storage.createProperty({
      titleEn: "Luxury Apartment in Emirates Hills",
      titleAr: "شقة فاخرة في تلال الإمارات",
      descriptionEn: "Ultra-luxury 3-bedroom apartment with golf course views in prestigious location.",
      descriptionAr: "شقة فاخرة للغاية من 3 غرف نوم مع إطلالات على ملعب الجولف في موقع مرموق.",
      type: "sale",
      category: "apartment",
      location: "Dubai",
      price: 6800000,
      area: 3200,
      imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600",
      features: ["Golf View", "Balcony", "Maid's Room", "Premium Finishes", "24/7 Security"],
      isFeatured: false
    });

    await storage.createProperty({
      titleEn: "Retail Space in Dubai Mall Area",
      titleAr: "مساحة تجارية في منطقة دبي مول",
      descriptionEn: "Prime retail location with high foot traffic near Dubai Mall.",
      descriptionAr: "موقع تجاري رئيسي مع حركة مرور عالية بالقرب من دبي مول.",
      type: "rent",
      category: "commercial",
      location: "Dubai",
      price: 250000,
      area: 800,
      imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
      features: ["High Traffic", "Near Mall", "Display Windows", "Storage", "Parking"],
      isFeatured: false
    });

    await storage.createProperty({
      titleEn: "Waterfront Villa in The Pearl",
      titleAr: "فيلا على الواجهة البحرية في اللؤلؤة",
      descriptionEn: "Stunning waterfront villa with private dock and sea views in Abu Dhabi.",
      descriptionAr: "فيلا رائعة على الواجهة البحرية مع رصيف خاص وإطلالات على البحر في أبو ظبي.",
      type: "sale",
      category: "villa",
      location: "Abu Dhabi",
      price: 18500000,
      area: 8200,
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
      features: ["Private Dock", "Sea View", "5 Bedrooms", "Pool", "Garden"],
      isFeatured: true
    });

    await storage.createProperty({
      titleEn: "Modern Office Tower Floor",
      titleAr: "طابق برج مكاتب حديث",
      descriptionEn: "Full floor office space in Grade A tower with stunning city views.",
      descriptionAr: "مساحة مكتبية لطابق كامل في برج من الدرجة الأولى مع إطلالات رائعة على المدينة.",
      type: "rent",
      category: "commercial",
      location: "Dubai",
      price: 850000,
      area: 5000,
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
      features: ["Full Floor", "City View", "Meeting Rooms", "Fitted", "Metro Access"],
      isFeatured: false
    });

    await storage.createProperty({
      titleEn: "Investment Land in Dubai South",
      titleAr: "أرض استثمارية في دبي الجنوب",
      descriptionEn: "Prime investment opportunity near Expo site with development potential.",
      descriptionAr: "فرصة استثمارية رائعة بالقرب من موقع إكسبو مع إمكانات التطوير.",
      type: "sale",
      category: "land",
      location: "Dubai",
      price: 5500000,
      area: 25000,
      imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600",
      features: ["Near Expo", "Commercial", "Investment", "Freehold", "Development Ready"],
      isFeatured: false
    });

    // Additional Luxury & Diverse Properties
    await storage.createProperty({
      titleEn: "Sky Villa in Burj Khalifa",
      titleAr: "فيلا سماوية في برج خليفة",
      descriptionEn: "Ultra-exclusive sky villa on high floor of Burj Khalifa with unprecedented views.",
      descriptionAr: "فيلا سماوية حصرية للغاية في طابق مرتفع من برج خليفة مع إطلالات غير مسبوقة.",
      type: "sale",
      category: "apartment",
      location: "Dubai",
      price: 35000000,
      area: 6000,
      imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1600",
      features: ["Burj Khalifa", "Sky Villa", "Private Elevator", "360 Views", "Butler Service"],
      isFeatured: true
    });

    await storage.createProperty({
      titleEn: "Furnished 1BR in JBR",
      titleAr: "شقة غرفة نوم واحدة مفروشة في جي بي آر",
      descriptionEn: "Fully furnished apartment with beach access and sea views in Jumeirah Beach Residence.",
      descriptionAr: "شقة مفروشة بالكامل مع دخول للشاطئ وإطلالات على البحر في جميرا بيتش ريزيدنس.",
      type: "rent",
      category: "apartment",
      location: "Dubai",
      price: 95000,
      area: 850,
      imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1600",
      features: ["Beach Access", "Furnished", "Sea View", "Pool", "Gym"],
      isFeatured: false
    });

    await storage.createProperty({
      titleEn: "Contemporary Villa in Dubai Hills",
      titleAr: "فيلا عصرية في دبي هيلز",
      descriptionEn: "Brand new 4-bedroom contemporary villa with smart home features and park views.",
      descriptionAr: "فيلا عصرية جديدة من 4 غرف نوم مع ميزات المنزل الذكي وإطلالات على الحديقة.",
      type: "sale",
      category: "villa",
      location: "Dubai",
      price: 7500000,
      area: 4200,
      imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1600",
      features: ["Smart Home", "Park View", "Solar Panels", "Modern Design", "Garage"],
      isFeatured: false
    });

    await storage.createProperty({
      titleEn: "Warehouse in Jebel Ali",
      titleAr: "مستودع في جبل علي",
      descriptionEn: "Large warehouse facility with loading docks and excellent logistics access.",
      descriptionAr: "مرفق مستودع كبير مع أرصفة تحميل ووصول ممتاز للخدمات اللوجستية.",
      type: "rent",
      category: "commercial",
      location: "Dubai",
      price: 450000,
      area: 8000,
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
      features: ["Loading Docks", "High Ceiling", "24/7 Access", "Security", "Near Port"],
      isFeatured: false
    });

    await storage.createProperty({
      titleEn: "Luxury Duplex in City Walk",
      titleAr: "دوبلكس فاخر في سيتي ووك",
      descriptionEn: "Stunning 2-level duplex with private terrace in the trendy City Walk district.",
      descriptionAr: "دوبلكس رائع من مستويين مع شرفة خاصة في منطقة سيتي ووك العصرية.",
      type: "rent",
      category: "apartment",
      location: "Dubai",
      price: 220000,
      area: 2100,
      imageUrl: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&q=80&w=1600",
      features: ["Duplex", "Terrace", "City Walk", "Designer Interior", "2 Parking"],
      isFeatured: true
    });

    await storage.createProperty({
      titleEn: "Garden Apartment in Al Barari",
      titleAr: "شقة حديقة في البراري",
      descriptionEn: "Ground floor apartment with private garden in Dubai's greenest community.",
      descriptionAr: "شقة في الطابق الأرضي مع حديقة خاصة في أكثر مجتمعات دبي خضرة.",
      type: "sale",
      category: "apartment",
      location: "Dubai",
      price: 4200000,
      area: 1900,
      imageUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1600",
      features: ["Private Garden", "Green Community", "Pool Access", "Pet Friendly", "Quiet"],
      isFeatured: false
    });

    await storage.createProperty({
      titleEn: "Restaurant Space in Dubai Marina",
      titleAr: "مساحة مطعم في دبي مارينا",
      descriptionEn: "Prime waterfront restaurant location with outdoor seating and marina views.",
      descriptionAr: "موقع مطعم على الواجهة البحرية مع جلوس خارجي وإطلالات على المارينا.",
      type: "rent",
      category: "commercial",
      location: "Dubai",
      price: 380000,
      area: 2500,
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600",
      features: ["Waterfront", "Outdoor Seating", "Fitted Kitchen", "High Traffic", "Marina View"],
      isFeatured: false
    });

    await storage.createProperty({
      titleEn: "Mansion in Emirates Hills",
      titleAr: "قصر في تلال الإمارات",
      descriptionEn: "Palatial 7-bedroom mansion with golf course views, cinema, and spa.",
      descriptionAr: "قصر فخم من 7 غرف نوم مع إطلالات على ملعب الجولف وسينما ومنتجع صحي.",
      type: "sale",
      category: "villa",
      location: "Dubai",
      price: 45000000,
      area: 15000,
      imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1600",
      features: ["Golf View", "Cinema", "Spa", "Wine Cellar", "Staff Quarters"],
      isFeatured: true
    });

    await storage.createProperty({
      titleEn: "Student Studio near Universities",
      titleAr: "استوديو طلابي بالقرب من الجامعات",
      descriptionEn: "Affordable furnished studio ideal for students near Knowledge Village.",
      descriptionAr: "استوديو مفروش ميسور التكلفة مثالي للطلاب بالقرب من قرية المعرفة.",
      type: "rent",
      category: "apartment",
      location: "Dubai",
      price: 42000,
      area: 400,
      imageUrl: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1600",
      features: ["Furnished", "Near Universities", "Affordable", "Public Transport", "WiFi"],
      isFeatured: false
    });

    await storage.createProperty({
      titleEn: "Eco Villa in Sustainable City",
      titleAr: "فيلا صديقة للبيئة في المدينة المستدامة",
      descriptionEn: "Sustainable 3-bedroom villa with solar panels and organic garden.",
      descriptionAr: "فيلا مستدامة من 3 غرف نوم مع ألواح شمسية وحديقة عضوية.",
      type: "sale",
      category: "villa",
      location: "Dubai",
      price: 3800000,
      area: 2800,
      imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
      features: ["Solar Powered", "Eco Friendly", "Organic Garden", "EV Charging", "Green"],
      isFeatured: false
    });

    await storage.createProperty({
      titleEn: "Showroom in Sheikh Zayed Road",
      titleAr: "معرض في شارع الشيخ زايد",
      descriptionEn: "High-visibility showroom on Sheikh Zayed Road with ample parking.",
      descriptionAr: "معرض عالي الرؤية على شارع الشيخ زايد مع مواقف سيارات واسعة.",
      type: "rent",
      category: "commercial",
      location: "Dubai",
      price: 520000,
      area: 3500,
      imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600",
      features: ["High Visibility", "Main Road", "Parking", "Glass Facade", "Premium Location"],
      isFeatured: false
    });
  }

  return httpServer;
}
