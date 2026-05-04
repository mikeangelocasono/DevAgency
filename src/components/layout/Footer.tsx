import { useState } from "react";
import { Twitter, Linkedin, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend newsletter API
    setEmail("");
  };

  return (
    <footer className="bg-foreground text-white py-16 md:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-14">
          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2.5 mb-5 group">
              <img src={logo} alt="DevAgency" className="h-8 w-auto object-contain" />
              <span className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                DevAgency
              </span>
            </a>
            <p className="text-gray-400 mb-8 max-w-sm text-sm leading-relaxed">
              We build high-performance AI agents, automation systems, and custom software that help businesses grow faster.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Github, label: "GitHub" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary text-gray-400 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Team", href: "#team" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "AI Agent Development", href: "#services" },
                { label: "Automation Systems", href: "#services" },
                { label: "Web Development", href: "#services" },
                { label: "System Development", href: "#services" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources / Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-5">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Get the latest insights on AI, automation, and tech delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 flex-1 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
              <Button size="icon" type="submit" className="shrink-0 rounded-xl">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} DevAgency. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
