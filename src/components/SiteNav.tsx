import { useEffect, useState } from "react";
import { readableOn, useSite } from "../site/SiteContext";
import { useIsMobile } from "../site/useMediaQuery";
import SiteSettings from "./SiteSettings";

export type PageKey = "home" | "experiences" | "certificates" | "skills";

export const PAGE_UNLOCKED_BY: Record<Exclude<PageKey, "home">, number> = {
  experiences: 1,
  certificates: 2,
  skills: 3,
};

const NAV_ITEMS: { key: PageKey; label: string }[] = [
  { key: "home", label: "Home" },
  { key: "experiences", label: "Experiences" },
  { key: "certificates", label: "Certificates" },
  { key: "skills", label: "Skills" },
];

export const CONTACT_ANCHOR = "contact";

/** Smooth-scrolls to the contact block, hopping home first if needed. */
export function scrollToContact(onNavigate: (p: PageKey) => void) {
  const run = () => {
    const el = document.getElementById(CONTACT_ANCHOR);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.remove("fs-contact-ping");
    // restart the highlight animation
    void el.offsetWidth;
    el.classList.add("fs-contact-ping");
    window.setTimeout(() => el.classList.remove("fs-contact-ping"), 1600);
  };

  if (document.getElementById(CONTACT_ANCHOR)) run();
  else {
    onNavigate("home");
    window.setTimeout(run, 140);
  }
}

function PhoneIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92" />
    </svg>
  );
}

interface Props {
  current: PageKey;
  onNavigate: (page: PageKey) => void;
  unlocked: Set<number>;
  onLockedAttempt: (levelId: number) => void;
  onPlayClick: () => void;
}

