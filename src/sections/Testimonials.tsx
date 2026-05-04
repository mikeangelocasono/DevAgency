import { motion } from "framer-motion";
import { Star, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, cardVariant, viewportConfig, cardHover } from "@/lib/animations";

const testimonials = [
  {
    name: "Mark Dela Cruz",
    role: "Founder",
    company: "MetroFin Solutions",
    location: "Makati City",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    quote:
      "Before working with DevAgency, our financial reports were manually generated and took hours to complete. Now everything is real-time and automated. It really helped us make faster and better decisions for our business.",
  },
  {
    name: "Angela Santos",
    role: "Owner",
    company: "LuxeWear PH",
    location: "Quezon City",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 5,
    quote:
      "Our online store performance improved a lot after launching the new platform. The design is clean, fast, and our customers love the experience. We also noticed a big increase in conversions within the first month.",
  },
  {
    name: "Carlo Reyes",
    role: "Operations Manager",
    company: "NextGen BPO Solutions",
    location: "Cebu City",
    avatar: "https://i.pravatar.cc/100?img=53",
    rating: 5,
    quote:
      "The AI system they built saved our team hundreds of hours every month. Tasks that used to be repetitive are now fully automated. Very efficient and scalable solution for our operations.",
  },
  {
    name: "Maria Lopez",
    role: "School Administrator",
    company: "BrightFuture Academy",
    location: "Davao City",
    avatar: "https://i.pravatar.cc/100?img=45",
    rating: 5,
    quote:
      "Managing student records and schedules became much easier with the system they developed. Everything is organized and accessible in one place. Our staff and teachers are very satisfied.",
  },
];

const trustedLogos = ["Stripe", "AWS", "Notion", "monday.com", "HubSpot", "Databricks"];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-orange-50/40 relative overflow-hidden">
      {/* Decorative large quote marks */}
      <span className="absolute top-10 left-6 md:left-14 text-[120px] leading-none font-serif text-orange-100 select-none pointer-events-none">
        "
      </span>
      {/* Dot grid decoration */}
      <div className="absolute top-8 right-8 md:right-16 grid grid-cols-5 gap-1.5 opacity-30 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-300" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">
            <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
            Client Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
            What our <span className="text-orange-500">clients</span> say
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            Real feedback from the founders, CTOs, and teams we've worked with.
          </p>
          <div className="mt-4 mx-auto w-12 h-1 rounded-full bg-orange-400" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={cardHover}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              {/* Stars + quote icon row */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <span className="text-4xl leading-none font-serif text-orange-100 select-none -mt-1">
                  "
                </span>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-700 leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-orange-100"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900 leading-tight">{t.name}</p>
                  <p className="text-xs text-orange-500 font-medium">{t.role}, {t.company}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted by logos bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="bg-white border border-gray-100 rounded-2xl px-6 md:px-10 py-5 mb-6 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <div className="flex items-center gap-2 shrink-0 text-sm font-semibold text-gray-600 whitespace-nowrap">
              <ShieldCheck className="w-4 h-4 text-orange-500" />
              Trusted by 50+ businesses worldwide
            </div>
            <div className="hidden sm:block w-px h-5 bg-gray-200 shrink-0" />
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-6 md:gap-10">
              {trustedLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-sm font-bold text-gray-300 hover:text-gray-400 transition-colors duration-300 cursor-default select-none tracking-tight"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white border border-gray-100 rounded-2xl px-7 py-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-base font-semibold text-gray-900">Ready to start your project?</p>
              <p className="text-sm text-gray-500">Let's build something great together.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 bg-orange-500 text-white text-sm font-semibold px-6 py-2.5 rounded-xl shadow-sm hover:bg-orange-600 hover:shadow-md transition-all duration-200 group"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
