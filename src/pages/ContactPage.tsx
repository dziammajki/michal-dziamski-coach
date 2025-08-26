import ContactButton from "@/components/ContactButton";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kontakt
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Gotów do rozpoczęcia współpracy? Skontaktuj się ze mną, aby omówić 
            Twoje potrzeby i wspólnie zaplanować rozwój.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Dane kontaktowe
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                    <p className="text-muted-foreground">
                      Michał Dziamski<br />
                      Serdeczna 9<br />
                      86-031 Jarużyn
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="mailto:m_dz@o2.pl" 
                        className="text-primary hover:underline transition-colors"
                      >
                        m_dz@o2.pl
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                    <p className="text-muted-foreground">
                      <a 
                        href="tel:+48602269495" 
                        className="text-primary hover:underline transition-colors"
                      >
                        +48 602 26 94 95
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Godziny kontaktu</h3>
                    <p className="text-muted-foreground">
                      Poniedziałek - Piątek: 9:00 - 18:00<br />
                      Sobota: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Rozpocznij współpracę
            </h2>
            
            <Card className="p-8">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Niezależnie od tego, czy potrzebujesz szkolenia dla swojego zespołu, 
                konsultacji organizacyjnej, czy indywidualnego coachingu - jestem 
                gotów pomóc Ci osiągnąć cele.
              </p>
              
              <div className="mb-8">
                <ContactButton size="lg">
                  Skontaktuj się teraz
                </ContactButton>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Co możemy omówić podczas pierwszej rozmowy:
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Twoje cele i wyzwania rozwojowe
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Dostępne opcje szkoleń i konsultacji
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Harmonogram i budżet projektu
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Następne kroki współpracy
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <section className="mt-20 bg-muted rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Preferujesz bezpośredni kontakt?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rozumiem, że czasami najlepsza jest zwykła rozmowa. Zadzwoń lub napisz e-mail, 
            a umówimy się na spotkanie osobiste lub wideokonferencję.
          </p>
          <ContactButton size="lg">
            Umów się na rozmowę
          </ContactButton>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;