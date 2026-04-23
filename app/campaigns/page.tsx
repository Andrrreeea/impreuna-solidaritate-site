"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState, useEffect } from "react"

const campaigns = [
  {
    id: 1,
    title: "Ajut-o pe Natalis",
    started: true,
    status: "active",
    description: "Natalis Zaincofschi, elevă în clasa a XII-a la Colegiul Național \"Moise Nicoară\" din Arad, a fost victima unui grav accident rutier pe Bulevardul \"Revoluției\". Medicii recomandă transferul de urgență într-o clinică specializată din Germania pentru tratamente complexe. Familia, prietenii și colegii s-au mobilizat pentru a strânge fondurile necesare.",
    icon: "💜",
    color: "from-pink-500 to-purple-600",
    money: {
      collected: 0,
      target: 5000,
    },
    items: {
      collected: 0,
      target: 0,
    },
  },
  {
    id: 2,
    title: "Crăciun 2024",
    started: false,
    status: "ended",
    description: "Colectare de jucării, cărți și îmbrăcăminte pentru perioada sărbătorilor.",
    icon: "🎄",
    color: "from-primary to-accent",
    money: {
      collected: 4350,
      target: 3000,
    },
    items: {
      collected: 28,
      target: 50,
    },
  }
]

function calculateProgress(collected: number, target: number): number {
  if (target === 0) return 0
  return Math.min(Math.round((collected / target) * 100), 100)
}

function getStatusBadge(campaign: typeof campaigns[0]) {
  if (campaign.started && campaign.status === "active") {
    return { text: "În Progres", icon: "🔴", className: "bg-primary/20 text-primary" }
  }
  if (campaign.status === "ended") {
    return { text: "Încheiat", icon: "✅", className: "bg-green-500/20 text-green-600" }
  }
  return { text: "Nu a început", icon: "⏱️", className: "bg-muted text-muted-foreground" }
}

export default function Campaigns() {
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
            <p className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Campaniile Noastre</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-6 text-balance">
              Fiecare campanie este o{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">poveste</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              De-a lungul anului, lansăm campanii care schimbă viețile copiilor din Timișoara.
            </p>
          </div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 sm:space-y-12">
            {campaigns.map((campaign, idx) => {
              const moneyProgress = calculateProgress(campaign.money.collected, campaign.money.target)
              const itemsProgress = campaign.items.target > 0 ? calculateProgress(campaign.items.collected, campaign.items.target) : 0
              const hasItems = campaign.items.target > 0
              const overallProgress = hasItems ? Math.round((moneyProgress + itemsProgress) / 2) : moneyProgress
              const statusBadge = getStatusBadge(campaign)

              return (
                <div
                  key={campaign.id}
                  className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in-up ${idx % 2 === 0 ? "lg:ml-0" : "lg:ml-auto"}`}
                  style={{ animationDelay: `${idx * 0.1}s`, maxWidth: "100%" }}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${campaign.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative p-5 sm:p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
                      {/* Left - Icon and Info */}
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                          <span className="text-4xl sm:text-5xl lg:text-6xl">{campaign.icon}</span>
                          <div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground">{campaign.title}</h3>
                            <span
                              className={`inline-block mt-2 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold ${statusBadge.className}`}
                            >
                              {statusBadge.icon} {statusBadge.text}
                            </span>
                          </div>
                        </div>

                        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">{campaign.description}</p>

                        {/* Progress */}
                        <div className="space-y-4">
                          {/* Money Progress */}
                          <div>
                            <div className="flex justify-between items-center mb-2 sm:mb-3">
                              <span className="font-bold text-foreground text-sm sm:text-base">Bani Strânși</span>
                              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {moneyProgress}%
                              </span>
                            </div>
                            <div className="w-full h-2 sm:h-3 bg-border rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${campaign.color} transition-all duration-500 rounded-full`}
                                style={{ width: `${moneyProgress}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-4 sm:gap-8">
                            <div>
                              <p className="text-xs sm:text-sm text-muted-foreground">Colectat</p>
                              <p className="text-lg sm:text-2xl font-black text-primary">
                                {campaign.money.collected.toLocaleString("ro-RO")} lei
                              </p>
                            </div>
                            <div>
                              <p className="text-xs sm:text-sm text-muted-foreground">Țintă</p>
                              <p className="text-lg sm:text-2xl font-black text-accent">
                                {campaign.money.target.toLocaleString("ro-RO")} lei
                              </p>
                            </div>
                          </div>

                          {/* Items Progress - Only show if there are items */}
                          {hasItems && (
                            <div className="space-y-4 pt-4 border-t border-primary/10">
                              <div>
                                <div className="flex justify-between items-center mb-2 sm:mb-3">
                                  <span className="font-bold text-foreground text-sm sm:text-base">Daruri Primite</span>
                                  <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    {itemsProgress}%
                                  </span>
                                </div>
                                <div className="w-full h-2 sm:h-3 bg-border rounded-full overflow-hidden">
                                  <div
                                    className={`h-full bg-gradient-to-r ${campaign.color} transition-all duration-500 rounded-full`}
                                    style={{ width: `${itemsProgress}%` }}
                                  />
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-4 sm:gap-8">
                                <div>
                                  <p className="text-xs sm:text-sm text-muted-foreground">Colectate</p>
                                  <p className="text-lg sm:text-2xl font-black text-primary">{campaign.items.collected}</p>
                                </div>
                                <div>
                                  <p className="text-xs sm:text-sm text-muted-foreground">Țintă</p>
                                  <p className="text-lg sm:text-2xl font-black text-accent">{campaign.items.target}</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Overall Progress */}
                          <div className="pt-4 border-t border-primary/20">
                            <div className="flex items-center justify-between gap-4">
                              <span className="font-bold text-foreground text-sm sm:text-base">Progress Total</span>
                              <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {overallProgress}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right - Decorative element */}
                      <div className="hidden lg:flex items-center justify-center flex-shrink-0">
                        <div
                          className={`w-36 h-36 xl:w-48 xl:h-48 rounded-3xl bg-gradient-to-br ${campaign.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center text-6xl xl:text-8xl blur-sm`}
                        >
                          {campaign.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
