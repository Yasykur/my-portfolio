import { useRef, useState } from "react";

interface Props { onPlayClick: () => void; achievements: Set<number>; }

const C = "#1E6FBF";
const CD = "#0D4A8A";
const CL = "#5B9FD6";
const CP = "#E8F2FB";

/* ─── LEVEL HOVER TOOLTIP ───────────────────────────────────── */
interface LevelTooltipProps {
  level: number;
  name: string;
  tasks: number;
  done: number;
  status: "complete" | "active" | "locked";
}
function LevelTooltip({ level, name, tasks, done, status }: LevelTooltipProps) {
  const pct = Math.round((done / tasks) * 100);
  const statusColor = status === "complete" ? "#16a34a" : status === "active" ? C : "#aaa";
  const statusLabel = status === "complete" ? "✓ Complete" : status === "active" ? "In Progress" : "🔒 Locked";
  return (
    <div style={{
      position: "absolute", bottom: "calc(100% + 14px)", left: "50%", transform: "translateX(-50%)",
      width: 188, background: "white", borderRadius: 10,
      border: `1.5px solid ${C}22`,
      boxShadow: "0 8px 28px rgba(13,74,138,0.18)",
      padding: "14px 16px", zIndex: 50,
      animation: "fadeInUp 0.18s ease",
    }}>
      <div style={{ fontSize: 9, letterSpacing: 1.5, color: CL, fontWeight: 700, marginBottom: 4 }}>
        LEVEL {level}
      </div>
      <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 14, color: "#0a0a0a", marginBottom: 10 }}>
        {name}
      </div>
      {/* Stars */}
      <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
        {[1, 2, 3].map(i => (
          <span key={i} style={{ fontSize: 14, color: i <= Math.ceil(pct / 34) && status !== "locked" ? "#f59e0b" : "#e2e8f0" }}>★</span>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 11, color: "#999", fontWeight: 500 }}>{done}/{tasks}</span>
      </div>
      {/* Progress bar */}
      <div style={{ height: 5, background: "#f1f5f9", borderRadius: 3, overflow: "hidden", marginBottom: 8 }}>
        <div style={{
          height: "100%", width: `${pct}%`,
          background: `linear-gradient(90deg, ${CL}, ${C})`,
          borderRadius: 3, transition: "width 0.4s",
        }} />
      </div>
      <div style={{ fontSize: 11, fontWeight: 700, color: statusColor }}>{statusLabel}</div>
      {/* Arrow */}
      <div style={{
        position: "absolute", bottom: -7, left: "50%", transform: "translateX(-50%)",
        width: 14, height: 7, overflow: "hidden",
      }}>
        <div style={{
          width: 12, height: 12, background: "white",
          border: `1.5px solid ${C}22`,
          transform: "rotate(45deg)", marginTop: -7, marginLeft: 1,
        }} />
      </div>
    </div>
  );
}

