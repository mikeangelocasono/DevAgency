import { motion } from "framer-motion";
import {
  Download,
  CheckCircle2,
  Sparkles,
  Package,
  Star,
  ArrowRight,
  Zap,
  ShieldCheck,
  Headphones,
  Lock,
} from "lucide-react";
import { fadeUp, staggerContainer, cardVariant, viewportConfig } from "@/lib/animations";

const packages = [
  {
    icon: Sparkles,
    title: "Custom Build",
    subtitle: "Built around your exact workflow",
    description:
      "Best for businesses that need a fully tailored website, AI agent, automation, or internal system with custom logic, branding, and integrations.",
    bullets: [
      "Discovery and scoping",
      "Custom UI/UX and development",
      "AI agents, automations, or business systems",
      "Source code ownership",
      "Optional post-launch support",
    ],
    cta: "Request Custom Quote",
    highlight: true,
  },
  {
    icon: Package,
    title: "Done-for-You",
    subtitle: "Ready-to-launch products",
    description:
      "Best for businesses that want faster setup with pre-built AI agents, automations, booking tools, POS starters, or hosted systems.",
    bullets: [
      "Faster setup",
      "Configured to your branding",
      "Hosted and maintained",
      "Monthly subscription option",
      "Cancel or upgrade anytime",
    ],
    cta: "Get Started",
    highlight: false,
  },
];

const trustBadges = [
  { icon: ShieldCheck, title: "Trusted by startups", subtitle: "& growing businesses" },
  { icon: Zap, title: "Fast delivery", subtitle: "without sacrificing quality" },
  { icon: Headphones, title: "Ongoing support", subtitle: "whenever you need it" },
  { icon: Lock, title: "Secure, scalable", subtitle: "& future-ready solutions" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute top-10 left-6 md:left-14 grid grid-cols-5 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-300" />
        ))}
      </div>
      <div className="absolute bottom-20 right-8 w-3 h-3 rounded-full bg-orange-300 opacity-50 pointer-events-none" />
      <div className="absolute top-1/3 right-12 w-2 h-2 rounded-full bg-orange-400 opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Base Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
            Flexible packages for every{" "}
            <span className="text-orange-500">business stage</span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Choose between fully custom solutions or ready-to-launch products.
            <br className="hidden md:block" />
            Final pricing depends on your project scope, integrations, timeline, and support needs.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          {packages.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={pkg.title}
                variants={cardVariant}
                className="group relative"
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="inline-flex items-center gap-1.5 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md shadow-orange-200">
                      <Star className="w-3 h-3 fill-white text-white" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div
                  className={`h-full rounded-2xl border p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    pkg.highlight
                      ? "border-orange-300 bg-white shadow-md shadow-orange-100 ring-1 ring-orange-200"
                      : "border-gray-200 bg-white shadow-sm"
                  }`}
                >
                  {/* Icon + Titles */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${pkg.highlight ? "bg-orange-50" : "bg-gray-100"}`}>
                      <Icon className={`w-5 h-5 ${pkg.highlight ? "text-orange-500" : "text-gray-500"}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">{pkg.title}</h3>
                      <p className={`text-sm font-medium mt-0.5 ${pkg.highlight ? "text-orange-500" : "text-gray-500"}`}>
                        {pkg.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{pkg.description}</p>

                  <div className="border-t border-gray-100 mb-5" />

                  {/* Bullets */}
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.bullets.map((item, bi) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + bi * 0.06, duration: 0.4 }}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${pkg.highlight ? "text-orange-500" : "text-gray-400"}`} />
                        <span className="text-sm text-gray-700">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    className={`group/btn w-full h-12 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                      pkg.highlight
                        ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Download bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-8"
        >
          <a
            href="/Product-Catalog-2026.pdf"
            download
            className="group flex items-center gap-5 bg-white px-7 py-6 hover:bg-orange-50/50 transition-colors duration-200"
          >
            <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
              <Download className="w-6 h-6 text-orange-500 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
            <div>
              <p className="text-base font-bold text-gray-900 mb-0.5">Download Full Pricing Guide</p>
              <p className="text-sm text-gray-500">
                Includes detailed service pricing, add-ons, bundles, payment terms, and discounts.
              </p>
            </div>
          </a>
          <div className="flex items-center gap-5 bg-white px-7 py-6">
            <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-base font-bold text-gray-900 mb-0.5">Instant access</p>
              <p className="text-sm text-gray-500">No email required</p>
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {trustBadges.map((badge, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                <badge.icon className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 leading-tight">{badge.title}</p>
                <p className="text-xs text-gray-400">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
