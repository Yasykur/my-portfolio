import { useEffect, useState } from "react";

/** Subscribe to a CSS media query from JS (inline styles can't use @media). */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

/** Phones and small tablets in portrait. */
export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 768px)");
}

/** Anything narrower than a laptop — used to collapse 2-column grids. */
export function useIsNarrow(): boolean {
  return useMediaQuery("(max-width: 980px)");
}

/** True when the device's primary input is touch (no hover). */
export function useIsTouch(): boolean {
  return useMediaQuery("(hover: none) and (pointer: coarse)");
}
