import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Clock,
  ShieldCheck,
  Headphones,
  Clock3,
  ShoppingBag,
  Code2,
  HeadphonesIcon,
  DollarSign,
  Users,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { fadeUp, fadeLeft, staggerContainer, cardVariant, viewportConfig } from "@/lib/animations";

const faqs = [
  {
    icon: Clock3,
    q: "How long does a typical project take?",
    a: "Project timelines depend on the scope and complexity. Small projects typically take 2–4 weeks, while larger solutions can take 2–6 months. We always provide a clear timeline after understanding your requirements.",
  },
  {
    icon: ShoppingBag,
    q: "Do you offer AI and automation solutions?",
    a: "Yes — AI agent development and automation systems are our core services. We build custom LLM-powered workflows, chatbots, data pipelines, and process automation tailored to your business needs.",
  },
  {
    icon: Code2,
    q: "What technologies do you use?",
    a: "We work with React, Next.js, Node.js, Python, PostgreSQL, and integrate with leading AI models (Claude, GPT-4, Gemini). Our stack is always chosen to match the project requirements.",
  },
  {
    icon: HeadphonesIcon,
    q: "Do you provide post-launch support?",
    a: "Absolutely. We offer ongoing maintenance, bug fixes, and feature iterations after launch. Many of our clients work with us on a retainer basis for continuous improvement.",
  },
  {
    icon: DollarSign,
    q: "How much does it cost to work with you?",
    a: "Pricing depends on scope and complexity. We offer project-based and retainer models. Book a free consultation and we'll provide a transparent estimate — no hidden fees.",
  },
  {
    icon: Users,
    q: "Can you work with our existing team or codebase?",
    a: "Yes. We're experienced at integrating into existing teams and codebases. Whether you need us to take ownership of a project or augment your team, we adapt to your workflow.",
  },
];

const trustPoints = [
  {
    icon: Clock,
    title: "Fast Response",
    subtitle: "We reply within 24 hours",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Clients",
    subtitle: "100+ successful projects",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    subtitle: "Our team is here to help",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-start">
          {/* Left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:sticky lg:top-28"
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
              <MessageCircle className="w-3.5 h-3.5" />
              FAQ
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4 leading-tight">
              Common questions,{" "}
              <span className="text-orange-500">answered.</span>
            </h2>

            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Can't find what you're looking for?
              <br />
              Reach out directly — we're happy to help.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-orange-500 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-orange-600 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Ask us anything
            </a>

            <div className="mt-10 space-y-5">
              {trustPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                    <point.icon className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{point.title}</p>
                    <p className="text-xs text-gray-500">{point.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Custom Accordion */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-3"
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  variants={cardVariant}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={`w-full text-left rounded-xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-l-4 border-l-orange-500 border-t-gray-200 border-r-gray-200 border-b-gray-200 bg-white shadow-sm"
                        : "border-gray-200 bg-white hover:shadow-sm hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4 px-5 py-4 md:py-5">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? "bg-orange-100" : "bg-gray-100"}`}>
                          <faq.icon className={`w-4 h-4 transition-colors duration-300 ${isOpen ? "text-orange-500" : "text-gray-500"}`} />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 leading-snug">
                          {faq.q}
                        </span>
                      </div>
                      <div className="shrink-0 text-gray-400">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-orange-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Still have questions bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gray-50 border border-gray-100 rounded-2xl px-7 py-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center shrink-0 shadow-sm">
              <HelpCircle className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <p className="text-base font-semibold text-gray-900">Still have questions?</p>
              <p className="text-sm text-gray-500">
                If you couldn't find the answer you're looking for, feel free to contact us.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-800 hover:border-orange-400 hover:text-orange-500 transition-all duration-200 group shadow-sm"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
