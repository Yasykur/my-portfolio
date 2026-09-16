import { useState } from "react";
import PageShell from "../components/PageShell";
import type { PageKey } from "../components/SiteNav";
import { usePalette } from "../site/SiteContext";

/* ─────────────────────────────────────────────────────────────
   TO FILL IN LATER
   Replace the placeholder groups below with your real picks.
   Aim for ~20 total across the groups — the point is the best ones,
   not every single one LinkedIn lists.
   ───────────────────────────────────────────────────────────── */

interface SkillGroup {
  heading: string;
  blurb?: string;
  skills: string[];
}

const GROUPS: SkillGroup[] = [
  {
    heading: "AI & Automation",
    blurb: "The part of the job I actually own.",
    skills: ["Artificial Intelligence (AI)", "Automation", "Prompt Writing", "AI Tool Adoption"],
  },
  {
    heading: "IT & Systems",
    skills: ["Microsoft 365", "IT Troubleshooting", "Computing", "Inventory Systems"],
  },
  {
    heading: "HR & Operations",
    skills: ["HR Documentation", "Payroll Support", "Attendance & Records", "Asset Management"],
  },
  {
    heading: "Ways of working",
    skills: ["Team Leadership", "Interpersonal Skills", "Malay", "Bahasa Indonesia"],
  },
];

/** Flip to true once the lists above are final — hides the "draft" banner. */
const SKILLS_FINALISED = false;

interface Props {
  unlocked: Set<number>;
  onNavigate: (page: PageKey) => void;
  onLockedAttempt: (levelId: number) => void;
  onPlayClick: () => void;
}

export default function Skills(props: Props) {
  const { C, CL, CP } = usePalette();
  const total = GROUPS.reduce((n, g) => n + g.skills.length, 0);

  return (
    <PageShell
      current="skills"
      eyebrow="UNLOCKED — LEVEL 3"
      title="Skills"
      intro={`The ${total} that actually come up in the work — not the full list of everything I've ever touched.`}
      {...props}
    >
      {!SKILLS_FINALISED && (
        <div
          style={{
            border: `1.5px dashed ${C}33`,
            background: CP,
            borderRadius: 10,
            padding: "13px 18px",
            marginBottom: 32,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span style={{ fontSize: 15 }}>✏️</span>
          <span style={{ color: CL, fontSize: 13, fontWeight: 600 }}>
            Draft list — still being trimmed down to the final picks.
          </span>
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 38 }}>
        {GROUPS.map((g) => (
          <Group key={g.heading} group={g} />
        ))}
      </div>
    </PageShell>
  );
}

function Group({ group }: { group: SkillGroup }) {
  const { C, CL } = usePalette();
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6 }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 21,
            margin: 0,
            color: "#0a0a0a",
            whiteSpace: "nowrap",
          }}
        >
          {group.heading}
        </h2>
        <div style={{ flex: 1, height: 1, background: `${C}1f` }} />
        <span style={{ fontSize: 12, color: CL, fontWeight: 600 }}>{group.skills.length}</span>
      </div>

      {group.blurb && (
        <p style={{ color: "#9aa4b2", fontSize: 13.5, margin: "0 0 16px", lineHeight: 1.6 }}>{group.blurb}</p>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: group.blurb ? 0 : 16 }}>
        {group.skills.map((s) => (
          <SkillPill key={s} label={s} />
        ))}
      </div>
    </div>
  );
}

function SkillPill({ label }: { label: string }) {
  const { C, CD, CP } = usePalette();
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "9px 17px",
        borderRadius: 24,
        background: hovered ? C : CP,
        color: hovered ? "#fff" : CD,
        border: `1.5px solid ${hovered ? C : C + "26"}`,
        fontSize: 13.5,
        fontWeight: 600,
        cursor: "default",
        transition: "all 0.2s",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? `0 6px 16px ${C}3d` : "none",
        userSelect: "none",
      }}
    >
      {label}
    </span>
  );
}
