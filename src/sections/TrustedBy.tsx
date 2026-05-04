import { motion } from "framer-motion";
import { fadeUp, viewportConfig } from "@/lib/animations";

const logos = [
  "Lenovo", "Cisco", "HSBC", "Microsoft", "Oracle",
  "Intel", "Google", "AWS", "Slack", "Airbnb",
];

export default function TrustedBy() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-10 md:py-14 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-orange-400" />
            <span className="text-[11px] font-semibold tracking-widest uppercase text-orange-500">
              Trusted by forward-thinking companies
            </span>
            <span className="h-px w-6 bg-orange-400" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted by forward-thinking teams
          </h2>
          <p className="text-sm text-gray-400">
            Built for startups, businesses, and teams that want smarter automation.
          </p>
        </motion.div>
      </div>

      <div className="relative overflow-hidden border-y border-gray-100 py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div
          className="flex whitespace-nowrap gap-12 carousel-track"
          style={{ width: "max-content" }}
        >
          {doubled.map((name, i) => (
            <span
              key={i}
              className="inline-flex items-center text-lg md:text-xl font-bold text-gray-300 hover:text-orange-400 transition-colors duration-300 cursor-default select-none tracking-tight px-4"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
