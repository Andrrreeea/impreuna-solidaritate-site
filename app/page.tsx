"use client"
import Navigation from "../components/navigation"
import Footer from "../components/footer"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    setIsVisible(true)
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 0.5,
      })),
    )
  }, [])

  return (
    <div className="overflow-hidden">
      <Navigation />

      {/* Hero Section - Bold and Artistic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated blob background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-blob" />
          <div
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-blob"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/3 -right-20 w-72 h-72 bg-secondary/15 rounded-full blur-3xl animate-blob"
            style={{ animationDelay: "4s" }}
          />
        </div>

        {/* Floating particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30 animate-float-rotate"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - text content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            >
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-bold text-primary uppercase tracking-widest">
                    Solidaritate din inimă
                  </span>
                </div>

                <h1 className="text-6xl lg:text-7xl font-black leading-tight text-foreground">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Împreună
                  </span>
                  <br />
                  <span className="text-foreground">pentru fapte</span>
                  <br />
                  <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    de solidaritate
                  </span>
                </h1>
              </div>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Colectăm daruri din inimile generoase și le ducem persoanelor în nevoie din zona Timișoara. Fiecare gest contează.
                Fiecare dar este o poveste de speranță.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/get-involved"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Doneaza Acum
                </Link>
                <Link
                  href="/campaigns"
                  className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-all duration-300 text-center"
                >
                  Vezi Campaniile
                </Link>
              </div>
            </div>

            {/* Right side - visual element */}
            <div
              className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
            >
              <div className="relative aspect-square">
                {/* Large gradient circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl" />

                {/* Card with stat */}
                <div className="absolute top-0 right-0 bg-white rounded-2xl p-6 shadow-2xl max-w-xs animate-float-rotate">
                  <p className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    30+
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">Persoane ajutate</p>
                </div>

                {/* Card with stat */}
                <div
                  className="absolute bottom-0 left-0 bg-white rounded-2xl p-6 shadow-2xl max-w-xs animate-float-rotate"
                  style={{ animationDelay: "1s" }}
                >
                  <p className="text-4xl font-black bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    6
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">Voluntari dedicați</p>
                </div>

                {/* Floating icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-6xl animate-pulse-glow">
                    ❤️
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-foreground/5 to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "30+", label: "Persoane ajutate" },
              { number: "40+", label: "Daruri colectate" },
              { number: "6", label: "Voluntari" },
              { number: "2025", label: "Anul lansării" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group p-8 text-center rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:bg-primary/5 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <p className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-muted-foreground mt-3 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-3xl p-12 sm:p-16 text-center">
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
                Fiecare gest{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">contează</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Indiferent de dimensiunea donației, fiecare ajutor face o diferență în viețile copiilor.
              </p>
              <Link
                href="/get-involved"
                className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Vino și Ajută
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
