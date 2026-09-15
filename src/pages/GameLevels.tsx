import { useState } from "react";

const C = "#1E6FBF";
const CD = "#0D4A8A";
const CL = "#5B9FD6";

const LEVELS = [
  {
    id: 1,
    name: "Cosmopolitan College Brunei",
    subtitle: "College Journey",
    description: "Built the core frontend architecture for the company's flagship product. Led the migration to React and implemented a component library used across 5 products.",
    difficulty: "Beginner",
    tasks: 8,
    xp: 200,
    locked: false,
    logo: "/images/logos/cosmopolitan.png",
  },
  {
    id: 2,
    name: "Muara International Fish Landing",
    subtitle: "Early Career",
    description: "Designed user experiences for 20+ client projects. Created design systems and conducted user research that improved conversion rates by 40%.",
    difficulty: "Intermediate",
    tasks: 12,
    xp: 450,
    locked: true,
    logo: "/images/logos/muara.png",
  },
  {
    id: 3,
    name: "Coffee Bean & Tea Leaf Brunei",
    subtitle: "AI Assistant",
    description: "Joined as an early engineer and built the entire product from scratch. Architected the backend, implemented the frontend, and deployed to production.",
    difficulty: "Advanced",
    tasks: 16,
    xp: 750,
    locked: true,
    logo: "/images/logos/cbtl.png",
  },
];

const DIFF_COLOR: Record<string, string> = {
  Beginner: "#16a34a",
  Intermediate: "#d97706",
  Advanced: "#dc2626",
  Expert: "#9333ea",
};

export default function GameLevels({ onBack, onStartGame, onLevelComplete, achievements }: { onBack: () => void; onStartGame: (levelId: number) => void; onLevelComplete: (levelId: number) => void; achievements: Set<number> }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [started, setStarted] = useState<number | null>(null);

  // Calculate locked state dynamically based on achievements
  const levelsWithLockStatus = LEVELS.map(level => ({
    ...level,
    locked: level.id === 1 ? false : !achievements.has(level.id - 1)
  }));

  // Functional XP sum based on completed achievements
  const totalXP = LEVELS.filter(level => achievements.has(level.id)).reduce((sum, level) => sum + level.xp, 0);

  if (started !== null) {
    return <LevelStarted level={LEVELS[started - 1]} onBack={() => setStarted(null)} onBegin={() => onStartGame(started)} />;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f3f7fc", fontFamily: "'Outfit', sans-serif", color: "#0a0a0a" }}>

      {/* Blue Header Strip */}
      <div style={{ background: `linear-gradient(90deg, ${C}, ${CD})`, padding: "18px 32px", boxShadow: "0 4px 20px rgba(13,74,138,0.2)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <button onClick={onBack} style={{
              background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white",
              borderRadius: 6, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer",
              transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
            >← Back to Portfolio</button>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: "rgba(255,255,255,0.7)", fontWeight: 700, marginBottom: 2 }}>PORTFOLIO GAME</div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(22px, 3vw, 30px)", margin: 0, color: "white" }}>
                Select Your Level
              </h1>
            </div>
          </div>

          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#fef08a" }}>{totalXP}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", letterSpacing: 1, fontWeight: 600 }}>TOTAL XP</div>
            </div>
            <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.2)" }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "white" }}>{achievements.size}/3</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: 1 }}>COMPLETED</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "white" }}>36</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: 1 }}>TOTAL TASKS</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "white" }}>1,400</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: 1 }}>MAX XP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro strip */}
      <div style={{ background: "white", padding: "14px 32px", borderBottom: `1px solid ${C}18` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#555", fontSize: 14, margin: 0 }}>
            Explore my career journey through 3 companies. Each level represents a different role I've held.
          </p>
        </div>
      </div>

      {/* Level grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 20 }}>
          {levelsWithLockStatus.map(level => (
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

      {/* Sticky bottom bar when a level is selected */}
      {selected !== null && (
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0,
          background: "white", borderTop: `2px solid ${C}`,
          padding: "14px 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          boxShadow: "0 -6px 32px rgba(30,111,191,0.12)",
          zIndex: 100,
        }}>
          <div>
            <div style={{ fontSize: 11, color: CL, letterSpacing: 1, fontWeight: 600, marginBottom: 2 }}>READY TO START</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: CD }}>
              Level {selected} — {levelsWithLockStatus[selected - 1].name}
            </div>
          </div>
          <button onClick={() => setStarted(selected!)} style={{
            padding: "12px 36px", background: C, color: "white",
            border: "none", borderRadius: 4, fontSize: 15, fontWeight: 700,
            cursor: "pointer", boxShadow: `0 4px 16px rgba(30,111,191,0.35)`,
          }}>Start Level →</button>
        </div>
      )}
    </div>
  );
}

