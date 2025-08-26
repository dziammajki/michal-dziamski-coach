import ContactButton from "@/components/ContactButton";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Clock } from "lucide-react";

const OfferPage = () => {
  const trainings = [
    {
      title: "Zarządzanie zespołem w dobie zmian",
      description: "Poznaj skuteczne metody kierowania zespołem podczas okresów transformacji organizacyjnej. Naucz się budować zaangażowanie i motywować do działania.",
      duration: "2 dni",
      participants: "8-12 osób",
      date: "15-16 marca 2024",
      highlights: ["Komunikacja w sytuacjach trudnych", "Budowanie zaufania", "Motywowanie zespołu", "Zarządzanie konfliktami"]
    },
    {
      title: "Skuteczna komunikacja biznesowa",
      description: "Rozwijaj umiejętności komunikacyjne niezbędne w środowisku biznesowym. Od prezentacji po negocjacje - zostań mistrzem komunikacji.",
      duration: "1 dzień",
      participants: "6-10 osób", 
      date: "22 marca 2024",
      highlights: ["Prezentacje biznesowe", "Aktywne słuchanie", "Techniki perswazji", "Komunikacja międzykulturowa"]
    },
    {
      title: "Coaching jako narzędzie rozwoju",
      description: "Odkryj moc coachingu w rozwoju osobistym i zawodowym. Naucz się technik, które pomogą Ci i Twojemu zespołowi osiągać lepsze rezultaty.",
      duration: "3 dni",
      participants: "6-8 osób",
      date: "5-7 kwietnia 2024", 
      highlights: ["Podstawy coachingu", "Techniki zadawania pytań", "Model GROW", "Coaching zespołowy"]
    },
    {
      title: "Przywództwo w organizacji",
      description: "Rozwijaj kompetencje przywódcze potrzebne do inspirowania innych i osiągania celów organizacyjnych. Praktyczne narzędzia dla liderów.",
      duration: "2 dni",
      participants: "8-12 osób",
      date: "19-20 kwietnia 2024",
      highlights: ["Style przywództwa", "Budowanie wizji", "Inspirowanie zespołu", "Podejmowanie decyzji"]
    }
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Otwarte szkolenia
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Profesjonalne szkolenia dostosowane do potrzeb współczesnego biznesu. 
            Rozwijaj kompetencje, które przyniosą rzeczywiste rezultaty w Twojej pracy.
          </p>
        </div>

        {/* Trainings List */}
        <div className="space-y-8">
          {trainings.map((training, index) => (
            <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    {training.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    {training.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-foreground mb-3">Kluczowe tematy:</h3>
                    <div className="flex flex-wrap gap-2">
                      {training.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-sm">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Details & CTA */}
                <div className="lg:col-span-1">
                  <div className="bg-muted p-6 rounded-lg">
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {training.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {training.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {training.participants}
                      </div>
                    </div>
                    
                    <ContactButton>
                      Zapisz się
                    </ContactButton>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Custom Training CTA */}
        <section className="mt-20 bg-primary/5 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Szukasz szkolenia dostosowanego do Twoich potrzeb?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Oferuję również szkolenia zamknięte, dostosowane do specyficznych potrzeb 
            Twojej organizacji. Skontaktuj się ze mną, aby omówić szczegóły.
          </p>
          <ContactButton size="lg">
            Omów indywidualną ofertę
          </ContactButton>
        </section>
      </div>
    </main>
  );
};

export default OfferPage;