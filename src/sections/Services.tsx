import { motion } from "framer-motion";
import { Bot, Cpu, Code2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { fadeUp, staggerContainer, cardVariant, viewportConfig, cardHover } from "@/lib/animations";

export default function Services() {
  const services = [
    {
      icon: Bot,
      title: "AI Agents Development",
      description: "Custom AI agents tailored to your business logic. Automate customer support, data analysis, and complex workflows with intelligent conversational interfaces.",
    },
    {
      icon: Cpu,
      title: "Automation Systems",
      description: "End-to-end process automation. We connect your disconnected tools and build smart pipelines that save thousands of hours of manual labor.",
    },
    {
      icon: Code2,
      title: "Custom Development",
      description: "Scalable web applications and robust enterprise software built with modern tech stacks. Fast, secure, and designed for user experience.",
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs mb-4">
            Our Expertise
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Services that drive <span className="text-primary">growth</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We don't just write code. We solve complex business problems using the latest advancements in AI and software engineering.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={cardHover}
            >
              <Card className="h-full bg-white border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                      <service.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                  </div>
                  <h3 className="text-base font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <a href="#contact" className="inline-flex items-center text-sm text-primary font-semibold hover:text-primary/80 transition-colors group/link">
                    Get a Quote
                    <ArrowRight className="ml-1 w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-gray-100 rounded-2xl px-8 py-5 shadow-sm"
        >
          <div>
            <p className="font-semibold text-foreground text-sm">Not sure which service fits your needs?</p>
            <p className="text-xs text-muted-foreground mt-0.5">Book a free 30-min consultation and we'll figure it out together.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 h-10 rounded-full hover:bg-primary/90 transition-colors"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
