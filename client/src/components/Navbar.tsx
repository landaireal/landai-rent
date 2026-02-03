import { Link, useLocation } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import logo1 from "@assets/logo_1_1770120807165.jpeg";
import logo2 from "@assets/logo_2_1770120807165.jpeg";

export function Navbar() {
  const { t, language, setLanguage, dir } = useLanguage();
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/#services", label: t("nav.services") },
    { href: "/properties", label: t("nav.properties") },
    { href: "/#investors", label: t("nav.investors") },
    { href: "/#management", label: t("nav.management") },
    { href: "/#contact", label: t("nav.contact") },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const Logo = isDark ? logo2 : logo1;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img 
              src={Logo} 
              alt="Land AI Real Estate" 
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-primary/20 dark:border-accent/50" 
            />
            <span className={`text-xl md:text-2xl font-bold tracking-tight ${isScrolled || isDark ? 'text-primary dark:text-white' : 'text-primary dark:text-white'}`}>
              Land AI
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location === link.href ? "text-accent font-semibold" : "text-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full hover:bg-primary/10"
            title={language === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            <span className="font-bold text-lg">{language === "en" ? "ع" : "EN"}</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="rounded-full hover:bg-primary/10"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            {t("hero.cta")}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
           <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full"
          >
             <span className="font-bold">{language === "en" ? "ع" : "EN"}</span>
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-4 shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium p-2 hover:bg-muted rounded-lg"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-sm font-medium">Dark Mode</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsDark(!isDark)}
              >
                {isDark ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                {isDark ? "Light" : "Dark"}
              </Button>
            </div>
            <Button className="w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>
              {t("hero.cta")}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
