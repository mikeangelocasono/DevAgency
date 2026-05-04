import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Bot,
  Zap,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { fadeUp, fadeLeft, fadeRight, staggerContainer, cardVariant, viewportConfig } from "@/lib/animations";

const trustItems = [
  { icon: Clock, title: "24h Response", subtitle: "We reply fast, always" },
  { icon: MessageSquare, title: "Free Consultation", subtitle: "No strings attached" },
  { icon: ShieldCheck, title: "No Spam", subtitle: "Your data is safe with us" },
];

const floatingIcons = [
  { Icon: Bot, style: "top-8 right-10 w-10 h-10 bg-white/10", delay: 0 },
  { Icon: Zap, style: "bottom-20 right-6 w-8 h-8 bg-white/10", delay: 0.3 },
  { Icon: Sparkles, style: "top-1/2 right-4 w-7 h-7 bg-white/10", delay: 0.6 },
];

const fieldVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.4, ease: "easeOut" as const },
  }),
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.firstName.trim()) errors.firstName = "First name is required.";
  if (!data.lastName.trim()) errors.lastName = "Last name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.details.trim()) errors.details = "Please describe your project.";
  return errors;
}

function Field({
  id,
  label,
  error,
  custom,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  custom: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      custom={custom}
      variants={fieldVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-1.5"
    >
      <label htmlFor={id} className="text-xs font-semibold text-gray-600 block">
        {label}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-500" role="alert">
          <AlertCircle className="w-3 h-3 shrink-0" />
          {error}
        </p>
      )}
    </motion.div>
  );
}

const baseCls =
  "w-full px-4 py-2.5 text-sm rounded-xl bg-gray-50 border transition-all duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-300/50 focus:border-orange-400 hover:border-gray-300";

const errorCls = "border-red-300 bg-red-50 focus:ring-red-300/40 focus:border-red-400";
const okCls = "border-gray-200";

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    service: "AI Agent Development",
    details: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-8 md:py-12 bg-gray-50/60">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 grid lg:grid-cols-[5fr_6fr]">

          {/* ── Left: Orange Panel ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 p-5 md:p-6 flex flex-col justify-between"
          >
            {/* Dot grid */}
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
            {/* Glow orbs */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-10 w-60 h-60 bg-amber-300/25 rounded-full blur-3xl pointer-events-none" />

            {/* Floating icons */}
            {floatingIcons.map(({ Icon, style, delay }, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3 + i, delay, ease: "easeInOut" }}
                className={`absolute ${style} rounded-xl flex items-center justify-center backdrop-blur-sm pointer-events-none`}
              >
                <Icon className="w-4 h-4 text-white/80" />
              </motion.div>
            ))}

            {/* Content */}
            <div className="relative z-10">
              <span className="inline-block text-[11px] font-bold tracking-widest text-white/70 uppercase mb-4">
                Get in Touch
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                Let's build something
                <br />
                amazing together.
              </h2>
              <p className="text-white/80 text-sm leading-relaxed mb-4 max-w-xs">
                Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
              </p>

              <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="flex flex-col gap-2.5">
                {trustItems.map(({ icon: Icon, title, subtitle }, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariant}
                    className="flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center shrink-0 backdrop-blur-sm">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{title}</div>
                      <div className="text-white/60 text-xs">{subtitle}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="relative z-10 mt-8">
              <p className="text-white/50 text-xs">Free consultation · No commitment required</p>
            </div>
          </motion.div>

          {/* ── Right: Form Panel ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="bg-white p-5 md:p-6"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-4 py-10"
              >
                <div className="w-14 h-14 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Message Sent!</h3>
                <p className="text-sm text-gray-500 max-w-xs">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", service: "AI Agent Development", details: "" }); }}
                  className="mt-2 text-sm text-orange-500 hover:underline font-medium"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <div className="mb-3">
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">Send an Inquiry</h3>
                  <p className="text-xs text-gray-400">We reply within 24 hours — no spam, ever.</p>
                </div>

                <form className="space-y-2" onSubmit={handleSubmit} noValidate>
                  <motion.div
                    custom={0}
                    variants={fieldVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="grid grid-cols-2 gap-3"
                  >
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="text-xs font-semibold text-gray-600 block">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        value={form.firstName}
                        onChange={set("firstName")}
                        className={`${baseCls} ${errors.firstName ? errorCls : okCls}`}
                        placeholder="John"
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? "firstName-error" : undefined}
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className="flex items-center gap-1 text-xs text-red-500" role="alert">
                          <AlertCircle className="w-3 h-3 shrink-0" />{errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="text-xs font-semibold text-gray-600 block">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        value={form.lastName}
                        onChange={set("lastName")}
                        className={`${baseCls} ${errors.lastName ? errorCls : okCls}`}
                        placeholder="Doe"
                        aria-invalid={!!errors.lastName}
                        aria-describedby={errors.lastName ? "lastName-error" : undefined}
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className="flex items-center gap-1 text-xs text-red-500" role="alert">
                          <AlertCircle className="w-3 h-3 shrink-0" />{errors.lastName}
                        </p>
                      )}
                    </div>
                  </motion.div>

                  <Field id="email" label="Work Email" error={errors.email} custom={1}>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      className={`${baseCls} ${errors.email ? errorCls : okCls}`}
                      placeholder="john@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                  </Field>

                  <Field id="service" label="Service Needed" custom={2}>
                    <select
                      id="service"
                      value={form.service}
                      onChange={set("service")}
                      className={`${baseCls} ${okCls}`}
                    >
                      <option>AI Agent Development</option>
                      <option>Automation Systems</option>
                      <option>Custom Web Development</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </Field>

                  <Field id="details" label="Project Details" error={errors.details} custom={3}>
                    <textarea
                      id="details"
                      rows={2}
                      value={form.details}
                      onChange={set("details")}
                      className={`${baseCls} resize-none min-h-[52px] ${errors.details ? errorCls : okCls}`}
                      placeholder="Tell us about your goals..."
                      aria-invalid={!!errors.details}
                      aria-describedby={errors.details ? "details-error" : undefined}
                    />
                  </Field>

                  <motion.div
                    custom={4}
                    variants={fieldVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                  >
                    <button
                      type="submit"
                      className="group w-full h-11 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-md shadow-orange-200 hover:shadow-lg hover:shadow-orange-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                    >
                      Send Inquiry
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <p className="text-center text-xs text-gray-400 mt-2.5">
                      We reply within 24 hours · Free consultation · No spam
                    </p>
                  </motion.div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
