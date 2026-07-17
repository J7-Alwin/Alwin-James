import { motion } from "framer-motion";
import { Server, Layout, Database, BrainCircuit, Cloud } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { PROFILE, SKILLS, EXPERIENCE, PROJECTS, CERTIFICATES } from "@/data/portfolio";

const ICONS = { Server, Layout, Database, BrainCircuit, Cloud };

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="About Me" title="Backend-first engineer with an AI edge" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 lg:col-span-2 rounded-2xl border border-border bg-card p-8"
            data-testid="about-summary"
          >
            <p className="text-lg leading-relaxed text-foreground/90">{PROFILE.summary}</p>
            <div className="mt-6 flex flex-wrap gap-6 text-sm">
              <div>
                <p className="font-heading text-3xl font-bold text-brand">{EXPERIENCE.length}</p>
                <p className="text-muted-foreground">Internships</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-brand">{PROJECTS.length}</p>
                <p className="text-muted-foreground">Full-stack projects</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-brand">{CERTIFICATES.length}</p>
                <p className="text-muted-foreground">Certifications</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-brand/5 p-8 flex flex-col justify-center"
          >
            <p className="font-heading text-xl font-semibold">What I build</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Secure REST APIs, JWT auth & role-based access, scalable MongoDB models, automated workflows, and RAG-powered AI features — all wired to clean React frontends.
            </p>
          </motion.div>
        </div>

        <h3 className="font-heading mt-16 mb-6 text-xl font-semibold tracking-tight">Core Tech Stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-brand/50 transition-colors"
                data-testid={`skill-group-${group.category.toLowerCase().replace(/[^a-z]/g, "-")}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="font-heading font-semibold">{group.category}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium text-foreground/80 hover:border-brand hover:text-brand transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