/* ─── PHOTO CIRCLE LOGO ─────────────────────────────────────── */
function CircleLogo({
  label, level, levelName, tasks, done, status,
}: {
  label: string;
  level: number;
  levelName: string;
  tasks: number;
  done: number;
  status: "complete" | "active" | "locked";
}) {
  const [img, setImg] = useState<string | null>(null);
  const [hovered, setHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
      <div
        style={{ position: "relative" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Level completion tooltip */}
        {hovered && (
          <LevelTooltip level={level} name={levelName} tasks={tasks} done={done} status={status} />
        )}

        {/* 3D sphere */}
        <div
          style={{ perspective: 600, cursor: "pointer" }}
          onClick={() => inputRef.current?.click()}
          title="Click to add your picture"
        >
          <div style={{
            width: 140, height: 140, borderRadius: "50%",
            background: `radial-gradient(circle at 33% 30%, ${CL}, ${CD})`,
            boxShadow: `0 10px 36px rgba(13,74,138,0.42), inset 0 3px 12px rgba(255,255,255,0.28), inset 0 -4px 14px rgba(0,0,0,0.22)`,
            transform: hovered ? "rotateY(16deg) rotateX(-9deg) scale(1.06)" : "rotateY(8deg) rotateX(-4deg)",
            transition: "transform 0.35s ease",
            overflow: "hidden",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
          }}>
            {img
              ? <img src={img} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              : (
                <div style={{ textAlign: "center", color: "rgba(255,255,255,0.88)", lineHeight: 1.5 }}>
                  <div style={{ fontSize: 28, marginBottom: 2 }}>+</div>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 0.5 }}>Add Photo</div>
                </div>
              )
            }
            {/* Shine */}
            <div style={{ position: "absolute", top: 9, left: 22, width: 40, height: 14, background: "rgba(255,255,255,0.22)", borderRadius: 8, filter: "blur(4px)", pointerEvents: "none" }} />
          </div>
          <input ref={inputRef} type="file" accept="image/*" style={{ display: "none" }}
            onChange={e => { const f = e.target.files?.[0]; if (f) setImg(URL.createObjectURL(f)); }} />
        </div>

        {/* UNLOCKED badge — overlapping front */}
        <div style={{ position: "absolute", bottom: -10, left: "50%", transform: "translateX(-50%)", zIndex: 20 }}>
          <UnlockBadge />
        </div>
      </div>
      <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: CD, fontSize: 12, letterSpacing: 1.5, marginTop: 14 }}>
        {label}
      </span>
    </div>
  );
}

function UnlockBadge() {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 4, padding: "3px 10px",
      background: "linear-gradient(90deg, #16a34a, #15803d)",
      borderRadius: 20, color: "white", fontSize: 10, fontWeight: 700,
      letterSpacing: 0.5, whiteSpace: "nowrap",
      boxShadow: "0 2px 8px rgba(22,163,74,0.45), 0 0 0 2px white",
    }}>
      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
        <rect x="1" y="4" width="8" height="6" rx="1" fill="white" />
        <path d="M3 4V3a2 2 0 0 1 4 0v1" stroke="white" strokeWidth="1.3" fill="none" />
      </svg>
      UNLOCKED
    </div>
  );
}

