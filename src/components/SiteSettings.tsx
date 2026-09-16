import { useEffect, useRef, useState } from "react";
import { DEFAULT_ACCENT, normalizeHex, readableOn, useSite } from "../site/SiteContext";
import { useIsMobile } from "../site/useMediaQuery";

const DEV_PASSWORD = "meow";

const PRESETS: { name: string; hex: string }[] = [
  { name: "Chelsea Blue", hex: "#1e6fbf" },
  { name: "Forest", hex: "#166534" },
  { name: "Plum", hex: "#7c3aed" },
  { name: "Ember", hex: "#c2410c" },
  { name: "Teal", hex: "#0f766e" },
  { name: "Rose", hex: "#be123c" },
  { name: "Graphite", hex: "#374151" },
  { name: "Gold", hex: "#a16207" },
];

export default function SiteSettings({ onClose }: { onClose: () => void }) {
  const { accent, setAccent, resetAccent, palette, devMode, setDevMode } = useSite();
  const { C, CD, CL, CP } = palette;
  const isMobile = useIsMobile();

  const [draft, setDraft] = useState(accent);
  const [pw, setPw] = useState("");
  const [fails, setFails] = useState(0);
  const [shake, setShake] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // keep the text field in sync when the colour changes from a preset click
  useEffect(() => setDraft(accent), [accent]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // close when clicking outside the panel
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) onClose();
    };
    // defer so the opening click doesn't immediately close it
    const id = window.setTimeout(() => document.addEventListener("mousedown", onDown), 0);
    return () => {
      window.clearTimeout(id);
      document.removeEventListener("mousedown", onDown);
    };
  }, [onClose]);

  const applyDraft = () => {
    const norm = normalizeHex(draft);
    if (!norm) {
      setShake(true);
      window.setTimeout(() => setShake(false), 420);
      return;
    }
    setAccent(norm);
  };

  const submitPassword = () => {
    if (pw.trim().toLowerCase() === DEV_PASSWORD) {
      setDevMode(true);
      setPw("");
      setFails(0);
    } else {
      setFails((n) => n + 1);
      setPw("");
      setShake(true);
      window.setTimeout(() => setShake(false), 420);
    }
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1.6,
    color: CL,
    textTransform: "uppercase",
    marginBottom: 10,
  };

  return (
    <div
      ref={panelRef}
      style={{
        position: "absolute",
        top: "calc(100% + 1px)",
        left: 0,
        right: 0,
        background: "white",
        borderBottom: `2px solid ${C}`,
        boxShadow: "0 18px 44px rgba(0,0,0,0.13)",
        zIndex: 200,
        maxHeight: "72vh",
        overflowY: "auto",
        animation: "fsDropIn 0.24s cubic-bezier(0.34, 1.3, 0.64, 1)",
      }}
    >
      <style>{`
        @keyframes fsDropIn {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fsShake {
          0%,100% { transform: translateX(0); }
          25%     { transform: translateX(-5px); }
          75%     { transform: translateX(5px); }
        }
      `}</style>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: isMobile ? "20px 18px 24px" : "26px 32px 30px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1.35fr 1fr",
          gap: isMobile ? 26 : 40,
          alignItems: "start",
        }}
      >
        {/* ── Accent colour ───────────────────────────── */}
        <div>
          <div style={labelStyle}>Accent colour</div>

          <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                border: `1.5px solid ${C}33`,
                borderRadius: 6,
                padding: "6px 10px 6px 8px",
                background: CP,
                animation: shake ? "fsShake 0.4s" : undefined,
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 5,
                  background: normalizeHex(draft) ?? "#e2e8f0",
                  border: "1px solid rgba(0,0,0,0.12)",
                  flexShrink: 0,
                }}
              />
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && applyDraft()}
                placeholder="#1e6fbf"
                spellCheck={false}
                style={{
                  width: 104,
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                  color: CD,
                }}
              />
            </div>

            <input
              type="color"
              value={normalizeHex(draft) ?? DEFAULT_ACCENT}
              onChange={(e) => setAccent(e.target.value)}
              title="Pick a colour"
              style={{
                width: 40,
                height: 38,
                padding: 2,
                border: `1.5px solid ${C}33`,
                borderRadius: 6,
                background: "white",
                cursor: "pointer",
              }}
            />

            <button
              onClick={applyDraft}
              style={{
                padding: "0 18px",
                height: 38,
                background: C,
                color: readableOn(C),
                border: "none",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Apply
            </button>

            <button
              onClick={resetAccent}
              style={{
                padding: "0 16px",
                height: 38,
                background: "transparent",
                color: CL,
                border: `1.5px solid ${C}2e`,
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Reset
            </button>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {PRESETS.map((p) => {
              const active = p.hex === accent;
              return (
                <button
                  key={p.hex}
                  title={p.name}
                  onClick={() => setAccent(p.hex)}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: p.hex,
                    border: active ? "3px solid white" : "2px solid white",
                    boxShadow: active
                      ? `0 0 0 2.5px ${p.hex}, 0 2px 8px rgba(0,0,0,0.2)`
                      : "0 1px 5px rgba(0,0,0,0.18)",
                    cursor: "pointer",
                    padding: 0,
                    transition: "transform 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.12)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              );
            })}
          </div>

          <p style={{ color: "#9aa4b2", fontSize: 12, margin: "14px 0 0", lineHeight: 1.6 }}>
            Applies across the whole site and sticks after a refresh. Games keep their own
            palette so the levels stay readable.
          </p>
        </div>

        {/* ── Dev mode ────────────────────────────────── */}
        <div style={{ borderLeft: isMobile ? "none" : `1px solid ${C}1f`, borderTop: isMobile ? `1px solid ${C}1f` : "none", paddingLeft: isMobile ? 0 : 36, paddingTop: isMobile ? 22 : 0 }}>
          <div style={labelStyle}>Developer mode</div>

          {devMode ? (
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 14px",
                  borderRadius: 20,
                  background: "#dcfce7",
                  border: "1px solid #16a34a55",
                  color: "#15803d",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 0.4,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#16a34a",
                    boxShadow: "0 0 0 3px #16a34a2e",
                  }}
                />
                DEV MODE ACTIVE
              </div>
              <p style={{ color: "#64748b", fontSize: 12.5, margin: "14px 0 16px", lineHeight: 1.65 }}>
                All levels unlocked. Turns itself off on refresh.
              </p>
              <button
                onClick={() => setDevMode(false)}
                style={{
                  padding: "9px 18px",
                  background: "transparent",
                  color: "#dc2626",
                  border: "1.5px solid #dc262640",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Turn off
              </button>
            </div>
          ) : (
            <div>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  animation: shake ? "fsShake 0.4s" : undefined,
                }}
              >
                <input
                  type="password"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submitPassword()}
                  placeholder="Password"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    padding: "9px 13px",
                    border: `1.5px solid ${fails > 0 ? "#dc262655" : C + "33"}`,
                    borderRadius: 6,
                    fontSize: 14,
                    outline: "none",
                    color: CD,
                    background: CP,
                  }}
                />
                <button
                  onClick={submitPassword}
                  style={{
                    padding: "0 18px",
                    background: C,
                    color: readableOn(C),
                    border: "none",
                    borderRadius: 6,
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Unlock
                </button>
              </div>

              {fails > 0 && fails < 3 && (
                <p style={{ color: "#dc2626", fontSize: 12.5, margin: "10px 0 0", fontWeight: 500 }}>
                  Nope. {3 - fails} more {3 - fails === 1 ? "try" : "tries"} before a hint.
                </p>
              )}

              {fails >= 3 && (
                <div
                  style={{
                    marginTop: 12,
                    padding: "11px 14px",
                    background: "#fffbeb",
                    border: "1px solid #f59e0b55",
                    borderRadius: 8,
                    color: "#92400e",
                    fontSize: 13,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span style={{ fontSize: 16 }}>🐈</span>
                  Hint: what does the cat say?
                </div>
              )}

              {fails === 0 && (
                <p style={{ color: "#9aa4b2", fontSize: 12, margin: "12px 0 0", lineHeight: 1.6 }}>
                  Unlocks every level for testing, until the page reloads.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
