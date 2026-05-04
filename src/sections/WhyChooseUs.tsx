import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeLeft, fadeRight, staggerContainer, cardVariant, viewportConfig } from "@/lib/animations";

export default function WhyChooseUs() {
  const points = [
    { title: "AI-Powered Solutions", desc: "We integrate state-of-the-art LLMs into your existing workflows." },
    { title: "End-to-End Support", desc: "From concept and design to deployment and scaling." },
    { title: "Scalable & Secure", desc: "Enterprise-grade architecture that grows with you." },
    { title: "Fast & Reliable", desc: "Agile sprints ensuring you go to market quickly." },
  ];

  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-primary">DevAgency?</span>
            </h2>
            <p className="text-sm text-gray-400 mb-8 max-w-lg leading-relaxed">
              We don't just act as contractors. We partner with you as technical co-founders, bringing deep expertise in modern AI and software architecture to your business.
            </p>

            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportConfig} className="space-y-6">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  variants={cardVariant}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-0.5">{point.title}</h4>
                    <p className="text-gray-400 text-sm">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Code Card */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-400 rounded-2xl blur opacity-30" />
            <div className="relative bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 border-b border-white/10 bg-black/40">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-xs text-gray-400 font-mono">agent.config.ts</div>
              </div>
              <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto">
                <pre>
                  <span className="text-purple-400">import</span> {`{ Agent, Workflow }`} <span className="text-purple-400">from</span> <span className="text-green-400">'@devagency/ai'</span>;<br/><br/>
                  <span className="text-blue-400">const</span> automation <span className="text-purple-400">=</span> <span className="text-blue-400">new</span> <span className="text-yellow-300">Workflow</span>({`{`}<br/>
                  {`  `}name: <span className="text-green-400">'CustomerSupport'</span>,<br/>
                  {`  `}engine: <span className="text-green-400">'gpt-4-turbo'</span>,<br/>
                  {`  `}memory: <span className="text-orange-400">true</span>,<br/>
                  {`  `}tools: [<br/>
                  {`    `}<span className="text-green-400">'crm-lookup'</span>,<br/>
                  {`    `}<span className="text-green-400">'ticket-creator'</span>,<br/>
                  {`    `}<span className="text-green-400">'sentiment-analysis'</span><br/>
                  {'  ] },'}<br/>
                  {`  `}onSuccess: <span className="text-blue-400">async</span> (result) <span className="text-purple-400">=&gt;</span> {`{`}<br/>
                  {`    `}<span className="text-yellow-300">console</span>.<span className="text-blue-300">log</span>(<span className="text-green-400">"Issue resolved instantly."</span>);<br/>
                  {`    `}<span className="text-blue-400">await</span> result.<span className="text-blue-300">notifyUser</span>();<br/>
                  {`  }`}<br/>
                  {`}`});<br/><br/>
                  automation.<span className="text-blue-300">deploy</span>();
                </pre>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
