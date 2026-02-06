import { Link, useLocation } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    { href: "/", label: t("nav.home") || "Home" },
    { href: "/about", label: t("nav.about") || "About" },
    { href: "/services", label: t("nav.services") },
    { href: "/properties", label: t("nav.properties") },
    { href: "/contact", label: t("contact.title") }
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const Logo = isDark ? logo2 : logo1;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-card py-3 shadow-2xl"
          : "bg-transparent py-6"
      }`}
      dir={dir}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <motion.div 
            className="flex items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-bg-accent rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <img 
                src={Logo} 
                alt="Land AI Real Estate" 
                className="h-12 w-12 md:h-14 md:w-14 rounded-2xl object-cover border-2 border-white/20 relative z-10 shadow-lg" 
              />
            </div>
            <div>
              <span className={`text-2xl md:text-3xl font-black tracking-tight ${isScrolled ? 'gradient-text-primary' : 'text-white'} transition-all duration-300`}>
                Land AI
              </span>
              <div className="text-xs text-muted-foreground font-medium tracking-wide hidden md:block">Real Estate</div>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={`relative px-4 py-2.5 text-sm font-bold transition-all duration-300 rounded-xl cursor-pointer ${
                  location === link.href 
                    ? "gradient-text-primary" 
                    : isScrolled 
                      ? "text-foreground/70 hover:text-foreground" 
                      : "text-white/80 hover:text-white"
                } ${location === link.href ? 'glass-card-light' : 'hover:glass-card-light'}`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 gradient-bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className={`rounded-2xl w-12 h-12 font-black text-base transition-all duration-300 ${
              isScrolled ? 'glass-card-light hover:gradient-bg-primary hover:text-white' : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl'
            }`}
            title={language === "en" ? "Switch to Arabic" : "Switch to English"}
          >
            {language === "en" ? "ع" : "EN"}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className={`rounded-2xl w-12 h-12 transition-all duration-300 ${
              isScrolled ? 'glass-card-light hover:gradient-bg-primary hover:text-white' : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-xl'
            }`}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button className="gradient-bg-accent hover:opacity-90 text-white rounded-2xl px-8 h-12 font-bold btn-3d shadow-2xl">
            {t("hero.cta")}
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3">
           <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className={`rounded-2xl w-10 h-10 font-black ${
              isScrolled ? 'glass-card-light' : 'bg-white/10 text-white backdrop-blur-xl'
            }`}
          >
             {language === "en" ? "ع" : "EN"}
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2.5 rounded-2xl transition-all ${
              isScrolled ? 'glass-card-light text-foreground' : 'bg-white/10 text-white backdrop-blur-xl'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 right-0 glass-card border-b border-border/50 shadow-2xl backdrop-blur-2xl mt-2 mx-4 rounded-3xl"
        >
          <div className="flex flex-col gap-3 p-6">
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href}>
                <motion.a
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-lg font-bold p-4 rounded-2xl transition-all cursor-pointer ${
                    location === link.href 
                      ? 'gradient-bg-primary text-white' 
                      : 'glass-card-light hover:gradient-bg-primary hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.a>
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-2">
              <span className="text-sm font-bold">Dark Mode</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsDark(!isDark)}
                className="glass-card-light rounded-xl font-bold"
              >
                {isDark ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                {isDark ? "Light" : "Dark"}
              </Button>
            </div>
            <Button className="w-full mt-4 gradient-bg-accent text-white font-bold py-6 rounded-2xl btn-3d" onClick={() => setIsMobileMenuOpen(false)}>
              {t("hero.cta")}
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
