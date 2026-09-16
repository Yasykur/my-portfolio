import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────
   Site-wide state: accent colour (persisted) + dev mode (not persisted)
   ───────────────────────────────────────────────────────────── */

const ACCENT_KEY = "fs-portfolio-accent";
export const DEFAULT_ACCENT = "#1e6fbf";

export interface Palette {
  /** main accent */
  C: string;
  /** darker accent — headings, footers */
  CD: string;
  /** lighter accent — captions, secondary text */
  CL: string;
  /** very pale tint — chip/section backgrounds */
  CP: string;
  /** deepest shade — footer background */
  CDD: string;
}

/* ─── hex helpers ─────────────────────────────────────────── */

/** Accepts "1e6fbf", "#1e6fbf", "#abc". Returns "#rrggbb" or null. */
export function normalizeHex(input: string): string | null {
  let v = input.trim().replace(/^#/, "");
  if (/^[0-9a-fA-F]{3}$/.test(v)) {
    v = v
      .split("")
      .map((ch) => ch + ch)
      .join("");
  }
  if (!/^[0-9a-fA-F]{6}$/.test(v)) return null;
  return "#" + v.toLowerCase();
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const v = hex.replace("#", "");
  return {
    r: parseInt(v.slice(0, 2), 16),
    g: parseInt(v.slice(2, 4), 16),
    b: parseInt(v.slice(4, 6), 16),
  };
}

function toHexPart(n: number): string {
  const clamped = Math.round(Math.min(255, Math.max(0, n)));
  return clamped.toString(16).padStart(2, "0");
}

/** Blend `hex` toward `target` by `amount` (0 = unchanged, 1 = fully target). */
function mix(hex: string, target: string, amount: number): string {
  const a = hexToRgb(hex);
  const b = hexToRgb(target);
  return (
    "#" +
    toHexPart(a.r + (b.r - a.r) * amount) +
    toHexPart(a.g + (b.g - a.g) * amount) +
    toHexPart(a.b + (b.b - a.b) * amount)
  );
}

/** Relative luminance — used to pick readable text on top of the accent. */
export function luminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const chan = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * chan(r) + 0.7152 * chan(g) + 0.0722 * chan(b);
}

/** "#ffffff" or "#0a0a0a", whichever reads better on the given background. */
export function readableOn(hex: string): string {
  return luminance(hex) > 0.45 ? "#0a0a0a" : "#ffffff";
}

export function buildPalette(accent: string): Palette {
  const C = accent;
  return {
    C,
    CD: mix(C, "#000000", 0.32),
    CL: mix(C, "#ffffff", 0.34),
    CP: mix(C, "#ffffff", 0.9),
    CDD: mix(C, "#000000", 0.62),
  };
}

/* ─── context ─────────────────────────────────────────────── */

interface SiteState {
  accent: string;
  setAccent: (hex: string) => void;
  resetAccent: () => void;
  palette: Palette;
  devMode: boolean;
  setDevMode: (on: boolean) => void;
}

const SiteCtx = createContext<SiteState | null>(null);

function readStoredAccent(): string {
  if (typeof window === "undefined") return DEFAULT_ACCENT;
  try {
    const raw = window.localStorage.getItem(ACCENT_KEY);
    const norm = raw ? normalizeHex(raw) : null;
    return norm ?? DEFAULT_ACCENT;
  } catch {
    return DEFAULT_ACCENT;
  }
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [accent, setAccentState] = useState<string>(readStoredAccent);
  // Dev mode deliberately lives in memory only — a refresh always turns it off.
  const [devMode, setDevMode] = useState(false);

  const setAccent = useCallback((hex: string) => {
    const norm = normalizeHex(hex);
    if (!norm) return;
    setAccentState(norm);
    try {
      window.localStorage.setItem(ACCENT_KEY, norm);
    } catch {
      /* storage blocked — colour still applies for this session */
    }
  }, []);

  const resetAccent = useCallback(() => {
    setAccentState(DEFAULT_ACCENT);
    try {
      window.localStorage.removeItem(ACCENT_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const palette = useMemo(() => buildPalette(accent), [accent]);

  // Expose the palette as CSS variables so plain CSS (scrollbars etc.) follows along.
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", palette.C);
    root.style.setProperty("--accent-dark", palette.CD);
    root.style.setProperty("--accent-light", palette.CL);
    root.style.setProperty("--accent-pale", palette.CP);
    root.style.setProperty("--accent-deepest", palette.CDD);
  }, [palette]);

  const value = useMemo<SiteState>(
    () => ({ accent, setAccent, resetAccent, palette, devMode, setDevMode }),
    [accent, setAccent, resetAccent, palette, devMode],
  );

  return <SiteCtx.Provider value={value}>{children}</SiteCtx.Provider>;
}

export function useSite(): SiteState {
  const ctx = useContext(SiteCtx);
  if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
  return ctx;
}

/** Convenience hook when a component only needs colours. */
export function usePalette(): Palette {
  return useSite().palette;
}
