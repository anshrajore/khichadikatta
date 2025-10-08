import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Phone, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/30">
                <img
                  src={logo}
                  alt="Khichadi Katta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold">खिचडी कट्टा</h2>
                <p className="text-sm opacity-80">Khichadi Katta</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              {t("footer.tagline")}
            </p>
            <p className="text-xs opacity-70">
              © 2024 Khichadi Katta. {t("footer.rights")}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  {t("nav.menu")}
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  {t("nav.franchise")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold mb-4">{t("contact.title")}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="h-4 w-4" />
                <a href="tel:8390726301" className="hover:text-primary transition-colors">
                  8390726301
                </a>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="h-4 w-4" />
                <a href="mailto:khichdikatta.23@gmail.com" className="hover:text-primary transition-colors">
                  khichdikatta.23@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://www.instagram.com/khichdi_katta?igsh=cGJmbWowc3p0ZGIy&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @khichdi_katta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