export default function SiteNav({
  current,
  onNavigate,
  unlocked,
  onLockedAttempt,
  onPlayClick,
}: Props) {
  const { palette, devMode } = useSite();
  const { C, CD, CL, CP } = palette;
  const isMobile = useIsMobile();

  const [gearShown, setGearShown] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // close the drawer if we grow back to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  const handleLogoClick = () => {
    if (gearShown) {
      setGearShown(false);
      setSettingsOpen(false);
    } else {
      setGearShown(true);
    }
  };

  const go = (key: PageKey) => {
    setMenuOpen(false);
    if (key === "home") {
      onNavigate("home");
      return;
    }
    const needs = PAGE_UNLOCKED_BY[key];
    if (unlocked.has(needs)) onNavigate(key);
    else onLockedAttempt(needs);
  };

  const goContact = () => {
    setMenuOpen(false);
    scrollToContact(onNavigate);
  };

  const navButton = (item: { key: PageKey; label: string }, full = false) => {
    const locked = item.key !== "home" && !unlocked.has(PAGE_UNLOCKED_BY[item.key]);
    const active = current === item.key;
    return (
      <button
        key={item.key}
        onClick={() => go(item.key)}
        style={{
          padding: full ? "13px 16px" : "7px 14px",
          width: full ? "100%" : undefined,
          textAlign: full ? "left" : "center",
          color: active ? C : locked ? "#b6bfcc" : "#555",
          fontSize: full ? 15.5 : 14,
          fontWeight: active ? 700 : 500,
          borderRadius: full ? 10 : 4,
          background: active ? CP : "transparent",
          border: "none",
          cursor: "pointer",
          transition: "all 0.2s",
          display: "flex",
          alignItems: "center",
          gap: 7,
          whiteSpace: "nowrap",
          fontFamily: "inherit",
        }}
      >
        {locked && <span style={{ fontSize: 11 }}>🔒</span>}
        {item.label}
      </button>
    );
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 150,
        background: "white",
        borderBottom: `1px solid ${C}1f`,
        boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
      }}
    >
      <style>{`
        @keyframes fsMenuDrop {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fs-contact-ping { animation: fsContactPing 1.5s ease; }
        @keyframes fsContactPing {
          0%   { box-shadow: inset 0 0 0 0 rgba(255,255,255,0); }
          25%  { box-shadow: inset 0 0 0 4px rgba(255,255,255,0.35); }
          100% { box-shadow: inset 0 0 0 0 rgba(255,255,255,0); }
        }
      `}</style>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "0 18px" : "0 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: isMobile ? 60 : 66,
          gap: 12,
        }}
      >
        {/* ── Brand + hidden gear ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={handleLogoClick}
              title="Fawwaz Susanto"
              aria-label="Fawwaz Susanto"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: `radial-gradient(circle at 35% 30%, ${CL}, ${CD})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 16,
                fontWeight: 900,
                color: "white",
                fontFamily: "'Playfair Display', serif",
                boxShadow: `0 2px 10px ${CD}47`,
                border: "none",
                padding: 0,
                cursor: "pointer",
                transform: gearShown ? "translateX(-4px)" : "translateX(0)",
                transition: "transform 0.32s cubic-bezier(0.34, 1.4, 0.64, 1)",
                userSelect: "none",
                flexShrink: 0,
              }}
            >
              FS
            </button>

            <button
              onClick={() => setSettingsOpen((v) => !v)}
              title="Site settings"
              aria-label="Site settings"
              tabIndex={gearShown ? 0 : -1}
              style={{
                width: gearShown ? 32 : 0,
                height: 32,
                marginLeft: gearShown ? 4 : 0,
                opacity: gearShown ? 1 : 0,
                overflow: "hidden",
                borderRadius: 9,
                border: settingsOpen ? `1.5px solid ${C}` : `1.5px solid ${C}2e`,
                background: settingsOpen ? C : CP,
                color: settingsOpen ? readableOn(C) : C,
                cursor: gearShown ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                transition: "all 0.32s cubic-bezier(0.34, 1.4, 0.64, 1)",
                pointerEvents: gearShown ? "auto" : "none",
                flexShrink: 0,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: settingsOpen ? "rotate(60deg)" : "rotate(0deg)",
                  transition: "transform 0.35s cubic-bezier(0.34, 1.3, 0.64, 1)",
                  flexShrink: 0,
                }}
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1" />
              </svg>
            </button>
          </div>

          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: isMobile ? 16 : 20,
              color: CD,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {isMobile ? "Fawwaz" : "Fawwaz Susanto"}
          </span>

          {devMode && (
            <span
              style={{
                padding: "3px 8px",
                borderRadius: 20,
                background: "#dcfce7",
                border: "1px solid #16a34a55",
                color: "#15803d",
                fontSize: 9,
                fontWeight: 800,
                letterSpacing: 1,
                flexShrink: 0,
              }}
            >
              DEV
            </span>
          )}
        </div>

        {/* ── Right side ── */}
        <div style={{ display: "flex", gap: isMobile ? 8 : 2, alignItems: "center", flexShrink: 0 }}>
          {!isMobile && NAV_ITEMS.map((item) => navButton(item))}

          {!isMobile && (
            <button
              onClick={onPlayClick}
              style={{
                marginLeft: 10,
                padding: "8px 22px",
                background: C,
                color: readableOn(C),
                border: "none",
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: `0 2px 10px ${C}47`,
                transition: "background 0.2s",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = CD)}
              onMouseLeave={(e) => (e.currentTarget.style.background = C)}
            >
              Play
            </button>
          )}

          {/* phone → contact */}
          <button
            onClick={goContact}
            title="Contact me"
            aria-label="Contact me"
            style={{
              width: isMobile ? 38 : 38,
              height: 38,
              borderRadius: 9,
              border: `1.5px solid ${C}33`,
              background: CP,
              color: C,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              padding: 0,
              flexShrink: 0,
              transition: "all 0.22s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = C;
              e.currentTarget.style.color = readableOn(C);
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = CP;
              e.currentTarget.style.color = C;
              e.currentTarget.style.transform = "none";
            }}
          >
            <PhoneIcon />
          </button>

          {/* hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              style={{
                width: 38,
                height: 38,
                borderRadius: 9,
                border: `1.5px solid ${C}33`,
                background: menuOpen ? C : CP,
                color: menuOpen ? readableOn(C) : C,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                cursor: "pointer",
                padding: 0,
                flexShrink: 0,
                transition: "all 0.22s",
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: 16,
                    height: 2,
                    borderRadius: 2,
                    background: "currentColor",
                    transition: "all 0.26s",
                    transform:
                      menuOpen && i === 0
                        ? "translateY(6px) rotate(45deg)"
                        : menuOpen && i === 2
                          ? "translateY(-6px) rotate(-45deg)"
                          : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          )}
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {isMobile && menuOpen && (
        <div
          style={{
            borderTop: `1px solid ${C}1a`,
            background: "white",
            padding: "12px 18px 18px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            boxShadow: "0 14px 30px rgba(0,0,0,0.1)",
            animation: "fsMenuDrop 0.24s cubic-bezier(0.34, 1.3, 0.64, 1)",
          }}
        >
          {NAV_ITEMS.map((item) => navButton(item, true))}

          <button
            onClick={() => {
              setMenuOpen(false);
              onPlayClick();
            }}
            style={{
              marginTop: 8,
              padding: "14px 16px",
              background: C,
              color: readableOn(C),
              border: "none",
              borderRadius: 10,
              fontSize: 15.5,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            ▶ Play the portfolio
          </button>
        </div>
      )}

      {settingsOpen && <SiteSettings onClose={() => setSettingsOpen(false)} />}
    </nav>
  );
}
