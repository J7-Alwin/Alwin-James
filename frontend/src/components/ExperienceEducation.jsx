import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { ImageLightbox } from "@/components/ImageLightbox";
import { SectionHeading } from "@/components/SectionHeading";
import { EXPERIENCE, EDUCATION } from "@/data/portfolio";

const TimelineItem = ({ children, last }) => (
  <div className="relative pl-8">
    <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-brand bg-background" />
    {!last && <span className="absolute left-[6px] top-5 bottom-[-1.5rem] w-px bg-border" />}
    {children}
  </div>
);

export const ExperienceEducation = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="experience" className="py-16 md:py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Journey" title="Experience & Education" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div data-testid="experience-column">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-xl font-semibold">Experience</h3>
            </div>

            <div className="space-y-8">
              {EXPERIENCE.map((e, i) => (
                <TimelineItem key={e.company} last={i === EXPERIENCE.length - 1}>
                  <motion.div
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">{e.period}</p>
                    <h4 className="font-heading mt-1 text-lg font-semibold">{e.role}</h4>
                    <p className="text-sm text-muted-foreground">{e.company} · {e.location}</p>
                    <ul className="mt-4 space-y-2">
                      {e.points.map((p, idx) => (
                        <li key={idx} className="flex gap-2 text-sm leading-relaxed text-foreground/80">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    {e.certificate && (
                      <button
                        type="button"
                        onClick={() => setActiveCert(e.certificate)}
                        data-testid={`experience-cert-btn-${i}`}
                        className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-brand hover:border-brand/50 hover:bg-brand/5 transition-colors"
                      >
                        <Award className="h-4 w-4" /> View Certificate
                      </button>
                    )}
                  </motion.div>
                </TimelineItem>
              ))}
            </div>
          </div>

          <div data-testid="education-column">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <GraduationCap className="h-5 w-5" />
              </span>
              <h3 className="font-heading text-xl font-semibold">Education</h3>
            </div>

            <div className="space-y-8">
              {EDUCATION.map((e, i) => (
                <TimelineItem key={e.degree} last={i === EDUCATION.length - 1}>
                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">{e.period}</p>
                    <h4 className="font-heading mt-1 text-lg font-semibold">{e.degree}</h4>
                    <p className="text-sm text-muted-foreground">{e.institution}</p>
                    <span className="mt-3 inline-block rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium">
                      Score: {e.score}
                    </span>
                  </motion.div>
                </TimelineItem>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageLightbox
        open={!!activeCert}
        onOpenChange={(o) => !o && setActiveCert(null)}
        title={activeCert?.title}
        images={activeCert?.images || []}
        placeholderLabel="Certificate placeholder"
      />
    </section>
  );
};
