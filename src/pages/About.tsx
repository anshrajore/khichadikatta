import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const { t } = useTranslation();

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
            {t("about.title")}
          </h1>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-20 bg-primary rounded-full" />
            <div className="h-1 w-10 bg-primary/50 rounded-full" />
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <Card className="overflow-hidden border-2">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-5xl font-bold text-white">KM</span>
                </div>
                <h2 className="text-3xl font-heading font-bold text-secondary mb-2">
                  Kunal P. Mahajan
                </h2>
                <p className="text-primary font-semibold">{t("about.founderTitle")}</p>
              </div>
              
              <div className="space-y-4 text-center text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  {t("about.founderBio")}
                </p>
                <div className="pt-6 flex items-center justify-center gap-4">
                  <div className="h-px w-12 bg-border" />
                  <Award className="h-6 w-6 text-primary" />
                  <div className="h-px w-12 bg-border" />
                </div>
                <p className="text-sm italic">
                  "From one bowl to many - bringing authentic Khandeshi flavors to every corner"
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                  {t("about.mission")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.missionText")}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                  {t("about.vision")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.visionText")}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-heading font-bold text-center text-secondary mb-12">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center justify-between">
                  <Card className="w-[45%] p-6 border-2">
                    <h4 className="font-heading font-bold text-lg mb-2">2024 - Foundation</h4>
                    <p className="text-sm text-muted-foreground">
                      Khichadi Katta was founded with a vision to bring authentic Khandeshi flavors
                    </p>
                  </Card>
                  <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 ring-4 ring-background" />
                  <div className="w-[45%]" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center justify-between">
                  <div className="w-[45%]" />
                  <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 ring-4 ring-background" />
                  <Card className="w-[45%] p-6 border-2">
                    <h4 className="font-heading font-bold text-lg mb-2">First Outlet - Ashok Stambh</h4>
                    <p className="text-sm text-muted-foreground">
                      Our flagship outlet opened, serving authentic khichadi to Nashik
                    </p>
                  </Card>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center justify-between">
                  <Card className="w-[45%] p-6 border-2">
                    <h4 className="font-heading font-bold text-lg mb-2">Expansion Across Nashik</h4>
                    <p className="text-sm text-muted-foreground">
                      3 more outlets opened: CBS, Thakkar Bazar, and Gangapur Road
                    </p>
                  </Card>
                  <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 ring-4 ring-background" />
                  <div className="w-[45%]" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center justify-between">
                  <div className="w-[45%]" />
                  <div className="w-4 h-4 bg-accent rounded-full absolute left-1/2 -translate-x-1/2 ring-4 ring-background" />
                  <Card className="w-[45%] p-6 border-2 border-accent/50">
                    <h4 className="font-heading font-bold text-lg mb-2">Franchise Launch</h4>
                    <p className="text-sm text-muted-foreground">
                      Opening franchise opportunities to spread authentic taste across India
                    </p>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "4", label: "Outlets" },
            { number: "2024", label: "Founded" },
            { number: "70%", label: "Gross Profit" },
            { number: "1000+", label: "Happy Customers" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