function CircularLogoThumbnail({ logo, alt, name, size = 52, locked = false }: { logo: string; alt: string; name?: string; size?: number; locked?: boolean }) {
  const [imgError, setImgError] = useState(false);
  const initial = name ? name[0].toUpperCase() : "★";

  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: "linear-gradient(135deg, #1e3a8a, #0d4a8a)",
      border: locked ? "2px solid #cbd5e1" : "2px solid #fbbf24",
      boxShadow: locked ? "none" : "0 3px 10px rgba(251, 191, 36, 0.35)",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", position: "relative", flexShrink: 0,
      color: "#fbbf24", fontFamily: "'Playfair Display', serif", fontWeight: 800,
      fontSize: size * 0.42,
    }}>
      {!imgError ? (
        <img
          src={logo}
          alt={alt}
          onError={() => setImgError(true)}
          style={{
            width: "100%", height: "100%", objectFit: "contain", padding: size * 0.08,
            filter: locked ? "grayscale(80%) opacity(0.6)" : "none",
          }}
        />
      ) : (
        <span>{initial}</span>
      )}
      {locked && (
        <div style={{
          position: "absolute", inset: 0, background: "rgba(241, 245, 249, 0.75)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.38,
        }}>
          🔒
        </div>
      )}
    </div>
  );
}

function LevelCard({ level, selected, onSelect, onStart, achievements }: {
  level: typeof LEVELS[0];
  selected: boolean;
  onSelect: () => void;
  onStart: () => void;
  achievements: Set<number>;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 10, overflow: "hidden", cursor: level.locked ? "default" : "pointer",
        background: "white",
        border: selected
          ? `2px solid ${C}`
          : hovered && !level.locked
          ? `2px solid ${C}50`
          : "2px solid transparent",
        boxShadow: selected
          ? `0 8px 32px rgba(30,111,191,0.18)`
          : hovered && !level.locked
          ? "0 4px 20px rgba(30,111,191,0.1)"
          : "0 1px 8px rgba(30,111,191,0.06)",
        transition: "all 0.25s",
        opacity: level.locked ? 0.6 : 1,
        position: "relative",
      }}
    >
      {/* top accent bar */}
      <div style={{
        height: 4,
        background: level.locked
          ? "#d1d5db"
          : `linear-gradient(90deg, ${CL}, ${C})`,
        opacity: selected ? 1 : hovered ? 0.85 : 0.5,
        transition: "opacity 0.25s",
      }} />

      <div style={{ padding: "24px 26px 22px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <CircularLogoThumbnail logo={level.logo} alt={level.name} name={level.name} size={52} locked={level.locked} />
            <div>
              <div style={{ fontSize: 11, color: CL, letterSpacing: 1, marginBottom: 2 }}>LEVEL {level.id}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: level.locked ? "#94a3b8" : "#0a0a0a" }}>{level.name}</div>
              <div style={{ fontSize: 12, color: level.locked ? "#94a3b8" : C, fontWeight: 500 }}>{level.subtitle}</div>
              {achievements.has(level.id) && (
                <div style={{ fontSize: 10, color: "#16a34a", fontWeight: 700, marginTop: 4 }}>✓ COMPLETED</div>
              )}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
            <div style={{
              padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
              background: level.locked ? "#f1f5f9" : `${DIFF_COLOR[level.difficulty]}15`,
              color: level.locked ? "#94a3b8" : DIFF_COLOR[level.difficulty],
              border: `1px solid ${level.locked ? "#e2e8f0" : DIFF_COLOR[level.difficulty] + "40"}`,
            }}>{level.difficulty}</div>
            {achievements.has(level.id) && (
              <div style={{ fontSize: 10, color: "#16a34a", fontWeight: 600, letterSpacing: 0.5 }}>UNLOCKED</div>
            )}
          </div>
        </div>

        <p style={{ color: level.locked ? "#aaa" : "#555", fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
          {level.description}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 24 }}>
            <div>
              <div style={{ fontSize: 10, color: "#aaa", letterSpacing: 1, fontWeight: 600 }}>TASKS</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: level.locked ? "#aaa" : "#0a0a0a" }}>{level.tasks}</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: "#aaa", letterSpacing: 1, fontWeight: 600 }}>XP REWARD</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: level.locked ? "#aaa" : C }}>+{level.xp}</div>
            </div>
          </div>
          {selected && !level.locked && (
            <button
              onClick={e => { e.stopPropagation(); onStart(); }}
              style={{
                padding: "9px 22px", background: C, color: "white",
                border: "none", borderRadius: 4, fontSize: 13, fontWeight: 700,
                cursor: "pointer", boxShadow: `0 3px 12px rgba(30,111,191,0.35)`,
              }}
            >Enter Level →</button>
          )}
          {level.locked && (
            <div style={{ fontSize: 12, color: "#aaa", display: "flex", alignItems: "center", gap: 4 }}>
              <span>🔒</span> Complete Level {level.id - 1} to unlock
            </div>
          )}
        </div>

        {/* Progress indicator bar */}
        <div style={{ marginTop: 18, height: 3, background: "#f1f5f9", borderRadius: 2, overflow: "hidden" }}>
          <div style={{
            width: !level.locked && selected ? "35%" : !level.locked && hovered ? "15%" : "0%",
            height: "100%",
            background: `linear-gradient(90deg, ${CL}, ${C})`,
            borderRadius: 2, transition: "width 0.5s ease",
          }} />
        </div>
      </div>
    </div>
  );
}

