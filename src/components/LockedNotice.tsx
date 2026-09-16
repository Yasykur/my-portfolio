import { useEffect } from "react";
import { readableOn, usePalette } from "../site/SiteContext";

const LEVEL_BLURB: Record<number, { name: string; what: string }> = {
  1: { name: "Level 1 — The College Run", what: "Experiences" },
  2: { name: "Level 2 — The Survival Sprint", what: "Certificates & Recommendations" },
  3: { name: "Level 3 — The Life Problem", what: "Skills" },
};

interface Props {
  levelId: number;
  onClose: () => void;
  onPlay: () => void;
}

export default function LockedNotice({ levelId, onClose, onPlay }: Props) {
  const { C, CD, CL, CP } = usePalette();
  const info = LEVEL_BLURB[levelId] ?? { name: `Level ${levelId}`, what: "this section" };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10,18,28,0.55)",
        backdropFilter: "blur(3px)",
        zIndex: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        animation: "fsFadeIn 0.18s ease",
      }}
    >
      <style>{`
        @keyframes fsFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes fsPopIn {
          from { opacity: 0; transform: translateY(14px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fsWiggle {
          0%,100% { transform: rotate(0deg); }
          30%     { transform: rotate(-9deg); }
          65%     { transform: rotate(9deg); }
        }
      `}</style>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 420,
          background: "white",
          borderRadius: 16,
          padding: "34px 34px 28px",
          textAlign: "center",
          boxShadow: "0 26px 70px rgba(0,0,0,0.3)",
          border: `1px solid ${C}1f`,
          animation: "fsPopIn 0.26s cubic-bezier(0.34, 1.4, 0.64, 1)",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: CP,
            border: `1.5px solid ${C}2e`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            margin: "0 auto 20px",
            animation: "fsWiggle 0.6s ease 0.15s",
          }}
        >
          🔒
        </div>

        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 24,
            margin: "0 0 10px",
            color: "#0a0a0a",
          }}
        >
          Still locked
        </h3>

        <p style={{ color: "#67707d", fontSize: 14.5, lineHeight: 1.7, margin: "0 0 8px" }}>
          <strong style={{ color: CD }}>{info.what}</strong> unlocks when you finish{" "}
          <strong style={{ color: CD }}>{info.name}</strong>.
        </p>
        <p style={{ color: "#9aa4b2", fontSize: 13, lineHeight: 1.65, margin: "0 0 26px" }}>
          You have to play for this one. That's the whole idea.
        </p>

        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: "12px 0",
              background: "transparent",
              color: CL,
              border: `1.5px solid ${C}2e`,
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Maybe later
          </button>
          <button
            onClick={onPlay}
            style={{
              flex: 1.35,
              padding: "12px 0",
              background: C,
              color: readableOn(C),
              border: "none",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: `0 4px 16px ${C}4d`,
            }}
          >
            Play now →
          </button>
        </div>
      </div>
    </div>
  );
}
