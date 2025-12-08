"use client"
import Link from "next/link"
import Image from "next/image"
import { Heart, Mail, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Împreună pentru fapte de solidaritate"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold text-lg">Împreună</span>
            </div>
            <p className="text-white/70 mb-4">Fapte de solidaritate pentru persoanele din Timișoara.</p>
            <div className="flex items-center gap-2 text-white/70">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm">Cu dragoste și dedicație</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Pagini</h3>
            <nav className="space-y-2">
              {[
                { label: "Acasă", href: "/" },
                { label: "Despre Noi", href: "/about" },
                { label: "Campanii", href: "/campaigns" },
                { label: "Cum Poți Ajuta", href: "/get-involved" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-white/70 hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact și Social</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:impreunapentrusolidaritate@yahoo.com" className="hover:text-white transition-colors">
                  impreunapentrusolidaritate@yahoo.com
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61583909977268&locale=ro_RO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/impreuna_pentru_solidaritate?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              <p className="text-white/70 pt-2">Timișoara, România</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Împreună pentru fapte de solidaritate. Toate drepturile rezervate.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Website realizat de <span className="font-semibold">Andreea Longodor</span>
            </p>
            <p className="text-white/60 text-sm">
              Creat cu <span className="text-primary">❤</span> pentru comunitate
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
