import ContactButton from "@/components/ContactButton";
import { Card } from "@/components/ui/card";
import portraitImage from "@/assets/michal-dziamski-portrait.jpg";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Twój partner w
                <span className="text-primary block">rozwoju i zmianach</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Pomagam osobom i organizacjom odkrywać potencjał, budować umiejętności 
                i wprowadzać skuteczne zmiany. Z pasją i doświadczeniem wspieramy Twoje cele biznesowe.
              </p>
              <ContactButton size="lg">Skontaktuj się ze mną</ContactButton>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={portraitImage}
                  alt="Michał Dziamski - Trener i konsultant"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Dlaczego warto ze mną współpracować?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Moje podejście łączy wiedzę teoretyczną z praktycznym doświadczeniem, 
              zapewniając skuteczne i trwałe rezultaty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Indywidualne podejście
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Każde szkolenie dostosowuję do specyficznych potrzeb i celów Twojej organizacji, 
                zapewniając maksymalną skuteczność.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Praktyczne doświadczenie
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Wieloletnie doświadczenie w pracy z różnymi branżami pozwala mi oferować 
                sprawdzone rozwiązania i metody.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Trwałe rezultaty
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Koncentruję się na budowaniu długoterminowych umiejętności 
                i wprowadzaniu zmian, które przynoszą rzeczywiste korzyści.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Gotowy na pozytywne zmiany?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Skontaktuj się ze mną, aby omówić Twoje potrzeby i wspólnie zaplanować 
            ścieżkę rozwoju dla Ciebie lub Twojej organizacji.
          </p>
          <ContactButton size="lg">Rozpocznij rozmowę</ContactButton>
        </div>
      </section>
    </main>
  );
};

export default HomePage;