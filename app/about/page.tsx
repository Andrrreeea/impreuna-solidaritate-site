"use client"
import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import { AnimatedTestimonials } from "../../components/ui/animated-testimonials"
import { useEffect, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const teamMembers = [
    {
      quote: "Cred că fiecare copil merită un zâmbet și o șansă la viață mai bună. Asta ne motivează zilnic.",
      name: "Membru 1",
      designation: "Coordonator",
      src: "/team-member-1-coordonator.jpg",
    },
    {
      quote: "Fiecare dar pe care îl colectăm reprezentează iubire și grijă. Sunt onorată să fiu parte din asta.",
      name: "Membru 2",
      designation: "Organizare",
      src: "/team-member-2-organizare.jpg",
    },
    {
      quote: "Am realizat că schimbarea reală vine din comunitate. Sunt mandru că facem diferență zilnic.",
      name: "Membru 3",
      designation: "Marketing",
      src: "/team-member-3-marketing.jpg",
    },
    {
      quote: "Zâmbetele copiilor pe care i-am ajutat sunt cea mai mare recompensă. Asta mă face fericit.",
      name: "Membru 4",
      designation: "Voluntar",
      src: "/team-member-4-voluntar.jpg",
    },
    {
      quote: "Solidaritatea nu este doar un cuvânt pentru noi. Este o viață pe care o trăim zilnic.",
      name: "Membru 5",
      designation: "Voluntar",
      src: "/team-member-5-voluntar.jpg",
    },
    {
      quote: "Suntem mici în număr, dar infiniti în intenție. Asta este puterea adevăratei solidarități.",
      name: "Membru 6",
      designation: "Voluntar",
      src: "/team-member-6-voluntar.jpg",
    },
  ]

  return (
    <div className="overflow-hidden">
      <Navigation />
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Cine Suntem</p>
            <h1 className="text-6xl sm:text-7xl font-black text-foreground mb-6">
              O echipă{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">dedicată</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              6 persoane cu o viziune comună: să schimbăm viețile persoanelor din Timișoara prin gesturi de solidaritate.
            </p>
          </div>

          {/* Team Photo Section - Featured */}
          <div className="mb-24 animate-fade-in-up">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="w-full aspect-[2/1] bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center rounded-3xl border-4 border-primary/20">
                <img
                  src="team_photo.jpg"
                  alt="Echipa noastră dedicată"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <p className="text-center text-muted-foreground mt-6 text-sm">
              Aceasta este echipa noastră!
            </p>
          </div> 
        </div>
      </section>

      {/* Team Members Description Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-foreground mb-16 text-center">
            Voluntarii{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Noștri</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-2xl p-8 bg-white border-2 border-primary/20 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg">
              <img
                src="edi.jpg"
                alt="Eduard Marius Negru"
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">Eduard Marius Negru</h3>
              <p className="text-sm font-semibold text-primary mb-4">Voluntar</p>
              <p className="text-muted-foreground">
                Pentru mine, solidaritatea înseamnă să fim acolo unul pentru altul. Orice gest, oricât de mic, poate schimba ziua unei persoane sau chiar viața unei familii.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-white border-2 border-primary/20 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg">
              <img
                src="andreea.jpeg"
                alt="Andreea Longodor"
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">Andreea Longodor</h3>
              <p className="text-sm font-semibold text-primary mb-4">Voluntar</p>
              <p className="text-muted-foreground">
                Mă bucur să pot contribui cu ceva bun în comunitatea noastră. Fie că ajutăm o familie sau o persoană singură, important e să simtă că nu sunt uitați.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-white border-2 border-primary/20 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg">
              <img
                src="naomi.jpg"
                alt="Antonie Naomi"
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">Naomi Antonie</h3>
              <p className="text-sm font-semibold text-primary mb-4">Voluntar</p>
              <p className="text-muted-foreground">
                Am învățat că oamenii trec prin multe lucruri invizibile. Dacă putem aduce puțină liniște, sprijin sau speranță cuiva, atunci merită tot efortul.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-white border-2 border-primary/20 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg">
              <img
                src="diana.jpg"
                alt="Diana Matei"
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">Diana Matei</h3>
              <p className="text-sm font-semibold text-primary mb-4">Voluntar</p>
              <p className="text-muted-foreground">
                Când văd recunoștința celor pe care îi ajutăm, îmi dau seama cât de valoroasă este munca noastră. Uneori, un gest simplu face o diferență uriașă.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-white border-2 border-primary/20 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg">
              <img
                src="mihai.jpg"
                alt="Mihai Negrea"
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">Mihai Negrea</h3>
              <p className="text-sm font-semibold text-primary mb-4">Voluntar</p>
              <p className="text-muted-foreground">
                Solidaritatea e despre oameni, indiferent de vârstă sau situație. Îmi place să știu că pot contribui la un sentiment de siguranță pentru familiile aflate în nevoie.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-white border-2 border-primary/20 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg">
              <img
                src="edi.jpg"
                alt="Bogdan Moldovan"
                className="w-16 h-16 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-foreground mb-2">Bogdan Moldovan</h3>
              <p className="text-sm font-semibold text-primary mb-4">Voluntar</p>
              <p className="text-muted-foreground">
                Suntem o echipă mică, dar cu intenții mari. Îmi place să ofer timp și energie pentru cei care trec prin momente grele. Împreună chiar putem schimba ceva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Misiunea Noastră</p>
              <h2 className="text-5xl font-black text-foreground mb-8">
                De ce facem{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">asta?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Credem că fiecare om merită să se simtă iubit și susținut. Prin colectarea și distribuirea de daruri,
                nu doar oferim obiecte materiale, ci transmitem un mesaj puternic: ești important, ești văzut, ești
                iubit.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Timișoara are familii care au nevoie de noi. Noi avem oameni care doresc să ajute. Misiunea noastră este să
                conectăm aceste două lucruri cu inimă și dedicație.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-3xl p-12">
                <div className="space-y-6">
                  <div>
                    <p className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      💝
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mt-4 mb-2">Iubire și Compasiune</h3>
                    <p className="text-muted-foreground">Fiecare acțiune vine din inimă.</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                      🤲
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mt-4 mb-2">Transparență</h3>
                    <p className="text-muted-foreground">Știi exact cum ajung donațiile la copii.</p>
                  </div>
                  <div>
                    <p className="text-5xl font-black bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                      ⭐
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mt-4 mb-2">Impact</h3>
                    <p className="text-muted-foreground">Zâmbete și speranță pentru copii.</p>
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
