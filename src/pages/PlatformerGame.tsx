import { useEffect, useRef, useState } from "react";
import MedalReveal from "../components/MedalReveal";

const CW = 800;
const CH = 480;
const GRAV = 0.45; // Reduced for slower rise
const JUMP_V = -10; // Slightly reduced jump velocity
const SPD = 3.8; // Reduced by ~15% for more controlled movement
const PW = 11;   // player half-width
const PH = 70;   // player height (feet to top)

type PlatType = "ground" | "block" | "pipe";
interface Plat { x: number; y: number; w: number; h: number; t: PlatType }
interface Coin { x: number; y: number; col: boolean }
interface Spike { x: number; y: number; w: number; h: number }
interface Monster { pipeX: number; pipeTopY: number; period: number; phaseOffset: number }
interface BloodParticle { x: number; y: number; vx: number; vy: number; settled: boolean; r: number }

interface LevelData {
  id: number;
  company: string;
  role: string;
  platforms: Plat[];
  coins: Coin[];
  spikes: Spike[];
  monsters: Monster[];
  winX: number;
  flagX: number;
  groundY: number;
  theme: {
    bg: string;
    skyDot: string;
    ground: string;
    groundTop: string;
    groundLine: string;
    block: string;
    blockStroke: string;
    pipe: string;
    pipeStroke: string;
  };
}

const LEVELS: LevelData[] = [
  {
    id: 1,
    company: "TechCorp Inc.",
    role: "Senior Frontend Developer",
    platforms: [
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
    ],
    spikes: [
      { x: 490, y: 260, w: 36, h: 18 },
      { x: 800, y: 402, w: 48, h: 22 },
      { x: 995, y: 290, w: 36, h: 20 },
      { x: 1180, y: 400, w: 48, h: 24 },
      { x: 1350, y: 405, w: 36, h: 19 },
      { x: 1580, y: 403, w: 48, h: 21 },
      { x: 1800, y: 404, w: 36, h: 20 },
    ],
    monsters: [
      { pipeX: 350, pipeTopY: 368, period: 180, phaseOffset: 0 },
      { pipeX: 1050, pipeTopY: 374, period: 180, phaseOffset: 90 },
    ],
    coins: [
      { x: 285, y: 310, col: false },
      { x: 465, y: 244, col: false },
      { x: 625, y: 306, col: false },
      { x: 795, y: 218, col: false },
      { x: 978, y: 400, col: false },
      { x: 1150, y: 226, col: false },
      { x: 1335, y: 286, col: false },
      { x: 1525, y: 224, col: false },
      { x: 1735, y: 274, col: false },
      { x: 1915, y: 218, col: false },
    ],
    winX: 2140,
    flagX: 2150,
    groundY: 424,
    theme: {
      bg: "#fffbeb",
      skyDot: "#fef3c7",
      ground: "#92400e",
      groundTop: "#78350f",
      groundLine: "#451a03",
      block: "#fef3c7",
      blockStroke: "#92400e",
      pipe: "#fcd34d",
      pipeStroke: "#92400e",
    },
  },
  {
    id: 2,
    company: "DesignStudio",
    role: "UI/UX Designer",
    platforms: [
      { x: -100, y: 424, w: 2200, h: 56, t: "ground" },
      { x: 200,  y: 360, w: 90,  h: 16, t: "block" },
      { x: 380,  y: 300, w: 100, h: 16, t: "block" },
      { x: 550,  y: 350, w: 80,  h: 16, t: "block" },
      { x: 720,  y: 270, w: 100, h: 16, t: "block" },
      { x: 900,  y: 330, w: 120, h: 16, t: "block" },
      { x: 1080, y: 280, w: 90,  h: 16, t: "block" },
      { x: 1260, y: 340, w: 100, h: 16, t: "block" },
      { x: 1450, y: 280, w: 110, h: 16, t: "block" },
      { x: 1650, y: 330, w: 90,  h: 16, t: "block" },
      { x: 300,  y: 380, w: 48,  h: 44, t: "pipe" },
      { x: 680,  y: 390, w: 48,  h: 34, t: "pipe" },
      { x: 1020, y: 382, w: 48,  h: 42, t: "pipe" },
      { x: 1600, y: 384, w: 48,  h: 40, t: "pipe" },
    ],
    spikes: [],
    monsters: [],
    coins: [
      { x: 245, y: 326, col: false },
      { x: 420, y: 266, col: false },
      { x: 590, y: 316, col: false },
      { x: 760, y: 236, col: false },
      { x: 950, y: 296, col: false },
      { x: 1120, y: 246, col: false },
      { x: 1300, y: 306, col: false },
      { x: 1490, y: 246, col: false },
      { x: 1690, y: 296, col: false },
    ],
    winX: 1800,
    flagX: 1810,
    groundY: 424,
    theme: {
      bg: "#fff5f5",
      skyDot: "#ffd6d6",
      ground: "#8b0000",
      groundTop: "#660000",
      groundLine: "#4a0000",
      block: "#ffe4e4",
      blockStroke: "#8b0000",
      pipe: "#ffb3b3",
      pipeStroke: "#8b0000",
    },
  },
  {
    id: 3,
    company: "StartupXYZ",
    role: "Full Stack Engineer",
    platforms: [
      { x: -100, y: 424, w: 2500, h: 56, t: "ground" },
      { x: 220,  y: 350, w: 110, h: 16, t: "block" },
      { x: 400,  y: 290, w: 90,  h: 16, t: "block" },
      { x: 560,  y: 345, w: 100, h: 16, t: "block" },
      { x: 740,  y: 265, w: 110, h: 16, t: "block" },
      { x: 920,  y: 325, w: 90,  h: 16, t: "block" },
      { x: 1100, y: 275, w: 110, h: 16, t: "block" },
      { x: 1280, y: 335, w: 100, h: 16, t: "block" },
      { x: 1470, y: 275, w: 120, h: 16, t: "block" },
      { x: 1670, y: 325, w: 90,  h: 16, t: "block" },
      { x: 1850, y: 270, w: 110, h: 16, t: "block" },
      { x: 320,  y: 374, w: 48,  h: 50, t: "pipe" },
      { x: 700,  y: 386, w: 48,  h: 38, t: "pipe" },
      { x: 1060, y: 378, w: 48,  h: 46, t: "pipe" },
      { x: 1620, y: 380, w: 48,  h: 44, t: "pipe" },
    ],
    spikes: [],
    monsters: [],
    coins: [
      { x: 275, y: 316, col: false },
      { x: 440, y: 256, col: false },
      { x: 605, y: 311, col: false },
      { x: 785, y: 231, col: false },
      { x: 955, y: 291, col: false },
      { x: 1145, y: 241, col: false },
      { x: 1320, y: 301, col: false },
      { x: 1520, y: 241, col: false },
      { x: 1705, y: 291, col: false },
      { x: 1895, y: 236, col: false },
    ],
    winX: 2000,
    flagX: 2010,
    groundY: 424,
    theme: {
      bg: "#f0f9ff",
      skyDot: "#bae6fd",
      ground: "#0369a1",
      groundTop: "#0284c7",
      groundLine: "#0c4a6e",
      block: "#e0f2fe",
      blockStroke: "#0369a1",
      pipe: "#7dd3fc",
      pipeStroke: "#0369a1",
    },
  },
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
  deathCause: "fall" | "spike" | "monster" | null;
  deathT: number;
  won: boolean;
  wonT: number;
  insufficientStars: boolean;
  timeRemaining: number;
  timeUp: boolean;
  frameCount: number;
  bloodParticles: BloodParticle[];
  medalCollected: boolean;
}

