import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Mail, Cpu, Code2, Database, Paintbrush, ServerCog, Users, Target, Rocket, ShieldCheck, ExternalLink } from "lucide-react";
import { fadeUp, staggerContainer, cardVariant, viewportConfig } from "@/lib/animations";

const imgJustene = "/Selgas.jpg";
import imgMike from "@/assets/team-mike.png";
const imgJohn = "/Vince.png";
const imgKenneth = "/kenneth-bontia.jpg";

const team: Array<{
  name: string;
  role: string;
  badge: string;
  BadgeIcon: React.ComponentType<{ className?: string }>;
  bio: string;
  image: string;
  objectPosition: string;
  translateY?: string;
  portfolio: string;
}> = [
  {
    name: "Justene Selgas",
    role: "Claude Expert",
    badge: "AI Expert",
    BadgeIcon: Cpu,
    bio: "Specializes in designing and deploying Claude-powered AI systems for real-world business automation.",
    image: imgJustene,
    objectPosition: "object-top",
    portfolio: "https://justene-portfolio.vercel.app/",
  },
  {
    name: "Mike Angelo Casono",
    role: "Full-Stack Developer",
    badge: "Full-Stack",
    BadgeIcon: Code2,
    bio: "Builds end-to-end web applications with modern React, Node.js, and cloud-native infrastructure.",
    image: imgMike,
    objectPosition: "object-top",
    portfolio: "https://mikedev-web.vercel.app/",
  },
  {
    name: "John Vincent Buladaco",
    role: "Backend Developer",
    badge: "Backend",
    BadgeIcon: Database,
    bio: "Architects scalable APIs, complex database systems, and high-performance backend services.",
    image: imgJohn,
    objectPosition: "object-top",
    portfolio: "https://vince-portfolio-sable.vercel.app/",
  },
  {
    name: "Kenneth Bontia",
    role: "UI/UX Designer",
    badge: "UI / UX",
    BadgeIcon: Paintbrush,
    bio: "Crafts pixel-perfect, user-centered interfaces that balance aesthetics with conversion.",
    image: imgKenneth,
    objectPosition: "object-[center_15%]",
    portfolio: "https://personal-portfolio-production-cfc8.up.railway.app/",
  },
  {
    name: "Kevin Caidic",
    role: "DevOps / Cloud Engineer",
    badge: "DevOps",
    BadgeIcon: ServerCog,
    bio: "Ensures reliable deployment, scalability, and performance of systems using modern cloud infrastructure and DevOps practices.",
    image: "/kevin-caidic.png",
    objectPosition: "object-top",
    portfolio: "https://portfolio-seven-xi-kgbos3lf4u.vercel.app/",
  },
];

const values = [
  { icon: Users, title: "Young & Passionate", subtitle: "Driven by creativity and innovation." },
  { icon: Target, title: "Client Focused", subtitle: "We build solutions that create impact." },
  { icon: Rocket, title: "Always Learning", subtitle: "We stay ahead with the latest technologies." },
  { icon: ShieldCheck, title: "Quality First", subtitle: "Clean code, scalable solutions, always." },
];

function TeamCard({ member, i }: { member: typeof team[0]; i: number }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    if (member.portfolio) {
      window.open(member.portfolio, "_blank", "noopener,noreferrer");
    }
  };

  const handleMouseEnter = () => {
    if (!member.portfolio) setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <motion.div
      variants={cardVariant}
      className="relative h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        onClick={handleClick}
        whileHover={member.portfolio ? { y: -5, scale: 1.01 } : {}}
        whileTap={member.portfolio ? { scale: 0.97 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`group relative bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:border-orange-200 transition-all duration-300 flex flex-col h-full overflow-hidden ${member.portfolio ? "cursor-pointer hover:shadow-2xl" : "cursor-default hover:shadow-xl"}`}
      >
        {/* Orange bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* External link indicator */}
        {member.portfolio && (
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-6 h-6 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center">
              <ExternalLink className="w-3 h-3 text-orange-500" />
            </div>
          </div>
        )}
        {member.portfolio && (
          <div className="absolute bottom-3 right-3 text-[11px] font-medium text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            View Portfolio
          </div>
        )}

        {/* Role badge — centered */}
        <div className="inline-flex items-center gap-1.5 mx-auto mb-5 bg-orange-50 border border-orange-100 text-orange-500 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          <member.BadgeIcon className="w-3 h-3" />
          {member.badge}
        </div>

        {/* Avatar with gradient ring */}
        <div className="relative w-24 h-24 mx-auto mb-4">
          {/* Gradient ring */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-orange-400 via-orange-300 to-amber-200 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 rounded-full bg-white" />
          <img
            src={member.image}
            alt={member.name}
            className={`relative w-24 h-24 rounded-full object-cover ${member.objectPosition} ${member.translateY ?? ""} border-2 border-white shadow-sm group-hover:scale-105 transition-transform duration-300`}
          />
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-orange-400 border-2 border-white"
          />
        </div>

        {/* Info */}
        <h3 className="text-[15px] font-bold text-gray-900 mb-0.5 leading-snug">{member.name}</h3>
        <div className="mb-1">
          <span className="text-sm font-semibold text-orange-500">{member.role}</span>
          <div className="mx-auto mt-1 w-8 h-px bg-orange-300 rounded-full" />
        </div>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1 line-clamp-3">{member.bio}</p>

        {/* Social icons — pinned to bottom */}
        <div className="mt-auto flex items-center justify-center gap-2">
          {[
            { Icon: Linkedin, label: "LinkedIn" },
            { Icon: Github, label: "GitHub" },
            { Icon: Mail, label: "Email" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-full bg-gray-50 hover:bg-orange-100 hover:text-orange-500 text-gray-400 flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-default"
            >
              <Icon className="w-3.5 h-3.5" />
            </button>
          ))}
        </div>
      </motion.div>

      {/* "Coming soon" tooltip for John Vincent */}
      <AnimatePresence>
        {showTooltip && !member.portfolio && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg pointer-events-none"
          >
            Portfolio coming soon
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-20 bg-gradient-to-b from-white to-orange-50/30 relative overflow-hidden">
      {/* Dot grid top-left */}
      <div className="absolute top-10 left-6 md:left-14 grid grid-cols-5 gap-1.5 opacity-25 pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-300" />
        ))}
      </div>
      {/* Arc decoration top-right */}
      <div className="absolute top-16 right-8 md:right-16 pointer-events-none opacity-30">
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <path d="M10 70 Q60 10 110 40" stroke="#f97316" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
          <circle cx="110" cy="40" r="5" fill="#f97316" />
        </svg>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10"
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-500 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            <Users className="w-3.5 h-3.5" />
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Meet the young developers
            <br />
            behind <span className="text-orange-500">DevAgency</span>
          </h2>
          <div className="mx-auto w-10 h-0.5 rounded-full bg-orange-400 mb-4" />
          <p className="text-base text-gray-500 leading-relaxed">
            A team of passionate developers building smart AI and automation
            solutions that move businesses forward.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8 items-stretch"
        >
          {team.map((member, i) => (
            <TeamCard key={i} member={member} i={i} />
          ))}
        </motion.div>

        {/* Values bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
        >
          {values.map((val, i) => (
            <div
              key={i}
              className="bg-white px-6 py-5 flex items-start gap-4 hover:bg-orange-50/50 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                <val.icon className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-0.5">{val.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{val.subtitle}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
