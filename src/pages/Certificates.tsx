import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";
import PageShell from "../components/PageShell";
import type { PageKey } from "../components/SiteNav";
import { usePalette } from "../site/SiteContext";
import { useIsMobile } from "../site/useMediaQuery";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

/* ─────────────────────────────────────────────────────────────
   TO FILL IN LATER
   Drop your files into public/files/ and add an entry below.
   `file` supports .pdf, .png, and .jpg/.jpeg files — all are rendered
   as real document previews inline and expanded in a lightbox modal.
   Delete or update the sample entries once you add real ones.
   ───────────────────────────────────────────────────────────── */

export interface Credential {
  title: string;
  issuer: string;
  date?: string;
  /** e.g. "/files/my-certificate.pdf" or "/files/recommendation.png" */
  file?: string;
  kind: "certificate" | "recommendation";
}

const CREDENTIALS: Credential[] = [
  {
    title: "Curriculum Vitae",
    issuer: "Fawwaz Susanto",
    date: "2026",
    file: "/files/cv.pdf",
    kind: "certificate",
  },
];

interface Props {
  unlocked: Set<number>;
  onNavigate: (page: PageKey) => void;
  onLockedAttempt: (levelId: number) => void;
  onPlayClick: () => void;
}

function PdfPage({
  pdfDoc,
  pageNum,
  scale,
}: {
  pdfDoc: pdfjsLib.PDFDocumentProxy;
  pageNum: number;
  scale: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let active = true;
    let renderTask: pdfjsLib.RenderTask | null = null;

    pdfDoc.getPage(pageNum).then((page) => {
      if (!active) return;
      const viewport = page.getViewport({ scale });
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d");
      if (!context) return;

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      renderTask = page.render({ canvasContext: context, viewport });
      renderTask.promise.catch(() => {
        // ignore cancelled render tasks
      });
    });

    return () => {
      active = false;
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [pdfDoc, pageNum, scale]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "auto",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        background: "white",
      }}
    />
  );
}

function PdfViewer({
  file,
  scale,
  maxPages = Infinity,
}: {
  file: string;
  scale: number;
  maxPages?: number;
}) {
  const [pdfDoc, setPdfDoc] = useState<pdfjsLib.PDFDocumentProxy | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    const loadingTask = pdfjsLib.getDocument({ url: file });
    loadingTask.promise
      .then((doc) => {
        if (active) {
          setPdfDoc(doc);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (active) {
          console.error("PDF load error:", err);
          setError(err.message || "Failed to load PDF");
          setLoading(false);
        }
      });

    return () => {
      active = false;
      loadingTask.destroy();
    };
  }, [file]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 28,
          color: "#8c95a1",
          fontSize: 13,
        }}
      >
        Loading document preview...
      </div>
    );
  }

  if (error || !pdfDoc) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 28,
          color: "#94a3b8",
          fontSize: 13,
        }}
      >
        📄 Document preview unavailable
      </div>
    );
  }

  const numPages = pdfDoc.numPages;
  const pagesToRender = Math.min(numPages, maxPages);
  const remainingPages = numPages - pagesToRender;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
      {Array.from({ length: pagesToRender }, (_, i) => i + 1).map((pNum) => (
        <div
          key={pNum}
          style={{
            borderBottom: pNum < pagesToRender ? "1px solid #e2e8f0" : "none",
            paddingBottom: pNum < pagesToRender ? 10 : 0,
            width: "100%",
          }}
        >
          <PdfPage pdfDoc={pdfDoc} pageNum={pNum} scale={scale} />
        </div>
      ))}
      {remainingPages > 0 && (
        <div
          style={{
            padding: "8px 12px",
            background: "#f1f5f9",
            borderRadius: 6,
            textAlign: "center",
            fontSize: 12,
            fontWeight: 600,
            color: "#475569",
            border: "1px solid #cbd5e1",
          }}
        >
          +{remainingPages} more {remainingPages === 1 ? "page" : "pages"}
        </div>
      )}
    </div>
  );
}

