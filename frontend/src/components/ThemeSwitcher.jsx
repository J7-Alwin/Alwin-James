import { Sun, Moon, Monitor } from "lucide-react";

const OPTIONS = [
  { key: "light", icon: Sun, label: "Light theme" },
  { key: "dark", icon: Moon, label: "Dark theme" },
  { key: "system", icon: Monitor, label: "System theme" },
];

export const ThemeSwitcher = ({ mode, setMode }) => {
  return (
    <div
      data-testid="theme-switcher"
      role="radiogroup"
      aria-label="Color theme"
      className="inline-flex items-center gap-0.5 rounded-full border border-border bg-secondary/60 p-1"
    >
      {OPTIONS.map(({ key, icon: Icon, label }) => {
        const active = mode === key;
        return (
          <button
            key={key}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            data-testid={`theme-mode-${key}`}
            onClick={() => setMode(key)}
            className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
              active
                ? "bg-brand text-brand-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon className="h-[18px] w-[18px]" />
          </button>
        );
      })}
    </div>
  );
};
