"use client"
import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import { useEffect, useState } from "react"

const ways = [
  {
    title: "Donează Daruri",
    description: "Donează jucării, cărți, haine - orice vrei să oferi din inimă.",
    icon: "🎁",
    color: "from-primary to-accent",
  },
  {
    title: "Donează Bani",
    description: "Cu banii donați, cumpărăm exact ce au nevoie persoanele în dificultate.",
    icon: "🤝",
    color: "from-accent to-secondary",
  },
  {
    title: "Răspândire Cuvânt",
    description: "Spune-le prietenilor și familiei despre campania noastră și urmărește-ne pe social media.",
    icon: "📢",
    color: "from-secondary to-primary",
  }, 
  {
    title: "Recomandă o Familie sau un Caz",
    description: "Dacă știi o familie aflată în dificultate, spune-ne despre ea ca să o putem ajuta.",
    icon: "📨",
    color: "from-primary to-accent",
  }
]

const donationWays = [
  {
    title: "Daruri Fizice",
    items: [
      "Jucării în stare bună",
      "Haine și încălțăminte",
      "Articole de igienă",
      "Rechizite școlare",
      "Alimente neperisabile",
      "Echipamente de iarnă"
    ],
    instructions: "Poți aduce darurile în persoană la adresa noastră sau contactează-ne pentru ridicare.",
  },
  {
    title: "Contribuții Financiare",
    items: ["Transferuri bancare", "Sponsorizări"],
    instructions: "Banii donați vor fi folosiți pentru a cumpăra exact ceea ce persoanele au nevoie cel mai mult.",
  },
  {
    title: "Sugerează o Familie sau un Caz",
    items: [
      "Identificarea unei familii aflate în dificultate",
      "Transmiterea situației către echipa noastră",
      "Comunicare confidențială și sigură",
      "Evaluarea nevoilor familiei",
      "Sprijin direcționat către copii și părinți",
    ],
    instructions: "Trimite-ne un mesaj sau un email cu detalii despre familia pe care vrei să o recomanzi.",
  }
]

export default function GetInvolved() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="overflow-hidden">
      <Navigation />

      {/* Header */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Cum Poți Ajuta</p>
            <h1 className="text-6xl sm:text-7xl font-black text-foreground mb-6">
              Alege-ți{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">modul</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fiecare campanie necesita diferite forme de sprijin. Fiecare modalitate de ajutor este la fel de valoroasă. Alege ceea ce rezonează cu tine.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help - Artistic Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {ways.map((way, idx) => (
              <div
                key={idx}
                className={`group relative rounded-3xl border-2 border-primary/20 hover:border-primary/50 overflow-hidden transition-all duration-300 animate-fade-in-up cursor-default`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${way.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative p-8 sm:p-10">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {way.icon}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{way.title}</h3>
                  <p className="text-lg text-muted-foreground">{way.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-foreground mb-4">
              Cum Putem Lucra{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Împreună</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Iată modalitățile concrete prin care poți contribui la această mișcare de solidaritate. Asigura-te ca ai citit prezentarea campaniei dorite pentru a înțelege nevoile specifice și a oferi ajutorul potrivit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {donationWays.map((way, idx) => (
              <div
                key={idx}
                className="group relative rounded-3xl border-2 border-primary/20 hover:border-accent/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300" />

                <div className="relative p-10">
                  <h3 className="text-2xl font-black text-foreground mb-6">{way.title}</h3>

                  <ul className="space-y-3 mb-8">
                    {way.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary font-bold text-lg mt-1">✓</span>
                        <span className="text-muted-foreground text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-primary/20">
                    <p className="text-foreground font-medium italic">{way.instructions}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border-2 border-primary/30 animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />

            <div className="relative p-12 sm:p-16 text-center">
              <h2 className="text-4xl font-black text-foreground mb-6">
                Gata? Hai să{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">vorbim!</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-10">
                Indiferent de cum vrei să ajuți, contactează-ne și vom lucra împreună pentru a face o diferență în viețile
                persoanelor din Timișoara.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground mb-2">Email:</p>
                  <a
                    href="mailto:impreunapentrusolidaritate@yahoo.com"
                    className="text-2xl font-bold text-primary hover:text-accent transition-colors duration-300"
                  >
                    impreunapentrusolidaritate@yahoo.com
                  </a>
                </div>

                <div className="pt-6 border-t border-primary/20">
                  <p className="text-muted-foreground mb-4">Urmărește-ne pe rețelele sociale:</p>

                  <div className="flex justify-center gap-4">
                    <a
                      href="https://web.facebook.com/profile.php?id=61583909977268"
                      target="_blank"
                      className="px-6 py-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-bold transition-all duration-300 hover:scale-105"
                    >
                      Facebook
                    </a>

                    <a
                      href="https://www.instagram.com/impreuna_pentru_solidaritate/"
                      target="_blank"
                      className="px-6 py-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-bold transition-all duration-300 hover:scale-105"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
