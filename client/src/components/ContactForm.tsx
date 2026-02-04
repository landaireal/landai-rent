import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertInquirySchema, type CreateInquiryRequest } from "@shared/schema";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { useLanguage } from "@/hooks/use-language";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const mutation = useCreateInquiry();

  const form = useForm<CreateInquiryRequest>({
    resolver: zodResolver(insertInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: CreateInquiryRequest) {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: t("contact.success"),
          description: "We will get back to you shortly.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Error",
          description: error.message,
        });
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 glass-card p-10 rounded-3xl shadow-2xl border-2 border-amber-500/20">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.name")}</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="bg-background" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.email")}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.phone")}</FormLabel>
                <FormControl>
                  <Input placeholder="+971 50 123 4567" {...field} className="bg-background" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.message")}</FormLabel>
              <FormControl>
                <Textarea placeholder="..." className="min-h-[120px] bg-background" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Elegant Submit Button */}
        <motion.div
          className="w-full"
          whileHover={{ y: mutation.isPending ? 0 : -2 }}
          whileTap={{ scale: mutation.isPending ? 1 : 0.98 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <Button 
            type="submit" 
            disabled={mutation.isPending}
            className="btn-elegant btn-elegant-primary w-full py-6 h-auto rounded-lg text-lg font-semibold tracking-wide"
          >
            <span className="flex items-center justify-center gap-2">
              {mutation.isPending ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </span>
          </Button>
        </motion.div>
      </form>
    </Form>
  );
}
