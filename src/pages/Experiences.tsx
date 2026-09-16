import { useState } from "react";
import PageShell from "../components/PageShell";
import type { PageKey } from "../components/SiteNav";
import { usePalette } from "../site/SiteContext";

interface Role {
  title: string;
  org: string;
  logo?: string;
  type: string;
  period: string;
  current?: boolean;
  bullets: string[];
}

const ROLES: Role[] = [
  {
    title: "AI/IT Supervisor",
    org: "The Coffee Bean & Tea Leaf® Brunei Darussalam",
    logo: "/images/logos/cbtl.png",
    type: "Contract",
    period: "Aug 2026 — Present",
    current: true,
    bullets: [
      "Own every AI-related matter for the company as its sole AI/IT lead.",
      "Authored a board-level proposal to standardise one AI tool across six departments, replacing ad-hoc use of whatever staff found first.",
      "Write the internal SOPs and guidance that make new tools usable by non-technical staff.",
      "Support the rollout of a cloud HR, payroll and scheduling platform alongside the project manager.",
    ],
  },
  {
    title: "AI/IT Assistant",
    org: "The Coffee Bean & Tea Leaf® Brunei Darussalam",
    logo: "/images/logos/cbtl.png",
    type: "Internship",
    period: "Jan 2026 — Jul 2026",
    bullets: [
      "Started as the company's first dedicated AI assistant role and grew it into a full contract position.",
      "Handled day-to-day IT support while building out the groundwork for company-wide AI adoption.",
    ],
  },
  {
    title: "Human Resources Assistant",
    org: "Muara International Fish Landing",
    logo: "/images/logos/muara.png",
    type: "Internship",
    period: "Jun 2025 — Nov 2025",
    bullets: [
      "Built an inventory management system with filters, visual dashboards, reports and a written user manual.",
      "Verified attendance records and improved the payroll process for accuracy and speed.",
      "Provided IT support — Microsoft 365 setup, Wi-Fi troubleshooting and printer maintenance.",
      "Contributed to HR documentation: a Competency Framework, a draft E-Employee Handbook and an IT troubleshooting guide.",
      "Supported Finance and other departments with asset tagging and record management.",
      "Helped organise staff events, including blood donation drives.",
      "Used AI tools to speed up Excel work and automate repetitive admin tasks.",
    ],
  },
  {
    title: "Application Development Team Lead",
    org: "Cosmopolitan College of Commerce & Technology",
    logo: "/images/logos/cosmopolitan.png",
    type: "Academic project",
    period: "Jan 2025 — Apr 2025",
    bullets: ["Led a team designing and building an Inventory Management System end to end."],
  },
  {
    title: "Other Engagements",
    org: "Cosmopolitan College of Commerce & Technology",
    logo: "/images/logos/cosmopolitan.png",
    type: "Campus life",
    period: "Mar 2021 — Jul 2025",
    bullets: [
      "Team leader and organiser for IoT Agriculture projects in 2023 and 2025.",
      "Organised the COSMO Beach Cleaning Campaign (2023).",
      "Member of the COSMO Bowling Club (2021).",
    ],
  },
];

interface Props {
  unlocked: Set<number>;
  onNavigate: (page: PageKey) => void;
  onLockedAttempt: (levelId: number) => void;
  onPlayClick: () => void;
}

export default function Experiences(props: Props) {
  return (
    <PageShell
      current="experiences"
      eyebrow="UNLOCKED — LEVEL 1"
      title="Experiences"
      intro="Four years of campus projects, a hands-on HR internship, and the AI role it all led to. In reverse order, because that's how careers read."
      {...props}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {ROLES.map((role, i) => (
          <RoleEntry key={role.title + role.period} role={role} last={i === ROLES.length - 1} />
        ))}
      </div>
    </PageShell>
  );
}

function RoleEntry({ role, last }: { role: Role; last: boolean }) {
  const { C, CD, CL, CP } = usePalette();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: "flex", gap: 24, alignItems: "stretch" }}
    >
      {/* rail */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 52, flexShrink: 0 }}>
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            overflow: "hidden",
            background: "white",
            border: `2px solid ${role.current ? C : C + "33"}`,
            boxShadow: role.current ? `0 0 0 4px ${C}1a` : "0 1px 6px rgba(0,0,0,0.07)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.25s",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        >
          {role.logo ? (
            <img
              src={role.logo}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
            />
          ) : (
            <span style={{ color: C, fontWeight: 800 }}>·</span>
          )}
        </div>
        {!last && (
          <div
            style={{
              flex: 1,
              width: 2,
              background: `linear-gradient(180deg, ${C}38, ${C}12)`,
              marginTop: 6,
              minHeight: 26,
            }}
          />
        )}
      </div>

      {/* card */}
      <div
        style={{
          flex: 1,
          background: "white",
          border: `1px solid ${hovered ? C + "33" : C + "1a"}`,
          borderRadius: 12,
          padding: "22px 26px",
          marginBottom: last ? 0 : 22,
          boxShadow: hovered ? `0 10px 30px ${C}1f` : "0 1px 8px rgba(0,0,0,0.045)",
          transform: hovered ? "translateY(-2px)" : "none",
          transition: "all 0.25s",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 4,
          }}
        >
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 20,
              margin: 0,
              color: "#0a0a0a",
            }}
          >
            {role.title}
          </h3>
          <span style={{ fontSize: 12.5, color: CL, fontWeight: 600, whiteSpace: "nowrap" }}>
            {role.period}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 9, flexWrap: "wrap", marginBottom: 14 }}>
          <span style={{ fontSize: 14, color: C, fontWeight: 600 }}>{role.org}</span>
          <span
            style={{
              padding: "2px 9px",
              borderRadius: 20,
              background: CP,
              border: `1px solid ${C}22`,
              color: CD,
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: 0.4,
            }}
          >
            {role.type}
          </span>
          {role.current && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "2px 9px",
                borderRadius: 20,
                background: "#dcfce7",
                border: "1px solid #16a34a44",
                color: "#15803d",
                fontSize: 10.5,
                fontWeight: 700,
              }}
            >
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#16a34a" }} />
              CURRENT
            </span>
          )}
        </div>

        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
          {role.bullets.map((b, i) => (
            <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: C,
                  marginTop: 8,
                  flexShrink: 0,
                  opacity: 0.55,
                }}
              />
              <span style={{ color: "#5c6673", fontSize: 14.2, lineHeight: 1.68 }}>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
