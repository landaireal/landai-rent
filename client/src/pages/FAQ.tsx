import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { HelpCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const { dir } = useLanguage();

  const faqCategories = [
    {
      category: "Buying Property",
      questions: [
        {
          question: "Can foreigners buy property in Dubai?",
          answer: "Yes, foreigners can buy freehold properties in designated areas of Dubai. These areas include Dubai Marina, Downtown Dubai, Palm Jumeirah, and many others. You'll receive full ownership rights and the property can be registered in your name."
        },
        {
          question: "What are the costs involved in buying property?",
          answer: "Typical costs include: 4% Dubai Land Department (DLD) registration fee, real estate agent commission (usually 2%), mortgage registration fee (if applicable), valuation fees, and conveyancing fees. Budget approximately 7-10% of the property value for all costs."
        },
        {
          question: "Do I need a residence visa to buy property?",
          answer: "No, you don't need a residence visa to purchase property in Dubai. However, buying property worth AED 750,000 or more makes you eligible to apply for a residence visa."
        },
        {
          question: "How long does the buying process take?",
          answer: "The entire process typically takes 2-4 weeks from offer acceptance to completion, assuming all documentation is in order and financing is arranged."
        }
      ]
    },
    {
      category: "Renting Property",
      questions: [
        {
          question: "What documents do I need to rent a property?",
          answer: "You'll need: Valid passport copy, UAE residence visa, Emirates ID, employment letter or proof of income, and security cheques. Some landlords may also ask for bank statements."
        },
        {
          question: "How is rent payment structured?",
          answer: "Rent in Dubai is typically paid annually with 1-4 post-dated cheques. Some landlords accept 6 or 12 cheques. Monthly payment options are becoming more common but may include a premium."
        },
        {
          question: "What is the RERA rental index?",
          answer: "The RERA Rental Index is a government tool that determines fair rental increases. It caps rental increases based on the difference between your current rent and the average market rate for similar properties."
        },
        {
          question: "Can I terminate my lease early?",
          answer: "Early termination is possible but usually requires 60-90 days notice and may involve penalties. Check your tenancy contract for specific terms. Some circumstances allow penalty-free early termination."
        }
      ]
    },
    {
      category: "Financing & Mortgages",
      questions: [
        {
          question: "What is the minimum down payment?",
          answer: "For UAE nationals: 15-20% for properties under AED 5M. For expats: 20-25% for properties under AED 5M, 30-35% for properties over AED 5M. First-time buyers may get better rates."
        },
        {
          question: "Can I get a mortgage as an expat?",
          answer: "Yes, expats can obtain mortgages from UAE banks. You'll need minimum salary requirements (usually AED 15,000/month), employment letter, bank statements, passport, visa, and Emirates ID."
        },
        {
          question: "What are current mortgage rates?",
          answer: "As of 2026, mortgage rates in UAE typically range from 3.5% to 5.5% depending on the bank, your profile, and loan-to-value ratio. Rates are influenced by global economic conditions."
        },
        {
          question: "How long can a mortgage term be?",
          answer: "Maximum mortgage terms are typically 25 years, but the loan must be paid off by age 65-70 (varies by bank). Some banks offer up to 25 years for salaried individuals."
        }
      ]
    },
    {
      category: "Investment",
      questions: [
        {
          question: "What is the average ROI in Dubai?",
          answer: "Rental yields in Dubai typically range from 5-8% annually, depending on location and property type. Some areas like Dubai Marina and JBR offer higher yields. Capital appreciation varies by area and market conditions."
        },
        {
          question: "Are there property taxes in Dubai?",
          answer: "No, there are no property taxes in Dubai. However, there is a 5% municipality tax on annual rent for residential properties and 10% for commercial properties, typically paid by the tenant."
        },
        {
          question: "Can I rent out my property on Airbnb?",
          answer: "Yes, but you need a short-term rental permit from Dubai Tourism (DTCM). Properties must be in designated areas and meet specific criteria. Service charges and regulations apply."
        },
        {
          question: "What are off-plan properties?",
          answer: "Off-plan properties are under construction or in pre-construction phase. They often offer payment plans (e.g., 20% during construction, 80% on completion) and potential capital appreciation before completion."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <HelpCircle className="w-10 h-10 text-purple-500" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Frequently Asked <span className="gradient-text-accent">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to know about buying, renting, and investing in UAE real estate
            </p>

            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search for answers..."
                className="pl-12 h-14 rounded-2xl glass-card text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container px-4 max-w-4xl mx-auto">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-black mb-6 gradient-text-primary">
                {category.category}
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, qIndex) => (
                  <AccordionItem 
                    key={qIndex} 
                    value={`item-${catIndex}-${qIndex}`}
                    className="glass-card rounded-2xl px-6 border-none"
                  >
                    <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-purple-500 py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-3xl text-center max-w-3xl mx-auto"
          >
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-purple-500" />
            <h2 className="text-4xl font-black mb-4">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our expert team is here to help you with any queries about UAE real estate
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <a href="/contact">
                  <button className="btn-elegant btn-elegant-primary px-10 py-6 h-auto rounded-2xl">
                    Contact Us
                  </button>
                </a>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <a href="tel:+971522850625">
                  <button className="btn-elegant btn-elegant-secondary px-10 py-6 h-auto rounded-2xl">
                    Call: +971 52 285 0625
                  </button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
