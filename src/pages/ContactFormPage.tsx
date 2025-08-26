import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  imie: z.string().min(2, "Imię musi mieć co najmniej 2 znaki"),
  nazwisko: z.string().min(2, "Nazwisko musi mieć co najmniej 2 znaki"),
  wiadomosc: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactFormPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      imie: "",
      nazwisko: "",
      wiadomosc: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const subject = `Zapytanie od ${values.imie} ${values.nazwisko}`;
      const body = `Imię: ${values.imie}%0D%0ANazwisko: ${values.nazwisko}%0D%0A%0D%0AWiadomość:%0D%0A${encodeURIComponent(values.wiadomosc)}`;
      
      const mailtoUrl = `mailto:m_dz@o2.pl?subject=${encodeURIComponent(subject)}&body=${body}`;
      window.location.href = mailtoUrl;
      
      toast({
        title: "Formularz został przesłany",
        description: "Otworzyło się okno z przygotowanym e-mailem. Wyślij go, aby skontaktować się ze mną.",
      });
      
      // Reset form after successful submission
      form.reset();
    } catch (error) {
      toast({
        title: "Wystąpił błąd",
        description: "Spróbuj ponownie lub skontaktuj się bezpośrednio przez e-mail: m_dz@o2.pl",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Wróć
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Formularz kontaktowy
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Wypełnij formularz, a ja skontaktuję się z Tobą w najkrótszym możliwym czasie.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="imie"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Imię *</FormLabel>
                      <FormControl>
                        <Input placeholder="Twoje imię" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="nazwisko"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nazwisko *</FormLabel>
                      <FormControl>
                        <Input placeholder="Twoje nazwisko" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="wiadomosc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Wiadomość *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Opisz swoje potrzeby, pytania lub to, w czym mogę Ci pomóc..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Przesyłanie..." : "Wyślij wiadomość"}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = "tel:+48602269495"}
                >
                  Lub zadzwoń: +48 602 26 94 95
                </Button>
              </div>
            </form>
          </Form>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Możesz również skontaktować się bezpośrednio przez e-mail:{" "}
            <a 
              href="mailto:m_dz@o2.pl" 
              className="text-primary hover:underline"
            >
              m_dz@o2.pl
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactFormPage;