import { motion } from "framer-motion";
import { Search, Lightbulb, Code2, Rocket, Users, CalendarDays, ShieldCheck, Headphones, Star, Target } from "lucide-react";
import { fadeUp, staggerContainer, cardVariant, viewportConfig, cardHover } from "@/lib/animations";

const steps = [
  {
    icon: Search,
    focusIcon: Users,
    step: "01",
    title: "Discover",
    description:
      "We start by deeply understanding your business, goals, and pain points through structured discovery sessions.",
    focus: "Clarity",
  },
  {
    icon: Lightbulb,
    focusIcon: CalendarDays,
    step: "02",
    title: "Plan",
    description:
      "We map out the solution architecture, define the tech stack, and create a clear roadmap with milestones.",
    focus: "Strategy",
  },
  {
    icon: Code2,
    focusIcon: ShieldCheck,
    step: "03",
    title: "Build",
    description:
      "Our team develops, tests, and iterates in agile sprints — keeping you in the loop at every stage.",
    focus: "Quality",
  },
  {
    icon: Rocket,
    focusIcon: Headphones,
    step: "04",
    title: "Deliver",
    description:
      "We launch your product, provide thorough handoff documentation, and offer ongoing support as you scale.",
    focus: "Success",
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-orange-50/40 to-white relative overflow-hidden">
      {/* Dot grid top-left */}
      <div className="absolute top-10 left-6 md:left-14 grid grid-cols-5 gap-1.5 opacity-25 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-300" />
        ))}
      </div>
      {/* Arc decoration top-right */}
      <div className="absolute top-10 right-8 md:right-16 pointer-events-none opacity-30">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <path d="M10 70 Q60 10 110 40" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <circle cx="110" cy="40" r="5" fill="#f97316" />
        </svg>
      </div>
      {/* Dot grid bottom-right */}
      <div className="absolute bottom-20 right-6 md:right-14 grid grid-cols-5 gap-1.5 opacity-20 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
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
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            How we <span className="text-orange-500">work</span>
          </h2>
          <div className="mx-auto w-10 h-0.5 rounded-full bg-orange-400 mb-4" />
          <p className="text-base text-gray-500 leading-relaxed">
            A clear, repeatable process that keeps projects on time, on budget,
            and aligned with your goals.
          </p>
        </motion.div>

        {/* Cards + connector */}
        <div className="relative">
          {/* Dashed connector line (desktop only) */}
          <div className="hidden lg:block absolute top-[88px] left-[13%] right-[13%] z-0 pointer-events-none">
            <div className="relative w-full h-px">
              <div className="absolute inset-0 border-t-2 border-dashed border-orange-200" />
              {/* Animated travelling dot */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-400 border-2 border-white shadow-sm"
                animate={{ left: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                className="relative z-10"
              >
                {/* Connector dot between cards (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[80px] -right-3 z-20">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                      className="w-3 h-3 rounded-full bg-orange-400 border-2 border-white shadow"
                    />
                  </div>
                )}

                <motion.div
                  whileHover={cardHover}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-full flex flex-col text-center cursor-default"
                >
                  {/* Step badge */}
                  <div className="flex justify-center mb-4">
                    <span className="text-sm font-extrabold text-orange-500 bg-orange-50 border border-orange-100 w-10 h-10 rounded-full flex items-center justify-center tracking-tight">
                      {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-5">
                    <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-300">
                      <motion.div whileHover={{ scale: 1.15, rotate: 5 }} transition={{ duration: 0.2 }}>
                        <step.icon className="w-7 h-7 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                  <div className="mx-auto w-8 h-0.5 rounded-full bg-orange-400 mb-3" />

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
                    {step.description}
                  </p>

                  {/* Focus label */}
                  <div className="mt-auto flex items-center justify-center gap-1.5 text-xs font-semibold text-gray-600">
                    <step.focusIcon className="w-3.5 h-3.5 text-orange-400" />
                    <span>
                      <span className="text-orange-500">Focus:</span> {step.focus}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-10 relative flex flex-col sm:flex-row items-center justify-between gap-6 bg-orange-50 border border-orange-100 rounded-2xl px-7 py-6 overflow-hidden"
        >
          {/* Decorative chart line */}
          <div className="absolute bottom-0 right-24 opacity-20 pointer-events-none">
            <svg width="200" height="60" viewBox="0 0 200 60" fill="none">
              <path d="M0 50 Q40 40 60 50 T120 20 T180 10" stroke="#f97316" strokeWidth="2" fill="none" />
              <circle cx="60" cy="50" r="4" fill="#f97316" />
              <circle cx="120" cy="20" r="4" fill="#f97316" />
              <circle cx="180" cy="10" r="4" fill="#f97316" />
            </svg>
          </div>
          {/* Target icon */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
            <Target className="w-14 h-14 text-orange-500" />
          </div>

          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-orange-500 flex items-center justify-center shrink-0 shadow-sm">
              <Star className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <p className="text-base font-bold text-gray-900">Your success is our process.</p>
              <p className="text-sm text-gray-500">
                We follow a proven approach to deliver high-quality solutions that drive real results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
