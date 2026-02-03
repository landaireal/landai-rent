import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Properties
  app.get(api.properties.list.path, async (req, res) => {
    const properties = await storage.getProperties();
    res.json(properties);
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
  }

  return httpServer;
}
