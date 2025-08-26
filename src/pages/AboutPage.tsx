import portraitImage from "@/assets/michal-dziamski-portrait.jpg";
import { Card } from "@/components/ui/card";
import ContactButton from "@/components/ContactButton";

const AboutPage = () => {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header with Photo */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              O mnie
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Jestem trenerem i konsultantem z wieloletnim doświadczeniem w rozwoju 
              ludzi i organizacji. Moja pasja to pomaganie innym w odkrywaniu potencjału 
              i osiąganiu celów zawodowych.
            </p>
            <ContactButton>
              Skontaktuj się ze mną
            </ContactButton>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img
              src={portraitImage}
              alt="Michał Dziamski - Trener i konsultant"
              className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Doświadczenie i kompetencje
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Praktyczne doświadczenie
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Przez lata współpracowałem z organizacjami różnej wielkości - od małych 
                firm rodzinnych po międzynarodowe korporacje. To doświadczenie nauczyło 
                mnie, że każda organizacja ma unikalne potrzeby i wyzwania.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Specjalizuję się w obszarach zarządzania zmianą, rozwoju przywództwa, 
                budowania zespołów i poprawy komunikacji organizacyjnej.
              </p>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Podejście do pracy
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wierzę w siłę praktycznego uczenia się. Moje szkolenia to nie tylko teoria, 
                ale przede wszystkim ćwiczenia, case studies i real-time problem solving, 
                które można od razu zastosowa�� w codziennej pracy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Elastyczność i dostosowanie do potrzeb klienta to podstawa mojej filozofii. 
                Każde szkolenie jest dokładnie dopasowane do celów i specyfiki organizacji.
              </p>
            </Card>
          </div>
        </section>

        {/* Approach Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Moje podejście trenerskie
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-sm"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Autentyczność
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pracuję w naturalny sposób, bez sztucznych schematów czy sloganów. 
                  Koncentruję się na prawdziwych potrzebach i wyzwaniach uczestników.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-sm"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Elastyczność
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dostosowuję metody pracy do grupy i sytuacji. Gotów jestem zmienić 
                  program w trakcie szkolenia, jeśli tego wymaga potrzeba uczestników.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-sm"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Praktyczność
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Każde narzędzie i technika, którą prezentuję, może być od razu 
                  zastosowana w praktyce. Koncentruję się na rozwiązaniach, nie problemach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted rounded-2xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              To, co jest dla mnie ważne
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              W mojej pracy kieruję się wartościami, które przekładają się na jakość 
              współpracy i trwałość rezultatów.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">Szacunek</h3>
              <p className="text-sm text-muted-foreground">
                Każdy uczestnik wnosi wartościowe doświadczenie i perspektywę
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">Otwartość</h3>
              <p className="text-sm text-muted-foreground">
                Gotowość do nauki i dostosowywania się do nowych sytuacji
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">Rezultat</h3>
              <p className="text-sm text-muted-foreground">
                Koncentracja na osiąganiu celów i mierzalnych efektów
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-2">Rozwój</h3>
              <p className="text-sm text-muted-foreground">
                Ciągłe doskonalenie siebie i wspieranie rozwoju innych
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;