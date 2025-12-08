"use client"
import Navigation from "../../components/navigation"
import Footer from "../../components/footer"
import { useState, useEffect } from "react"

const campaigns = [
  {
    id: 1,
    title: "Crăciun 2025",
    started: true,
    description: "Colectare de jucării, cărți și îmbrăcăminte pentru perioada sărbătorilor.",
    icon: "🎄",
    color: "from-primary to-accent",
    money: {
      collected: 1150,
      target: 3000,
    },
    items: {
      collected: 20,
      target: 50,
    },
  },
]

const calculateProgress = (collected: number, target: number) => {
  if (target === 0) return 0
  return Math.min(Math.round((collected / target) * 100), 100)
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
            <h1 className="text-6xl sm:text-7xl font-black text-foreground mb-6">
              Fiecare campanie este o{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">poveste</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              De-a lungul anului, lansăm campanii care schimbă viețile familiilor din Timișoara.
            </p>
          </div>
        </div>
      </section>

      {/* Campaigns Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {campaigns.map((campaign, idx) => {
              const moneyProgress = calculateProgress(campaign.money.collected, campaign.money.target)
              const itemsProgress = calculateProgress(campaign.items.collected, campaign.items.target)
              const overallProgress = Math.round((moneyProgress + itemsProgress) / 2)

              return (
                <div
                  key={campaign.id}
                  className={`group relative rounded-3xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in-up ${idx % 2 === 0 ? "lg:ml-0" : "lg:ml-auto"}`}
                  style={{ animationDelay: `${idx * 0.1}s`, maxWidth: "90%" }}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${campaign.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative p-8 sm:p-12">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                      {/* Left - Icon and Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-6xl">{campaign.icon}</span>
                          <div>
                            <h3 className="text-3xl sm:text-4xl font-black text-foreground">{campaign.title}</h3>
                            <span
                              className={`inline-block mt-2 px-4 py-1 rounded-full text-sm font-bold ${
                                campaign.started ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                              }`}
                            >
                              {campaign.started ? "🔴 În Progres" : "⏱️ Nu a început"}
                            </span>
                          </div>
                        </div>

                        <p className="text-lg text-muted-foreground mb-8">{campaign.description}</p>

                        {/* Progress */}
                        <div className="space-y-4">
                          {/* Money Progress */}
                          <div>
                            <div className="flex justify-between items-center mb-3">
                              <span className="font-bold text-foreground">💰 Bani Strânși</span>
                              <span className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {moneyProgress}%
                              </span>
                            </div>
                            <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                              <div
                                className={`h-full bg-gradient-to-r ${campaign.color} transition-all duration-500 rounded-full`}
                                style={{ width: `${moneyProgress}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex gap-8">
                            <div>
                              <p className="text-sm text-muted-foreground">Colectat</p>
                              <p className="text-2xl font-black text-primary">
                                {campaign.money.collected.toLocaleString("ro-RO")} lei
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Țintă</p>
                              <p className="text-2xl font-black text-accent">
                                {campaign.money.target.toLocaleString("ro-RO")} lei
                              </p>
                            </div>
                          </div>

                          {/* Items Progress */}
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between items-center mb-3">
                                <span className="font-bold text-foreground">🎁 Daruri Primite</span>
                                <span className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                  {itemsProgress}%
                                </span>
                              </div>
                              <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                                <div
                                  className={`h-full bg-gradient-to-r ${campaign.color} transition-all duration-500 rounded-full`}
                                  style={{ width: `${itemsProgress}%` }}
                                />
                              </div>
                            </div>

                            <div className="flex gap-8">
                              <div>
                                <p className="text-sm text-muted-foreground">Colectate</p>
                                <p className="text-2xl font-black text-primary">{campaign.items.collected}</p>
                              </div>
                              <div>
                                <p className="text-sm text-muted-foreground">Țintă</p>
                                <p className="text-2xl font-black text-accent">{campaign.items.target}</p>
                              </div>
                            </div>
                          </div>

                          {/* Overall Progress */}
                          <div className="pt-4 border-t border-primary/20">
                            <div className="flex items-center justify-between gap-4">
                              <span className="font-bold text-foreground">Progress Overall</span>
                              <span className="text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                {overallProgress}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right - Decorative element */}
                      <div className="hidden lg:flex items-center justify-center">
                        <div
                          className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${campaign.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center text-8xl blur-sm`}
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
