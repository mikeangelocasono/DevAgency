import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { slideDown } from "@/lib/animations";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home", sectionId: "home" },
  { name: "Services", href: "#services", sectionId: "services" },
  { name: "Solutions", href: "#solutions", sectionId: "solutions" },
  { name: "Projects", href: "#projects", sectionId: "projects" },
  { name: "Team", href: "#team", sectionId: "team" },
  { name: "Contact", href: "#contact", sectionId: "contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getActiveSection = () => {
      const offset = 120; // below navbar + breathing room
      const scrollPos = window.scrollY + offset;
      let current = navLinks[0].sectionId;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].sectionId);
        if (el && el.offsetTop <= scrollPos) {
          current = navLinks[i].sectionId;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", getActiveSection, { passive: true });
    getActiveSection(); // initial check
    return () => window.removeEventListener("scroll", getActiveSection);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      setActiveSection(id);
      const el = document.getElementById(id);
      if (el) {
        const navbarHeight = 64;
        const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    },
    []
  );

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideDown}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200/80 shadow-sm"
          : "bg-white border-b border-gray-100"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <img src={logo} alt="DevAgency" className="h-7 w-auto object-contain" />
            <span className="text-[15px] font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
              DevAgency
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={cn(
                        "relative px-3.5 py-2 text-sm rounded-lg transition-colors duration-200 select-none",
                        isActive
                          ? "text-primary font-semibold"
                          : "text-gray-500 font-medium hover:text-gray-900"
                      )}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="navbar-underline"
                          className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-primary rounded-full"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <Button className="group rounded-full px-5 h-9 text-sm font-semibold shadow-sm hover:shadow-primary/25 transition-all duration-200 shrink-0">
              Start a Project
              <ChevronRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
          >
            <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "text-sm px-3 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between",
                      isActive
                        ? "text-primary font-semibold bg-primary/5"
                        : "text-gray-600 font-medium hover:bg-gray-50 hover:text-gray-900"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    )}
                  </a>
                );
              })}
              <Button className="w-full mt-2 rounded-xl h-10 text-sm font-semibold">
                Start a Project
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
