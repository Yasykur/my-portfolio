import { useEffect, useRef, useState } from "react";
import TouchControls from "../components/TouchControls";
import { useIsTouch } from "../site/useMediaQuery";
import MedalReveal from "../components/MedalReveal";

const CW = 800;
const CH = 480;
const GRAV = 0.5;
const JUMP_V = -11;
const GROUND_Y = 424;
const PLAYER_W = 22;
const PLAYER_H = 70;

interface Obstacle {
  x: number;
  y: number;
  w: number;
  h: number;
  type: "cactus" | "rock" | "bird";
}

interface RagdollPart {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  angularV: number;
  length: number;
  type: "head" | "torso" | "limb";
}

interface GS {
  px: number;
  py: number;
  vy: number;
  onGround: boolean;
  facing: 1 | -1;
  walkF: number;
  obstacles: Obstacle[];
  dead: boolean;
  won: boolean;
  wonT: number;
  timeRemaining: number;
  frameCount: number;
  speed: number;
  nextSpawn: number;
  keys: Set<string>;
  ragdollParts: RagdollPart[];
  autoRunning: boolean;
  autoRunTimer: number;
  medalX: number;
}

function freshState(): GS {
  return {
    px: 100,
    py: GROUND_Y,
    vy: 0,
    onGround: true,
    facing: 1,
    walkF: 0,
    obstacles: [],
    dead: false,
    won: false,
    wonT: 0,
    timeRemaining: 25,
    frameCount: 0,
    speed: 3.5,
    nextSpawn: 90,
    keys: new Set(),
    ragdollParts: [],
    autoRunning: false,
    autoRunTimer: 0,
    medalX: 0,
  };
}

