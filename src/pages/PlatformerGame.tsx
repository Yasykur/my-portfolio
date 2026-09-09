import { useEffect, useRef, useState } from "react";

const CW = 800;
const CH = 480;
const GRAV = 0.45; // Reduced for slower rise
const JUMP_V = -10; // Slightly reduced jump velocity
const SPD = 3.8; // Reduced by ~15% for more controlled movement
const PW = 11;   // player half-width
const PH = 65;   // player height (feet to top)

type PlatType = "ground" | "block" | "pipe";
interface Plat { x: number; y: number; w: number; h: number; t: PlatType }
interface Coin { x: number; y: number; col: boolean }
interface Spike { x: number; y: number; w: number; h: number }

interface LevelData {
  id: number;
  company: string;
  role: string;
  platforms: Plat[];
  coins: Coin[];
  spikes: Spike[];
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
      { x: 930, y: 290, w: 36, h: 20 },
      { x: 1180, y: 400, w: 48, h: 24 },
      { x: 1350, y: 405, w: 36, h: 19 },
      { x: 1580, y: 403, w: 48, h: 21 },
      { x: 1800, y: 404, w: 36, h: 20 },
    ],
    coins: [
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
  won: boolean;
  wonT: number;
  insufficientStars: boolean;
  timeRemaining: number;
  timeUp: boolean;
}