/* ─── HERO PLAY ORB ─────────────────────────────────────────── */
function HeroPlayOrb({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div style={{
        fontSize: 10, fontWeight: 700, letterSpacing: 2.5,
        color: C, background: CP, border: `1px solid ${C}28`,
        padding: "4px 13px", borderRadius: 20,
      }}>INTERACTIVE EXPERIENCE</div>
      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => { setHovered(false); setPressed(false); }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        style={{ background: "none", border: "none", cursor: "pointer", outline: "none", padding: 0 }}
        title="Enter Portfolio Game"
      >
        <div style={{
          width: 200, height: 200, borderRadius: "50%",
          background: hovered
            ? `radial-gradient(circle at 36% 32%, ${CL}, ${C})`
            : `radial-gradient(circle at 36% 32%, ${C}, ${CD})`,
          boxShadow: hovered
            ? `0 0 72px rgba(30,111,191,0.5), 0 0 140px rgba(30,111,191,0.18), inset 0 3px 14px rgba(255,255,255,0.35), inset 0 -4px 12px rgba(0,0,0,0.18)`
            : `0 10px 44px rgba(13,74,138,0.32), inset 0 3px 14px rgba(255,255,255,0.2), inset 0 -4px 12px rgba(0,0,0,0.14)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          transform: pressed ? "scale(0.94)" : hovered ? "scale(1.06)" : "scale(1)",
          transition: "all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)",
          position: "relative",
        }}>
          <div style={{ position: "absolute", inset: -8, borderRadius: "50%", border: `2px solid ${C + (hovered ? "70" : "22")}`, transition: "border-color 0.3s" }} />
          <div style={{ position: "absolute", inset: -20, borderRadius: "50%", border: `1px solid ${C + (hovered ? "40" : "0e")}`, transition: "border-color 0.3s" }} />
          <div style={{
            width: 0, height: 0,
            borderTop: "28px solid transparent",
            borderBottom: "28px solid transparent",
            borderLeft: `48px solid rgba(255,255,255,${hovered ? 1 : 0.9})`,
            marginLeft: 12,
            filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))",
          }} />
          <div style={{ position: "absolute", top: 30, left: 46, width: 50, height: 18, background: "rgba(255,255,255,0.18)", borderRadius: 10, filter: "blur(5px)" }} />
        </div>
      </button>
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, color: "#888", textTransform: "uppercase" }}>Click to Play</span>
    </div>
  );
}

/* ─── PORTFOLIO CARD ─────────────────────────────────────────── */
const PORTFOLIO_ITEMS = [
  { title: "Brand Identity", category: "Design", img: "photo-1558618666-fcd25c85cd64", year: "2024" },
  { title: "Web App Dashboard", category: "Development", img: "photo-1551288049-bebda4e38f71", year: "2024" },
  { title: "Mobile Experience", category: "UX/UI", img: "photo-1512941937669-90a1b58e7e9c", year: "2023" },
  { title: "Editorial Layout", category: "Print", img: "photo-1586953208448-b95a79798f07", year: "2023" },
  { title: "3D Animation", category: "Motion", img: "photo-1535223289827-42f1e9919769", year: "2023" },
  { title: "Photography Series", category: "Photography", img: "photo-1506905925346-21bda4d32df4", year: "2022" },
];

function PortfolioCard({ item }: { item: typeof PORTFOLIO_ITEMS[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
      borderRadius: 8, overflow: "hidden", background: "white", cursor: "pointer",
      boxShadow: hovered ? `0 16px 48px rgba(30,111,191,0.16)` : `0 2px 12px rgba(30,111,191,0.07)`,
      transform: hovered ? "translateY(-5px)" : "none",
      transition: "all 0.3s", border: `1px solid ${C}15`,
    }}>
      <div style={{ height: 220, overflow: "hidden", background: CP, position: "relative" }}>
        <img src={`https://images.unsplash.com/${item.img}?w=600&h=400&fit=crop&auto=format`} alt={item.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s", transform: hovered ? "scale(1.06)" : "scale(1)" }} />
        <div style={{
          position: "absolute", inset: 0, background: hovered ? "rgba(13,74,138,0.32)" : "rgba(13,74,138,0.02)",
          transition: "background 0.3s", display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          {hovered && <button style={{ padding: "10px 22px", background: "white", color: CD, border: "none", borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>View Project →</button>}
        </div>
      </div>
      <div style={{ padding: "20px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ padding: "3px 10px", background: `${C}10`, color: C, borderRadius: 20, fontSize: 11, fontWeight: 600 }}>{item.category}</span>
          <span style={{ color: "#bbb", fontSize: 12 }}>{item.year}</span>
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, margin: "0 0 6px", color: CD }}>{item.title}</h3>
        <p style={{ color: "#999", fontSize: 14, margin: 0, lineHeight: 1.65 }}>A carefully crafted project exploring the boundaries of design and interaction.</p>
      </div>
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────── */
export default function Home({ onPlayClick, achievements }: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Design", "Development", "UX/UI", "Motion"];
  const filtered = activeFilter === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(p => p.category === activeFilter);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a", background: "#fff" }}>

      {/* ── NAV ── */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "white", borderBottom: `1px solid ${C}18`, boxShadow: "0 2px 16px rgba(30,111,191,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 66 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              background: `radial-gradient(circle at 35% 30%, ${CL}, ${CD})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 17, fontWeight: 900, color: "white",
              fontFamily: "'Playfair Display', serif",
              boxShadow: `0 2px 10px rgba(13,74,138,0.28)`,
            }}>FS</div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: CD }}>Fawwaz Susanto</span>
          </div>
          <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {["Home", "Work", "About", "Contact"].map(item => (
              <a key={item} href="#" style={{ padding: "7px 16px", color: "#555", fontSize: 14, fontWeight: 500, borderRadius: 4, textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = C; e.currentTarget.style.background = CP; }}
                onMouseLeave={e => { e.currentTarget.style.color = "#555"; e.currentTarget.style.background = "transparent"; }}
              >{item}</a>
            ))}
            <button style={{ marginLeft: 10, padding: "8px 22px", background: C, color: "white", border: "none", borderRadius: 4, fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: `0 2px 10px rgba(30,111,191,0.28)`, transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = CD)}
              onMouseLeave={e => (e.currentTarget.style.background = C)}
            >Hire Me</button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ background: "white", padding: "80px 32px 72px", borderBottom: `1px solid ${C}12` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", background: CP, borderRadius: 20, color: C, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 24, border: `1px solid ${C}22` }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
              CREATIVE PORTFOLIO
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(38px, 4.5vw, 62px)", color: "#0a0a0a", lineHeight: 1.08, margin: "0 0 22px" }}>
              Crafting<br />
              <span style={{ color: C, fontStyle: "italic" }}>digital</span> work<br />
              that lasts.
            </h1>
            <p style={{ color: "#666", fontSize: 17, lineHeight: 1.75, margin: "0 0 36px", maxWidth: 460 }}>
              Designer &amp; developer creating bold, purposeful work. From brand identities to interactive experiences — built to stand out.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button style={{ padding: "13px 30px", background: C, color: "white", border: "none", borderRadius: 4, fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 18px rgba(30,111,191,0.32)`, transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.background = CD; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = C; e.currentTarget.style.transform = "none"; }}
              >View My Work</button>
              <button style={{ padding: "13px 30px", background: "transparent", color: C, border: `2px solid ${C}45`, borderRadius: 4, fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = C; e.currentTarget.style.background = CP; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `${C}45`; e.currentTarget.style.background = "transparent"; }}
              >Get In Touch</button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <HeroPlayOrb onClick={onPlayClick} />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: C, padding: "26px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[["42+", "Projects Done"], ["8", "Years Active"], ["30+", "Happy Clients"], ["12", "Awards Won"]].map(([num, label], i) => (
            <div key={label} style={{ textAlign: "center", padding: "8px 0", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.2)" : "none" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 900, color: "white" }}>{num}</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, fontWeight: 500, letterSpacing: 1, marginTop: 2 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACHIEVEMENTS ── */}
      <section style={{ padding: "88px 32px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-block", padding: "4px 14px", background: `${C}10`, borderRadius: 20, color: C, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 14 }}>CAREER JOURNEY</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 36, margin: "0 0 10px", color: "#0a0a0a" }}>Achievements</h2>
            <p style={{ color: "#888", fontSize: 15, margin: 0 }}>Complete each company level to unlock achievements. {achievements.size}/3 completed.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { id: 1, company: "TechCorp Inc.", role: "Senior Frontend Developer", icon: "◈" },
              { id: 2, company: "DesignStudio", role: "UI/UX Designer", icon: "⬡" },
              { id: 3, company: "StartupXYZ", role: "Full Stack Engineer", icon: "⟳" },
            ].map(achievement => (
              <div key={achievement.id} style={{
                background: "white",
                border: `2px solid ${achievements.has(achievement.id) ? "#16a34a" : "#e2e8f0"}`,
                borderRadius: 12,
                padding: "28px 24px",
                boxShadow: achievements.has(achievement.id) ? "0 8px 32px rgba(22,163,74,0.15)" : "0 2px 12px rgba(30,111,191,0.06)",
                opacity: achievements.has(achievement.id) ? 1 : 0.6,
                transition: "all 0.3s",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  <div style={{
                    width: 56, height: 56,
                    borderRadius: 12,
                    background: achievements.has(achievement.id) ? "#16a34a" : CP,
                    border: `1px solid ${achievements.has(achievement.id) ? "#16a34a" : C + "25"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 24,
                    color: achievements.has(achievement.id) ? "white" : C,
                  }}>
                    {achievements.has(achievement.id) ? "✓" : achievement.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: CL, letterSpacing: 1, fontWeight: 600, marginBottom: 2 }}>LEVEL {achievement.id}</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#0a0a0a" }}>{achievement.company}</div>
                    <div style={{ fontSize: 13, color: C, fontWeight: 500 }}>{achievement.role}</div>
                  </div>
                </div>
                <div style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: achievements.has(achievement.id) ? "#16a34a" : "#94a3b8",
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                }}>
                  {achievements.has(achievement.id) ? "✓ UNLOCKED" : "🔒 LOCKED"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section style={{ padding: "88px 32px", background: "white" }} id="work">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44, flexWrap: "wrap", gap: 20 }}>
            <div>
              <div style={{ display: "inline-block", padding: "4px 14px", background: `${C}10`, borderRadius: 20, color: C, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>SELECTED WORK</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 36, margin: 0, color: "#0a0a0a" }}>Portfolio</h2>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {filters.map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} style={{
                  padding: "7px 18px", borderRadius: 4, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                  border: activeFilter === f ? "none" : `1px solid ${C}28`,
                  background: activeFilter === f ? C : "transparent", color: activeFilter === f ? "white" : C,
                }}>{f}</button>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
            {filtered.map(item => <PortfolioCard key={item.title} item={item} />)}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: "88px 32px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", padding: "4px 14px", background: `${C}10`, borderRadius: 20, color: C, fontSize: 11, fontWeight: 700, letterSpacing: 2, marginBottom: 18 }}>ABOUT ME</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 38, margin: "0 0 20px", color: "#0a0a0a", lineHeight: 1.2 }}>
              I design things that people love to use.
            </h2>
            <p style={{ color: "#666", fontSize: 16, lineHeight: 1.8, margin: "0 0 24px" }}>
              Based in London. 8 years building brands, interfaces, and experiences for startups and established companies alike. I believe the best work happens at the intersection of craft and strategy.
            </p>
            <div style={{ display: "flex", gap: 32, marginBottom: 30 }}>
              {[["Figma", "Expert"], ["React", "Advanced"], ["Branding", "Expert"]].map(([skill, lvl]) => (
                <div key={skill}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#0a0a0a" }}>{skill}</div>
                  <div style={{ fontSize: 12, color: C, fontWeight: 500 }}>{lvl}</div>
                </div>
              ))}
            </div>
            <button style={{ padding: "12px 28px", background: C, color: "white", border: "none", borderRadius: 4, fontSize: 14, fontWeight: 600, cursor: "pointer", boxShadow: `0 2px 12px rgba(30,111,191,0.28)` }}>Download CV</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[{ label: "Brand Strategy", val: 90 }, { label: "UI Design", val: 95 }, { label: "Front-end Dev", val: 85 }, { label: "Motion Design", val: 75 }].map(({ label, val }) => (
              <div key={label} style={{ background: "white", borderRadius: 8, padding: 20, boxShadow: `0 2px 12px rgba(30,111,191,0.06)`, border: `1px solid ${C}15` }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#777", marginBottom: 10 }}>{label}</div>
                <div style={{ background: CP, borderRadius: 4, height: 6, overflow: "hidden" }}>
                  <div style={{ width: `${val}%`, height: "100%", background: `linear-gradient(90deg, ${CL}, ${C})`, borderRadius: 4 }} />
                </div>
                <div style={{ fontSize: 20, fontWeight: 700, color: CD, marginTop: 8 }}>{val}%</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ padding: "80px 32px", background: CD }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 40, color: "white", margin: "0 0 14px" }}>Let's build something great.</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, margin: "0 0 36px" }}>Open for freelance projects and full-time roles. Drop a message.</p>
          <div style={{ display: "flex", gap: 12, maxWidth: 500, margin: "0 auto" }}>
            <input placeholder="your@email.com" style={{ flex: 1, padding: "13px 18px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 4, color: "white", fontSize: 15, outline: "none" }} />
            <button style={{ padding: "13px 28px", background: "white", color: CD, border: "none", borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>Say Hello</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#07243d", padding: "26px 32px", borderTop: `2px solid ${C}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18, color: "white" }}>Portfolio</div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>© 2026 · Chelsea Blue Edition</div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Twitter", "Dribbble", "GitHub", "LinkedIn"].map(s => (
              <a key={s} href="#" style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
