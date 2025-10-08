import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { CheckCircle2, Package, Users, TrendingUp, Zap, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";

const Franchise = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });

  const benefits = [
    {
      icon: Package,
      title: t("franchise.bulkOrders"),
    },
    {
      icon: TrendingUp,
      title: t("franchise.dayOneRevenue"),
    },
    {
      icon: Users,
      title: t("franchise.fastGrowing"),
    },
    {
      icon: Zap,
      title: t("franchise.zeroRoyalty"),
    },
  ];

  const kitchenItems = {
    en: [
      "1 Gas Stove", "2 Large Pots", "1 Spatula", "2 Small Pots", "3 Bowls",
      "1 Wooden Chopping Board", "2 Knives", "50 Plates", "72 Spoons",
      "5 Packs Aluminium Foil Containers (500)", "10 Packs Plastic Spoons",
      "2kg Small & 2kg Large Pepper Bags",
      "100kg Raw Materials (Onion, Rice, Oil, Soya Chunks, 2 Types of Premix, Green Chilies, etc.)"
    ],
    hi: [
      "1 गैस चूल्हा", "2 बड़े बर्तन", "1 कड़छी", "2 छोटे बर्तन", "3 कटोरे",
      "1 लकड़ी का कटिंग बोर्ड", "2 चाकू", "50 प्लेटें", "72 चम्मच",
      "5 पैक एल्युमिनियम फॉयल कंटेनर (500)", "10 पैक प्लास्टिक चम्मच",
      "2 किलो छोटी और 2 किलो बड़ी मिर्च की थैली",
      "100 किलो कच्चा माल (प्याज, चावल, तेल, सोया चंक्स, 2 प्रकार के प्रीमिक्स, हरी मिर्च, आदि)"
    ],
    mr: [
      "1 शेगडी", "2 साईज पातेली", "1 पलटा", "2 लहान साईज पातेली", "3 बाउल",
      "1 लाकडी ठोकळा", "2 सुरी", "50 प्लेट्स", "72 चमचे",
      "अॅल्युमिनियम फॉईल कंटेनरचे 5 पॅक (500)", "प्लास्टिक चमचे - 10 पॅक",
      "मिरी पिशव्या - 2 किलो लहान व 2 किलो मोठ्या",
      "100 किलो साहित्य (कांदा, तांदूळ, तेल, सोया चंक्स, 2 प्रकारचे प्रीमिक्स, हिरव्या मिरच्या इ.)"
    ],
  };

  const support = {
    en: [
      "Social Media Support (Reel Shoot, Food Vlog Posting)",
      "Professional Food Photography",
      "Ambiance & Event Support",
      "Customer Acquisition Strategy",
      "Swiggy & Zomato Onboarding Support"
    ],
    hi: [
      "सोशल मीडिया सहायता (रील शूट, फूड व्लॉग पोस्टिंग)",
      "पेशेवर फूड फोटोग्राफी",
      "माहौल और इवेंट सहायता",
      "ग्राहक अधिग्रहण रणनीति",
      "स्विगी और जोमैटो ऑनबोर्डिंग सहायता"
    ],
    mr: [
      "सोशल मीडिया सपोर्ट (रील शूट, फूड व्लॉग पोस्टिंग)",
      "व्यावसायिक फूड फोटोग्राफी",
      "अॅम्बियन्स व इव्हेंट सपोर्ट",
      "कस्टमर अॅक्विझिशन धोरण",
      "स्विग्गी व झोमॅटो ऑनबोर्डिंग सपोर्ट"
    ],
  };

  const lang = i18n.language as 'en' | 'hi' | 'mr';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest! 🎉", {
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", city: "", message: "" });
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
            {t("franchise.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-2">
            {t("franchise.subtitle")}
          </p>
          <div className="inline-block px-6 py-2 bg-primary/10 rounded-full">
            <p className="text-2xl font-bold text-primary">
              {t("franchise.investment")}: ₹1,99,999
            </p>
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-secondary mb-12">
            {t("franchise.whyInvest")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-secondary">
                      {benefit.title}
                    </h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Investment Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">
                  Franchise Model Details
                </CardTitle>
                <CardDescription>Complete package for your success</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{t("franchise.investment")}:</span>
                    <span className="text-2xl font-bold text-primary">₹1,99,999</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{t("franchise.space")}:</span>
                    <span className="text-lg">300 sq ft</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">Profit Margins</h4>
                  <div className="flex items-center justify-between">
                    <span>Gross Profit:</span>
                    <span className="text-xl font-bold text-accent">70%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Net Profit:</span>
                    <span className="text-xl font-bold text-accent">50%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-lg flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    Key Advantages
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✅ Low Food & Operational Cost</li>
                    <li>✅ Less Manpower Required</li>
                    <li>✅ Chef-less Model</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Training & Support</h4>
                  <p className="text-sm text-muted-foreground">
                    10 days on-site training, followed by ongoing support as needed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">
                  {t("franchise.getStarted")}
                </CardTitle>
                <CardDescription>Fill in your details and we'll reach out</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
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
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Accordion Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="kitchen" className="border rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                {t("franchise.kitchenSetup")}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-muted-foreground">
                  {kitchenItems[lang].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="support" className="border rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-heading font-semibold">
                {t("franchise.support")}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-muted-foreground">
                  {support[lang].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};

export default Franchise;
