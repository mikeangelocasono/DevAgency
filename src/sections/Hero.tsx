import { motion } from "framer-motion";
import { ArrowRight, Play, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeLeft, fadeRight, staggerContainer, buttonHover } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-14 md:pt-44 md:pb-20 overflow-hidden min-h-screen flex items-center">
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-orange-400/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeLeft} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-xs mb-5 border border-primary/20">
              <Zap className="w-3.5 h-3.5" />
              <span>AI · Automation · Custom Software</span>
            </motion.div>
            
            <motion.h1 variants={fadeLeft} className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-foreground leading-[1.1] mb-5">
              We Build Software That <span className="text-primary relative inline-block">
                Works for You
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00035 6.99999C43.3337 2.66666 126.8 -3.40001 198 6.99999" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
              </span>
            </motion.h1>
            
            <motion.p variants={fadeLeft} className="text-base text-muted-foreground mb-7 leading-relaxed max-w-lg">
              From AI agents to full-stack web apps — we help startups and businesses ship faster, automate smarter, and scale with confidence.
            </motion.p>
            
            <motion.div variants={fadeLeft} className="flex flex-col sm:flex-row gap-3">
              <motion.div whileHover={buttonHover}>
                <Button size="lg" className="rounded-full text-sm h-11 px-7 group shadow-md hover:shadow-primary/25 transition-shadow duration-300">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={buttonHover}>
                <Button size="lg" variant="outline" className="rounded-full text-sm h-11 px-7 group bg-white hover:bg-gray-50 border-gray-200">
                  <Play className="mr-2 w-4 h-4 text-primary" />
                  See How It Works
                </Button>
              </motion.div>
            </motion.div>

            <motion.p variants={fadeLeft} className="mt-4 text-xs text-muted-foreground">
              Free consultation &mdash; no commitment required.
            </motion.p>
            
            <motion.div variants={fadeLeft} className="mt-8 flex items-center gap-4 text-sm text-muted-foreground font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div>
                <span className="text-foreground font-bold">500+</span> companies trust us
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative lg:ml-auto w-full flex justify-center lg:justify-end"
          >
            {/* Soft glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-3/4 h-3/4 bg-orange-200/30 rounded-full blur-3xl" />
            </div>

            {/* Video container */}
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }} className="relative w-full max-w-lg mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                <video
                  src="/avatar-illustration.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
