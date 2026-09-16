import type { ReactNode } from "react";
import { usePalette } from "../site/SiteContext";
import { useIsMobile } from "../site/useMediaQuery";
import SiteNav from "./SiteNav";
import type { PageKey } from "./SiteNav";
import SiteFooter from "./SiteFooter";

interface Props {
  current: PageKey;
  eyebrow: string;
  title: string;
  intro?: string;
  unlocked: Set<number>;
  onNavigate: (page: PageKey) => void;
  onLockedAttempt: (levelId: number) => void;
  onPlayClick: () => void;
  children: ReactNode;
}

export default function PageShell({
  current,
  eyebrow,
  title,
  intro,
  unlocked,
  onNavigate,
  onLockedAttempt,
  onPlayClick,
  children,
}: Props) {
  const { C, CL, CP } = usePalette();
  const isMobile = useIsMobile();
  const pad = isMobile ? 18 : 32;

  return (
    <div
      style={{
        fontFamily: "'Outfit', sans-serif",
        color: "#1a1a1a",
        background: "#fff",
        minHeight: "100%",
        overflowX: "hidden",
      }}
    >
      <SiteNav
        current={current}
        onNavigate={onNavigate}
        unlocked={unlocked}
        onLockedAttempt={onLockedAttempt}
        onPlayClick={onPlayClick}
      />

      <section
        style={{
          background: `linear-gradient(180deg, ${CP} 0%, #ffffff 100%)`,
          padding: isMobile ? `38px ${pad}px 30px` : "62px 32px 46px",
          borderBottom: `1px solid ${C}14`,
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <button
            onClick={() => onNavigate("home")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "transparent",
              border: "none",
              color: CL,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              padding: 0,
              marginBottom: 18,
              fontFamily: "inherit",
            }}
          >
            ← Back to home
          </button>

          <div
            style={{
              display: "inline-block",
              padding: "4px 14px",
              background: `${C}14`,
              borderRadius: 20,
              color: C,
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: 1.8,
              marginBottom: 14,
            }}
          >
            {eyebrow}
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 900,
              fontSize: isMobile ? "clamp(27px, 8vw, 36px)" : "clamp(34px, 4.4vw, 50px)",
              margin: "0 0 14px",
              color: "#0a0a0a",
              lineHeight: 1.14,
            }}
          >
            {title}
          </h1>

          {intro && (
            <p
              style={{
                color: "#67707d",
                fontSize: isMobile ? 15 : 16,
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 620,
              }}
            >
              {intro}
            </p>
          )}
        </div>
      </section>

      <section style={{ padding: isMobile ? `36px ${pad}px 60px` : "56px 32px 88px", background: "#fff" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>{children}</div>
      </section>

      <SiteFooter />
    </div>
  );
}
