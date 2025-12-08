"use client"

import { useState, useEffect } from "react"

const stats = [
  { label: "Oameni în echipă", value: "6" },
  { label: "Campanii lansate", value: "1" },
  { label: "Copii ajutați", value: "100+" },
  { label: "Daruri distribuite", value: "500+" },
]

function CountUp({ end }: { end: string }) {
  const [count, setCount] = useState(0)
  const numericEnd = Number.parseInt(end.replace("+", ""))
  const hasPlus = end.includes("+")

  useEffect(() => {
    let current = 0
    const timer = setInterval(() => {
      current += Math.ceil(numericEnd / 30)
      if (current >= numericEnd) {
        setCount(numericEnd)
        clearInterval(timer)
      } else {
        setCount(current)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [numericEnd])

  return (
    <span>
      {count}
      {hasPlus ? "+" : ""}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 rounded-2xl transition-colors duration-500" />

              <div className="relative z-10">
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  <CountUp end={stat.value} />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