function DocumentPreview({
  file,
  scale = 1.3,
  maxPages = 6,
  isLightbox = false,
}: {
  file?: string;
  scale?: number;
  maxPages?: number;
  isLightbox?: boolean;
}) {
  if (!file) return null;

  const cleanFile = file.toLowerCase();
  const isImage =
    cleanFile.endsWith(".png") ||
    cleanFile.endsWith(".jpg") ||
    cleanFile.endsWith(".jpeg");

  if (isImage) {
    return (
      <div
        style={{
          width: "100%",
          height: isLightbox ? "auto" : "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={file}
          alt="Document preview"
          style={{
            width: "100%",
            height: isLightbox ? "auto" : "100%",
            objectFit: isLightbox ? "contain" : "cover",
            display: "block",
            borderRadius: isLightbox ? 8 : 0,
          }}
        />
      </div>
    );
  }

  return <PdfViewer file={file} scale={scale} maxPages={maxPages} />;
}

function LightboxModal({
  item,
  onClose,
}: {
  item: Credential;
  onClose: () => void;
}) {
  const { C } = usePalette();
  const isMobile = useIsMobile();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setShown(true));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.cancelAnimationFrame(id);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        background: `rgba(6,12,20,${shown ? 0.66 : 0})`,
        backdropFilter: shown ? "blur(5px)" : "blur(0px)",
        WebkitBackdropFilter: shown ? "blur(5px)" : "blur(0px)",
        transition: "background 0.32s ease, backdrop-filter 0.32s ease",
        display: "flex",
        alignItems: isMobile ? "flex-end" : "center",
        justifyContent: "center",
        padding: isMobile ? 0 : 28,
        overflowY: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 920,
          background: "white",
          borderRadius: isMobile ? "20px 20px 0 0" : 18,
          overflow: "hidden",
          boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
          opacity: shown ? 1 : 0,
          transform: shown
            ? "translateY(0) scale(1)"
            : isMobile
              ? "translateY(40px) scale(1)"
              : "translateY(18px) scale(0.97)",
          transition:
            "opacity 0.34s ease, transform 0.38s cubic-bezier(0.34, 1.3, 0.64, 1)",
          maxHeight: isMobile ? "92vh" : "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: isMobile ? "16px 20px" : "20px 28px",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#f8fafc",
            flexShrink: 0,
          }}
        >
          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: C,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              {item.kind === "certificate"
                ? "Certificate"
                : "Letter of Recommendation"}
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: isMobile ? 18 : 22,
                color: "#0a0a0a",
                margin: "2px 0 0",
              }}
            >
              {item.title}
            </h3>
            <div style={{ fontSize: 13, color: "#64748b", marginTop: 2 }}>
              {item.issuer} {item.date ? `· ${item.date}` : ""}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid #cbd5e1",
              background: "white",
              color: "#334155",
              fontSize: 17,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "inherit",
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* Content / Preview Body */}
        <div
          style={{
            padding: isMobile ? 16 : 24,
            overflowY: "auto",
            flex: 1,
            background: "#f1f5f9",
          }}
        >
          {item.file && (
            <DocumentPreview
              file={item.file}
              scale={isMobile ? 1.5 : 2.2}
              maxPages={Infinity}
              isLightbox={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function Certificates(props: Props) {
  const { C, CL, CP } = usePalette();
  const [selectedItem, setSelectedItem] = useState<Credential | null>(null);

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
          <p
            style={{
              color: "#67707d",
              fontSize: 14.5,
              lineHeight: 1.7,
              margin: "0 auto",
              maxWidth: 420,
            }}
          >
            Certificates and recommendation letters are on their way here shortly.
          </p>
          <p
            style={{
              color: CL,
              fontSize: 12.5,
              margin: "18px 0 0",
              fontWeight: 600,
            }}
          >
            Check back soon.
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
          {certs.length > 0 && (
            <Group
              heading="Certificates"
              items={certs}
              onSelect={setSelectedItem}
            />
          )}
          {recs.length > 0 && (
            <Group
              heading="Recommendation letters"
              items={recs}
              onSelect={setSelectedItem}
            />
          )}
        </div>
      )}

      {selectedItem && (
        <LightboxModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </PageShell>
  );
}

function Group({
  heading,
  items,
  onSelect,
}: {
  heading: string;
  items: Credential[];
  onSelect: (item: Credential) => void;
}) {
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
        <span style={{ fontSize: 12, color: CL, fontWeight: 600 }}>
          {items.length}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {items.map((item) => (
          <CredentialCard
            key={item.title + item.issuer}
            item={item}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

function CredentialCard({
  item,
  onSelect,
}: {
  item: Credential;
  onSelect: (item: Credential) => void;
}) {
  const { C, CD, CL, CP } = usePalette();
  const [hovered, setHovered] = useState(false);
  const clickable = Boolean(item.file);

  const handleClick = () => {
    if (clickable) onSelect(item);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : -1}
      onKeyDown={(e) => {
        if (clickable && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          handleClick();
        }
      }}
      style={{
        background: "white",
        border: `1px solid ${hovered && clickable ? C + "40" : C + "1a"}`,
        borderRadius: 14,
        overflow: "hidden",
        cursor: clickable ? "pointer" : "default",
        boxShadow:
          hovered && clickable
            ? `0 12px 32px ${C}1f`
            : "0 1px 8px rgba(0,0,0,0.045)",
        transform: hovered && clickable ? "translateY(-3px)" : "none",
        transition: "all 0.24s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Inline Document Preview Container */}
      {item.file && (
        <div
          style={{
            height: 240,
            width: "100%",
            background: "#f8fafc",
            borderBottom: `1px solid ${C}14`,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <DocumentPreview file={item.file} scale={1.3} maxPages={6} />
        </div>
      )}

      <div
        style={{
          padding: "20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: CP,
              border: `1px solid ${C}22`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
              flexShrink: 0,
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
              }}
            >
              {item.title}
            </div>
            <div style={{ fontSize: 13, color: C, fontWeight: 600 }}>
              {item.issuer}
            </div>
          </div>
        </div>

        {item.date && (
          <div style={{ fontSize: 12, color: CL }}>{item.date}</div>
        )}

        {clickable && (
          <div
            style={{
              marginTop: "auto",
              paddingTop: 6,
              fontSize: 12.5,
              fontWeight: 700,
              color: hovered ? C : CD,
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span>View preview</span>
            <span>→</span>
          </div>
        )}
      </div>
    </div>
  );
}
