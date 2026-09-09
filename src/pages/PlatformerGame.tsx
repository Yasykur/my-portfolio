import { useEffect, useRef, useState } from "react";

const CW = 800;
const CH = 480;
const GRAV = 0.55;
const JUMP_V = -11.5;
const SPD = 4.5;
const PW = 11;   // player half-width
const PH = 50;   // player height (feet to top)

type PlatType = "ground" | "block" | "pipe";
interface Plat { x: number; y: number; w: number; h: number; t: PlatType }
interface Coin { x: number; y: number; col: boolean }

const PLATS: Plat[] = [
  { x: -100, y: 424, w: 2700, h: 56, t: "ground" },
  { x: 240,  y: 344, w: 100, h: 16, t: "block" },
  { x: 420,  y: 278, w: 110, h: 16, t: "block" },
  { x: 580,  y: 340, w: 90,  h: 16, t: "block" },
  { x: 750,  y: 252, w: 110, h: 16, t: "block" },
  { x: 930,  y: 312, w: 130, h: 16, t: "block" },
  { x: 1110, y: 260, w: 100, h: 16, t: "block" },
  { x: 1290, y: 320, w: 110, h: 16, t: "block" },
  { x: 1480, y: 258, w: 130, h: 16, t: "block" },
  { x: 1690, y: 308, w: 100, h: 16, t: "block" },
  { x: 1870, y: 252, w: 120, h: 16, t: "block" },
  { x: 350,  y: 368, w: 48,  h: 56, t: "pipe" },
  { x: 710,  y: 382, w: 48,  h: 42, t: "pipe" },
  { x: 1050, y: 374, w: 48,  h: 50, t: "pipe" },
  { x: 1640, y: 376, w: 48,  h: 48, t: "pipe" },
];

const COINS_INIT: Coin[] = [
  { x: 285, y: 310, col: false },
  { x: 465, y: 244, col: false },
  { x: 625, y: 306, col: false },
  { x: 795, y: 218, col: false },
  { x: 978, y: 278, col: false },
  { x: 1150, y: 226, col: false },
  { x: 1335, y: 286, col: false },
  { x: 1525, y: 224, col: false },
  { x: 1735, y: 274, col: false },
  { x: 1915, y: 218, col: false },
];

interface GS {
  px: number; py: number;
  vx: number; vy: number;
  onGround: boolean;
  facing: 1 | -1;
  walkF: number;
  camX: number;
  coins: Coin[];
  score: number;
  keys: Set<string>;
  dead: boolean;
  won: boolean;
  wonT: number;
}

function freshState(): GS {
  return {
    px: 80, py: 374, vx: 0, vy: 0,
    onGround: false, facing: 1, walkF: 0, camX: 0,
    coins: COINS_INIT.map(c => ({ ...c })),
    score: 0, keys: new Set(),
    dead: false, won: false, wonT: 0,
  };
}

/* ─── drawing helpers ─────────────────────────────────── */

function drawPlatforms(ctx: CanvasRenderingContext2D, camX: number) {
  for (const p of PLATS) {
    if (p.x + p.w < camX - 20 || p.x > camX + CW + 20) continue;

    if (p.t === "ground") {
      ctx.fillStyle = "#111";
      ctx.fillRect(p.x, p.y, p.w, p.h);
      // bright top edge
      ctx.fillStyle = "#000";
      ctx.fillRect(p.x, p.y, p.w, 4);
      // brick rows
      ctx.strokeStyle = "#3a3a3a";
      ctx.lineWidth = 1;
      const rows = [0, 14, 28, 42];
      rows.forEach((ry, ri) => {
        const offset = ri % 2 === 0 ? 0 : 20;
        for (let bx = p.x + offset; bx < p.x + p.w; bx += 40) {
          ctx.strokeRect(bx, p.y + 4 + ry, 40, 14);
        }
      });
      // top line
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.w, p.y);
      ctx.stroke();

    } else if (p.t === "pipe") {
      // Body
      ctx.fillStyle = "#fff";
      ctx.fillRect(p.x + 1, p.y + 14, p.w - 2, p.h - 14);
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2.5;
      ctx.strokeRect(p.x + 1, p.y + 14, p.w - 2, p.h - 14);
      // Inner stripe
      ctx.strokeStyle = "#ddd";
      ctx.lineWidth = 1;
      for (let py2 = p.y + 22; py2 < p.y + p.h; py2 += 9) {
        ctx.beginPath();
        ctx.moveTo(p.x + 5, py2); ctx.lineTo(p.x + p.w - 5, py2);
        ctx.stroke();
      }
      // Lip (wider top)
      ctx.fillStyle = "#fff";
      ctx.fillRect(p.x - 4, p.y, p.w + 8, 14);
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2.5;
      ctx.strokeRect(p.x - 4, p.y, p.w + 8, 14);

    } else {
      // Block
      ctx.fillStyle = "#fff";
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2;
      ctx.strokeRect(p.x, p.y, p.w, p.h);
      // Segmented look
      ctx.strokeStyle = "#bbb";
      ctx.lineWidth = 1;
      const segW = 20;
      for (let bx = p.x + segW; bx < p.x + p.w; bx += segW) {
        ctx.beginPath();
        ctx.moveTo(bx, p.y + 2); ctx.lineTo(bx, p.y + p.h - 2);
        ctx.stroke();
      }
    }
  }
}

