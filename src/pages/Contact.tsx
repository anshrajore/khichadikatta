import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const outlets = [
    {
      name: "Ashok Stambh (Main Branch)",
      address: "Ashok Stambh, Nashik, Maharashtra",
      mapUrl: "https://maps.app.goo.gl/ecwycNj1oTsiX46C8?g_st=ipc",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.3!2d73.7898!3d20.0063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzIyLjciTiA3M8KwNDcnMjMuMyJF!5e0!3m2!1sen!2sin!4v1234567890123",
    },
    {
      name: "Old C.B.S",
      address: "Old CBS, Nashik, Maharashtra",
      mapUrl: "#",
      embedUrl: "",
    },
    {
      name: "Thakkar Bazar",
      address: "Thakkar Bazar, Nashik, Maharashtra",
      mapUrl: "https://maps.app.goo.gl/Jy9XxU711DDNKPjo8?g_st=ipc",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.5!2d73.7794!3d20.0024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzA4LjYiTiA3M8KwNDYnNDUuOCJF!5e0!3m2!1sen!2sin!4v1234567890123",
    },
    {
      name: "Gangapur Road",
      address: "Suyojit Garden, Bapu Pul, Gangapur Road, Nashik",
      mapUrl: "https://maps.app.goo.gl/HzbQw25xs3oEQn2C8?g",
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.8!2d73.7635!3d20.0151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzU0LjQiTiA3M8KwNDUnNDguNiJF!5e0!3m2!1sen!2sin!4v1234567890123",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! 🎉", {
      description: "We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918390726301", "_blank");
  };

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-secondary mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("contact.subtitle")}
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-20 bg-primary rounded-full" />
            <div className="h-1 w-10 bg-primary/50 rounded-full" />
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{t("contact.phone")}</h3>
                <a href="tel:8390726301" className="text-muted-foreground hover:text-primary transition-colors">
                  8390726301
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">{t("contact.email")}</h3>
                <a
                  href="mailto:khichdikatta.23@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors break-all"
                >
                  khichdikatta.23@gmail.com
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Instagram</h3>
                <a
                  href="https://www.instagram.com/khichdi_katta?igsh=cGJmbWowc3p0ZGIy&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  @khichdi_katta
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Send us a Message</CardTitle>
                <CardDescription>We'd love to hear from you</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full"
                    size="lg"
                    onClick={handleWhatsApp}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    WhatsApp Us
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">{t("contact.outlets")}</CardTitle>
                <CardDescription>Visit us at any of our locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] rounded-xl overflow-hidden border-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.3!2d73.7898!3d20.0063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzIyLjciTiA3M8KwNDcnMjMuMyJF!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Khichadi Katta Locations"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Outlets List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-heading font-bold text-center text-secondary mb-8">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outlets.map((outlet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-heading font-bold text-lg mb-2">{outlet.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{outlet.address}</p>
                        {outlet.mapUrl !== "#" && (
                          <a
                            href={outlet.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm hover:underline flex items-center gap-1"
                          >
                            <MapPin className="h-4 w-4" />
                            Get Directions
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
