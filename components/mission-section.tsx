"use client"
import { Heart, Users, Gift, Lightbulb } from "lucide-react"

const missions = [
  {
    icon: Heart,
    title: "Compasiune",
    description: "Oferim ajutor cu inimă deschisă și grijă sinceră pentru fiecare copil din Timișoara.",
    color: "from-primary to-accent",
  },
  {
    icon: Users,
    title: "Comunitate",
    description: "Suntem o echipă de 6 persoane dedicate muncii în echipă și susținerii reciproce.",
    color: "from-accent to-secondary",
  },
  {
    icon: Gift,
    title: "Generozitate",
    description: "Colectăm daruri de la oameni generoși din toată comunitatea pentru a face diferență.",
    color: "from-secondary to-primary",
  },
  {
    icon: Lightbulb,
    title: "Speranță",
    description: "Credem că fiecare gest mic poate duce la schimbări mari în viețile copiilor.",
    color: "from-primary/80 to-accent/80",
  },
]

export default function MissionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Valorile Noastre</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fiecare proiect de solidaritate pornește din aceste patru piloni care ne ghidează în misiunea noastră.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${mission.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${mission.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {mission.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{mission.description}</p>

                <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
