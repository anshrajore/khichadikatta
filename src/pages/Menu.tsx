import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Menu = () => {
  const { t, i18n } = useTranslation();

  const menuItems = [
    {
      name: { en: "Soyabin Khichadi (Special)", hi: "सोयाबीन खिचड़ी (स्पेशल)", mr: "सोयाबीन खिचडी (स्पेशल)" },
      price: 30,
      description: { en: "Our signature dish", hi: "हमारी सिग्नेचर डिश", mr: "आमची सिग्नेचर डिश" },
      badge: "Chef's Special",
    },
    {
      name: { en: "Khichadi", hi: "खिचड़ी", mr: "खिचडी" },
      price: 30,
      description: { en: "Traditional style", hi: "पारंपरिक शैली", mr: "पारंपारिक शैली" },
    },
    {
      name: { en: "Kadhi Khichadi", hi: "कढ़ी खिचड़ी", mr: "कढी खिचडी" },
      price: 40,
      description: { en: "With creamy kadhi", hi: "क्रीमी कढ़ी के साथ", mr: "मलईदार कढीसोबत" },
      badge: "Popular",
    },
    {
      name: { en: "Sabudana Khichadi", hi: "साबूदाना खिचड़ी", mr: "साबुदाणा खिचडी" },
      price: 30,
      description: { en: "Perfect for fasting", hi: "उपवास के लिए एकदम सही", mr: "उपवासासाठी योग्य" },
    },
    {
      name: { en: "Kadhi Bhel", hi: "कढ़ी भेल", mr: "कढी भेळ" },
      price: 30,
      description: { en: "Crispy and tangy", hi: "कुरकुरा और तीखा", mr: "कुरकुरीत आणि चवदार" },
    },
    {
      name: { en: "Mugbhaji", hi: "मूंग भाजी", mr: "मूग भाजी" },
      price: 30,
      description: { en: "Healthy moong sprouts", hi: "स्वास्थ्यवर्धक मूंग अंकुर", mr: "निरोगी मूग आंबे" },
    },
    {
      name: { en: "Chaha (Tea)", hi: "चाय", mr: "चहा" },
      price: 10,
      description: { en: "Perfect companion", hi: "बेहतरीन साथी", mr: "उत्तम साथी" },
    },
  ];

  const handleAddToCart = (itemName: string) => {
    toast.success(`${itemName} added to order! 🍛`, {
      description: "Great choice! Continue browsing our menu.",
    });
  };

  const lang = i18n.language as 'en' | 'hi' | 'mr';

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
            {t("menu.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {t("menu.subtitle")}
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-20 bg-primary rounded-full" />
            <div className="h-1 w-10 bg-primary/50 rounded-full" />
          </div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/50 h-full flex flex-col">
                <CardHeader>
                  {item.badge && (
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {item.badge}
                      </span>
                    </div>
                  )}
                  <CardTitle className="text-xl font-heading text-secondary">
                    {item.name[lang]}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {item.description[lang]}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary">₹{item.price}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full group-hover:shadow-lg transition-all"
                    onClick={() => handleAddToCart(item.name[lang])}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Order
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl"
        >
          <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
            Can't decide? Visit us!
          </h3>
          <p className="text-muted-foreground mb-6">
            Experience the authentic taste at any of our 4 outlets across Nashik
          </p>
          <Button size="lg" variant="outline">
            Find Nearest Outlet
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
