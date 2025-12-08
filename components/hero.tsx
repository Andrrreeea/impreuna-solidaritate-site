"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-slide-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Campanie Crăciun 2024</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Împreună pentru
            </span>
            <br />
            <span className="text-foreground">fapte de solidaritate</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Colectăm daruri de la oameni generoși și le distribuim copiilor din Timișoara. Fiecare dar are puterea să
            schimbe o viață și să aduc speranță în perioada sărbătorilor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/get-involved"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 animate-slide-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Cum Poți Ajuta
            </Link>
            <Link
              href="/campaigns"
              className="px-8 py-4 border-2 border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary/10 transition-all duration-300 transform hover:scale-105 animate-slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Vezi Campaniile
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </div>
      </div>
    </section>
  )
}
