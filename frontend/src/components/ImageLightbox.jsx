import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/**
 * Reusable image lightbox with left/right navigation.
 * Pass an `images` array (URLs). Empty/null entries render a placeholder,
 * so you can wire real screenshots/certificates in later.
 */
export const ImageLightbox = ({
  open,
  onOpenChange,
  title,
  subtitle,
  images = [],
  placeholderLabel = "Image placeholder",
  startIndex = 0,
}) => {
  const list = images.length ? images : [null];
  const [idx, setIdx] = useState(startIndex);

  useEffect(() => {
    if (open) setIdx(startIndex);
  }, [open, startIndex]);

  const go = (dir) => setIdx((i) => (i + dir + list.length) % list.length);
  const multi = list.length > 1;

  const currentItem = list[idx];
  const currentSrc = typeof currentItem === "string" ? currentItem : currentItem?.image;
  const currentTitle = typeof currentItem === "string" ? title : (currentItem?.title || title);
  const currentSubtitle = typeof currentItem === "string" ? subtitle : (currentItem?.subtitle || subtitle);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl" data-testid="image-lightbox">
        <DialogHeader>
          <DialogTitle className="font-heading">{currentTitle}</DialogTitle>
          {currentSubtitle && <DialogDescription>{currentSubtitle}</DialogDescription>}
        </DialogHeader>

        <div className="relative mt-2 aspect-video w-full overflow-hidden rounded-xl border border-border bg-secondary flex items-center justify-center">
          {currentSrc ? (
            <img
              src={currentSrc}
              alt={`${currentTitle} — ${idx + 1}`}
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="text-center px-6">
              <ImageIcon className="mx-auto h-10 w-10 text-muted-foreground/50" />
              <p className="mt-3 text-sm font-medium text-muted-foreground">{placeholderLabel}</p>
              <p className="mt-1 text-xs text-muted-foreground/70">Add your image here</p>
            </div>
          )}

          {multi && (
            <>
              <button
                onClick={() => go(-1)}
                data-testid="lightbox-prev"
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur hover:bg-background hover:text-brand transition"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => go(1)}
                data-testid="lightbox-next"
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur hover:bg-background hover:text-brand transition"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {multi && (
          <div className="flex items-center justify-center gap-2 pt-1" data-testid="lightbox-dots">
            <span className="mr-2 text-xs text-muted-foreground">
              {idx + 1} / {list.length}
            </span>
            {list.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? "w-6 bg-brand" : "w-2 bg-border hover:bg-brand/50"
                }`}
              />
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
