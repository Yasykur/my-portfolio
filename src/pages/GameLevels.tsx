import { useState } from "react";
import { readableOn, usePalette } from "../site/SiteContext";
import { useIsMobile } from "../site/useMediaQuery";

interface LevelMeta {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  difficulty: string;
  tasks: number;
  xp: number;
  logo: string;
}

const LEVELS: LevelMeta[] = [
  {
    id: 1,
    name: "Cosmopolitan College Brunei",
    subtitle: "College Journey",
    description:
      "Four years of coursework, campus projects and a final-year team build. Where the habit of just figuring it out started.",
    difficulty: "Beginner",
    tasks: 8,
    xp: 200,
    logo: "/images/logos/cosmopolitan.png",
  },
  {
    id: 2,
    name: "Muara International Fish Landing",
    subtitle: "HR & Operations",
    description:
      "Six months as an HR intern that turned into building an inventory system, fixing printers, and automating whatever Excel was doing wrong.",
    difficulty: "Intermediate",
    tasks: 12,
    xp: 450,
    logo: "/images/logos/muara.png",
  },
  {
    id: 3,
    name: "Coffee Bean & Tea Leaf Brunei",
    subtitle: "AI/IT Supervisor",
    description:
      "Solo AI/IT lead — company-wide AI adoption, the internal SOPs that make it stick, and an HR platform rollout alongside it.",
    difficulty: "Advanced",
    tasks: 16,
    xp: 750,
    logo: "/images/logos/cbtl.png",
  },
];

const TOTAL_TASKS = LEVELS.reduce((n, l) => n + l.tasks, 0);
const MAX_XP = LEVELS.reduce((n, l) => n + l.xp, 0);

const DIFF_COLOR: Record<string, string> = {
  Beginner: "#16a34a",
  Intermediate: "#d97706",
  Advanced: "#dc2626",
  Expert: "#9333ea",
};

interface LevelState extends LevelMeta {
  locked: boolean;
}

export default function GameLevels({
  onBack,
  onStartGame,
  achievements,
}: {
  onBack: () => void;
  onStartGame: (levelId: number) => void;
  onLevelComplete: (levelId: number) => void;
  achievements: Set<number>;
}) {
  const { C, CD, CL } = usePalette();
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState<number | null>(null);
  const [started, setStarted] = useState<number | null>(null);

  const levels: LevelState[] = LEVELS.map((level) => ({
    ...level,
    locked: level.id === 1 ? false : !achievements.has(level.id - 1),
  }));

  const totalXP = LEVELS.filter((l) => achievements.has(l.id)).reduce((sum, l) => sum + l.xp, 0);

  if (started !== null) {
    const startedLevel = levels.find((l) => l.id === started);
    if (startedLevel) {
      return (
        <LevelStarted
          level={startedLevel}
          onBack={() => setStarted(null)}
          onBegin={() => onStartGame(started)}
        />
      );
    }
  }

  const selectedLevel = selected !== null ? levels.find((l) => l.id === selected) : undefined;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f7fc",
        fontFamily: "'Outfit', sans-serif",
        color: "#0a0a0a",
      }}
    >
      {/* ── Header strip ── */}
      <div
        style={{
          background: `linear-gradient(90deg, ${C}, ${CD})`,
          padding: isMobile ? "14px 18px" : "18px 32px",
          boxShadow: `0 4px 20px ${CD}33`,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <button
              onClick={onBack}
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "white",
                borderRadius: 6,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
            >
              ← Back to Portfolio
            </button>
            <div>
              <div
                style={{
                  fontSize: 11,
                  letterSpacing: 2,
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                PORTFOLIO GAME
              </div>
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  fontSize: "clamp(22px, 3vw, 30px)",
                  margin: 0,
                  color: "white",
                }}
              >
                Select Your Level
              </h1>
            </div>
          </div>

          <div style={{ display: "flex", gap: isMobile ? 14 : 24, alignItems: "center", flexWrap: "wrap" }}>
            <HeaderStat value={String(totalXP)} label="TOTAL XP" highlight />
            <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.2)" }} />
            <HeaderStat value={`${achievements.size}/3`} label="COMPLETED" />
            {!isMobile && <HeaderStat value={String(TOTAL_TASKS)} label="TOTAL TASKS" />}
            {!isMobile && <HeaderStat value={MAX_XP.toLocaleString()} label="MAX XP" />}
          </div>
        </div>
      </div>

      {/* ── Intro strip ── */}
      <div style={{ background: "white", padding: isMobile ? "12px 18px" : "14px 32px", borderBottom: `1px solid ${C}1f` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#555", fontSize: 14, margin: 0 }}>
            Three levels, three chapters. Finish one and the matching section unlocks back on the
            portfolio.
          </p>
        </div>
      </div>

      {/* ── Level grid ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "26px 18px 130px" : "40px 32px 110px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(440px, 1fr))",
            gap: 20,
          }}
        >
          {levels.map((level) => (
            <LevelCard
              key={level.id}
              level={level}
              selected={selected === level.id}
              onSelect={() => !level.locked && setSelected(selected === level.id ? null : level.id)}
              onStart={() => setStarted(level.id)}
              achievements={achievements}
            />
          ))}
        </div>
      </div>

      {/* ── Sticky start bar ── */}
      {selectedLevel && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            background: "white",
            borderTop: `2px solid ${C}`,
            padding: isMobile ? "12px 18px" : "14px 32px",
            gap: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: `0 -6px 32px ${C}1f`,
            zIndex: 100,
          }}
        >
          <div>
            <div style={{ fontSize: 11, color: CL, letterSpacing: 1, fontWeight: 600, marginBottom: 2 }}>
              READY TO START
            </div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                fontWeight: 700,
                color: CD,
              }}
            >
              Level {selectedLevel.id} — {selectedLevel.name}
            </div>
          </div>
          <button
            onClick={() => setStarted(selectedLevel.id)}
            style={{
              padding: "12px 36px",
              background: C,
              color: readableOn(C),
              border: "none",
              borderRadius: 4,
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: `0 4px 16px ${C}59`,
              fontFamily: "inherit",
            }}
          >
            Start Level →
          </button>
        </div>
      )}
    </div>
  );
}

