import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "@/components/SectionHeading";
import { PROJECTS } from "@/data/portfolio";

const SLIDE_INTERVAL = 6000; // 6s per screenshot

const PLACEHOLDER_TINTS = [
  "from-brand/20 via-secondary to-secondary",
  "from-indigo-500/15 via-secondary to-secondary",
  "from-rose-500/15 via-secondary to-secondary",
];

const AutoSlideshow = ({ id, images = [], projectName }) => {
  const slides = images.length ? images : [null, null, null];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [slides.length]);

  const go = (dir) => {
    setIndex((prev) => (prev + dir + slides.length) % slides.length);
  };

  return (
    <div className="relative h-full w-full overflow-hidden group" data-testid={`project-slideshow-${id}`}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={index}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {slides[index] ? (
            <img src={slides[index]} alt={`${projectName} screenshot ${index + 1}`} className="h-full w-full object-contain" />
          ) : (
            <div className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br ${PLACEHOLDER_TINTS[index % PLACEHOLDER_TINTS.length]}`}>
              <ImageIcon className="h-10 w-10 text-muted-foreground/50" />
              <p className="mt-4 font-mono text-sm font-medium text-muted-foreground">
                Screenshot {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs text-muted-foreground/70">Add your screenshots — they auto-advance</p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur hover:bg-background hover:text-brand transition-all opacity-0 group-hover:opacity-100 shadow-md"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur hover:bg-background hover:text-brand transition-all opacity-0 group-hover:opacity-100 shadow-md"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? "w-7 bg-brand" : "w-2 bg-foreground/30 hover:bg-brand/60"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects that shipped, scaled, and solved real problems."
          subtitle="Selected work from internships and team projects — each built end-to-end."
        />

        <div className="space-y-16 md:space-y-24 lg:space-y-28">
          {PROJECTS.map((p, i) => {
            const flipped = i % 2 === 1;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                data-testid={`project-card-${p.id}`}
              >
                {/* Visual / slideshow */}
                <div className={`relative ${flipped ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-border bg-secondary shadow-xl shadow-black/10">
                    <AutoSlideshow id={p.id} images={p.screenshots} projectName={p.name} />
                    <div className="absolute left-4 top-4 z-20 rounded-full border border-border bg-background/70 px-4 py-1.5 font-mono text-xs font-semibold backdrop-blur">
                      {String(i + 1).padStart(2, "0")} <span className="text-muted-foreground">·</span>{" "}
                      <span className="uppercase tracking-wider text-brand">{p.tag}</span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={flipped ? "lg:order-1" : ""}>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-brand">{p.context}</p>
                  <h3 className="font-heading mt-3 text-3xl lg:text-4xl font-bold tracking-tight">{p.name}</h3>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 font-mono text-xs font-medium text-foreground/80">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-block">
                    <button
                      data-testid={`project-code-${p.id}`}
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold hover:border-brand/50 hover:text-brand hover:-translate-y-0.5 transition-all"
                    >
                      <FaGithub className="h-4 w-4" /> View Code
                    </button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
