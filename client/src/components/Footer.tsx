import { useLanguage } from "@/hooks/use-language";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import logo2 from "@assets/logo_2_1770120807165.jpeg";

export function Footer() {
  const { t, dir } = useLanguage();

  return (
    <footer className="bg-primary text-white pt-16 pb-8" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo2} alt="Logo" className="w-12 h-12 rounded-full border border-white/20" />
              <span className="text-2xl font-bold">Land AI</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-xs">
              {t("hero.subtitle")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-accent hover:text-primary p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-accent hover:text-primary p-2 rounded-full transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-accent hover:text-primary p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">{t("contact.title")}</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span>Dubai & Abu Dhabi,<br/>United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+971522850625" className="hover:text-white">+971 52 285 0625</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:land.a.i@outlook.com" className="hover:text-white">land.a.i@outlook.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">{t("nav.services")}</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#services" className="hover:text-accent transition-colors">{t("services.brokerage")}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{t("services.management")}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{t("services.maintenance")}</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">{t("services.land")}</a></li>
            </ul>
          </div>

          {/* Management */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">{t("management.title")}</h3>
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-xl">
                B
              </div>
              <div>
                <p className="font-bold text-white">Mr. Bassam Hussein</p>
                <p className="text-sm text-gray-400">{t("management.role")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Land AI Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