function HeaderStat({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: highlight ? 22 : 20,
          fontWeight: 700,
          color: highlight ? "#fef08a" : "white",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.65)",
          letterSpacing: 1,
          fontWeight: 600,
        }}
      >
        {label}
      </div>
    </div>
  );
}

function CircularLogoThumbnail({
  logo,
  alt,
  name,
  size = 52,
  locked = false,
}: {
  logo: string;
  alt: string;
  name?: string;
  size?: number;
  locked?: boolean;
}) {
  const { C, CD } = usePalette();
  const [imgError, setImgError] = useState(false);
  const initial = name ? name[0].toUpperCase() : "★";

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: imgError ? `linear-gradient(135deg, ${CD}, ${C})` : "transparent",
        border: locked ? "2px solid #cbd5e1" : "2px solid #fbbf24",
        boxShadow: locked ? "none" : "0 3px 10px rgba(251,191,36,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
        color: "#fbbf24",
        fontFamily: "'Playfair Display', serif",
        fontWeight: 800,
        fontSize: size * 0.42,
      }}
    >
      {!imgError ? (
        <img
          src={logo}
          alt={alt}
          onError={() => setImgError(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            padding: size * 0.08,
            filter: locked ? "grayscale(80%) opacity(0.6)" : "none",
          }}
        />
      ) : (
        <span>{initial}</span>
      )}
      {locked && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(241,245,249,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: size * 0.38,
          }}
        >
          🔒
        </div>
      )}
    </div>
  );
}

