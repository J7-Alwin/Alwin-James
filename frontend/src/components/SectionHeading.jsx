import { motion } from "framer-motion";

export const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="max-w-2xl mb-12">
    {eyebrow && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-brand"
      >
        {eyebrow}
      </motion.p>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="font-heading mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mt-4 text-base leading-relaxed text-muted-foreground"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);
