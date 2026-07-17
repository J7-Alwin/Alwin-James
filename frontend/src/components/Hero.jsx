import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { HeroGlow } from "@/components/HeroGlow";
import { PROFILE, EXPERIENCE, PROJECTS, CERTIFICATES } from "@/data/portfolio";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  const STATS = [
    { value: String(EXPERIENCE.length), label: "Internships" },
    { value: String(PROJECTS.length), label: "Projects" },
    { value: String(CERTIFICATES.length), label: "Certifications" },
  ];

  return (
    <section id="top" className="relative min-h-[88vh] lg:min-h-screen flex items-center overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16">
      <div className="absolute inset-0 grid-bg opacity-[0.4] pointer-events-none" />
      <HeroGlow />

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
          <motion.div variants={item} className="flex items-center gap-3 font-mono text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-brand">
            <span className="h-px w-8 bg-brand" />
            Software Engineer
          </motion.div>

          <motion.h1 variants={item} className="font-heading mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tighter">
            {PROFILE.name}
          </motion.h1>

          <motion.p variants={item} className="font-heading mt-4 text-2xl sm:text-3xl font-semibold text-brand">
            Backend & Full-Stack Developer
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            {PROFILE.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects">
              <Button data-testid="hero-view-work-btn" size="lg" className="rounded-full bg-brand text-brand-foreground hover:bg-brand/90 gap-2 hover:-translate-y-0.5 transition-transform">
                View My Work <ArrowDown className="h-4 w-4" />
              </Button>
            </a>
            <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button data-testid="hero-resume-btn" size="lg" variant="outline" className="rounded-full gap-2 hover:-translate-y-0.5 transition-transform">
                <Download className="h-4 w-4" /> Download Resume
              </Button>
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-bold">{s.value}</p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{s.label}</p>
              </div>
            ))}
            <div className="ml-auto hidden sm:flex items-center gap-4 text-muted-foreground">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" data-testid="hero-github-link" aria-label="GitHub" className="hover:text-brand transition-colors">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" data-testid="hero-linkedin-link" aria-label="LinkedIn" className="hover:text-brand transition-colors">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 mx-auto lg:mx-0"
        >
          <div className="relative w-64 sm:w-80 lg:w-[24rem]">
            <div className="absolute -inset-4 rounded-[2rem] border border-brand/30" />
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-3xl bg-brand/10" />
            <div
              data-testid="hero-profile-image"
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/20"
            >
              {PROFILE.photo ? (
                <img
                  src={PROFILE.photo}
                  alt={`${PROFILE.name} — profile`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-heading text-4xl font-bold text-brand">AJ</span>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
