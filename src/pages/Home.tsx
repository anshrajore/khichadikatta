import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Store, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/nashik-hero.jpg";

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Store,
      title: t("franchise.bulkOrders"),
      description: "Growing demand for homestyle khichadi",
    },
    {
      icon: TrendingUp,
      title: t("franchise.dayOneRevenue"),
      description: "Proven business model with instant returns",
    },
    {
      icon: MapPin,
      title: "4 Successful Outlets",
      description: "Established presence across Nashik",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-background z-10" />
          <img
            src={heroImage}
            alt="Nashik Watercolor"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary-foreground font-script text-xl md:text-2xl shadow-lg">
                Est. 2024 • Nashik's Finest
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 drop-shadow-2xl leading-tight"
            >
              {t("hero.tagline")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-4 font-marathi drop-shadow-lg"
            >
              अस्सल घरगुती मसाल्यांची बनवलेली स्पेशल सोयाबीन खिचडी
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-white/80 mb-12 drop-shadow-lg"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/menu">
                <Button size="lg" className="text-lg group shadow-2xl hover:shadow-primary/50 transition-all duration-300 animate-pulse-glow">
                  {t("hero.cta1")}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-2xl hover:scale-105 transition-all duration-300">
                  {t("hero.cta2")}
                </Button>
              </Link>
              <Link to="/franchise">
                <Button size="lg" variant="secondary" className="text-lg shadow-2xl hover:shadow-accent/50 transition-all duration-300">
                  {t("hero.cta3")}
                </Button>
              </Link>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="absolute bottom-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white/70 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-secondary mb-4">
              {t("franchise.whyInvest")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full shimmer-effect" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 h-full relative overflow-hidden hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="p-8 text-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-primary/30"
                    >
                      <feature.icon className="h-10 w-10 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-display font-semibold mb-3 text-secondary group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/franchise">
              <Button size="lg" className="text-lg group">
                {t("franchise.getStarted")}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
