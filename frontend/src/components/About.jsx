import { motion } from "framer-motion";
import { Server, Layout, Database, BrainCircuit, Cloud, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { PROFILE, WHAT_I_BUILD, SKILLS, EXPERIENCE, PROJECTS, CERTIFICATES } from "@/data/portfolio";

const ICONS = { Server, Layout, Database, BrainCircuit, Cloud, ShieldCheck };

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="About Me"
          title="Backend-focused developer building AI-powered software"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 lg:col-span-2 rounded-2xl border border-border bg-card p-8 flex flex-col justify-between"
            data-testid="about-summary"
          >
            <div className="space-y-4 text-base sm:text-lg leading-relaxed text-foreground/90">
              {Array.isArray(PROFILE.summary) ? (
                PROFILE.summary.map((para, idx) => <p key={idx}>{para}</p>)
              ) : (
                <p>{PROFILE.summary}</p>
              )}
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm border-t border-border/60 pt-6">
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
            className="rounded-2xl border border-border bg-brand/5 p-8 flex flex-col justify-between"
          >
            <div>
              <p className="font-heading text-xl font-semibold">What I build</p>
              <div className="mt-5 space-y-4">
                {(WHAT_I_BUILD || []).map((item) => (
                  <div key={item.title}>
                    <h4 className="font-heading text-sm font-semibold text-brand">{item.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <h3 className="font-heading mt-16 mb-6 text-xl font-semibold tracking-tight">Core Tech Stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((group, i) => {
            const Icon = ICONS[group.icon] || Server;
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
