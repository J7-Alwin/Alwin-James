import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PROFILE } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer id="contact" className="relative border-t border-border py-20 md:py-24 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-brand"
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-heading mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter"
        >
          Let&apos;s build something<br className="hidden sm:block" /> reliable together.
        </motion.h2>

        <a
          href={`mailto:${PROFILE.email}`}
          data-testid="footer-email-cta"
          className="group mt-8 inline-flex items-center gap-3 text-xl sm:text-2xl font-heading font-semibold text-brand"
        >
          {PROFILE.email}
          <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          <a href={`mailto:${PROFILE.email}`} data-testid="contact-email" className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-brand/50 transition-colors">
            <Mail className="h-5 w-5 text-brand" />
            <span className="text-sm">Email me</span>
          </a>
          <a href={`tel:${PROFILE.phone}`} data-testid="contact-phone" className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-brand/50 transition-colors">
            <Phone className="h-5 w-5 text-brand" />
            <span className="text-sm">{PROFILE.phone}</span>
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
            <MapPin className="h-5 w-5 text-brand" />
            <span className="text-sm">{PROFILE.location}</span>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind.
          </p>
          <div className="flex items-center gap-4">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" data-testid="footer-github-link" aria-label="GitHub" className="text-muted-foreground hover:text-brand transition-colors">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" data-testid="footer-linkedin-link" aria-label="LinkedIn" className="text-muted-foreground hover:text-brand transition-colors">
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
