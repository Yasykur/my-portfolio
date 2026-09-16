import { useEffect, useState } from "react";
import SiteNav, { CONTACT_ANCHOR } from "../components/SiteNav";
import type { PageKey } from "../components/SiteNav";
import SiteFooter, { LINKEDIN_URL, LinkedInMark } from "../components/SiteFooter";
import { readableOn, usePalette } from "../site/SiteContext";
import { useIsMobile, useIsNarrow } from "../site/useMediaQuery";

/* ─────────────────────────────────────────────────────────────
   DROP-IN ASSETS — see the notes next to each constant.
   Every image degrades gracefully if the file isn't there yet.
   ───────────────────────────────────────────────────────────── */

/** public/images/hero/hero.jpg — any wide photo. Shown blurred behind the hero. */
const HERO_IMAGE = "/images/hero/hero.jpg";
/** public/files/cv.pdf — your CV. */
const CV_FILE = "/files/cv.pdf";
const CV_DOWNLOAD_NAME = "Fawwaz-Susanto-CV.pdf";

interface Props {
  onPlayClick: () => void;
  achievements: Set<number>;
  onNavigate: (page: PageKey) => void;
  onLockedAttempt: (levelId: number) => void;
}

/* ─── HERO PLAY ORB ─────────────────────────────────────────── */
function HeroPlayOrb({ onClick, compact }: { onClick: () => void; compact: boolean }) {
  const { C, CD, CL, CP } = usePalette();
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const size = compact ? 148 : 200;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 2.2,
          color: C,
          background: CP,
          border: `1px solid ${C}33`,
          padding: "4px 13px",
          borderRadius: 20,
        }}
      >
        INTERACTIVE EXPERIENCE
      </div>

      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setPressed(false);
        }}
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
        style={{ background: "none", border: "none", cursor: "pointer", outline: "none", padding: 0 }}
        title="Play the portfolio"
      >
        <div
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background: hovered
              ? `radial-gradient(circle at 36% 32%, ${CL}, ${C})`
              : `radial-gradient(circle at 36% 32%, ${C}, ${CD})`,
            boxShadow: hovered
              ? `0 0 72px ${C}80, 0 0 140px ${C}2e, inset 0 3px 14px rgba(255,255,255,0.35), inset 0 -4px 12px rgba(0,0,0,0.18)`
              : `0 10px 44px ${CD}52, inset 0 3px 14px rgba(255,255,255,0.2), inset 0 -4px 12px rgba(0,0,0,0.14)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: pressed ? "scale(0.94)" : hovered ? "scale(1.06)" : "scale(1)",
            transition: "all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: -8,
              borderRadius: "50%",
              border: `2px solid ${C}${hovered ? "70" : "22"}`,
              transition: "border-color 0.3s",
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: `${size * 0.14}px solid transparent`,
              borderBottom: `${size * 0.14}px solid transparent`,
              borderLeft: `${size * 0.24}px solid rgba(255,255,255,${hovered ? 1 : 0.9})`,
              marginLeft: size * 0.06,
              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))",
            }}
          />
        </div>
      </button>

      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 2,
          color: "#8c95a1",
          textTransform: "uppercase",
        }}
      >
        Click to play
      </span>
    </div>
  );
}

/* ─── UNLOCK CARDS ──────────────────────────────────────────── */
interface UnlockDef {
  level: number;
  page: Exclude<PageKey, "home">;
  title: string;
  teaser: string;
  logo: string;
  levelName: string;
}

const UNLOCKS: UnlockDef[] = [
  {
    level: 1,
    page: "experiences",
    title: "Experiences",
    teaser: "Every role, project and team I've been part of — campus to current.",
    logo: "/images/logos/cosmopolitan.png",
    levelName: "The College Run",
  },
  {
    level: 2,
    page: "certificates",
    title: "Certificates & Recommendations",
    teaser: "The paperwork that backs it up, signed by people who aren't me.",
    logo: "/images/logos/muara.png",
    levelName: "The Survival Sprint",
  },
  {
    level: 3,
    page: "skills",
    title: "Skills",
    teaser: "What I reach for first, grouped by what it's actually for.",
    logo: "/images/logos/cbtl.png",
    levelName: "The Life Problem",
  },
];

function UnlockCard({
  def,
  unlocked,
  onOpen,
  onLocked,
}: {
  def: UnlockDef;
  unlocked: boolean;
  onOpen: () => void;
  onLocked: () => void;
}) {
  const { C, CL, CP } = usePalette();
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={unlocked ? onOpen : onLocked}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textAlign: "left",
        background: "white",
        border: `2px solid ${unlocked ? (hovered ? C : "#16a34a") : "#e2e8f0"}`,
        borderRadius: 14,
        padding: "24px 22px 20px",
        cursor: "pointer",
        boxShadow: hovered
          ? unlocked
            ? `0 16px 40px ${C}26`
            : "0 8px 24px rgba(0,0,0,0.08)"
          : unlocked
            ? "0 4px 18px rgba(22,163,74,0.12)"
            : "0 1px 8px rgba(0,0,0,0.05)",
        opacity: unlocked ? 1 : 0.72,
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "all 0.26s",
        display: "flex",
        flexDirection: "column",
        gap: 13,
        font: "inherit",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
        <div style={{ position: "relative", width: 50, height: 50, flexShrink: 0 }}>
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              overflow: "hidden",
              background: "white",
              border: `2px solid ${unlocked ? "#16a34a" : "#e2e8f0"}`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              filter: unlocked ? "none" : "grayscale(1)",
              transition: "filter 0.3s",
            }}
          >
            <img
              src={def.logo}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -3,
              right: -3,
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: unlocked ? "#16a34a" : "#94a3b8",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 9.5,
              fontWeight: 700,
              border: "2px solid white",
            }}
          >
            {unlocked ? "✓" : "🔒"}
          </div>
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 9.5, color: CL, letterSpacing: 1.2, fontWeight: 700, marginBottom: 3 }}>
            LEVEL {def.level} · {def.levelName.toUpperCase()}
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              fontWeight: 700,
              color: unlocked ? "#0a0a0a" : "#7c8796",
              lineHeight: 1.25,
            }}
          >
            {def.title}
          </div>
        </div>
      </div>

      <p style={{ color: "#6b7481", fontSize: 13.4, lineHeight: 1.65, margin: 0, flex: 1 }}>
        {def.teaser}
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 11,
          borderTop: `1px solid ${unlocked ? C + "1a" : "#eef1f5"}`,
          gap: 10,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 0.5,
            color: unlocked ? "#16a34a" : "#94a3b8",
          }}
        >
          {unlocked ? "✓ UNLOCKED" : "🔒 LOCKED"}
        </span>
        <span
          style={{
            fontSize: 12.5,
            fontWeight: 700,
            color: unlocked ? C : "#a9b3c0",
            background: unlocked && hovered ? CP : "transparent",
            padding: "4px 10px",
            borderRadius: 6,
            transition: "all 0.2s",
            whiteSpace: "nowrap",
          }}
        >
          {unlocked ? "View →" : "Play to unlock"}
        </span>
      </div>
    </button>
  );
}

/* ─── PROJECTS ──────────────────────────────────────────────── */
interface Project {
  id: string;
  title: string;
  where: string;
  year: string;
  blurb: string;
  tags: string[];
  /** public/images/projects/<file> — 1920×1080 (16:9) works best. */
  image: string;
  /** fallback glyph shown until the image exists */
  icon: string;
  href?: string;
}

const PROJECTS: Project[] = [
  {
    id: "ai-adoption",
    title: "Company-wide AI adoption",
    where: "Coffee Bean & Tea Leaf Brunei",
    year: "2026",
    image: "/images/projects/ai-adoption.jpg",
    icon: "◆",
    blurb:
      "Wrote the board-level case for standardising on one AI tool instead of everyone using whatever they found first. Phased rollout across six departments, one seat per team, plus the internal SOPs that make it usable by staff who don't think of themselves as technical. The hard part was never the software — it was getting people to change a habit.",
    tags: ["AI strategy", "SOPs", "Change management"],
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    where: "Muara International Fish Landing",
    year: "2025",
    image: "/images/projects/inventory-system.jpg",
    icon: "▦",
    blurb:
      "Built the system the team actually uses day to day — filters, visual dashboards, generated reports, and a written user manual so it keeps working after the intern leaves. Started as 'can you tidy this spreadsheet' and turned into the thing the department runs on.",
    tags: ["Internal tooling", "Dashboards", "Documentation"],
  },
  {
    id: "iot-agriculture",
    title: "IoT Agriculture Project",
    where: "Cosmopolitan College · Team Lead",
    year: "2023 & 2025",
    image: "/images/projects/iot-agriculture.jpg",
    icon: "❖",
    blurb:
      "Led the team twice, two years apart. Sensors, wiring, and the genuinely unglamorous work of getting a group of students to agree on something and ship it before the deadline. The second run went noticeably better than the first.",
    tags: ["IoT", "Team lead", "Hardware"],
  },
  {
    id: "portfolio-game",
    title: "This portfolio",
    where: "Personal project",
    year: "2026",
    image: "/images/projects/portfolio-game.jpg",
    icon: "▶",
    blurb:
      "Three playable levels standing in for three chapters of my career — a platformer for college, an endless runner for the internship, and a boss fight against something called LIFE PROBLEM for the current job. Beat a level, unlock a section. Built with React, hand-written canvas game loops, and Three.js for the medal reveal.",
    tags: ["React", "Canvas", "Three.js"],
  },
];

/** Image that quietly swaps to a themed placeholder if the file isn't there. */
function SmartImage({
  src,
  alt,
  icon,
  radius = 0,
  cover = true,
}: {
  src: string;
  alt: string;
  icon: string;
  radius?: number;
  cover?: boolean;
}) {
  const { C, CD, CP } = usePalette();
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(135deg, ${CP}, #ffffff)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: `${C}66`,
          fontSize: 42,
          borderRadius: radius,
        }}
      >
        <span style={{ color: CD, opacity: 0.35 }}>{icon}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: cover ? "cover" : "contain",
        borderRadius: radius,
        display: "block",
      }}
    />
  );
}

function ProjectTile({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { C, CD } = usePalette();
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        border: "none",
        padding: 0,
        borderRadius: 14,
        overflow: "hidden",
        cursor: "pointer",
        background: "#0a0a0a",
        aspectRatio: "16 / 9",
        boxShadow: hovered ? `0 18px 44px ${CD}33` : "0 3px 14px rgba(0,0,0,0.1)",
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "all 0.3s cubic-bezier(0.34, 1.2, 0.64, 1)",
        font: "inherit",
        display: "block",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.34, 1.1, 0.64, 1)",
        }}
      >
        <SmartImage src={project.image} alt={project.title} icon={project.icon} />
      </div>

      {/* readability scrim */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top, rgba(6,12,20,${hovered ? 0.88 : 0.78}) 0%, rgba(6,12,20,0.28) 45%, rgba(6,12,20,0.08) 100%)`,
          transition: "background 0.3s",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "18px 20px",
          textAlign: "left",
        }}
      >
        <div
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: 1.4,
            color: "rgba(255,255,255,0.62)",
            marginBottom: 5,
          }}
        >
          {project.year}
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 19,
            color: "white",
            lineHeight: 1.25,
            marginBottom: 6,
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 700,
            color: "white",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(6px)",
            transition: "all 0.28s",
          }}
        >
          <span
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: C,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 11,
            }}
          >
            +
          </span>
          Read more
        </div>
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { C, CD, CP } = usePalette();
  const isMobile = useIsMobile();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setShown(true));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.cancelAnimationFrame(id);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        background: `rgba(6,12,20,${shown ? 0.66 : 0})`,
        backdropFilter: shown ? "blur(5px)" : "blur(0px)",
        WebkitBackdropFilter: shown ? "blur(5px)" : "blur(0px)",
        transition: "background 0.32s ease, backdrop-filter 0.32s ease",
        display: "flex",
        alignItems: isMobile ? "flex-end" : "center",
        justifyContent: "center",
        padding: isMobile ? 0 : 28,
        overflowY: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 720,
          background: "white",
          borderRadius: isMobile ? "20px 20px 0 0" : 18,
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
          opacity: shown ? 1 : 0,
          transform: shown
            ? "translateY(0) scale(1)"
            : isMobile
              ? "translateY(40px) scale(1)"
              : "translateY(18px) scale(0.97)",
          transition: "opacity 0.34s ease, transform 0.38s cubic-bezier(0.34, 1.3, 0.64, 1)",
          maxHeight: isMobile ? "92vh" : "88vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* image header */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", flexShrink: 0, background: "#0a0a0a" }}>
          <SmartImage src={project.image} alt={project.title} icon={project.icon} />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(6,12,20,0.82) 0%, rgba(6,12,20,0.1) 60%)",
            }}
          />
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute",
              top: 14,
              right: 14,
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.3)",
              background: "rgba(10,16,26,0.55)",
              backdropFilter: "blur(6px)",
              color: "white",
              fontSize: 17,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "inherit",
            }}
          >
            ✕
          </button>

          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: isMobile ? "16px 20px" : "22px 28px" }}>
            <div
              style={{
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: 1.4,
                color: "rgba(255,255,255,0.65)",
                marginBottom: 6,
              }}
            >
              {project.where.toUpperCase()} · {project.year}
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: isMobile ? 22 : 28,
                color: "white",
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              {project.title}
            </h3>
          </div>
        </div>

        {/* body */}
        <div style={{ padding: isMobile ? "20px 20px 26px" : "26px 28px 30px", overflowY: "auto" }}>
          <p style={{ color: "#5c6673", fontSize: isMobile ? 14.5 : 15.5, lineHeight: 1.78, margin: "0 0 20px" }}>
            {project.blurb}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.tags.map((t) => (
              <span
                key={t}
                style={{
                  padding: "6px 13px",
                  borderRadius: 20,
                  background: CP,
                  border: `1px solid ${C}1f`,
                  color: CD,
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: 20,
                padding: "11px 22px",
                background: C,
                color: readableOn(C),
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Visit project →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── OFF THE CLOCK ─────────────────────────────────────────── */
const PERSONAL_BITS: { icon: string; title: string; body: string }[] = [
  {
    icon: "🇮🇩",
    title: "Flag ceremony commander",
    body: "Two years volunteering with PASKIBRA at the Indonesian Embassy in Brunei, commanding the Independence Day ceremony.",
  },
  {
    icon: "🏖️",
    title: "Beach cleanups",
    body: "Organised the COSMO Beach Cleaning Campaign in 2023. Less glamorous than it sounds, still worth doing.",
  },
  {
    icon: "🎳",
    title: "Bowling club",
    body: "Joined in my first year at college. My average is nothing to write home about.",
  },
  {
    icon: "🗣️",
    title: "Three languages",
    body: "English, Malay and Bahasa Indonesia — useful more often than you'd think in Brunei.",
  },
];

function PersonalCard({ item }: { item: (typeof PERSONAL_BITS)[0] }) {
  const { C, CP } = usePalette();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        padding: "16px 18px",
        borderRadius: 12,
        background: hovered ? "white" : "transparent",
        border: `1px solid ${hovered ? C + "26" : "transparent"}`,
        boxShadow: hovered ? `0 8px 24px ${C}14` : "none",
        transition: "all 0.24s",
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          background: CP,
          border: `1px solid ${C}1f`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          flexShrink: 0,
        }}
      >
        {item.icon}
      </div>
      <div>
        <div style={{ fontSize: 14.5, fontWeight: 700, color: "#0a0a0a", marginBottom: 3 }}>
          {item.title}
        </div>
        <div style={{ fontSize: 13.4, color: "#6b7481", lineHeight: 1.65 }}>{item.body}</div>
      </div>
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────── */
export default function Home({ onPlayClick, achievements, onNavigate, onLockedAttempt }: Props) {
  const { C, CD, CL, CP } = usePalette();
  const isMobile = useIsMobile();
  const isNarrow = useIsNarrow();

  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [heroOk, setHeroOk] = useState(true);

  const pad = isMobile ? 18 : 32;
  const sectionPad = isMobile ? "56px 18px" : "88px 32px";

  // probe the hero image once so we know whether to lighten the overlay
  useEffect(() => {
    const img = new Image();
    img.onload = () => setHeroOk(true);
    img.onerror = () => setHeroOk(false);
    img.src = HERO_IMAGE;
  }, []);

  const eyebrow = (text: string) => (
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
      {text}
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "'Outfit', sans-serif",
        color: "#1a1a1a",
        background: "#fff",
        overflowX: "hidden",
      }}
    >
      <SiteNav
        current="home"
        onNavigate={onNavigate}
        unlocked={achievements}
        onLockedAttempt={onLockedAttempt}
        onPlayClick={onPlayClick}
      />

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          padding: isMobile ? "48px 18px 56px" : "80px 32px 72px",
          borderBottom: `1px solid ${C}14`,
          overflow: "hidden",
          background: "white",
          isolation: "isolate",
        }}
      >
        {/* blurred photo layer — scaled up so the blur doesn't show soft edges */}
        {heroOk && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: -60,
              zIndex: -2,
              backgroundImage: `url(${HERO_IMAGE})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(26px) saturate(1.1)",
              transform: "scale(1.12)",
            }}
          />
        )}
        {/* wash so text stays readable whether or not the photo exists */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: -1,
            background: heroOk
              ? `linear-gradient(135deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.86) 48%, ${CP}cc 100%)`
              : `linear-gradient(135deg, #ffffff 0%, ${CP}80 100%)`,
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isNarrow ? "1fr" : "1fr 1fr",
            gap: isNarrow ? 40 : 64,
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: isNarrow ? "center" : "left" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 14px",
                background: "rgba(255,255,255,0.8)",
                borderRadius: 20,
                color: C,
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: 1.8,
                marginBottom: 22,
                border: `1px solid ${C}2b`,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
              AI/IT SUPERVISOR · BRUNEI
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: isMobile ? "clamp(32px, 9vw, 44px)" : "clamp(38px, 4.5vw, 62px)",
                color: "#0a0a0a",
                lineHeight: 1.08,
                margin: "0 0 20px",
              }}
            >
              I figure out
              <br />
              the <span style={{ color: C, fontStyle: "italic" }}>tool</span>, then
              <br />
              fix the process.
            </h1>

            <p
              style={{
                color: "#525c69",
                fontSize: isMobile ? 15.5 : 17,
                lineHeight: 1.75,
                margin: isNarrow ? "0 auto 32px" : "0 0 36px",
                maxWidth: 470,
              }}
            >
              Solo AI/IT lead at Coffee Bean &amp; Tea Leaf Brunei. I came from admin, not a
              computer science degree — which is exactly why the tools I roll out have to make
              sense to everyone else too.
            </p>

            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                justifyContent: isNarrow ? "center" : "flex-start",
              }}
            >
              <button
                onClick={onPlayClick}
                style={{
                  padding: "13px 28px",
                  background: C,
                  color: readableOn(C),
                  border: "none",
                  borderRadius: 6,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: `0 4px 18px ${C}52`,
                  fontFamily: "inherit",
                }}
              >
                Play the portfolio
              </button>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "13px 26px",
                  background: "rgba(255,255,255,0.7)",
                  color: C,
                  border: `2px solid ${C}52`,
                  borderRadius: 6,
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 9,
                }}
              >
                <LinkedInMark size={16} />
                LinkedIn
              </a>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <HeroPlayOrb onClick={onPlayClick} compact={isMobile} />
          </div>
        </div>
      </section>

      {/* ── CURRENTLY ── */}
      <section style={{ background: C, padding: isMobile ? `20px ${pad}px` : "26px 32px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fit, minmax(190px, 1fr))",
            gap: isMobile ? 14 : 0,
          }}
        >
          {[
            ["Now", "AI/IT Supervisor, CBTL"],
            ["Based in", "Brunei-Muara, Brunei"],
            ["Focus", "AI adoption & tooling"],
            ["Open to", "Connecting"],
          ].map(([label, value], i, arr) => (
            <div
              key={label}
              style={{
                textAlign: "center",
                padding: isMobile ? "4px 6px" : "8px 14px",
                borderRight: !isMobile && i < arr.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.62)",
                  fontSize: 9.5,
                  fontWeight: 700,
                  letterSpacing: 1.4,
                  textTransform: "uppercase",
                  marginBottom: 4,
                }}
              >
                {label}
              </div>
              <div style={{ color: "white", fontSize: isMobile ? 13 : 14.5, fontWeight: 600 }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section style={{ padding: sectionPad, background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            {eyebrow("CAREER JOURNEY")}
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: isMobile ? 29 : 36,
                margin: "0 0 10px",
                color: "#0a0a0a",
              }}
            >
              Achievements
            </h2>
            <p
              style={{
                color: "#8c95a1",
                fontSize: isMobile ? 14 : 15,
                margin: "0 auto",
                maxWidth: 520,
                lineHeight: 1.7,
              }}
            >
              Each level of the game unlocks a real part of the CV. Finish a level, open the
              section. {achievements.size}/3 unlocked so far.
            </p>

            <div
              style={{
                maxWidth: 240,
                height: 6,
                background: "#e6ebf2",
                borderRadius: 4,
                margin: "20px auto 0",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${(achievements.size / 3) * 100}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${CL}, ${C})`,
                  borderRadius: 4,
                  transition: "width 0.5s cubic-bezier(0.34, 1.3, 0.64, 1)",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(290px, 1fr))",
              gap: 20,
              alignItems: "stretch",
            }}
          >
            {UNLOCKS.map((def) => (
              <UnlockCard
                key={def.page}
                def={def}
                unlocked={achievements.has(def.level)}
                onOpen={() => onNavigate(def.page)}
                onLocked={() => onLockedAttempt(def.level)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: isMobile ? `56px ${pad}px 40px` : "88px 32px 60px", background: "white" }}>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isNarrow ? "1fr" : "1.1fr 0.9fr",
            gap: isNarrow ? 36 : 60,
            alignItems: "center",
          }}
        >
          <div>
            {eyebrow("ABOUT ME")}
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: isMobile ? 27 : 36,
                margin: "0 0 18px",
                color: "#0a0a0a",
                lineHeight: 1.22,
              }}
            >
              Not a developer. Still the one who builds it.
            </h2>
            <p
              style={{
                color: "#67707d",
                fontSize: isMobile ? 15 : 16,
                lineHeight: 1.8,
                margin: "0 0 16px",
              }}
            >
              I studied at Cosmopolitan College in Brunei, led a team building an inventory system
              before I graduated, then spent six months as an HR intern quietly becoming the person
              who fixed whatever was broken — the payroll checks, the printer, the spreadsheet
              nobody wanted to touch.
            </p>
            <p
              style={{
                color: "#67707d",
                fontSize: isMobile ? 15 : 16,
                lineHeight: 1.8,
                margin: "0 0 26px",
              }}
            >
              That turned into an AI role at Coffee Bean &amp; Tea Leaf, and then into running it.
              The work is less about the models and more about making them land with people who
              didn't ask for new software.
            </p>

            {/* CV download */}
            <a
              href={CV_FILE}
              download={CV_DOWNLOAD_NAME}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "13px 26px",
                background: C,
                color: readableOn(C),
                borderRadius: 8,
                fontSize: 14.5,
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: `0 4px 16px ${C}47`,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download my CV
            </a>
          </div>

          <div
            style={{
              background: `linear-gradient(145deg, ${CP}, #ffffff)`,
              border: `1px solid ${C}1f`,
              borderRadius: 16,
              padding: isMobile ? "24px 22px" : "30px 28px",
            }}
          >
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 1.6,
                color: CL,
                marginBottom: 18,
              }}
            >
              THE SHORT VERSION
            </div>
            {[
              ["2021 — 2025", "Cosmopolitan College of Commerce & Technology"],
              ["2025", "HR Assistant · Muara International Fish Landing"],
              ["2026", "AI/IT Assistant → Supervisor · CBTL Brunei"],
            ].map(([when, what], i, arr) => (
              <div
                key={when}
                style={{
                  paddingBottom: i < arr.length - 1 ? 15 : 0,
                  marginBottom: i < arr.length - 1 ? 15 : 0,
                  borderBottom: i < arr.length - 1 ? `1px solid ${C}14` : "none",
                }}
              >
                <div style={{ fontSize: 11.5, fontWeight: 700, color: C, marginBottom: 3 }}>{when}</div>
                <div style={{ fontSize: 13.5, color: "#4b5563", lineHeight: 1.5 }}>{what}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section style={{ padding: isMobile ? `16px ${pad}px 56px` : "20px 32px 88px", background: "white" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 30 }}>
            {eyebrow("THINGS I'VE BUILT")}
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: isMobile ? 27 : 34,
                margin: "0 0 10px",
                color: "#0a0a0a",
              }}
            >
              Projects
            </h2>
            <p
              style={{
                color: "#8c95a1",
                fontSize: isMobile ? 14 : 15,
                margin: 0,
                maxWidth: 560,
                lineHeight: 1.7,
              }}
            >
              Not a long list — but everything here shipped and got used by someone other than me.
              Tap one to read more.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: isMobile ? 16 : 20,
            }}
          >
            {PROJECTS.map((p) => (
              <ProjectTile key={p.id} project={p} onOpen={() => setOpenProject(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OFF THE CLOCK ── */}
      <section style={{ padding: sectionPad, background: "#f7f9fc" }}>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isNarrow ? "1fr" : "0.85fr 1.15fr",
            gap: isNarrow ? 30 : 52,
            alignItems: "center",
          }}
        >
          <div>
            {eyebrow("OFF THE CLOCK")}
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: isMobile ? 27 : 34,
                margin: "0 0 16px",
                color: "#0a0a0a",
                lineHeight: 1.22,
              }}
            >
              There's a person behind the CV.
            </h2>
            <p style={{ color: "#67707d", fontSize: isMobile ? 14.5 : 15.5, lineHeight: 1.8, margin: 0 }}>
              A CV only shows the parts that fit in a job description. Here's the rest — the
              volunteering, the clubs, the weekend stuff. If we end up working together, this is
              closer to who you'd actually be sitting next to.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {PERSONAL_BITS.map((item) => (
              <PersonalCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id={CONTACT_ANCHOR}
        style={{
          padding: isMobile ? `56px ${pad}px` : "84px 32px",
          background: CD,
          scrollMarginTop: isMobile ? 60 : 66,
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              padding: "4px 14px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 20,
              color: "rgba(255,255,255,0.8)",
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: 1.8,
              marginBottom: 18,
            }}
          >
            CONTACT ME
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: isMobile ? 30 : 38,
              color: "white",
              margin: "0 0 14px",
            }}
          >
            Let's talk.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: isMobile ? 14.5 : 16,
              margin: "0 0 30px",
              lineHeight: 1.7,
            }}
          >
            Open to connecting about AI adoption, internal tooling, or anything else on this page.
            LinkedIn is the fastest way to reach me.
          </p>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 11,
              padding: "14px 30px",
              background: "white",
              color: CD,
              borderRadius: 8,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 6px 22px rgba(0,0,0,0.22)",
            }}
          >
            <LinkedInMark size={18} color="#0a66c2" />
            Reach me on LinkedIn →
          </a>
        </div>
      </section>

      <SiteFooter />

      {openProject && <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />}
    </div>
  );
}
