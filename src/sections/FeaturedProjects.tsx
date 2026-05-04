import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { fadeUp, staggerContainer, cardVariant, viewportConfig, cardHover } from "@/lib/animations";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";

const projects = [
  {
    title: "FinTech Analytics Dashboard",
    description:
      "Real-time data visualization platform handling millions of daily transactions.",
    tag: "Custom Dev",
    tagColor: "bg-blue-50 text-blue-600",
    image: project1,
  },
  {
    title: "Luxe E-commerce Platform",
    description:
      "High-performance headless commerce storefront with AI product recommendations.",
    tag: "Web App",
    tagColor: "bg-purple-50 text-purple-600",
    image: project2,
  },
  {
    title: "Agentic Orchestrator",
    description:
      "Internal tool for managing autonomous AI agents across different departments.",
    tag: "AI Systems",
    tagColor: "bg-orange-50 text-orange-500",
    image: project3,
  },
  {
    title: "EduManage Portal",
    description:
      "Comprehensive school management system with automated grading and scheduling.",
    tag: "SaaS Platform",
    tagColor: "bg-green-50 text-green-600",
    image: project4,
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        >
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-500 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
              <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
              Our Work
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
              Featured <span className="text-orange-500">Projects</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              We've shipped scalable products for startups and enterprises alike.
              <br className="hidden md:block" />
              Here are a few of our recent favorites.
            </p>
          </div>
          <a
            href="#projects"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:border-orange-300 hover:text-orange-500 transition-all duration-200 group"
          >
            View All Projects
            <ExternalLink className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={cardHover}
              className="group flex bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative w-[45%] shrink-0 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-900 flex items-center gap-1.5 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    View Project <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-5 flex-1 min-w-0">
                <div>
                  <span
                    className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 ${project.tagColor}`}
                  >
                    {project.tag}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 group-hover:gap-2.5 transition-all duration-200">
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
