import { db } from "./db";
import {
  properties,
  inquiries,
  type Property,
  type InsertProperty,
  type Inquiry,
  type InsertInquiry,
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProperties(): Promise<Property[]>;
  getProperty(id: number): Promise<Property | undefined>;
  createProperty(property: InsertProperty): Promise<Property>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class DatabaseStorage implements IStorage {
  async getProperties(): Promise<Property[]> {
    return await db!.select().from(properties);
  }

  async getProperty(id: number): Promise<Property | undefined> {
    const [property] = await db!.select().from(properties).where(eq(properties.id, id));
    return property;
  }

  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const [property] = await db!.insert(properties).values(insertProperty).returning();
    return property;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db!.insert(inquiries).values(insertInquiry).returning();
    return inquiry;
  }
}

// In-memory storage for when database is not available
export class InMemoryStorage implements IStorage {
  private properties: Property[] = [];
  private inquiries: Inquiry[] = [];
  private propertyIdCounter = 1;
  private inquiryIdCounter = 1;

  async getProperties(): Promise<Property[]> {
    return this.properties;
  }

  async getProperty(id: number): Promise<Property | undefined> {
    return this.properties.find(p => p.id === id);
  }

  async createProperty(insertProperty: InsertProperty): Promise<Property> {
    const property: Property = {
      ...insertProperty,
      id: this.propertyIdCounter++,
      createdAt: new Date(),
    };
    this.properties.push(property);
    return property;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const inquiry: Inquiry = {
      ...insertInquiry,
      id: this.inquiryIdCounter++,
      createdAt: new Date(),
    };
    this.inquiries.push(inquiry);
    return inquiry;
  }
}

// Use in-memory storage if database is not configured
export const storage = db ? new DatabaseStorage() : new InMemoryStorage();
