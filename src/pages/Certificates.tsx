import { useState } from "react";
import PageShell from "../components/PageShell";
import type { PageKey } from "../components/SiteNav";
import { usePalette } from "../site/SiteContext";

/* ─────────────────────────────────────────────────────────────
   TO FILL IN LATER
   Drop your files into  public/files/  and add an entry below.
   `file` can be a .pdf or an image (.png/.jpg) — both open in a new tab.
   Delete the sample entries once you add real ones.
   ───────────────────────────────────────────────────────────── */

interface Credential {
  title: string;
  issuer: string;
  date?: string;
  /** e.g. "/files/my-certificate.pdf" — omit while you don't have the file yet */
  file?: string;
  kind: "certificate" | "recommendation";
}

const CREDENTIALS: Credential[] = [
  // { title: "Certificate name", issuer: "Issuing organisation", date: "2025", file: "/files/example.pdf", kind: "certificate" },
  // { title: "Letter of Recommendation", issuer: "Muara International Fish Landing", date: "Nov 2025", file: "/files/rec-mifl.pdf", kind: "recommendation" },
];

interface Props {
  unlocked: Set<number>;
  onNavigate: (page: PageKey) => void;
  onLockedAttempt: (levelId: number) => void;
  onPlayClick: () => void;
}

export default function Certificates(props: Props) {
  const { C, CL, CP } = usePalette();

  const certs = CREDENTIALS.filter((c) => c.kind === "certificate");
  const recs = CREDENTIALS.filter((c) => c.kind === "recommendation");

  return (
    <PageShell
      current="certificates"
      eyebrow="UNLOCKED — LEVEL 2"
      title="Certificates & Recommendations"
      intro="Proof that other people also thought the work was worth signing off on."
      {...props}
    >
      {CREDENTIALS.length === 0 ? (
        <div
          style={{
            border: `1.5px dashed ${C}33`,
            borderRadius: 14,
            background: CP,
            padding: "56px 32px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 34, marginBottom: 14 }}>📄</div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 21,
              margin: "0 0 10px",
              color: "#0a0a0a",
            }}
          >
            Being scanned in
          </h3>
          <p style={{ color: "#67707d", fontSize: 14.5, lineHeight: 1.7, margin: "0 auto", maxWidth: 420 }}>
            Certificates and recommendation letters are on their way here shortly.
          </p>
          <p style={{ color: CL, fontSize: 12.5, margin: "18px 0 0", fontWeight: 600 }}>
            Check back soon.
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
          {certs.length > 0 && <Group heading="Certificates" items={certs} />}
          {recs.length > 0 && <Group heading="Recommendation letters" items={recs} />}
        </div>
      )}
    </PageShell>
  );
}

function Group({ heading, items }: { heading: string; items: Credential[] }) {
  const { C, CL } = usePalette();
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 20,
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 22,
            margin: 0,
            color: "#0a0a0a",
            whiteSpace: "nowrap",
          }}
        >
          {heading}
        </h2>
        <div style={{ flex: 1, height: 1, background: `${C}1f` }} />
        <span style={{ fontSize: 12, color: CL, fontWeight: 600 }}>{items.length}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
        {items.map((item) => (
          <CredentialCard key={item.title + item.issuer} item={item} />
        ))}
      </div>
    </div>
  );
}

function CredentialCard({ item }: { item: Credential }) {
  const { C, CD, CL, CP } = usePalette();
  const [hovered, setHovered] = useState(false);
  const clickable = Boolean(item.file);

  const open = () => {
    if (item.file) window.open(item.file, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={open}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : -1}
      onKeyDown={(e) => {
        if (clickable && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          open();
        }
      }}
      style={{
        background: "white",
        border: `1px solid ${hovered && clickable ? C + "40" : C + "1a"}`,
        borderRadius: 12,
        padding: "20px 22px",
        cursor: clickable ? "pointer" : "default",
        boxShadow: hovered && clickable ? `0 10px 28px ${C}1f` : "0 1px 8px rgba(0,0,0,0.045)",
        transform: hovered && clickable ? "translateY(-3px)" : "none",
        transition: "all 0.24s",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 9,
          background: CP,
          border: `1px solid ${C}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 17,
        }}
      >
        {item.kind === "certificate" ? "🎖️" : "✍️"}
      </div>

      <div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 16.5,
            color: "#0a0a0a",
            lineHeight: 1.35,
            marginBottom: 4,
          }}
        >
          {item.title}
        </div>
        <div style={{ fontSize: 13.5, color: C, fontWeight: 600 }}>{item.issuer}</div>
        {item.date && <div style={{ fontSize: 12, color: CL, marginTop: 3 }}>{item.date}</div>}
      </div>

      {clickable && (
        <div
          style={{
            marginTop: "auto",
            paddingTop: 6,
            fontSize: 12.5,
            fontWeight: 700,
            color: hovered ? C : CD,
            transition: "color 0.2s",
          }}
        >
          View document →
        </div>
      )}
    </div>
  );
}
