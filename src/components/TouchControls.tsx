import { useCallback, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────
   The games already listen for window keydown/keyup and read
   event.code. So instead of touching any game logic, these
   buttons just dispatch the same synthetic key events.
   ───────────────────────────────────────────────────────────── */

type Variant = "platformer" | "runner" | "shooter";

function fireKey(type: "keydown" | "keyup", code: string) {
  window.dispatchEvent(new KeyboardEvent(type, { code, bubbles: true }));
}

/** Press-and-hold button that keeps a key "down" until released. */
function HoldButton({
  code,
  label,
  size = 62,
  round = true,
  flex,
}: {
  code: string;
  label: string;
  size?: number;
  round?: boolean;
  flex?: number;
}) {
  const held = useRef(false);

  const press = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      if (held.current) return;
      held.current = true;
      fireKey("keydown", code);
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    },
    [code],
  );

  const release = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      if (!held.current) return;
      held.current = false;
      fireKey("keyup", code);
    },
    [code],
  );

  // safety: if the component unmounts mid-press, let the key go
  useEffect(() => {
    return () => {
      if (held.current) fireKey("keyup", code);
    };
  }, [code]);

  return (
    <button
      onPointerDown={press}
      onPointerUp={release}
      onPointerCancel={release}
      onPointerLeave={release}
      onContextMenu={(e) => e.preventDefault()}
      aria-label={label}
      style={{
        width: round ? size : undefined,
        height: size,
        flex,
        minWidth: round ? size : 0,
        borderRadius: round ? "50%" : 14,
        border: "2px solid rgba(255,255,255,0.35)",
        background: "rgba(20,30,45,0.55)",
        color: "white",
        fontSize: round ? 24 : 16,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        touchAction: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitTapHighlightColor: "transparent",
        backdropFilter: "blur(6px)",
        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
        fontFamily: "inherit",
        padding: 0,
      }}
    >
      {label}
    </button>
  );
}

/** Fires a single keydown+keyup — for one-shot keys like R (restart). */
function TapButton({ code, label }: { code: string; label: string }) {
  return (
    <button
      onPointerDown={(e) => {
        e.preventDefault();
        fireKey("keydown", code);
        window.setTimeout(() => fireKey("keyup", code), 60);
      }}
      onContextMenu={(e) => e.preventDefault()}
      aria-label={label}
      style={{
        padding: "9px 16px",
        borderRadius: 10,
        border: "2px solid rgba(255,255,255,0.3)",
        background: "rgba(20,30,45,0.5)",
        color: "white",
        fontSize: 12.5,
        fontWeight: 700,
        letterSpacing: 0.5,
        touchAction: "none",
        userSelect: "none",
        WebkitTapHighlightColor: "transparent",
        backdropFilter: "blur(6px)",
        cursor: "pointer",
        fontFamily: "inherit",
      }}
    >
      {label}
    </button>
  );
}

export default function TouchControls({ variant }: { variant: Variant }) {
  // stop the page rubber-banding while the player is thumbing around
  useEffect(() => {
    const prev = document.body.style.overscrollBehavior;
    document.body.style.overscrollBehavior = "contain";
    return () => {
      document.body.style.overscrollBehavior = prev;
    };
  }, []);

  const wrap: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 14,
    marginTop: 14,
    width: "100%",
    touchAction: "none",
  };

  if (variant === "runner") {
    return (
      <div style={{ ...wrap, flexDirection: "column", alignItems: "stretch", gap: 10 }}>
        <HoldButton code="Space" label="JUMP" size={64} round={false} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TapButton code="KeyR" label="RESTART" />
        </div>
      </div>
    );
  }

  if (variant === "shooter") {
    return (
      <div style={{ ...wrap, justifyContent: "center" }}>
        {/* 4-way pad; firing is automatic in this level */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 58px)",
            gridTemplateRows: "repeat(3, 58px)",
            gap: 7,
            justifyContent: "center",
          }}
        >
          <span />
          <HoldButton code="ArrowUp" label="▲" size={58} />
          <span />
          <HoldButton code="ArrowLeft" label="◀" size={58} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 9,
              color: "rgba(255,255,255,0.45)",
              fontWeight: 700,
              letterSpacing: 0.5,
            }}
          >
            AUTO
          </div>
          <HoldButton code="ArrowRight" label="▶" size={58} />
          <span />
          <HoldButton code="ArrowDown" label="▼" size={58} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <TapButton code="KeyR" label="R" />
          </div>
        </div>
      </div>
    );
  }

  // platformer
  return (
    <div style={wrap}>
      <div style={{ display: "flex", gap: 12 }}>
        <HoldButton code="ArrowLeft" label="◀" />
        <HoldButton code="ArrowRight" label="▶" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <TapButton code="KeyR" label="RESTART" />
        <HoldButton code="Space" label="▲" size={74} />
      </div>
    </div>
  );
}