function drawStickman(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  facing: 1 | -1,
  walkF: number,
  onGround: boolean,
  moving: boolean,
  vy: number,
) {
  const HR = 9;
  const headTopY = y - PLAYER_H;
  const HY = headTopY + HR;
  const neckY = HY + HR + 3;
  const shoulderY = neckY + 2;
  const hipY = shoulderY + 20;
  const legLength = y - hipY;

  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Shadow
  const shadowSize = onGround ? 13 : Math.max(7, 12 - Math.abs(vy) * 0.2);
  const shadowOpacity = onGround ? 0.12 : 0.08;
  ctx.fillStyle = `rgba(0,0,0,${shadowOpacity})`;
  ctx.beginPath();
  ctx.ellipse(x, GROUND_Y + 2, shadowSize, shadowSize * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();

  // Animation
  const walkCycle = moving && onGround ? walkF * 0.25 : 0;
  const swing = Math.sin(walkCycle);
  const swingOpp = Math.sin(walkCycle + Math.PI);

  ctx.strokeStyle = "#000";

  // Legs
  const stance = 7;
  const kneeY = hipY + legLength * 0.5;
  const footBaseY = hipY + legLength;

  function drawLeg(sideSign: number, phase: number, airborne: boolean) {
    const hipX = x + sideSign * stance * facing;
    let kneeX = hipX + sideSign * 1.5 * facing;
    let footX = hipX;
    let kY = kneeY;
    let fY = footBaseY;

    if (airborne) {
      footX = hipX + sideSign * 6 * facing;
      kY = kneeY - 2;
      fY = footBaseY - 4;
    } else if (moving && onGround) {
      const swingAmt = phase * 9;
      footX = hipX + swingAmt * facing;
      kneeX = hipX + swingAmt * 0.4 * facing;
      kY = kneeY - Math.max(0, phase) * 5;
    }

    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x + sideSign * stance * facing * 0.3, hipY);
    ctx.lineTo(kneeX, kY);
    ctx.lineTo(footX, fY);
    ctx.stroke();

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

  // Torso
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(x, neckY);
  ctx.lineTo(x, hipY);
  ctx.stroke();

  // Arms
  const shoulderDrawY = shoulderY + 3;
  let rArmX: number, rArmY: number, lArmX: number, lArmY: number;

  if (!onGround) {
    const armAngle = vy < 0 ? -22 : -10;
    const armSpread = vy < 0 ? 15 : 11;
    rArmX = x + armSpread * facing;
    rArmY = shoulderDrawY + armAngle;
    lArmX = x - armSpread * facing;
    lArmY = shoulderDrawY + armAngle;
  } else if (moving) {
    const armSwing = swingOpp * 12;
    rArmX = x + 11 * facing;
    rArmY = shoulderDrawY + 14 + armSwing;
    lArmX = x - 11 * facing;
    lArmY = shoulderDrawY + 14 - armSwing;
  } else {
    rArmX = x + 8;
    rArmY = shoulderDrawY + 17;
    lArmX = x - 8;
    lArmY = shoulderDrawY + 17;
  }

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

  // Head
  ctx.beginPath();
  ctx.arc(x, HY, HR, 0, Math.PI * 2);
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Glasses
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

  ctx.restore();
}

function drawObstacle(ctx: CanvasRenderingContext2D, obs: Obstacle, frameCount: number) {
  if (obs.type === "bird") {
    drawBird(ctx, obs, frameCount);
    return;
  }

  ctx.save();
  ctx.fillStyle = "#1e40af";
  ctx.strokeStyle = "#1e3a8a";
  ctx.lineWidth = 2;

  if (obs.type === "cactus") {
    // Cactus-like shape
    ctx.beginPath();
    ctx.moveTo(obs.x + obs.w / 2, obs.y);
    ctx.lineTo(obs.x + obs.w, obs.y + obs.h * 0.3);
    ctx.lineTo(obs.x + obs.w, obs.y + obs.h);
    ctx.lineTo(obs.x, obs.y + obs.h);
    ctx.lineTo(obs.x, obs.y + obs.h * 0.3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Cactus arms
    ctx.beginPath();
    ctx.moveTo(obs.x + obs.w * 0.3, obs.y + obs.h * 0.4);
    ctx.lineTo(obs.x - 8, obs.y + obs.h * 0.5);
    ctx.lineTo(obs.x - 8, obs.y + obs.h * 0.7);
    ctx.lineTo(obs.x + obs.w * 0.4, obs.y + obs.h * 0.6);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(obs.x + obs.w * 0.7, obs.y + obs.h * 0.5);
    ctx.lineTo(obs.x + obs.w + 8, obs.y + obs.h * 0.4);
    ctx.lineTo(obs.x + obs.w + 8, obs.y + obs.h * 0.6);
    ctx.lineTo(obs.x + obs.w * 0.6, obs.y + obs.h * 0.7);
    ctx.fill();
    ctx.stroke();
  } else {
    // Rock — irregular rounded shape, not a flat box
    ctx.beginPath();
    ctx.moveTo(obs.x + obs.w * 0.1, obs.y + obs.h * 0.6);
    ctx.lineTo(obs.x + obs.w * 0.3, obs.y + obs.h * 0.1);
    ctx.lineTo(obs.x + obs.w * 0.7, obs.y);
    ctx.lineTo(obs.x + obs.w, obs.y + obs.h * 0.4);
    ctx.lineTo(obs.x + obs.w * 0.9, obs.y + obs.h);
    ctx.lineTo(obs.x + obs.w * 0.2, obs.y + obs.h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // A couple of texture lines to sell "rock" over "blob"
    ctx.beginPath();
    ctx.moveTo(obs.x + obs.w * 0.35, obs.y + obs.h * 0.3);
    ctx.lineTo(obs.x + obs.w * 0.5, obs.y + obs.h * 0.6);
    ctx.stroke();
  }

  ctx.restore();
}

function drawInWorldMedal(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  frameCount: number,
  logoImg: HTMLImageElement | null
) {
  ctx.save();
  ctx.translate(x, y);

  const scaleX = Math.abs(Math.sin(frameCount * 0.08));
  ctx.scale(scaleX, 1);

  const R = 15;

  // Outer gold base with shadow
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetY = 2;

  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.fillStyle = "#fbbf24";
  ctx.fill();
  ctx.restore();

  // Draw logo image clipped inside circle if ready
  if (logoImg && logoImg.complete && logoImg.naturalWidth > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, R - 2, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.drawImage(logoImg, -(R - 2), -(R - 2), (R - 2) * 2, (R - 2) * 2);
    ctx.restore();
  } else {
    // Inner accent fallback
    ctx.beginPath();
    ctx.arc(0, 0, R - 4, 0, Math.PI * 2);
    ctx.fillStyle = "#fbbf24";
    ctx.fill();

    ctx.fillStyle = "#92400e";
    ctx.font = "bold 10px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("★", 0, 0);
  }

  // Radial gradient shine overlay
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, R - 1, 0, Math.PI * 2);
  ctx.clip();

  const shineGrad = ctx.createRadialGradient(-R * 0.35, -R * 0.35, 1, -R * 0.1, -R * 0.1, R * 1.3);
  shineGrad.addColorStop(0, "rgba(255, 255, 255, 0.65)");
  shineGrad.addColorStop(0.4, "rgba(255, 255, 255, 0.2)");
  shineGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = shineGrad;
  ctx.fill();
  ctx.restore();

  // Thin gold rim stroke
  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.strokeStyle = "#d4a017";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, R - 1, 0, Math.PI * 2);
  ctx.strokeStyle = "#92400e";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.restore();
}

function drawBird(ctx: CanvasRenderingContext2D, obs: Obstacle, frameCount: number) {
  ctx.save();
  ctx.strokeStyle = "#1e3a8a";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const flap = Math.sin(frameCount * 0.3);
  const wingAngle = flap * 0.4;

  const cx = obs.x + obs.w / 2;
  const cy = obs.y + obs.h / 2;

  // Left wing
  ctx.beginPath();
  ctx.moveTo(cx - 5, cy);
  ctx.quadraticCurveTo(cx - 15, cy - 10 + wingAngle * 8, cx - 20, cy - 5 + wingAngle * 5);
  ctx.stroke();

  // Right wing
  ctx.beginPath();
  ctx.moveTo(cx + 5, cy);
  ctx.quadraticCurveTo(cx + 15, cy - 10 + wingAngle * 8, cx + 20, cy - 5 + wingAngle * 5);
  ctx.stroke();

  // Body (simple line)
  ctx.beginPath();
  ctx.moveTo(cx - 8, cy);
  ctx.lineTo(cx + 8, cy);
  ctx.stroke();

  ctx.restore();
}

function drawRagdoll(ctx: CanvasRenderingContext2D, parts: RagdollPart[]) {
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2.5;

  for (const part of parts) {
    ctx.save();
    ctx.translate(part.x, part.y);
    ctx.rotate(part.angle);

    if (part.type === "head") {
      ctx.beginPath();
      ctx.arc(0, 0, 9, 0, Math.PI * 2);
      ctx.stroke();

      // Glasses
      const GW = 7, GH = 5;
      const bridgeGap = 3;
      ctx.lineWidth = 2;
      ctx.strokeRect(-bridgeGap / 2 - GW, -GH / 2, GW, GH);
      ctx.strokeRect(bridgeGap / 2, -GH / 2, GW, GH);
      ctx.beginPath();
      ctx.moveTo(-bridgeGap / 2, 0);
      ctx.lineTo(bridgeGap / 2, 0);
      ctx.stroke();
    } else if (part.type === "torso") {
      ctx.beginPath();
      ctx.moveTo(0, -part.length / 2);
      ctx.lineTo(0, part.length / 2);
      ctx.stroke();
    } else if (part.type === "limb") {
      ctx.beginPath();
      ctx.moveTo(0, -part.length / 2);
      ctx.lineTo(0, part.length / 2);
      ctx.stroke();
    }

    ctx.restore();
  }

  ctx.restore();
}

function drawHUD(
  ctx: CanvasRenderingContext2D,
  dead: boolean,
  won: boolean,
  timeRemaining: number,
  wonT: number,
  onViewAchievements?: () => void,
) {
  if (dead) {
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fillRect(0, 0, CW, CH);
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "bold 42px 'Playfair Display', Georgia, serif";
    ctx.fillText("Game Over!", CW / 2, CH / 2 - 28);
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
      ctx.fillText("Survived 25 seconds!", CW / 2, CH / 2 + 10);

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
  ctx.fillText("Survival Runner", 16, 23);
  ctx.textAlign = "right";
  ctx.fillStyle = timeRemaining <= 10 ? "#dc2626" : "#000";
  ctx.font = "bold 13px 'Outfit', sans-serif";
  ctx.fillText(`⏱ ${Math.ceil(timeRemaining)}s`, CW - 16, 23);
}

export default function RunnerGame({ onBack, onLevelComplete, onViewAchievements }: { onBack: () => void; onLevelComplete: (levelId: number) => void; onViewAchievements?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isTouch = useIsTouch();
  const gsRef = useRef<GS>(freshState());
  const rafRef = useRef(0);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [won, setWon] = useState(false);
  const [showMedalReveal, setShowMedalReveal] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/logos/muara.png";
    img.onerror = () => {
      img.src = "/logos/muara.png";
    };
    logoRef.current = img;
  }, []);

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
        gsRef.current = freshState();
      }
      if ((e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") && g.onGround && !g.dead && !g.won && !g.autoRunning) {
        g.vy = JUMP_V;
        g.onGround = false;
      }
    };
    const onKU = (e: KeyboardEvent) => {
      const g = gsRef.current;
      g.keys.delete(e.code);
    };

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

      // Update ragdoll physics (runs even when dead)
      for (const part of g.ragdollParts) {
        part.vy += GRAV * 0.8;
        part.x += part.vx;
        part.y += part.vy;
        part.angle += part.angularV;

        if (part.y >= GROUND_Y) {
          part.y = GROUND_Y;
          if (part.vy > 0) {
            part.vy *= -0.45;
            part.vx += (Math.random() - 0.5) * 3;
          }
          if (Math.abs(part.vy) < 0.5) part.vy = 0;
          part.vx *= 0.9;
          part.angularV *= 0.85;
        }
      }

      if (g.dead) return;
      if (g.won) { g.wonT++; return; }

      g.frameCount++;

      if (g.autoRunning) {
        g.autoRunTimer--;
        g.px += 2;
        g.medalX -= g.speed;
        g.walkF++;

        if (g.autoRunTimer <= 0 || Math.abs(g.px - g.medalX) < 25) {
          g.autoRunning = false;
          setShowMedalReveal(true);
        }
        return;
      }

      g.timeRemaining -= 1 / 60;

      if (g.timeRemaining <= 0) {
        g.timeRemaining = 0;
        g.autoRunning = true;
        g.autoRunTimer = 90; // 1.5s auto-run
        g.medalX = CW + 180;
        g.obstacles = [];
      }

      // Increase speed slightly over time
      g.speed = 3.5 + (25 - g.timeRemaining) * 0.025;

      // Player physics
      g.vy = Math.min(g.vy + GRAV, 16);
      g.py += g.vy;

      if (g.py >= GROUND_Y) {
        g.py = GROUND_Y;
        g.vy = 0;
        g.onGround = true;
      }

      if (g.onGround) g.walkF++;

      // Spawn obstacles
      g.nextSpawn--;
      if (g.nextSpawn <= 0) {
        const rand = Math.random();
        let type: "cactus" | "rock" | "bird";
        if (rand > 0.85) {
          type = "bird";
        } else if (rand > 0.7) {
          type = "rock";
        } else {
          type = "cactus";
        }

        const obs: Obstacle = {
          x: CW + 50,
          y: type === "bird" ? GROUND_Y - 150 : type === "rock" ? GROUND_Y - 28 : GROUND_Y - 50,
          w: type === "bird" ? 34 : type === "rock" ? 34 : 30,
          h: type === "bird" ? 36 : type === "rock" ? 28 : 50,
          type,
        };
        g.obstacles.push(obs);
        g.nextSpawn = 90 + Math.random() * 60;
      }

      // Move obstacles
      for (const obs of g.obstacles) {
        obs.x -= g.speed;
      }

      // Remove off-screen obstacles
      g.obstacles = g.obstacles.filter(obs => obs.x > -100);

      // Collision detection
      const playerLeft = g.px - PLAYER_W / 2;
      const playerRight = g.px + PLAYER_W / 2;
      const playerTop = g.py - PLAYER_H;
      const playerBottom = g.py;

      for (const obs of g.obstacles) {
        if (playerRight > obs.x + 5 && playerLeft < obs.x + obs.w - 5 &&
            playerBottom > obs.y + 5 && playerTop < obs.y + obs.h - 5) {
          g.dead = true;

          // Create ragdoll parts at current pose
          const HR = 9;
          const headTopY = g.py - PLAYER_H;
          const HY = headTopY + HR;
          const neckY = HY + HR + 3;
          const shoulderY = neckY + 2;
          const hipY = shoulderY + 20;

          g.ragdollParts = [
            // Head
            { x: g.px, y: HY, vx: (Math.random() - 0.5) * 18, vy: -Math.random() * 14 - 4, angle: 0, angularV: (Math.random() - 0.5) * 1.4, length: 0, type: "head" },
            // Torso
            { x: g.px, y: (neckY + hipY) / 2, vx: (Math.random() - 0.5) * 18, vy: -Math.random() * 14 - 4, angle: 0, angularV: (Math.random() - 0.5) * 1.4, length: hipY - neckY, type: "torso" },
            // Left arm
            { x: g.px - 8, y: shoulderY + 17, vx: (Math.random() - 0.5) * 18, vy: -Math.random() * 14 - 4, angle: 0, angularV: (Math.random() - 0.5) * 1.4, length: 25, type: "limb" },
            // Right arm
            { x: g.px + 8, y: shoulderY + 17, vx: (Math.random() - 0.5) * 18, vy: -Math.random() * 14 - 4, angle: 0, angularV: (Math.random() - 0.5) * 1.4, length: 25, type: "limb" },
            // Left leg
            { x: g.px - 7, y: hipY + 35, vx: (Math.random() - 0.5) * 18, vy: -Math.random() * 14 - 4, angle: 0, angularV: (Math.random() - 0.5) * 1.4, length: 35, type: "limb" },
            // Right leg
            { x: g.px + 7, y: hipY + 35, vx: (Math.random() - 0.5) * 18, vy: -Math.random() * 14 - 4, angle: 0, angularV: (Math.random() - 0.5) * 1.4, length: 35, type: "limb" },
          ];
        }
      }
    }

    function draw() {
      const g = gsRef.current;
      ctx.clearRect(0, 0, CW, CH);

      // Background
      ctx.fillStyle = "#eff6ff";
      ctx.fillRect(0, 0, CW, CH);

      // Sky dots
      ctx.fillStyle = "#bfdbfe";
      for (let gx = 16; gx < CW; gx += 40) {
        for (let gy = 16; gy < CH; gy += 40) {
          ctx.beginPath();
          ctx.arc(gx, gy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Ground
      ctx.fillStyle = "#1e40af";
      ctx.fillRect(0, GROUND_Y, CW, CH - GROUND_Y);
      ctx.fillStyle = "#1e3a8a";
      ctx.fillRect(0, GROUND_Y, CW, 4);

      // Scrolling ground line
      ctx.strokeStyle = "#60a5fa";
      ctx.lineWidth = 2;
      ctx.setLineDash([20, 15]);
      ctx.lineDashOffset = -g.frameCount * g.speed * 0.5;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y + 4);
      ctx.lineTo(CW, GROUND_Y + 4);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw obstacles
      for (const obs of g.obstacles) {
        drawObstacle(ctx, obs, g.frameCount);
      }

      // Draw approaching medal if auto-running
      if (g.autoRunning || g.medalX > 0) {
        drawInWorldMedal(ctx, g.medalX, GROUND_Y - 35, g.frameCount, logoRef.current);
      }

      // Draw player (or ragdoll if dead)
      if (g.dead && g.ragdollParts.length > 0) {
        drawRagdoll(ctx, g.ragdollParts);
      } else {
        drawStickman(ctx, g.px, g.py, g.facing, g.walkF, g.onGround, true, g.vy);
      }

      // HUD
      drawHUD(ctx, g.dead, g.won, g.timeRemaining, g.wonT, onViewAchievements);
    }

    function loop() {
      tick();
      draw();
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
  }, [onLevelComplete, onViewAchievements]);

  return (
    <div style={{
      minHeight: "100vh", background: "#f3f7fc",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      fontFamily: "'Outfit', sans-serif", padding: 24,
      position: "relative",
    }}>
      {showMedalReveal && (
        <MedalReveal
          logoSrc="/images/logos/muara.png"
          label="Muara International Fish Landing"
          onComplete={() => {
            setShowMedalReveal(false);
            gsRef.current.won = true;
            onLevelComplete(2);
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
            <div style={{ fontSize: 11, letterSpacing: 2.5, color: "#1E6FBF", fontWeight: 700 }}>LEVEL 2 — SURVIVAL RUNNER</div>
            <div style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}>Endless Runner Challenge</div>
          </div>
          <div style={{ fontSize: 12, color: "#888", textAlign: "right" }}>
            <div>↑ / W / Space   Jump</div>
            <div>Survive 25s</div>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          width={CW}
          height={CH}
          style={{
            display: "block", border: "2.5px solid #000", borderRadius: 6,
            outline: "none", boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            width: "100%",
            maxWidth: CW,
            height: "auto",
            touchAction: "none",
          }}
          tabIndex={0}
        />

        {isTouch && <TouchControls variant="runner" />}

        <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", color: "#aaa", fontSize: 12 }}>
          <span>Press R to restart after dying</span>
          <span style={{ color: "#1E6FBF", fontWeight: 600 }}>Level 2</span>
        </div>
      </div>
    </div>
  );
}