function freshState(level: LevelData): GS {
  return {
    px: 80, py: 374, vx: 0, vy: 0,
    onGround: false, facing: 1, walkF: 0, camX: 0,
    coins: level.coins.map(c => ({ ...c })),
    score: 0, keys: new Set(),
    dead: false, deathCause: null, deathT: 0, won: false, wonT: 0, insufficientStars: false,
    timeRemaining: 60, timeUp: false,
    frameCount: 0,
    bloodParticles: [],
    medalCollected: false,
  };
}

/* ─── drawing helpers ─────────────────────────────────── */

function drawPlatforms(ctx: CanvasRenderingContext2D, camX: number, level: LevelData) {
  for (const p of level.platforms) {
    if (p.x + p.w < camX - 20 || p.x > camX + CW + 20) continue;

    if (p.t === "ground") {
      ctx.fillStyle = level.theme.ground;
      ctx.fillRect(p.x, p.y, p.w, p.h);
      // bright top edge
      ctx.fillStyle = level.theme.groundTop;
      ctx.fillRect(p.x, p.y, p.w, 4);
      // brick rows
      ctx.strokeStyle = level.theme.groundLine;
      ctx.lineWidth = 1;
      const rows = [0, 14, 28, 42];
      rows.forEach((ry, ri) => {
        const offset = ri % 2 === 0 ? 0 : 20;
        for (let bx = p.x + offset; bx < p.x + p.w; bx += 40) {
          ctx.strokeRect(bx, p.y + 4 + ry, 40, 14);
        }
      });
      // top line
      ctx.strokeStyle = level.theme.groundLine;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.w, p.y);
      ctx.stroke();

    } else if (p.t === "pipe") {
      // Body
      ctx.fillStyle = level.theme.pipe;
      ctx.fillRect(p.x + 1, p.y + 14, p.w - 2, p.h - 14);
      ctx.strokeStyle = level.theme.pipeStroke;
      ctx.lineWidth = 2.5;
      ctx.strokeRect(p.x + 1, p.y + 14, p.w - 2, p.h - 14);
      // Inner stripe
      ctx.strokeStyle = level.theme.pipeStroke;
      ctx.lineWidth = 1;
      for (let py2 = p.y + 22; py2 < p.y + p.h; py2 += 9) {
        ctx.beginPath();
        ctx.moveTo(p.x + 5, py2); ctx.lineTo(p.x + p.w - 5, py2);
        ctx.stroke();
      }
      // Lip (wider top)
      ctx.fillStyle = level.theme.pipe;
      ctx.fillRect(p.x - 4, p.y, p.w + 8, 14);
      ctx.strokeStyle = level.theme.pipeStroke;
      ctx.lineWidth = 2.5;
      ctx.strokeRect(p.x - 4, p.y, p.w + 8, 14);

    } else {
      // Block
      ctx.fillStyle = level.theme.block;
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.strokeStyle = level.theme.blockStroke;
      ctx.lineWidth = 2;
      ctx.strokeRect(p.x, p.y, p.w, p.h);
      // Segmented look
      ctx.strokeStyle = level.theme.blockStroke;
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

function drawSpike(ctx: CanvasRenderingContext2D, spike: Spike) {
  ctx.save();
  ctx.fillStyle = "#444";
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;

  // Draw jagged sawtooth pattern with 3-4 sharp points
  const numPoints = Math.floor(spike.w / 12); // 3-4 points based on width
  const pointWidth = spike.w / numPoints;

  for (let i = 0; i < numPoints; i++) {
    const startX = spike.x + i * pointWidth;
    const midX = startX + pointWidth / 2;
    const endX = startX + pointWidth;

    ctx.beginPath();
    ctx.moveTo(startX, spike.y + spike.h);
    ctx.lineTo(midX, spike.y);
    ctx.lineTo(endX, spike.y + spike.h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  ctx.restore();
}

/* ─── biting pipe monster (Piranha-Plant style) ─────────── */

const MONSTER_MAX_HEIGHT = 100; // long reaching root

function monsterExtension(m: Monster, frame: number): number {
  // 0 = fully hidden in pipe, 1 = fully emerged. Spends most of the cycle hidden.
  const t = (frame + m.phaseOffset) % m.period;
  const raw = Math.sin((t / m.period) * Math.PI * 2);
  return Math.max(0, Math.min(1, raw * 1.6 - 0.5));
}

function monsterMouthOpenness(m: Monster, frame: number, ext: number): number {
  if (ext < 0.3) return 0;
  return ((Math.sin((frame + m.phaseOffset) * 0.35) + 1) / 2) * ext;
}

function monsterHitbox(m: Monster, frame: number) {
  const ext = monsterExtension(m, frame);
  const bodyH = MONSTER_MAX_HEIGHT * ext;
  const baseX = m.pipeX + 24;
  const headOffsetX = Math.sin(1 * Math.PI * 2.2) * 5; // matches the wobble at the top segment in drawMonster
  const headX = baseX + headOffsetX;
  const topY = m.pipeTopY - bodyH;
  const mouthY = topY + 5;
  const openness = monsterMouthOpenness(m, frame, ext);
  const jawGap = 3 + 6 * openness;
  return {
    ext, cx: headX, mouthY, jawGap,
    left: headX - 9, right: headX + 9,
    top: mouthY - jawGap - 2, bottom: mouthY + jawGap + 2,
  };
}

function drawMonster(ctx: CanvasRenderingContext2D, m: Monster, frame: number) {
  const ext = monsterExtension(m, frame);
  if (ext <= 0.02) return; // fully hidden — nothing to draw

  const cx = m.pipeX + 24;
  const baseY = m.pipeTopY;
  const bodyH = MONSTER_MAX_HEIGHT * ext;
  const topY = baseY - bodyH;
  const openness = monsterMouthOpenness(m, frame, ext);
  const mouthY = topY + 5;
  const jawGap = 3 + 6 * openness;

  ctx.save();

  // ── Body: a tall, twisted root column (not a smooth stem) ──
  const segments = 7;
  const wobble = 5; // how much the root snakes side to side
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const py = baseY - bodyH * t;
    const px = cx + Math.sin(t * Math.PI * 2.2) * wobble * t; // wobble grows toward the top
    pts.push({ x: px, y: py });
  }

  ctx.strokeStyle = "#14532d";
  ctx.fillStyle = "#16a34a";
  ctx.lineWidth = 9;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.stroke();

  // thin darker root fibers running alongside the main column, for texture
  ctx.strokeStyle = "#14532d";
  ctx.lineWidth = 1.2;
  for (const offset of [-3, 3]) {
    ctx.beginPath();
    ctx.moveTo(pts[0].x + offset, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x + offset * (1 - i / pts.length * 0.4), pts[i].y);
    ctx.stroke();
  }

  // small root nubs branching off the column
  [2, 4].forEach(i => {
    if (i >= pts.length) return;
    const p = pts[i];
    const side = i % 2 === 0 ? 1 : -1;
    ctx.strokeStyle = "#14532d";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.quadraticCurveTo(p.x + side * 7, p.y + 2, p.x + side * 11, p.y - 2);
    ctx.stroke();
  });

  const headX = pts[pts.length - 1].x;

  // Mouth interior
  ctx.fillStyle = "#7f1d1d";
  ctx.beginPath();
  ctx.ellipse(headX, mouthY, 8, jawGap, 0, 0, Math.PI * 2);
  ctx.fill();

  // Teeth (top and bottom jaw)
  ctx.fillStyle = "#fff";
  for (let i = -1; i <= 1; i++) {
    const tx = headX + i * 5;
    ctx.beginPath();
    ctx.moveTo(tx - 2, mouthY - jawGap);
    ctx.lineTo(tx + 2, mouthY - jawGap);
    ctx.lineTo(tx, mouthY - jawGap + 3);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(tx - 2, mouthY + jawGap);
    ctx.lineTo(tx + 2, mouthY + jawGap);
    ctx.lineTo(tx, mouthY + jawGap - 3);
    ctx.closePath();
    ctx.fill();
  }

  ctx.restore();
}

function bloodSurfacesAt(px: number, level: LevelData): number[] {
  const ys: number[] = [];
  for (const plat of level.platforms) {
    if (px > plat.x && px < plat.x + plat.w) ys.push(plat.y);
  }
  return ys;
}

function drawInWorldMedal(ctx: CanvasRenderingContext2D, x: number, y: number, frameCount: number) {
  ctx.save();
  ctx.translate(x, y);

  const scaleX = Math.abs(Math.sin(frameCount * 0.08));

  ctx.scale(scaleX, 1);

  // Gold outer circle
  ctx.beginPath();
  ctx.arc(0, 0, 14, 0, Math.PI * 2);
  ctx.fillStyle = "#d4a017";
  ctx.fill();
  ctx.strokeStyle = "#92400e";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Inner accent circle
  ctx.beginPath();
  ctx.arc(0, 0, 9, 0, Math.PI * 2);
  ctx.fillStyle = "#fbbf24";
  ctx.fill();

  // Center star
  ctx.fillStyle = "#92400e";
  ctx.font = "bold 10px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("★", 0, 0);

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
  levelId: number,
  groundY: number,
) {
  // ── Clean proportion budget (total PH = 70) ──
  // Head: 18px | Neck: 5px | Torso: 20px | Legs: 27px
  const HR = 9;                    // head radius (18px diameter)
  const headTopY = y - PH;         // top of head, fixed reference
  const HY = headTopY + HR;        // head center
  const neckY = HY + HR + 3;       // bottom of head + 3px neck
  const shoulderY = neckY + 2;
  const hipY = shoulderY + 20;     // torso = 20px
  const legLength = y - hipY;      // remaining = 27px, feet always land exactly at y

  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // ── Shadow (always pinned to ground, never moves with jump) ──
  const shadowSize = onGround ? 13 : Math.max(7, 12 - Math.abs(vy) * 0.2);
  const shadowOpacity = onGround ? 0.12 : 0.08;
  ctx.fillStyle = `rgba(0,0,0,${shadowOpacity})`;
  ctx.beginPath();
  ctx.ellipse(x, groundY + 2, shadowSize, shadowSize * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── Animation phase ──
  const walkCycle = moving && onGround ? walkF * 0.25 : 0;
  const swing = Math.sin(walkCycle);       // -1..1, right leg/left arm phase
  const swingOpp = Math.sin(walkCycle + Math.PI); // opposite phase, always = -swing

  ctx.strokeStyle = "#000";

  // ── LEGS (drawn first, always fully visible) ──
  const stance = 7; // half-distance between legs at hip, in local (unflipped) space
  const kneeY = hipY + legLength * 0.5;
  const footBaseY = hipY + legLength;

  function drawLeg(sideSign: number, phase: number, airborne: boolean) {
    // sideSign: +1 = right leg, -1 = left leg (in facing-relative space, then mirrored by facing)
    const hipX = x + sideSign * stance * facing;
    let kneeX = hipX + sideSign * 1.5 * facing;
    let footX = hipX;
    let kY = kneeY;
    let fY = footBaseY;

    if (airborne) {
      // legs spread apart in the air, slightly bent
      footX = hipX + sideSign * 6 * facing;
      kY = kneeY - 2;
      fY = footBaseY - 4;
    } else if (moving && onGround) {
      // walk cycle: leg swings fore/aft, knee lifts on the forward swing
      const swingAmt = phase * 9;
      footX = hipX + swingAmt * facing;
      kneeX = hipX + swingAmt * 0.4 * facing;
      kY = kneeY - Math.max(0, phase) * 5; // knee lifts only when leg is forward
    }

    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x + sideSign * stance * facing * 0.3, hipY); // slight hip offset toward center
    ctx.lineTo(kneeX, kY);
    ctx.lineTo(footX, fY);
    ctx.stroke();

    // flat foot
    ctx.beginPath();
    ctx.moveTo(footX, fY);
    ctx.lineTo(footX + 4 * facing, fY);
    ctx.stroke();
  }

  if (!onGround) {
    drawLeg(1, 0, true);
    drawLeg(-1, 0, true);
  } else {
    drawLeg(1, swing, false);
    drawLeg(-1, swingOpp, false);
  }

  // ── TORSO ──
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(x, neckY);
  ctx.lineTo(x, hipY);
  ctx.stroke();

  // ── ARMS + ROBE SLEEVES (computed together so sleeves follow the arms) ──
  const shoulderDrawY = shoulderY + 3;

  let rArmX: number, rArmY: number, lArmX: number, lArmY: number;

  if (!onGround) {
    const armAngle = vy < 0 ? -22 : -10;
    const armSpread = vy < 0 ? 15 : 11;
    rArmX = x + armSpread * facing; rArmY = shoulderDrawY + armAngle;
    lArmX = x - armSpread * facing; lArmY = shoulderDrawY + armAngle;
  } else if (moving) {
    const armSwing = swingOpp * 12;
    rArmX = x + 11 * facing; rArmY = shoulderDrawY + 14 + armSwing;
    lArmX = x - 11 * facing; lArmY = shoulderDrawY + 14 - armSwing;
  } else {
    rArmX = x + 8; rArmY = shoulderDrawY + 17;
    lArmX = x - 8; lArmY = shoulderDrawY + 17;
  }

  // ── GRADUATION ROBE (Level 1 only) — gown silhouette + gold sash/trim ──
  const GOLD = "#d4a017";
  if (levelId === 1) {
    const robeTop = shoulderY + 3;
    const robeBottom = hipY + 20;
    const shoulderWidth = 13;
    const hemHalfWidth = shoulderWidth / 2 + 6; // narrower flare — stays gown-shaped, not skirt-shaped

    let leftHemX = x - hemHalfWidth;
    let rightHemX = x + hemHalfWidth;
    let hemLift = 0;

    if (!onGround) {
      const flare = vy < 0 ? 5 : 2;
      leftHemX -= flare;
      rightHemX += flare;
      hemLift = 3;
    } else if (moving) {
      const sway = swing * 3.5;
      leftHemX += sway;
      rightHemX += sway * 0.6;
    }

    const topLeftX = x - shoulderWidth / 2;
    const topRightX = x + shoulderWidth / 2;
    // flare only kicks in during the last 30% of the gown's length — stays narrow like a real robe up top
    const flareStartY = robeTop + (robeBottom - robeTop) * 0.7;
    const hemY = robeBottom - hemLift;

    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(topLeftX, robeTop);
    ctx.lineTo(topLeftX - 1, flareStartY);
    ctx.quadraticCurveTo(topLeftX - 3, flareStartY + (hemY - flareStartY) * 0.6, leftHemX, hemY);
    ctx.lineTo(rightHemX, hemY);
    ctx.quadraticCurveTo(topRightX + 3, flareStartY + (hemY - flareStartY) * 0.6, topRightX + 1, flareStartY);
    ctx.lineTo(topRightX, robeTop);
    ctx.lineTo(x, robeTop + 5); // V-neck collar notch
    ctx.closePath();
    ctx.fill();

    // Gold hem trim
    ctx.strokeStyle = GOLD;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(leftHemX, hemY);
    ctx.lineTo(rightHemX, hemY);
    ctx.stroke();

    // Gold diagonal sash
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(topLeftX + 2, robeTop + 2);
    ctx.lineTo(rightHemX - 4, hemY - 3);
    ctx.stroke();

    function drawSleeve(shoulderX: number, endX: number, endY: number) {
      const sleeveEndX = shoulderX + (endX - shoulderX) * 0.65;
      const sleeveEndY = robeTop + (endY - robeTop) * 0.65;
      const perpX = -(sleeveEndY - robeTop) * 0.18;
      const perpY = (sleeveEndX - shoulderX) * 0.18;

      ctx.beginPath();
      ctx.moveTo(shoulderX - 3, robeTop + 1);
      ctx.lineTo(shoulderX + 3, robeTop + 1);
      ctx.lineTo(sleeveEndX + perpX, sleeveEndY + perpY);
      ctx.lineTo(sleeveEndX - perpX, sleeveEndY - perpY);
      ctx.closePath();
      ctx.fill();
      return { sleeveEndX, sleeveEndY };
    }

    const rSleeveEnd = drawSleeve(x + shoulderWidth / 2 - 1, rArmX, rArmY);
    const lSleeveEnd = drawSleeve(x - shoulderWidth / 2 + 1, lArmX, lArmY);

    // Gold cuff trim at each sleeve end
    ctx.strokeStyle = GOLD;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(rSleeveEnd.sleeveEndX, rSleeveEnd.sleeveEndY, 2.5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(lSleeveEnd.sleeveEndX, lSleeveEnd.sleeveEndY, 2.5, 0, Math.PI * 2);
    ctx.stroke();

    // Hands/forearms poking out past the sleeve
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(rSleeveEnd.sleeveEndX, rSleeveEnd.sleeveEndY);
    ctx.lineTo(rArmX, rArmY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(lSleeveEnd.sleeveEndX, lSleeveEnd.sleeveEndY);
    ctx.lineTo(lArmX, lArmY);
    ctx.stroke();
  } else {
    // Non-robed levels: draw full arm lines directly
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, shoulderDrawY);
    ctx.lineTo(rArmX, rArmY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, shoulderDrawY);
    ctx.lineTo(lArmX, lArmY);
    ctx.stroke();
  }

  // ── HEAD ──
  ctx.beginPath();
  ctx.arc(x, HY, HR, 0, Math.PI * 2);
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // ── GLASSES ──
  const GW = 7, GH = 5;
  const GY = HY - 1;
  const bridgeGap = 3;
  const lx = x - bridgeGap / 2 - GW;
  const rx = x + bridgeGap / 2;

  ctx.lineWidth = 2.5;
  ctx.strokeRect(lx, GY - GH / 2, GW, GH);
  ctx.strokeRect(rx, GY - GH / 2, GW, GH);
  ctx.beginPath();
  ctx.moveTo(lx + GW, GY);
  ctx.lineTo(rx, GY);
  ctx.stroke();

  // ── GRADUATION CAP (Level 1 only) ──
  if (levelId === 1) {
    const capWidth = 20;
    const capHeight = 6;
    const capY = headTopY - capHeight - 1;

    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, capY - 3);
    ctx.lineTo(x + capWidth / 2, capY + capHeight / 2);
    ctx.lineTo(x, capY + capHeight + 2);
    ctx.lineTo(x - capWidth / 2, capY + capHeight / 2);
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(x, capY + capHeight / 2, 1.8, 0, Math.PI * 2);
    ctx.fill();

    const tasselSide = facing === 1 ? 1 : -1;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x + (capWidth / 2) * tasselSide, capY + capHeight / 2);
    ctx.lineTo(x + (capWidth / 2 + 6) * tasselSide, capY + capHeight / 2 + 13);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x + (capWidth / 2 + 6) * tasselSide, capY + capHeight / 2 + 15, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function drawHUD(
  ctx: CanvasRenderingContext2D,
  score: number,
  collected: number,
  total: number,
  dead: boolean,
  deathCause: "fall" | "spike" | "monster" | null,
  won: boolean,
  insufficientStars: boolean,
  timeUp: boolean,
  timeRemaining: number,
  wonT: number,
  level: LevelData,
  onViewAchievements?: () => void,
  onBack?: () => void,
  deathT?: number,
) {
  if (dead) {
    const bloody = deathCause === "monster" || deathCause === "spike";
    const t = deathT ?? 999;

    if (bloody) {
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, CW, CH);

      const cardAlpha = Math.max(0, Math.min(1, (t - 25) / 15));
      if (cardAlpha > 0) {
        const cardW = 340, cardH = 110;
        const cardX = (CW - cardW) / 2, cardY = CH / 2 - cardH / 2 - 20;
        ctx.globalAlpha = cardAlpha;
        ctx.fillStyle = "rgba(255,255,255,0.92)";
        ctx.fillRect(cardX, cardY, cardW, cardH);
        ctx.strokeStyle = "rgba(110,0,0,0.5)";
        ctx.lineWidth = 2;
        ctx.strokeRect(cardX, cardY, cardW, cardH);
        ctx.globalAlpha = 1;
      } else {
        return; // wait for the blood animation before showing text
      }
    } else {
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fillRect(0, 0, CW, CH);
    }

    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "bold 34px 'Playfair Display', Georgia, serif";
    ctx.fillText(deathCause === "monster" ? "YOU GOT BITTEN!" : "YOU GOT SPIKED!", CW / 2, CH / 2 - 28);
    ctx.font = "16px 'Outfit', sans-serif";
    ctx.fillStyle = "#555";
    ctx.fillText("Press  R  to try again", CW / 2, CH / 2 + 6);
    return;
  }

  if (insufficientStars) {
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fillRect(0, 0, CW, CH);
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "bold 42px 'Playfair Display', Georgia, serif";
    ctx.fillText("NOT ENOUGH STARS", CW / 2, CH / 2 - 38);
    ctx.font = "18px 'Outfit', sans-serif";
    ctx.fillStyle = "#555";
    ctx.fillText(`Collected ${collected}/${total} stars. Need at least 8 to complete.`, CW / 2, CH / 2 + 10);
    ctx.font = "16px 'Outfit', sans-serif";
    ctx.fillStyle = "#333";
    ctx.fillText("Press  R  to try again", CW / 2, CH / 2 + 46);
    return;
  }

  if (timeUp) {
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fillRect(0, 0, CW, CH);
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "bold 48px 'Playfair Display', Georgia, serif";
    ctx.fillText("Time's up!", CW / 2, CH / 2 - 28);
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
      ctx.font = "bold 38px 'Playfair Display', Georgia, serif";
      ctx.fillText("You've unlocked an achievement", CW / 2, CH / 2 - 38);
      ctx.font = "18px 'Outfit', sans-serif";
      ctx.fillStyle = "#333";
      ctx.fillText(`Score: ${score}  ·  Stars: ${collected}/${total}`, CW / 2, CH / 2 + 10);

      if (onViewAchievements && a > 0.8) {
        const btnW = 200;
        const btnH = 44;
        const btnX = (CW - btnW) / 2;
        const btnY = CH / 2 + 50;

        ctx.fillStyle = "#1E6FBF";
        ctx.fillRect(btnX, btnY, btnW, btnH);
        ctx.strokeStyle = "#0D4A8A";
        ctx.lineWidth = 2;
        ctx.strokeRect(btnX, btnY, btnW, btnH);

        ctx.fillStyle = "white";
        ctx.font = "bold 15px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("View Achievements", CW / 2, btnY + 27);

        // Next Level button
        const nextBtnY = btnY + btnH + 12;
        ctx.fillStyle = "#1E6FBF";
        ctx.fillRect(btnX, nextBtnY, btnW, btnH);
        ctx.strokeStyle = "#0D4A8A";
        ctx.lineWidth = 2;
        ctx.strokeRect(btnX, nextBtnY, btnW, btnH);

        ctx.fillStyle = "white";
        ctx.font = "bold 15px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Next Level →", CW / 2, nextBtnY + 27);
      }

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
  ctx.fillText(`${level.company} — Level ${level.id}`, CW / 2, 23);
  ctx.textAlign = "right";
  ctx.fillStyle = timeRemaining <= 10 ? "#dc2626" : "#000";
  ctx.font = "bold 13px 'Outfit', sans-serif";
  ctx.fillText(`⏱ ${Math.ceil(timeRemaining)}s`, CW - 16, 23);
}

/* ─── main component ─────────────────────────────────── */

export default function PlatformerGame({ onBack, levelId, onLevelComplete, onViewAchievements }: { onBack: () => void; levelId: number; onLevelComplete: (levelId: number) => void; onViewAchievements?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const level = LEVELS.find(l => l.id === levelId) || LEVELS[0];
  const gsRef = useRef<GS>(freshState(level));
  const rafRef = useRef(0);
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);
  const [showMedalReveal, setShowMedalReveal] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const onKD = (e: KeyboardEvent) => {
      const g = gsRef.current;
      g.keys.add(e.code);
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Space"].includes(e.code)) {
        e.preventDefault();
      }
      if (e.code === "KeyR" && (g.dead || g.insufficientStars || g.timeUp)) {
        const fresh = freshState(level);
        fresh.keys = g.keys;
        gsRef.current = fresh;
      }
    };
    const onKU = (e: KeyboardEvent) => gsRef.current.keys.delete(e.code);

    const onCanvasClick = (e: MouseEvent) => {
      const g = gsRef.current;
      if (g.won) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const btnW = 200;
        const btnH = 44;
        const btnX = (CW - btnW) / 2;
        const btnY = CH / 2 + 50;
        const nextBtnY = btnY + btnH + 12;

        const scaleX = CW / rect.width;
        const scaleY = CH / rect.height;
        const canvasX = x * scaleX;
        const canvasY = y * scaleY;

        if (canvasX >= btnX && canvasX <= btnX + btnW &&
            canvasY >= btnY && canvasY <= btnY + btnH) {
          if (onViewAchievements) onViewAchievements();
        }
        if (canvasX >= btnX && canvasX <= btnX + btnW &&
            canvasY >= nextBtnY && canvasY <= nextBtnY + btnH) {
          onBack();
        }
      }
    };

    window.addEventListener("keydown", onKD);
    window.addEventListener("keyup", onKU);
    canvas.addEventListener("click", onCanvasClick);
    canvas.focus();

    function tick() {
      const g = gsRef.current;

      for (const p of g.bloodParticles) {
        if (!p.settled) {
          p.vy += GRAV * 0.8;
          p.vx *= 0.995;
          const prevY = p.y;
          p.x += p.vx;
          p.y += p.vy;
          const crossed = bloodSurfacesAt(p.x, level).filter(sy => sy >= prevY - 2 && sy <= p.y + 2);
          if (crossed.length) {
            p.y = Math.min(...crossed);
            p.settled = true;
            p.vx *= 0.5;
          }
        } else {
          // settled liquid still slides with momentum and re-falls if it rolls off an edge
          p.vx *= 0.88;
          p.x += p.vx;
          const stillSupported = bloodSurfacesAt(p.x, level).some(sy => Math.abs(sy - p.y) < 2);
          if (!stillSupported) { p.settled = false; p.vy = 0.5; }
        }
      }

      if (g.dead) { g.deathT++; return; }
      if (g.won) { g.wonT++; return; }
      if (g.insufficientStars) return;
      if (g.timeUp) return;

      g.frameCount++;

      const L = g.keys.has("ArrowLeft") || g.keys.has("KeyA");
      const R = g.keys.has("ArrowRight") || g.keys.has("KeyD");
      const J = g.keys.has("Space") || g.keys.has("ArrowUp") || g.keys.has("KeyW");

      if (L) { g.vx = -SPD; g.facing = -1; }
      else if (R) { g.vx = SPD; g.facing = 1; }
      else g.vx *= 0.62;
      if (Math.abs(g.vx) < 0.08) g.vx = 0;

      if (J && g.onGround) { g.vy = JUMP_V; g.onGround = false; }
      const peakEasing = Math.abs(g.vy) < 2 ? 0.3 : 1;
      g.vy = Math.min(g.vy + GRAV * peakEasing, 16);

      if (g.onGround && Math.abs(g.vx) > 0.2) g.walkF++;
      else if (!g.onGround) g.walkF++;

      g.px += g.vx;
      g.px = Math.max(PW + 10, g.px);

      for (const p of level.platforms) {
        const prevOverlapX = (g.px - g.vx) + PW > p.x && (g.px - g.vx) - PW < p.x + p.w;
        const nowOverlapX = g.px + PW > p.x && g.px - PW < p.x + p.w;
        const overlapY = g.py > p.y && (g.py - PH) < (p.y + p.h);
        if (!prevOverlapX && nowOverlapX && overlapY) {
          if (g.vx > 0) { g.px = p.x - PW - 0.1; g.vx = 0; }
          else { g.px = p.x + p.w + PW + 0.1; g.vx = 0; }
        }
      }

      g.py += g.vy;
      g.onGround = false;

      for (const p of level.platforms) {
        const overlapX = g.px + PW > p.x + 1 && g.px - PW < p.x + p.w - 1;
        if (!overlapX) continue;
        const prevFeet = g.py - g.vy;
        const prevHead = prevFeet - PH;

        if (g.vy > 0 && prevFeet <= p.y && g.py >= p.y) {
          g.py = p.y; g.vy = 0; g.onGround = true;
        }
        if (g.vy < 0 && prevHead >= p.y + p.h && (g.py - PH) <= p.y + p.h) {
          g.py = p.y + p.h + PH; g.vy = 1;
        }
      }

      for (const c of g.coins) {
        if (!c.col && Math.abs(g.px - c.x) < 20 && Math.abs((g.py - PH / 2) - c.y) < 22) {
          c.col = true; g.score += 10;
        }
      }

      if (g.py > CH + 80) { g.dead = true; g.deathCause = "fall"; }

      for (const spike of level.spikes) {
        const playerBottom = g.py;
        const playerTop = g.py - PH;
        const playerLeft = g.px - PW;
        const playerRight = g.px + PW;

        const spikeTop = spike.y;
        const spikeBottom = spike.y + spike.h;

        if (playerRight > spike.x + 2 && playerLeft < spike.x + spike.w - 2 &&
            playerBottom > spikeTop + 5 && playerTop < spikeBottom) {
          g.dead = true;
          g.deathCause = "spike";
          // Spawn blood particles at wound position
          const woundY = Math.min(playerBottom, spikeTop + spike.h / 2);
          for (let i = 0; i < 15; i++) {
            g.bloodParticles.push({
              x: g.px + (Math.random() - 0.5) * 10,
              y: woundY,
              vx: (Math.random() - 0.5) * 4,
              vy: -Math.random() * 3,
              settled: false,
              r: 6 + Math.random() * 4
            });
          }
        }
      }

      for (const m of level.monsters) {
        const hb = monsterHitbox(m, g.frameCount);
        if (hb.ext < 0.6) continue; // not emerged enough to bite yet
        const playerLeft = g.px - PW, playerRight = g.px + PW;
        const playerTop = g.py - PH, playerBottom = g.py;
        if (playerRight > hb.left && playerLeft < hb.right &&
            playerBottom > hb.top && playerTop < hb.bottom) {
          g.dead = true;
          g.deathCause = "monster";
          // Spawn blood particles at wound position (monster mouth area)
          const woundY = Math.min(playerBottom, (hb.top + hb.bottom) / 2);
          for (let i = 0; i < 18; i++) {
            g.bloodParticles.push({
              x: g.px + (Math.random() - 0.5) * 12,
              y: woundY,
              vx: (Math.random() - 0.5) * 5,
              vy: -Math.random() * 4,
              settled: false,
              r: 6 + Math.random() * 4
            });
          }
        }
      }
      // Medal position past flag
      const medalX = level.flagX + 100;
      const medalY = level.groundY - 30;

      if (Math.abs(g.px - medalX) < 25 && Math.abs(g.py - medalY) < 40 && !g.medalCollected && !g.won) {
        const collectedStars = g.coins.filter(c => c.col).length;
        if (collectedStars >= 8) {
          g.medalCollected = true;
          setShowMedalReveal(true);
        } else {
          g.insufficientStars = true;
        }
      }

      g.timeRemaining -= 1 / 60;
      if (g.timeRemaining <= 0) {
        g.timeRemaining = 0;
        g.timeUp = true;
      }

      const tCam = g.px - CW * 0.33;
      g.camX += (tCam - g.camX) * 0.1;
      g.camX = Math.max(0, g.camX);
    }

    function draw() {
      const g = gsRef.current;
      ctx.clearRect(0, 0, CW, CH);

      ctx.fillStyle = level.theme.bg;
      ctx.fillRect(0, 0, CW, CH);

      ctx.fillStyle = level.theme.skyDot;
      for (let gx = 16; gx < CW; gx += 40) {
        for (let gy = 16; gy < CH; gy += 40) {
          ctx.beginPath();
          ctx.arc(gx, gy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.save();
      ctx.translate(-Math.round(g.camX), 0);

      drawPlatforms(ctx, g.camX, level);

      for (const spike of level.spikes) {
        if (spike.x + spike.w < g.camX - 20 || spike.x > g.camX + CW + 20) continue;
        drawSpike(ctx, spike);
      }

      drawFlag(ctx, level.flagX, level.groundY);

      // Draw Medal past flag if not collected
      const medalX = level.flagX + 100;
      const medalY = level.groundY - 30;

      if (!g.medalCollected) {
        drawInWorldMedal(ctx, medalX, medalY, g.frameCount);
      }

      // Prompt when player reaches or passes flag
      if (g.px >= level.flagX - 20 && !g.medalCollected) {
        ctx.fillStyle = "#1e3a8a";
        ctx.font = "bold 13px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Grab the medal! →", level.flagX + 50, level.groundY - 80);
      }

      for (const m of level.monsters) {
        if (m.pipeX < g.camX - 60 || m.pipeX > g.camX + CW + 60) continue;
        drawMonster(ctx, m, g.frameCount);
      }

      for (const c of g.coins) {
        if (c.col || c.x < g.camX - 40 || c.x > g.camX + CW + 40) continue;
        drawCoin(ctx, c.x, c.y);
      }

      drawStickman(
        ctx, g.px, g.py, g.facing, g.walkF,
        g.onGround, Math.abs(g.vx) > 0.2, g.vy,
        level.id,
        level.groundY,
      );

      // Draw blood particles with proximity-based clustering
      if (g.bloodParticles.length > 0) {
        const visibleParticles = g.bloodParticles.filter(p => p.x >= g.camX - 40 && p.x <= g.camX + CW + 40);

        // Group settled particles into clusters for pool fusion
        const settled = visibleParticles.filter(p => p.settled);
        const clusters: BloodParticle[][] = [];
        const visited = new Set<number>();

        for (let i = 0; i < settled.length; i++) {
          if (visited.has(i)) continue;
          const cluster = [settled[i]];
          visited.add(i);

          for (let j = i + 1; j < settled.length; j++) {
            if (visited.has(j)) continue;
            const dx = settled[i].x - settled[j].x;
            const dy = settled[i].y - settled[j].y;
            if (Math.sqrt(dx * dx + dy * dy) < 25) {
              cluster.push(settled[j]);
              visited.add(j);
            }
          }
          clusters.push(cluster);
        }

        // Draw soft pool base for each cluster
        for (const cluster of clusters) {
          const avgX = cluster.reduce((sum, p) => sum + p.x, 0) / cluster.length;
          const avgY = cluster.reduce((sum, p) => sum + p.y, 0) / cluster.length;
          const maxR = Math.max(...cluster.map(p => p.r));
          const poolR = maxR + 8;

          const poolGrad = ctx.createRadialGradient(avgX, avgY, 0, avgX, avgY, poolR);
          poolGrad.addColorStop(0, 'rgba(102,0,0,0.85)');
          poolGrad.addColorStop(1, 'rgba(60,0,0,0)');
          ctx.fillStyle = poolGrad;
          ctx.beginPath();
          ctx.ellipse(avgX, avgY, poolR, poolR * 0.4, 0, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw individual particles with state-based shapes
        for (const p of visibleParticles) {
          ctx.fillStyle = '#660000';
          ctx.beginPath();

          if (p.settled) {
            // Flattened puddle shape
            ctx.ellipse(p.x, p.y, p.r, p.r * 0.4, 0, 0, Math.PI * 2);
          } else {
            // Stretch based on velocity for teardrop effect
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            const stretch = 1 + speed * 0.08;
            const angle = Math.atan2(p.vy, p.vx);
            ctx.ellipse(p.x, p.y, p.r * stretch, p.r, angle, 0, Math.PI * 2);
          }
          ctx.fill();
        }
      }

      ctx.restore();

      const collected = g.coins.filter(c => c.col).length;
      drawHUD(ctx, g.score, collected, level.coins.length, g.dead, g.deathCause, g.won, g.insufficientStars, g.timeUp, g.timeRemaining, g.wonT, level, onViewAchievements, onBack, g.deathT);
    }

    function loop() {
      tick();
      draw();
      setScore(gsRef.current.score);
      setWon(gsRef.current.won);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("keydown", onKD);
      window.removeEventListener("keyup", onKU);
      canvas.removeEventListener("click", onCanvasClick);
    };
  }, [level, onLevelComplete, onViewAchievements, onBack]);

  return (
    <div style={{
      minHeight: "100vh", background: "#f3f7fc",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      fontFamily: "'Outfit', sans-serif", padding: 24,
      position: "relative",
    }}>
      {showMedalReveal && (
        <MedalReveal
          logoSrc="/images/logos/cosmopolitan.png"
          label="Cosmopolitan College Brunei"
          onComplete={() => {
            setShowMedalReveal(false);
            gsRef.current.won = true;
            onLevelComplete(levelId);
          }}
        />
      )}
      <div style={{ width: CW, maxWidth: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <button onClick={onBack} style={{
            padding: "7px 16px", background: "white", border: "1px solid #1E6FBF28",
            color: "#1E6FBF", borderRadius: 4, fontSize: 13, fontWeight: 600, cursor: "pointer",
          }}>← Back to Levels</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, letterSpacing: 2.5, color: "#1E6FBF", fontWeight: 700 }}>LEVEL {level.id} — {level.company}</div>
            <div style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}>{level.role}</div>
          </div>
          <div style={{ fontSize: 12, color: "#888", textAlign: "right" }}>
            <div>← → / A D   Move</div>
            <div>↑ / W / Space   Jump</div>
          </div>
        </div>

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