function freshState(level: LevelData): GS {
  return {
    px: 80, py: 374, vx: 0, vy: 0,
    onGround: false, facing: 1, walkF: 0, camX: 0,
    coins: level.coins.map(c => ({ ...c })),
    score: 0, keys: new Set(),
    dead: false, won: false, wonT: 0, insufficientStars: false,
    timeRemaining: 60, timeUp: false,
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
  const HR = 10;
  const HY = y - PH + HR;       // head center
  const neckY = HY + HR + 2;
  const shoulderY = neckY + 4;
  const hipY = shoulderY + 24;

  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // ── Shadow ── (always at ground level, anchored to floor)
  // Shadow stays at fixed ground level, never moves up with character
  const shadowY = groundY + 2; // always at ground level
  const shadowSize = onGround ? 13 : Math.max(6, 11 - Math.abs(vy) * 0.25); // shrink when jumping
  const shadowOpacity = onGround ? 0.1 : Math.max(0.07, 0.09 - Math.abs(vy) * 0.005); // fixed minimum while airborne
  
  ctx.fillStyle = `rgba(0,0,0,${shadowOpacity})`;
  ctx.beginPath();
  ctx.ellipse(x, shadowY, shadowSize, shadowSize * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── Head ── (simple circle outline)
  ctx.beginPath();
  ctx.arc(x, HY, HR, 0, Math.PI * 2);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // ── Glasses ── (black rectangular frames only, flip based on facing)
  const GW = 8, GH = 6;
  const GY = HY - 1.5;
  const bridgeGap = 3;
  
  // Adjust glasses position based on facing direction
  const glassesOffset = facing === 1 ? 0 : 1;
  const lx = x - bridgeGap / 2 - GW + glassesOffset;
  const rx = x + bridgeGap / 2 + glassesOffset;

  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2.5;

  // Left lens frame
  ctx.strokeRect(lx, GY - GH / 2, GW, GH);
  // Right lens frame
  ctx.strokeRect(rx, GY - GH / 2, GW, GH);
  // Bridge
  ctx.beginPath();
  ctx.moveTo(lx + GW, GY);
  ctx.lineTo(rx, GY);
  ctx.stroke();

  // ── Graduation Cap (Level 1 only) ──
  if (levelId === 1) {
    const capWidth = 20;
    const capHeight = 6;
    const capY = HY - HR - capHeight - 2;
    
    // Clear square/diamond mortarboard top with sharp corners
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, capY - 3); // top point
    ctx.lineTo(x + capWidth / 2, capY + capHeight / 2); // right point
    ctx.lineTo(x, capY + capHeight + 2); // bottom point
    ctx.lineTo(x - capWidth / 2, capY + capHeight / 2); // left point
    ctx.closePath();
    ctx.stroke();
    
    // Clear brim/skull cap outline
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x - capWidth / 2 + 2, capY + capHeight / 2);
    ctx.lineTo(x - capWidth / 2 + 2, capY + capHeight + 4);
    ctx.lineTo(x + capWidth / 2 - 2, capY + capHeight + 4);
    ctx.lineTo(x + capWidth / 2 - 2, capY + capHeight / 2);
    ctx.stroke();
    
    // Small clear button in center
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(x, capY + capHeight / 2, 2, 0, Math.PI * 2);
    ctx.fill();
    
    // Clear tassel hanging from the side facing direction
    const tasselSide = facing === 1 ? 1 : -1;
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x + (capWidth / 2) * tasselSide, capY + capHeight / 2);
    ctx.lineTo(x + (capWidth / 2 + 7) * tasselSide, capY + capHeight / 2 + 14);
    ctx.stroke();
    
    // Clear circle bead at tassel end
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(x + (capWidth / 2 + 7) * tasselSide, capY + capHeight / 2 + 16, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // ── Body ──
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(x, neckY); ctx.lineTo(x, hipY);
  ctx.stroke();

  // ── Animation parameters ──
  const walkCycle = moving && onGround ? walkF * 0.28 : 0;

  // ── Legs ── (idle: together, alternate while walking, spread in air)
  // Use smoother sine-wave motion for natural walk cycle
  const legSwing = Math.sin(walkCycle) * 14;
  const legPhase = Math.sin(walkCycle + Math.PI / 2) * 8; // phase-shifted for knee bend
  const airSpread = !onGround ? 16 : 0;
  const jumpLegExtension = !onGround && vy < 0 ? 8 : 0; // extend legs when jumping up

  // Right leg (increased separation, keep facing for proper flip)
  const rightLegBase = 12 * facing; // increased base separation
  const rFootX = x + rightLegBase + legSwing * 0.4 * facing - jumpLegExtension * 0.3;
  const rKneeX = x + rightLegBase * 0.35 + legPhase * 0.15 * facing;
  const rKneeY = hipY + 12 + legPhase * 6 - jumpLegExtension * 0.5; // signed knee bend
  const rFootY = hipY + 20 + airSpread - jumpLegExtension;
  
  ctx.lineWidth = 3; // increased leg thickness
  ctx.beginPath();
  ctx.moveTo(x, hipY);
  ctx.lineTo(rKneeX, rKneeY);
  ctx.lineTo(rFootX, rFootY);
  ctx.stroke();
  
  // Right foot (flat perpendicular line, 5px)
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(rFootX - 2.5, rFootY);
  ctx.lineTo(rFootX + 2.5, rFootY);
  ctx.stroke();

  // Left leg (increased separation, keep facing for proper flip)
  const leftLegBase = -12 * facing; // increased base separation
  const lFootX = x + leftLegBase - legSwing * 0.4 * facing - jumpLegExtension * 0.3;
  const lKneeX = x + leftLegBase * 0.35 - legPhase * 0.15 * facing;
  const lKneeY = hipY + 12 - legPhase * 6 - jumpLegExtension * 0.5; // opposite signed knee bend
  const lFootY = hipY + 20 + airSpread - jumpLegExtension;
  
  ctx.lineWidth = 3; // increased leg thickness
  ctx.beginPath();
  ctx.moveTo(x, hipY);
  ctx.lineTo(lKneeX, lKneeY);
  ctx.lineTo(lFootX, lFootY);
  ctx.stroke();
  
  // Left foot (flat perpendicular line, 5px)
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(lFootX - 2.5, lFootY);
  ctx.lineTo(lFootX + 2.5, lFootY);
  ctx.stroke();
  
  ctx.lineWidth = 2.5; // reset line width for other elements

  // ── Arms ── (idle: down at sides, swing while walking, raised while falling)
  ctx.lineWidth = 2.5;

  if (moving && onGround) {
    // Walking swing - properly flip based on facing with smoother motion
    const swing = Math.sin(walkCycle) * 12;
    const rightArmX = x + 12 * facing;
    const leftArmX = x - 12 * facing;
    
    ctx.beginPath();
    ctx.moveTo(x, shoulderY + 5);
    ctx.lineTo(rightArmX, shoulderY + 5 + swing);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, shoulderY + 5);
    ctx.lineTo(leftArmX, shoulderY + 5 - swing);
    ctx.stroke();
  } else if (!onGround) {
    // Jumping/falling - arms raised with different pose for rise vs fall
    const armAngle = vy < 0 ? -20 : -10; // higher arms when rising
    const armSpread = vy < 0 ? 14 : 10; // wider spread when rising
    ctx.beginPath();
    ctx.moveTo(x, shoulderY + 5);
    ctx.lineTo(x + armSpread * facing, shoulderY + armAngle);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, shoulderY + 5);
    ctx.lineTo(x - armSpread * facing, shoulderY + armAngle);
    ctx.stroke();
  } else {
    // Idle - arms relaxed at sides (more visible)
    ctx.lineWidth = 3; // increased thickness for visibility
    ctx.beginPath();
    ctx.moveTo(x, shoulderY + 5);
    ctx.lineTo(x + 10, shoulderY + 28); // extended length for visibility
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, shoulderY + 5);
    ctx.lineTo(x - 10, shoulderY + 28); // extended length for visibility
    ctx.stroke();
    ctx.lineWidth = 2.5; // reset line width
  }

  ctx.restore();
}

