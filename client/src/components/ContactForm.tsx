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
import { Loader2 } from "lucide-react";

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-2xl shadow-lg border border-border">
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
        <Button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t("contact.sending")}
            </>
          ) : (
            t("contact.submit")
          )}
        </Button>
      </form>
    </Form>
  );
}