function LevelStarted({ level, onBack, onBegin }: { level: typeof LEVELS[0]; onBack: () => void; onBegin: () => void }) {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "#f3f7fc", fontFamily: "'Outfit', sans-serif", padding: 32,
      zIndex: 1000,
    }}>
      <div style={{ textAlign: "center", maxWidth: 540, width: "100%" }}>
        <div style={{ margin: "0 auto 24px", display: "flex", justifyContent: "center" }}>
          <CircularLogoThumbnail logo={level.logo} alt={level.name} name={level.name} size={96} />
        </div>
        <div style={{ fontSize: 11, letterSpacing: 2.5, color: C, fontWeight: 700, marginBottom: 8 }}>LEVEL {level.id} SELECTED</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 900, margin: "0 0 12px", color: "#0a0a0a" }}>{level.name}</h1>
        <p style={{ color: "#666", fontSize: 16, lineHeight: 1.75, margin: "0 0 36px" }}>{level.description}</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginBottom: 40 }}>
          {[["Tasks", level.tasks], ["XP", `+${level.xp}`], ["Difficulty", level.difficulty]].map(([k, v]) => (
            <div key={k as string} style={{
              padding: "14px 22px", background: "white", border: `1px solid ${C}20`, borderRadius: 8, textAlign: "center",
              boxShadow: "0 2px 10px rgba(30,111,191,0.07)",
            }}>
              <div style={{ fontSize: 10, color: "#aaa", letterSpacing: 1, fontWeight: 600, marginBottom: 4 }}>{k as string}</div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#0a0a0a" }}>{v as string | number}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button onClick={onBack} style={{
            padding: "12px 28px", background: "white", border: `1px solid ${C}30`, color: C,
            borderRadius: 4, fontSize: 14, fontWeight: 600, cursor: "pointer",
          }}>← Choose Another</button>
          <button onClick={onBegin} style={{
            padding: "12px 32px", background: C, color: "white",
            border: "none", borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: "pointer",
            boxShadow: `0 4px 18px rgba(30,111,191,0.35)`,
          }}>Begin →</button>
        </div>
      </div>
    </div>
  );
}