function drawHUD(
  ctx: CanvasRenderingContext2D,
  score: number,
  collected: number,
  total: number,
  dead: boolean,
  won: boolean,
  insufficientStars: boolean,
  timeUp: boolean,
  timeRemaining: number,
  wonT: number,
  level: LevelData,
  onViewAchievements?: () => void,
) {
  if (dead) {
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fillRect(0, 0, CW, CH);
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "bold 48px 'Playfair Display', Georgia, serif";
    ctx.fillText("YOU GOT SPIKED!", CW / 2, CH / 2 - 28);
    ctx.font = "16px 'Outfit', sans-serif";
    ctx.fillStyle = "#555";
    ctx.fillText("Press  R  to try again", CW / 2, CH / 2 + 18);
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
      
      // Draw View Achievements button on canvas
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
      if (g.won && onViewAchievements) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if click is within the "View Achievements" button bounds
        const btnW = 200;
        const btnH = 44;
        const btnX = (CW - btnW) / 2;
        const btnY = CH / 2 + 50;
        
        // Scale coordinates if canvas is displayed at different size
        const scaleX = CW / rect.width;
        const scaleY = CH / rect.height;
        const canvasX = x * scaleX;
        const canvasY = y * scaleY;
        
        if (canvasX >= btnX && canvasX <= btnX + btnW && 
            canvasY >= btnY && canvasY <= btnY + btnH) {
          onViewAchievements();
        }
      }
    };

    window.addEventListener("keydown", onKD);
    window.addEventListener("keyup", onKU);
    canvas.addEventListener("click", onCanvasClick);
    canvas.focus();

    function tick() {
      const g = gsRef.current;
      if (g.dead) return;
      if (g.won) { g.wonT++; return; }
      if (g.insufficientStars) return;
      if (g.timeUp) return;

      const L = g.keys.has("ArrowLeft") || g.keys.has("KeyA");
      const R = g.keys.has("ArrowRight") || g.keys.has("KeyD");
      const J = g.keys.has("Space") || g.keys.has("ArrowUp") || g.keys.has("KeyW");

      if (L) { g.vx = -SPD; g.facing = -1; }
      else if (R) { g.vx = SPD; g.facing = 1; }
      else g.vx *= 0.62;
      if (Math.abs(g.vx) < 0.08) g.vx = 0;

      if (J && g.onGround) { g.vy = JUMP_V; g.onGround = false; }
      // Apply gravity with easing at jump peak for Mario-like hang
      const peakEasing = Math.abs(g.vy) < 2 ? 0.3 : 1; // Reduce gravity near peak
      g.vy = Math.min(g.vy + GRAV * peakEasing, 16);

      if (g.onGround && Math.abs(g.vx) > 0.2) g.walkF++;
      else if (!g.onGround) g.walkF++;

      // ── Move X then resolve ──
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

      // ── Move Y then resolve ──
      g.py += g.vy;
      g.onGround = false;

      for (const p of level.platforms) {
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
      
      // Check spike collision
      for (const spike of level.spikes) {
        const playerBottom = g.py;
        const playerTop = g.py - PH;
        const playerLeft = g.px - PW;
        const playerRight = g.px + PW;
        
        // More precise collision - check if player's body overlaps spike area
        // Allow small tolerance for feet touching spike tips
        const spikeTop = spike.y;
        const spikeBottom = spike.y + spike.h;
        
        if (playerRight > spike.x + 2 && playerLeft < spike.x + spike.w - 2 &&
            playerBottom > spikeTop + 5 && playerTop < spikeBottom) {
          g.dead = true;
        }
      }
      if (g.px > level.winX && !g.won) {
        const collectedStars = g.coins.filter(c => c.col).length;
        if (collectedStars >= 8) {
          g.won = true;
          onLevelComplete(levelId);
        } else {
          g.insufficientStars = true; // Flag to show retry message
        }
      }

      // ── Timer ──
      g.timeRemaining -= 1 / 60; // Decrement by 1/60 second per frame (assuming 60fps)
      if (g.timeRemaining <= 0) {
        g.timeRemaining = 0;
        g.timeUp = true;
      }

      // ── Camera ──
      const tCam = g.px - CW * 0.33;
      g.camX += (tCam - g.camX) * 0.1;
      g.camX = Math.max(0, g.camX);
    }

    function draw() {
      const g = gsRef.current;
      ctx.clearRect(0, 0, CW, CH);

      // White background
      ctx.fillStyle = level.theme.bg;
      ctx.fillRect(0, 0, CW, CH);

      // Dot-grid sky
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
      
      // Draw spikes
      for (const spike of level.spikes) {
        if (spike.x + spike.w < g.camX - 20 || spike.x > g.camX + CW + 20) continue;
        drawSpike(ctx, spike);
      }
      
      drawFlag(ctx, level.flagX, level.groundY);

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

      ctx.restore();

      const collected = g.coins.filter(c => c.col).length;
      drawHUD(ctx, g.score, collected, level.coins.length, g.dead, g.won, g.insufficientStars, g.timeUp, g.timeRemaining, g.wonT, level, onViewAchievements);
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
  }, [level, onLevelComplete, onViewAchievements]);

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
            <div style={{ fontSize: 11, letterSpacing: 2.5, color: "#1E6FBF", fontWeight: 700 }}>LEVEL {level.id} — {level.company}</div>
            <div style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}>{level.role}</div>
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
