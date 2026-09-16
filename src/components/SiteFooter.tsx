import { usePalette } from "../site/SiteContext";

export const LINKEDIN_URL = "https://www.linkedin.com/in/fawwaz-susanto";

/** Official LinkedIn glyph, drawn as a path so it inherits the theme. */
export function LinkedInMark({ size = 18, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13M7.12 20.45H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0" />
    </svg>
  );
}

export default function SiteFooter() {
  const { C, CDD } = usePalette();

  return (
    <footer style={{ background: CDD, padding: "28px 32px", borderTop: `2px solid ${C}` }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 18,
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: 18,
            color: "white",
          }}
        >
          Fawwaz Susanto
        </div>

        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
          © {new Date().getFullYear()} · Built in Brunei
        </div>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            padding: "8px 16px 8px 13px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.18)",
            background: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.72)",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            transition: "all 0.22s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#0a66c2";
            e.currentTarget.style.borderColor = "#0a66c2";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
            e.currentTarget.style.color = "rgba(255,255,255,0.72)";
          }}
        >
          <LinkedInMark size={16} />
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
