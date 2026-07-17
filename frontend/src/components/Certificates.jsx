import { useState } from "react";
import Marquee from "react-fast-marquee";
import { Award } from "lucide-react";
import { ImageLightbox } from "@/components/ImageLightbox";
import { SectionHeading } from "@/components/SectionHeading";
import { CERTIFICATES } from "@/data/portfolio";

const CertCard = ({ cert, onOpen }) => (
  <button
    type="button"
    onClick={() => onOpen(cert)}
    data-testid={`certificate-card-${cert.id}`}
    className="group relative mx-3 w-72 shrink-0 cursor-pointer rounded-2xl border border-border bg-card p-1 text-left transition-transform duration-300 ease-out hover:scale-105 hover:z-10 hover:shadow-2xl hover:shadow-brand/20"
  >
    <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-secondary flex items-center justify-center">
      {cert.image ? (
        <img src={cert.image} alt={cert.title} className="h-full w-full object-contain" />
      ) : (
        <div className="text-center px-4">
          <Award className="mx-auto h-8 w-8 text-brand/60" />
          <p className="mt-2 text-[11px] uppercase tracking-widest text-muted-foreground/70">Click to view</p>
        </div>
      )}
    </div>
    <div className="p-4">
      <p className="font-heading text-sm font-semibold leading-snug">{cert.title}</p>
      <p className="mt-1 text-xs text-muted-foreground">
        {cert.issuer} · {cert.year}
      </p>
    </div>
  </button>
);

export const Certificates = () => {
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <section id="certificates" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Achievements"
          subtitle="Hover to pause the slider; click any certificate to open it full-size."
        />
      </div>

      <div
        className="mask-fade-x"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        data-testid="certificates-marquee"
      >
        <Marquee play={!paused} speed={45} gradient={false} pauseOnHover>
          {CERTIFICATES.map((c) => (
            <CertCard key={c.id} cert={c} onOpen={setActive} />
          ))}
        </Marquee>
      </div>

      <ImageLightbox
        open={!!active}
        onOpenChange={(o) => !o && setActive(null)}
        images={CERTIFICATES.filter((c) => c.image).map((c) => ({
          title: c.title,
          subtitle: `${c.issuer} · ${c.year}`,
          image: c.image,
        }))}
        startIndex={active ? CERTIFICATES.filter((c) => c.image).findIndex((c) => c.id === active.id) : 0}
        placeholderLabel="Certificate placeholder"
      />
    </section>
  );
};
