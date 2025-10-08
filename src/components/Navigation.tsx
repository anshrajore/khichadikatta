import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import logo from "@/assets/logo.jpg";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/menu", label: t("nav.menu") },
    { path: "/franchise", label: t("nav.franchise") },
    { path: "/about", label: t("nav.about") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const languages = [
    { code: "en", label: "EN" },
    { code: "hi", label: "HI" },
    { code: "mr", label: "MR" },
  ];

  const cycleLanguage = () => {
    const currentIndex = languages.findIndex(lang => lang.code === i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex].code);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary transition-all">
              <img
                src={logo}
                alt="Khichadi Katta"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-heading font-bold text-secondary">
                खिचडी कट्टा
              </h1>
              <p className="text-xs text-muted-foreground">Khichadi Katta</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  className="relative"
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </Button>
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <Button
            variant="outline"
            size="icon"
            onClick={cycleLanguage}
            className="hidden md:flex"
            title="Change Language"
          >
            <Globe className="h-4 w-4" />
            <span className="ml-1 text-xs font-bold">
              {languages.find(lang => lang.code === i18n.language)?.label}
            </span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-card rounded-2xl mt-2 overflow-hidden shadow-xl"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link key={link.path} to={link.path}>
                    <Button
                      variant={location.pathname === link.path ? "default" : "ghost"}
                      className="w-full justify-start"
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={cycleLanguage}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {languages.find(lang => lang.code === i18n.language)?.label} - Change Language
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