function drawCoin(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.arc(0, 0, 9, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = "#000";
  ctx.font = "bold 11px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("★", 0, 0.5);
  ctx.restore();
}

function drawFlag(ctx: CanvasRenderingContext2D, x: number, groundY: number) {
  // Pole
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x, groundY); ctx.lineTo(x, groundY - 110);
  ctx.stroke();
  // Flag
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.moveTo(x, groundY - 110);
  ctx.lineTo(x + 34, groundY - 94);
  ctx.lineTo(x, groundY - 78);
  ctx.closePath();
  ctx.fill();
  // Checkerboard on flag
  ctx.fillStyle = "#fff";
  ctx.fillRect(x + 4, groundY - 106, 8, 8);
  ctx.fillRect(x + 20, groundY - 98, 8, 8);
  ctx.fillRect(x + 4, groundY - 90, 8, 8);
  // Ball on top
  ctx.beginPath();
  ctx.arc(x, groundY - 110, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();
}

function drawStickman(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  facing: 1 | -1,
  walkF: number,
  onGround: boolean,
  moving: boolean,
  vy: number,
) {
  const HR = 10;
  const HY = y - PH + HR;       // head center
  const neckY = HY + HR + 2;
  const shoulderY = neckY + 4;
  const hipY = shoulderY + 18;

  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // ── Shadow ──
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.beginPath();
  ctx.ellipse(x, y + 2, 13, 4, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── Head ──
  ctx.beginPath();
  ctx.arc(x, HY, HR, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // ── Hair tufts ──
  ctx.lineWidth = 2;
  for (let i = -1; i <= 1; i++) {
    ctx.beginPath();
    ctx.moveTo(x + i * 5, HY - HR + 2);
    ctx.lineTo(x + i * 4.5, HY - HR - 5 - Math.abs(i));
    ctx.stroke();
  }

  // ── Glasses ── (iconic thick rectangular frames)
  const GW = 7.5, GH = 5.5;
  const GY = HY - 1.5;
  const bridgeGap = 3;
  const lx = x - bridgeGap / 2 - GW; // left lens left edge
  const rx = x + bridgeGap / 2;       // right lens left edge

  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2.2;

  // Left lens
  ctx.beginPath();
  ctx.rect(lx, GY - GH / 2, GW, GH);
  ctx.fillStyle = "rgba(180,220,255,0.18)";
  ctx.fill();
  ctx.stroke();

  // Right lens
  ctx.beginPath();
  ctx.rect(rx, GY - GH / 2, GW, GH);
  ctx.fill();
  ctx.stroke();

  // Bridge between lenses
  ctx.beginPath();
  ctx.moveTo(lx + GW, GY); ctx.lineTo(rx, GY);
  ctx.lineWidth = 1.8;
  ctx.stroke();

  // Temple arms
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.moveTo(lx, GY); ctx.lineTo(lx - 6, GY + 1.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(rx + GW, GY); ctx.lineTo(rx + GW + 6, GY + 1.5);
  ctx.stroke();

  // ── Smile ──
  ctx.beginPath();
  ctx.arc(x, HY + 4.5, 3, 0.3, Math.PI - 0.3);
  ctx.lineWidth = 1.8;
  ctx.strokeStyle = "#000";
  ctx.stroke();

  // ── Body ──
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(x, neckY); ctx.lineTo(x, hipY);
  ctx.stroke();

  // ── Arms ── (swing while walking, raised while falling)
  const swing = moving && onGround ? Math.sin(walkF * 0.32) * 18 : vy < -2 ? 22 : 0;
  ctx.lineWidth = 2.5;

  ctx.beginPath();
  ctx.moveTo(x, shoulderY + 5);
  ctx.lineTo(x + 14 * facing, shoulderY + 5 + swing);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(x, shoulderY + 5);
  ctx.lineTo(x - 14 * facing, shoulderY + 5 - swing);
  ctx.stroke();

  // ── Legs ── (alternate while walking, spread in air)
  const legSwing = moving && onGround ? Math.sin(walkF * 0.32) * 13 : 0;
  const airSpread = !onGround ? 10 : 0;

  // Right leg
  const rkx = x + 9;
  const rky = hipY + 10 + legSwing + airSpread;
  ctx.beginPath();
  ctx.moveTo(x, hipY);
  ctx.lineTo(rkx, rky);
  ctx.lineTo(rkx + (legSwing > 0 ? 5 : -3), y - 1);
  ctx.stroke();

  // Left leg
  const lkx = x - 9;
  const lky = hipY + 10 - legSwing + airSpread;
  ctx.beginPath();
  ctx.moveTo(x, hipY);
  ctx.lineTo(lkx, lky);
  ctx.lineTo(lkx + (legSwing < 0 ? -5 : 3), y - 1);
  ctx.stroke();

  ctx.restore();
}

function drawHUD(
  ctx: CanvasRenderingContext2D,
  score: number,
  collected: number,
  total: number,
  dead: boolean,
  won: boolean,
  wonT: number,
) {
  if (dead) {
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fillRect(0, 0, CW, CH);
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "bold 48px 'Playfair Display', Georgia, serif";
    ctx.fillText("YOU FELL!", CW / 2, CH / 2 - 28);
    ctx.font = "16px 'Outfit', sans-serif";
    ctx.fillStyle = "#555";
    ctx.fillText("Press  R  to try again", CW / 2, CH / 2 + 18);
    return;
  }

  if (won) {
    const a = Math.min(1, wonT / 45);
    ctx.fillStyle = `rgba(255,255,255,${a * 0.93})`;
    ctx.fillRect(0, 0, CW, CH);
    if (a > 0.5) {
      ctx.globalAlpha = (a - 0.5) * 2;
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.font = "bold 46px 'Playfair Display', Georgia, serif";
      ctx.fillText("LEVEL COMPLETE!", CW / 2, CH / 2 - 38);
      ctx.font = "18px 'Outfit', sans-serif";
      ctx.fillStyle = "#333";
      ctx.fillText(`Score: ${score}  ·  Stars: ${collected}/${total}`, CW / 2, CH / 2 + 10);
      ctx.font = "13px 'Outfit', sans-serif";
      ctx.fillStyle = "#999";
      ctx.fillText("Return to levels — Level 2 will be unlocked next update.", CW / 2, CH / 2 + 46);
      ctx.globalAlpha = 1;
    }
    return;
  }

  // Normal HUD strip
  ctx.fillStyle = "rgba(0,0,0,0.07)";
  ctx.fillRect(0, 0, CW, 36);
  ctx.fillStyle = "#000";
  ctx.font = "bold 13px 'Outfit', sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(`★ ${score} pts`, 16, 23);
  ctx.textAlign = "center";
  ctx.font = "bold 12px 'Outfit', sans-serif";
  ctx.fillStyle = "#444";
  ctx.fillText("THE FOUNDATION — Level 1", CW / 2, 23);
  ctx.textAlign = "right";
  ctx.fillStyle = "#000";
  ctx.fillText(`${collected}/${total} stars`, CW - 16, 23);
}

/* ─── main component ─────────────────────────────────── */

export default function PlatformerGame({ onBack }: { onBack: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gsRef = useRef<GS>(freshState());
  const rafRef = useRef(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const onKD = (e: KeyboardEvent) => {
      const g = gsRef.current;
      g.keys.add(e.code);
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Space"].includes(e.code)) {
        e.preventDefault();
      }
      if (e.code === "KeyR" && g.dead) {
        const fresh = freshState();
        fresh.keys = g.keys;
        gsRef.current = fresh;
      }
    };
    const onKU = (e: KeyboardEvent) => gsRef.current.keys.delete(e.code);

    window.addEventListener("keydown", onKD);
    window.addEventListener("keyup", onKU);
    canvas.focus();

    function tick() {
      const g = gsRef.current;
      if (g.dead) return;
      if (g.won) { g.wonT++; return; }

      const L = g.keys.has("ArrowLeft") || g.keys.has("KeyA");
      const R = g.keys.has("ArrowRight") || g.keys.has("KeyD");
      const J = g.keys.has("Space") || g.keys.has("ArrowUp") || g.keys.has("KeyW");

      if (L) { g.vx = -SPD; g.facing = -1; }
      else if (R) { g.vx = SPD; g.facing = 1; }
      else g.vx *= 0.62;
      if (Math.abs(g.vx) < 0.08) g.vx = 0;

      if (J && g.onGround) { g.vy = JUMP_V; g.onGround = false; }
      g.vy = Math.min(g.vy + GRAV, 16);

      if (g.onGround && Math.abs(g.vx) > 0.2) g.walkF++;
      else if (!g.onGround) g.walkF++;

      // ── Move X then resolve ──
      g.px += g.vx;
      g.px = Math.max(PW + 10, g.px);

      for (const p of PLATS) {
        const prevOverlapX = (g.px - g.vx) + PW > p.x && (g.px - g.vx) - PW < p.x + p.w;
        const nowOverlapX = g.px + PW > p.x && g.px - PW < p.x + p.w;
        const overlapY = g.py > p.y && (g.py - PH) < (p.y + p.h);
        if (!prevOverlapX && nowOverlapX && overlapY) {
          if (g.vx > 0) { g.px = p.x - PW - 0.1; g.vx = 0; }
          else { g.px = p.x + p.w + PW + 0.1; g.vx = 0; }
        }
      }

      // ── Move Y then resolve ──
      g.py += g.vy;
      g.onGround = false;

      for (const p of PLATS) {
        const overlapX = g.px + PW > p.x + 1 && g.px - PW < p.x + p.w - 1;
        if (!overlapX) continue;
        const prevFeet = g.py - g.vy;
        const prevHead = prevFeet - PH;

        // Floor landing
        if (g.vy > 0 && prevFeet <= p.y && g.py >= p.y) {
          g.py = p.y; g.vy = 0; g.onGround = true;
        }
        // Ceiling bump
        if (g.vy < 0 && prevHead >= p.y + p.h && (g.py - PH) <= p.y + p.h) {
          g.py = p.y + p.h + PH; g.vy = 1;
        }
      }

      // ── Stars ──
      for (const c of g.coins) {
        if (!c.col && Math.abs(g.px - c.x) < 20 && Math.abs((g.py - PH / 2) - c.y) < 22) {
          c.col = true; g.score += 10;
        }
      }

      // ── Death / win ──
      if (g.py > CH + 80) g.dead = true;
      if (g.px > 2140) g.won = true;

      // ── Camera ──
      const tCam = g.px - CW * 0.33;
      g.camX += (tCam - g.camX) * 0.1;
      g.camX = Math.max(0, g.camX);
    }

    function draw() {
      const g = gsRef.current;
      ctx.clearRect(0, 0, CW, CH);

      // White background
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, CW, CH);

      // Dot-grid sky
      ctx.fillStyle = "#ececec";
      for (let gx = 16; gx < CW; gx += 40) {
        for (let gy = 16; gy < CH; gy += 40) {
          ctx.beginPath();
          ctx.arc(gx, gy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.save();
      ctx.translate(-Math.round(g.camX), 0);

      drawPlatforms(ctx, g.camX);
      drawFlag(ctx, 2150, 424);

      for (const c of g.coins) {
        if (c.col || c.x < g.camX - 40 || c.x > g.camX + CW + 40) continue;
        drawCoin(ctx, c.x, c.y);
      }

      drawStickman(
        ctx, g.px, g.py, g.facing, g.walkF,
        g.onGround, Math.abs(g.vx) > 0.2, g.vy,
      );

      ctx.restore();

      const collected = g.coins.filter(c => c.col).length;
      drawHUD(ctx, g.score, collected, COINS_INIT.length, g.dead, g.won, g.wonT);
    }

    function loop() {
      tick();
      draw();
      setScore(gsRef.current.score);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("keydown", onKD);
      window.removeEventListener("keyup", onKU);
    };
  }, []);

  return (
    <div style={{
      minHeight: "100vh", background: "#f3f7fc",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      fontFamily: "'Outfit', sans-serif", padding: 24,
    }}>
      <div style={{ width: CW, maxWidth: "100%" }}>
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <button onClick={onBack} style={{
            padding: "7px 16px", background: "white", border: "1px solid #1E6FBF28",
            color: "#1E6FBF", borderRadius: 4, fontSize: 13, fontWeight: 600, cursor: "pointer",
          }}>← Back to Levels</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, letterSpacing: 2.5, color: "#1E6FBF", fontWeight: 700 }}>LEVEL 1 — THE FOUNDATION</div>
            <div style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}>Collect all ★ and reach the flag</div>
          </div>
          <div style={{ fontSize: 12, color: "#888", textAlign: "right" }}>
            <div>← → / A D   Move</div>
            <div>↑ / W / Space   Jump</div>
          </div>
        </div>

        {/* Canvas */}
        <canvas
          ref={canvasRef}
          width={CW}
          height={CH}
          style={{
            display: "block", border: "2.5px solid #000", borderRadius: 6,
            outline: "none", boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
          tabIndex={0}
        />

        <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", color: "#aaa", fontSize: 12 }}>
          <span>Press R to restart after dying</span>
          <span style={{ color: "#1E6FBF", fontWeight: 600 }}>Score: {score}</span>
        </div>
      </div>
    </div>
  );
}
