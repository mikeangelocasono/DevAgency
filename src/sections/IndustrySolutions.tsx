import { motion } from "framer-motion";
import { Factory, Landmark, Stethoscope, ShoppingBag, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, cardVariant, viewportConfig, cardHover } from "@/lib/animations";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Supply chain optimization, predictive maintenance, and inventory automation.",
  },
  {
    icon: Landmark,
    title: "Finance",
    description: "Risk assessment algorithms, automated reporting, and secure fintech platforms.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Patient data management, telemedicine apps, and AI diagnostics support.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "E-commerce scaling, personalized recommendations, and dynamic pricing.",
  },
];

export default function IndustrySolutions() {
  return (
    <section id="solutions" className="py-16 md:py-20 bg-orange-50/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6"
        >
          <div className="max-w-xl">
            <span className="inline-block text-xs font-bold text-orange-500 uppercase tracking-widest mb-3">
              Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Solutions for <span className="text-orange-500">Every Industry</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              Our technology adapts to your domain. We build specialized
              solutions that address the unique challenges of your sector.
            </p>
          </div>
          <a
            href="#solutions"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 hover:text-orange-600 hover:underline transition-all duration-200 whitespace-nowrap group"
          >
            View all industries
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {industries.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={cardHover}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-orange-100 transition-all duration-300 cursor-pointer p-6 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors duration-300">
                <motion.div whileHover={{ scale: 1.15, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <item.icon className="w-5 h-5 text-orange-500" />
                </motion.div>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.description}</p>
              <div className="mt-4">
                <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