function LevelCard({
  level,
  selected,
  onSelect,
  onStart,
  achievements,
}: {
  level: LevelState;
  selected: boolean;
  onSelect: () => void;
  onStart: () => void;
  achievements: Set<number>;
}) {
  const { C, CL } = usePalette();
  const isMobile = useIsMobile();
  const [hovered, setHovered] = useState(false);
  const done = achievements.has(level.id);

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 10,
        overflow: "hidden",
        cursor: level.locked ? "default" : "pointer",
        background: "white",
        border: selected
          ? `2px solid ${C}`
          : hovered && !level.locked
            ? `2px solid ${C}50`
            : "2px solid transparent",
        boxShadow: selected
          ? `0 8px 32px ${C}2e`
          : hovered && !level.locked
            ? `0 4px 20px ${C}1a`
            : `0 1px 8px ${C}0f`,
        transition: "all 0.25s",
        opacity: level.locked ? 0.6 : 1,
        position: "relative",
      }}
    >
      {/* top accent bar */}
      <div
        style={{
          height: 4,
          background: level.locked ? "#d1d5db" : `linear-gradient(90deg, ${CL}, ${C})`,
          opacity: selected ? 1 : hovered ? 0.85 : 0.5,
          transition: "opacity 0.25s",
        }}
      />

      <div style={{ padding: isMobile ? "18px 18px 16px" : "24px 26px 22px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 16,
            gap: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, minWidth: 0 }}>
            <CircularLogoThumbnail
              logo={level.logo}
              alt={level.name}
              name={level.name}
              size={52}
              locked={level.locked}
            />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 11, color: CL, letterSpacing: 1, marginBottom: 2 }}>
                LEVEL {level.id}
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 19,
                  fontWeight: 700,
                  color: level.locked ? "#94a3b8" : "#0a0a0a",
                  lineHeight: 1.3,
                }}
              >
                {level.name}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: level.locked ? "#94a3b8" : C,
                  fontWeight: 500,
                }}
              >
                {level.subtitle}
              </div>
              {done && (
                <div style={{ fontSize: 10, color: "#16a34a", fontWeight: 700, marginTop: 4 }}>
                  ✓ COMPLETED
                </div>
              )}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
            <div
              style={{
                padding: "3px 10px",
                borderRadius: 20,
                fontSize: 11,
                fontWeight: 700,
                whiteSpace: "nowrap",
                background: level.locked ? "#f1f5f9" : `${DIFF_COLOR[level.difficulty]}15`,
                color: level.locked ? "#94a3b8" : DIFF_COLOR[level.difficulty],
                border: `1px solid ${
                  level.locked ? "#e2e8f0" : DIFF_COLOR[level.difficulty] + "40"
                }`,
              }}
            >
              {level.difficulty}
            </div>
            {done && (
              <div style={{ fontSize: 10, color: "#16a34a", fontWeight: 600, letterSpacing: 0.5 }}>
                UNLOCKED
              </div>
            )}
          </div>
        </div>

        <p
          style={{
            color: level.locked ? "#aaa" : "#555",
            fontSize: 14,
            lineHeight: 1.7,
            margin: "0 0 20px",
          }}
        >
          {level.description}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 24 }}>
            <div>
              <div style={{ fontSize: 10, color: "#aaa", letterSpacing: 1, fontWeight: 600 }}>
                TASKS
              </div>
              <div
                style={{ fontSize: 18, fontWeight: 700, color: level.locked ? "#aaa" : "#0a0a0a" }}
              >
                {level.tasks}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: "#aaa", letterSpacing: 1, fontWeight: 600 }}>
                XP REWARD
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, color: level.locked ? "#aaa" : C }}>
                +{level.xp}
              </div>
            </div>
          </div>

          {selected && !level.locked && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onStart();
              }}
              style={{
                padding: "9px 22px",
                background: C,
                color: readableOn(C),
                border: "none",
                borderRadius: 4,
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: `0 3px 12px ${C}59`,
                whiteSpace: "nowrap",
                fontFamily: "inherit",
              }}
            >
              Enter Level →
            </button>
          )}
          {level.locked && (
            <div
              style={{
                fontSize: 12,
                color: "#aaa",
                display: "flex",
                alignItems: "center",
                gap: 4,
                whiteSpace: "nowrap",
              }}
            >
              <span>🔒</span> Complete Level {level.id - 1} to unlock
            </div>
          )}
        </div>

        {/* progress indicator */}
        <div
          style={{
            marginTop: 18,
            height: 3,
            background: "#f1f5f9",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: done ? "100%" : !level.locked && selected ? "35%" : !level.locked && hovered ? "15%" : "0%",
              height: "100%",
              background: done ? "#16a34a" : `linear-gradient(90deg, ${CL}, ${C})`,
              borderRadius: 2,
              transition: "width 0.5s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function LevelStarted({
  level,
  onBack,
  onBegin,
}: {
  level: LevelState;
  onBack: () => void;
  onBegin: () => void;
}) {
  const { C, CD } = usePalette();
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f7fc",
        fontFamily: "'Outfit', sans-serif",
        padding: isMobile ? 20 : 32,
        zIndex: 1000,
        overflowY: "auto",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 540, width: "100%" }}>
        <div style={{ margin: "0 auto 24px", display: "flex", justifyContent: "center" }}>
          <CircularLogoThumbnail logo={level.logo} alt={level.name} name={level.name} size={96} />
        </div>

        <div style={{ fontSize: 11, letterSpacing: 2.5, color: C, fontWeight: 700, marginBottom: 8 }}>
          LEVEL {level.id} SELECTED
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: isMobile ? 26 : 36,
            fontWeight: 900,
            margin: "0 0 12px",
            color: "#0a0a0a",
            lineHeight: 1.2,
          }}
        >
          {level.name}
        </h1>
        <p style={{ color: "#666", fontSize: 16, lineHeight: 1.75, margin: "0 0 36px" }}>
          {level.description}
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginBottom: 40, flexWrap: "wrap" }}>
          {([
            ["Tasks", String(level.tasks)],
            ["XP", `+${level.xp}`],
            ["Difficulty", level.difficulty],
          ] as [string, string][]).map(([k, v]) => (
            <div
              key={k}
              style={{
                padding: "14px 22px",
                background: "white",
                border: `1px solid ${C}33`,
                borderRadius: 8,
                textAlign: "center",
                boxShadow: `0 2px 10px ${C}12`,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#aaa",
                  letterSpacing: 1,
                  fontWeight: 600,
                  marginBottom: 4,
                }}
              >
                {k}
              </div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#0a0a0a" }}>{v}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={onBack}
            style={{
              padding: "12px 28px",
              background: "white",
              border: `1px solid ${C}4d`,
              color: C,
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            ← Choose Another
          </button>
          <button
            onClick={onBegin}
            style={{
              padding: "12px 32px",
              background: C,
              color: readableOn(C),
              border: "none",
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: `0 4px 18px ${C}59`,
              fontFamily: "inherit",
            }}
          >
            Begin →
          </button>
        </div>

        <div style={{ marginTop: 22, fontSize: 12, color: CD, opacity: 0.55 }}>
          Beat this level to unlock its section on the portfolio.
        </div>
      </div>
    </div>
  );
}
