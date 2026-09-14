import { useEffect, useRef, useState } from "react";

const CW = 800;
const CH = 480;
const PLAYER_SPD = 4.5;
const MAX_HP = 3;
const BOSS_MAX_HP = 30;
const KILLS_FOR_BOSS = 10;

interface Laser {
  x: number;
  y: number;
  vx: number;
}

interface Alien {
  id: number;
  x: number;
  y: number;
  baseY: number;
  vx: number;
  vy: number;
  r: number;
  variant: number;
  hp: number;
  shootTimer: number;
}

interface EnemyProjectile {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface BossLetter {
  id: number;
  char: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  angularV: number;
  size: number;
}

interface GS {
  px: number;
  py: number;
  hp: number;
  invuln: number;
  lasers: Laser[];
  aliens: Alien[];
  enemyProjectiles: EnemyProjectile[];
  bossLetters: BossLetter[];
  kills: number;
  bossSpawned: boolean;
  bossX: number;
  bossY: number;
  bossHp: number;
  bossTimer: number;
  dead: boolean;
  won: boolean;
  wonT: number;
  frameCount: number;
  shootCooldown: number;
  keys: Set<string>;
  difficulty: "easy" | "hard" | null;
  started: boolean;
}

function freshState(): GS {
  return {
    px: 100,
    py: CH / 2,
    hp: MAX_HP,
    invuln: 0,
    lasers: [],
    aliens: [],
    enemyProjectiles: [],
    bossLetters: [],
    kills: 0,
    bossSpawned: false,
    bossX: CW - 160,
    bossY: CH / 2,
    bossHp: BOSS_MAX_HP,
    bossTimer: 0,
    dead: false,
    won: false,
    wonT: 0,
    frameCount: 0,
    shootCooldown: 0,
    keys: new Set(),
    difficulty: null,
    started: false,
  };
}

// Draw Superman-style flying stickman (facing right)
function drawSupermanStickman(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  invuln: number,
  frameCount: number,
) {
  if (invuln > 0 && Math.floor(frameCount / 4) % 2 === 0) {
    return; // Flash when invulnerable
  }

  ctx.save();
  ctx.translate(x, y);

  // Body orientation: head forward (right), body horizontal
  const HR = 8;
  const headX = 18;
  const headY = 0;
  const neckX = 10;
  const neckY = 0;
  const shoulderX = 6;
  const shoulderY = 0;
  const hipX = -18;
  const hipY = 0;

  // Extended right arm (pointing straight forward to right)
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Extended arm forward
  ctx.beginPath();
  ctx.moveTo(shoulderX, shoulderY - 2);
  ctx.lineTo(shoulderX + 22, shoulderY - 2);
  ctx.stroke();

  // Left arm tucked back
  ctx.beginPath();
  ctx.moveTo(shoulderX, shoulderY + 2);
  ctx.lineTo(shoulderX - 10, shoulderY + 8);
  ctx.stroke();

  // Torso (horizontal)
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.moveTo(neckX, neckY);
  ctx.lineTo(hipX, hipY);
  ctx.stroke();

  // Legs streaming behind with subtle flutter
  const legFlutter = Math.sin(frameCount * 0.25) * 3;
  ctx.lineWidth = 3;

  // Top leg
  ctx.beginPath();
  ctx.moveTo(hipX, hipY - 2);
  ctx.lineTo(hipX - 22, hipY - 4 + legFlutter);
  ctx.stroke();

  // Bottom leg
  ctx.beginPath();
  ctx.moveTo(hipX, hipY + 2);
  ctx.lineTo(hipX - 20, hipY + 5 - legFlutter);
  ctx.stroke();

  // Head
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(headX, headY, HR, 0, Math.PI * 2);
  ctx.stroke();

  // Glasses on head (facing right)
  const GW = 6, GH = 4;
  const GY = headY - 1;
  ctx.lineWidth = 2;
  ctx.strokeRect(headX + 1, GY - GH / 2, GW, GH);
  ctx.beginPath();
  ctx.moveTo(headX - 2, GY);
  ctx.lineTo(headX + 1, GY);
  ctx.stroke();

  // Thruster / Speed trail effect
  ctx.strokeStyle = "rgba(124, 58, 237, 0.4)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(hipX - 24, hipY);
  ctx.lineTo(hipX - 38, hipY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(hipX - 22, hipY - 5);
  ctx.lineTo(hipX - 32, hipY - 7);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(hipX - 20, hipY + 5);
  ctx.lineTo(hipX - 30, hipY + 7);
  ctx.stroke();

  ctx.restore();
}

// Draw Alien Enemies
function drawAlien(ctx: CanvasRenderingContext2D, alien: Alien, frameCount: number) {
  ctx.save();
  ctx.translate(alien.x, alien.y);

  if (alien.variant === 0) {
    // UFO style
    ctx.fillStyle = "#7c3aed";
    ctx.strokeStyle = "#5b21b6";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, 0, alien.r, alien.r * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Dome
    ctx.fillStyle = "#a855f7";
    ctx.beginPath();
    ctx.arc(0, -2, alien.r * 0.5, Math.PI, 0);
    ctx.fill();
    ctx.stroke();

    // Antennae
    ctx.strokeStyle = "#9333ea";
    ctx.beginPath();
    ctx.moveTo(0, -alien.r * 0.5);
    ctx.lineTo(0, -alien.r * 0.85);
    ctx.stroke();
    ctx.fillStyle = "#c084fc";
    ctx.beginPath();
    ctx.arc(0, -alien.r * 0.85, 2.5, 0, Math.PI * 2);
    ctx.fill();

  } else if (alien.variant === 1) {
    // Star / Diamond alien
    ctx.fillStyle = "#9333ea";
    ctx.strokeStyle = "#6b21a8";
    ctx.lineWidth = 2;

    const angle = frameCount * 0.05;
    ctx.rotate(angle);

    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2;
      const rOuter = alien.r;
      const rInner = alien.r * 0.45;
      ctx.lineTo(Math.cos(a) * rOuter, Math.sin(a) * rOuter);
      ctx.lineTo(Math.cos(a + Math.PI / 4) * rInner, Math.sin(a + Math.PI / 4) * rInner);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Center eye
    ctx.fillStyle = "#e9d5ff";
    ctx.beginPath();
    ctx.arc(0, 0, 4, 0, Math.PI * 2);
    ctx.fill();

  } else {
    // Triangular Scout
    ctx.fillStyle = "#6d28d9";
    ctx.strokeStyle = "#4c1d95";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(-alien.r, -alien.r * 0.7);
    ctx.lineTo(alien.r * 0.8, 0);
    ctx.lineTo(-alien.r, alien.r * 0.7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Glowing core
    ctx.fillStyle = "#d8b4fe";
    ctx.beginPath();
    ctx.arc(-alien.r * 0.2, 0, 3.5, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

// Draw Boss ("LIFE PROBLEM")
function drawBoss(ctx: CanvasRenderingContext2D, bossX: number, bossY: number, bossHp: number, frameCount: number) {
  ctx.save();

  // Float effect
  const yOffset = Math.sin(frameCount * 0.03) * 10;
  const drawY = bossY + yOffset;

  // Boss text glow/shadow
  ctx.shadowColor = "#a855f7";
  ctx.shadowBlur = 15;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.font = "900 42px 'Playfair Display', Georgia, serif";

  // Text fill & stroke
  ctx.fillStyle = "#6d28d9";
  ctx.strokeStyle = "#4c1d95";
  ctx.lineWidth = 3;
  ctx.strokeText("LIFE PROBLEM", bossX, drawY);
  ctx.fillText("LIFE PROBLEM", bossX, drawY);

  ctx.shadowBlur = 0;

  // Boss Health Bar above boss
  const barW = 180;
  const barH = 10;
  const barX = bossX - barW / 2;
  const barY = drawY - 45;

  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(barX, barY, barW, barH);
  ctx.strokeStyle = "#6d28d9";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(barX, barY, barW, barH);

  const hpRatio = Math.max(0, bossHp / BOSS_MAX_HP);
  ctx.fillStyle = hpRatio > 0.4 ? "#7c3aed" : "#dc2626";
  ctx.fillRect(barX, barY, barW * hpRatio, barH);

  // Label
  ctx.fillStyle = "#5b21b6";
  ctx.font = "bold 11px 'Outfit', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`BOSS HP: ${bossHp}/${BOSS_MAX_HP}`, bossX, barY - 8);

  ctx.restore();
}

// Draw Start Screen (Difficulty Selection)
function drawStartScreen(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "rgba(250, 245, 255, 0.92)";
  ctx.fillRect(0, 0, CW, CH);

  ctx.fillStyle = "#4c1d95";
  ctx.textAlign = "center";
  ctx.font = "bold 38px 'Playfair Display', Georgia, serif";
  ctx.fillText("Select Difficulty", CW / 2, CH / 2 - 50);

  ctx.font = "16px 'Outfit', sans-serif";
  ctx.fillStyle = "#6d28d9";
  ctx.fillText("Choose your space challenge level", CW / 2, CH / 2 - 12);

  const btnW = 160;
  const btnH = 48;
  const btnY = CH / 2 + 20;
  const easyX = CW / 2 - btnW - 15;
  const hardX = CW / 2 + 15;

  // Easy Button
  ctx.fillStyle = "#7c3aed";
  ctx.fillRect(easyX, btnY, btnW, btnH);
  ctx.strokeStyle = "#5b21b6";
  ctx.lineWidth = 2;
  ctx.strokeRect(easyX, btnY, btnW, btnH);

  ctx.fillStyle = "white";
  ctx.font = "bold 16px 'Outfit', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Easy", easyX + btnW / 2, btnY + 29);

  // Hard Button
  ctx.fillStyle = "#7c3aed";
  ctx.fillRect(hardX, btnY, btnW, btnH);
  ctx.strokeStyle = "#5b21b6";
  ctx.lineWidth = 2;
  ctx.strokeRect(hardX, btnY, btnW, btnH);

  ctx.fillStyle = "white";
  ctx.font = "bold 16px 'Outfit', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Hard", hardX + btnW / 2, btnY + 29);
}

// Draw HUD
function drawHUD(
  ctx: CanvasRenderingContext2D,
  hp: number,
  kills: number,
  bossSpawned: boolean,
  bossHp: number,
  dead: boolean,
  won: boolean,
  wonT: number,
  difficulty: "easy" | "hard" | null,
  onViewAchievements?: () => void,
) {
  if (dead) {
    ctx.fillStyle = "rgba(250, 245, 255, 0.85)";
    ctx.fillRect(0, 0, CW, CH);
    ctx.fillStyle = "#4c1d95";
    ctx.textAlign = "center";
    ctx.font = "bold 42px 'Playfair Display', Georgia, serif";
    ctx.fillText("Game Over!", CW / 2, CH / 2 - 28);
    ctx.font = "16px 'Outfit', sans-serif";
    ctx.fillStyle = "#6d28d9";
    ctx.fillText("Press  R  to try again", CW / 2, CH / 2 + 18);
    return;
  }

  if (won) {
    const a = Math.min(1, wonT / 45);
    ctx.fillStyle = `rgba(250, 245, 255, ${a * 0.95})`;
    ctx.fillRect(0, 0, CW, CH);
    if (a > 0.5) {
      ctx.globalAlpha = (a - 0.5) * 2;
      ctx.fillStyle = "#4c1d95";
      ctx.textAlign = "center";
      ctx.font = "bold 38px 'Playfair Display', Georgia, serif";
      ctx.fillText("You've unlocked an achievement", CW / 2, CH / 2 - 38);
      ctx.font = "18px 'Outfit', sans-serif";
      ctx.fillStyle = "#6d28d9";
      ctx.fillText("Defeated the Life Problem!", CW / 2, CH / 2 + 10);

      // Placeholder badge
      const badgeR = 40;
      const badgeX = CW / 2;
      const badgeY = CH / 2 + 50;
      ctx.beginPath();
      ctx.arc(badgeX, badgeY, badgeR, 0, Math.PI * 2);
      ctx.fillStyle = "#9333ea";
      ctx.fill();
      ctx.strokeStyle = "#5b21b6";
      ctx.lineWidth = 3;
      ctx.stroke();

      if (onViewAchievements && a > 0.8) {
        const btnW = 200;
        const btnH = 44;
        const btnX = (CW - btnW) / 2;
        const btnY = CH / 2 + 110;
        const nextBtnY = btnY + btnH + 12;

        ctx.fillStyle = "#7c3aed";
        ctx.fillRect(btnX, btnY, btnW, btnH);
        ctx.strokeStyle = "#5b21b6";
        ctx.lineWidth = 2;
        ctx.strokeRect(btnX, btnY, btnW, btnH);

        ctx.fillStyle = "white";
        ctx.font = "bold 15px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("View Achievements", CW / 2, btnY + 27);

        // Back to Levels button
        ctx.fillStyle = "#7c3aed";
        ctx.fillRect(btnX, nextBtnY, btnW, btnH);
        ctx.strokeStyle = "#5b21b6";
        ctx.lineWidth = 2;
        ctx.strokeRect(btnX, nextBtnY, btnW, btnH);

        ctx.fillStyle = "white";
        ctx.font = "bold 15px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Back to Levels", CW / 2, nextBtnY + 27);
      }

      ctx.globalAlpha = 1;
    }
    return;
  }

  // Normal HUD strip
  ctx.fillStyle = "rgba(124, 58, 237, 0.08)";
  ctx.fillRect(0, 0, CW, 36);

  // HP Hearts
  ctx.fillStyle = "#7c3aed";
  ctx.font = "bold 15px 'Outfit', sans-serif";
  ctx.textAlign = "left";
  let hpStr = "";
  for (let i = 0; i < MAX_HP; i++) {
    hpStr += i < hp ? "♥ " : "♡ ";
  }
  ctx.fillText(`HP: ${hpStr}`, 16, 23);

  ctx.textAlign = "center";
  ctx.fillStyle = "#4c1d95";
  ctx.font = "bold 13px 'Outfit', sans-serif";
  if (bossSpawned) {
    ctx.fillText(`BOSS BATTLE — LIFE PROBLEM`, CW / 2, 23);
  } else {
    ctx.fillText(`Aliens Defeated: ${kills}/${KILLS_FOR_BOSS}`, CW / 2, 23);
  }

  ctx.textAlign = "right";
  ctx.font = "bold 13px 'Outfit', sans-serif";
  const diffLabel = difficulty === "easy" ? "Easy Mode" : difficulty === "hard" ? "Hard Mode" : "";
  ctx.fillText(`Level 3 · ${diffLabel}`, CW - 16, 23);
}

export default function ShooterGame({
  onBack,
  onLevelComplete,
  onViewAchievements,
}: {
  onBack: () => void;
  onLevelComplete: (levelId: number) => void;
  onViewAchievements?: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gsRef = useRef<GS>(freshState());
  const rafRef = useRef(0);
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
      if (e.code === "KeyR" && g.dead) {
        gsRef.current = freshState();
      }
    };
    const onKU = (e: KeyboardEvent) => {
      const g = gsRef.current;
      g.keys.delete(e.code);
    };

    const onCanvasClick = (e: MouseEvent) => {
      const g = gsRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const scaleX = CW / rect.width;
      const scaleY = CH / rect.height;
      const canvasX = x * scaleX;
      const canvasY = y * scaleY;

      if (!g.started) {
        const btnW = 160;
        const btnH = 48;
        const btnY = CH / 2 + 20;
        const easyX = CW / 2 - btnW - 15;
        const hardX = CW / 2 + 15;

        if (canvasX >= easyX && canvasX <= easyX + btnW &&
            canvasY >= btnY && canvasY <= btnY + btnH) {
          g.difficulty = "easy";
          g.started = true;
        }
        if (canvasX >= hardX && canvasX <= hardX + btnW &&
            canvasY >= btnY && canvasY <= btnY + btnH) {
          g.difficulty = "hard";
          g.started = true;
        }
        return;
      }

      if (g.won) {
        const btnW = 200;
        const btnH = 44;
        const btnX = (CW - btnW) / 2;
        const btnY = CH / 2 + 110;
        const nextBtnY = btnY + btnH + 12;

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

    let alienIdCounter = 0;
    let letterIdCounter = 0;

    function tick() {
      const g = gsRef.current;
      if (!g.started) return;
      if (g.dead) return;
      if (g.won) {
        g.wonT++;
        return;
      }

      g.frameCount++;
      if (g.invuln > 0) g.invuln--;

      // ── Player Movement ──
      const L = g.keys.has("ArrowLeft") || g.keys.has("KeyA");
      const R = g.keys.has("ArrowRight") || g.keys.has("KeyD");
      const U = g.keys.has("ArrowUp") || g.keys.has("KeyW");
      const D = g.keys.has("ArrowDown") || g.keys.has("KeyS");

      let dx = 0;
      let dy = 0;
      if (L) dx -= 1;
      if (R) dx += 1;
      if (U) dy -= 1;
      if (D) dy += 1;

      if (dx !== 0 && dy !== 0) {
        dx *= 0.7071;
        dy *= 0.7071;
      }

      g.px += dx * PLAYER_SPD;
      g.py += dy * PLAYER_SPD;

      // Keep player inside canvas
      g.px = Math.max(35, Math.min(CW - 35, g.px));
      g.py = Math.max(25, Math.min(CH - 25, g.py));

      // ── Automatic Firing ──
      g.shootCooldown--;
      if (g.shootCooldown <= 0) {
        g.lasers.push({
          x: g.px + 24,
          y: g.py - 2,
          vx: 10,
        });
        g.shootCooldown = 12; // shoot every 12 frames
      }

      // Move lasers
      for (const l of g.lasers) {
        l.x += l.vx;
      }
      g.lasers = g.lasers.filter(l => l.x < CW + 20);

      // ── Boss Spawn Condition ──
      if (!g.bossSpawned && g.kills >= KILLS_FOR_BOSS) {
        g.bossSpawned = true;
        g.bossX = CW - 160;
        g.bossY = CH / 2;
        g.aliens = []; // clear remaining minor aliens
      }

      // ── Minor Aliens Spawning & Movement ──
      if (!g.bossSpawned) {
        const spawnInterval = g.difficulty === "easy" ? 70 : 50;
        if (g.frameCount % spawnInterval === 0 && g.aliens.length < 5) {
          alienIdCounter++;
          const variant = Math.floor(Math.random() * 3);
          const startY = 40 + Math.random() * (CH - 80);
          const initialShootTimer = g.difficulty === "easy"
            ? 130 + Math.floor(Math.random() * 90)
            : 90 + Math.floor(Math.random() * 60);

          g.aliens.push({
            id: alienIdCounter,
            x: CW + 30,
            y: startY,
            baseY: startY,
            vx: - (2 + Math.random() * 1.5),
            vy: 0,
            r: 16,
            variant,
            hp: 1,
            shootTimer: initialShootTimer,
          });
        }

        for (const alien of g.aliens) {
          alien.x += alien.vx;
          if (alien.variant === 1) {
            alien.y = alien.baseY + Math.sin(g.frameCount * 0.08 + alien.id) * 35;
          }

          // Alien shooting
          alien.shootTimer--;
          if (alien.shootTimer <= 0) {
            alien.shootTimer = g.difficulty === "easy"
              ? 130 + Math.floor(Math.random() * 90)
              : 90 + Math.floor(Math.random() * 60);

            const angle = Math.atan2(g.py - alien.y, g.px - alien.x);
            const projSpeed = g.difficulty === "easy" ? 2.5 : 4;
            g.enemyProjectiles.push({
              x: alien.x,
              y: alien.y,
              vx: Math.cos(angle) * projSpeed,
              vy: Math.sin(angle) * projSpeed,
              r: 4,
            });
          }
        }
        g.aliens = g.aliens.filter(a => a.x > -40);
      }

      // ── Boss Logic ──
      if (g.bossSpawned) {
        g.bossTimer++;
        const bossCenterY = CH / 2 + Math.sin(g.frameCount * 0.03) * 80;
        g.bossY = bossCenterY;

        // Boss throws letters ("LIFE PROBLEM" without space)
        const letterInterval = g.difficulty === "easy" ? 55 : 36;
        if (g.bossTimer % letterInterval === 0) {
          letterIdCounter++;
          const letters = ["L", "I", "F", "E", "P", "R", "O", "B", "L", "E", "M"];
          const char = letters[Math.floor(Math.random() * letters.length)];
          const targetAngle = Math.atan2(g.py - g.bossY, g.px - g.bossX);
          const spread = (Math.random() - 0.5) * 0.4;
          const finalAngle = targetAngle + spread;
          const speed = g.difficulty === "easy"
            ? 2 + Math.random() * 1
            : 3.5 + Math.random() * 1.5;

          g.bossLetters.push({
            id: letterIdCounter,
            char,
            x: g.bossX - 80,
            y: g.bossY + (Math.random() - 0.5) * 40,
            vx: Math.cos(finalAngle) * speed,
            vy: Math.sin(finalAngle) * speed,
            angle: 0,
            angularV: (Math.random() - 0.5) * 0.1,
            size: 22,
          });
        }

        // Update boss letters
        for (const letter of g.bossLetters) {
          letter.x += letter.vx;
          letter.y += letter.vy;
          letter.angle += letter.angularV;
        }
        g.bossLetters = g.bossLetters.filter(l => l.x > -50 && l.y > -50 && l.y < CH + 50);
      }

      // ── Update Enemy Projectiles ──
      for (const ep of g.enemyProjectiles) {
        ep.x += ep.vx;
        ep.y += ep.vy;
      }
      g.enemyProjectiles = g.enemyProjectiles.filter(ep => ep.x > -20 && ep.x < CW + 20 && ep.y > -20 && ep.y < CH + 20);

      // ── Laser Collisions ──
      for (let i = g.lasers.length - 1; i >= 0; i--) {
        const l = g.lasers[i];

        // Laser vs Alien
        if (!g.bossSpawned) {
          let hit = false;
          for (let j = g.aliens.length - 1; j >= 0; j--) {
            const alien = g.aliens[j];
            const dx = l.x - alien.x;
            const dy = l.y - alien.y;
            if (Math.sqrt(dx * dx + dy * dy) < alien.r + 8) {
              g.aliens.splice(j, 1);
              g.kills++;
              hit = true;
              break;
            }
          }
          if (hit) {
            g.lasers.splice(i, 1);
            continue;
          }
        }

        // Laser vs Boss
        if (g.bossSpawned && g.bossHp > 0) {
          // Boss bounding box approx
          if (l.x > g.bossX - 120 && l.x < g.bossX + 120 &&
              l.y > g.bossY - 30 && l.y < g.bossY + 30) {
            g.bossHp--;
            g.lasers.splice(i, 1);

            if (g.bossHp <= 0) {
              g.bossHp = 0;
              if (!g.droppedMedal) {
                g.droppedMedal = {
                  x: g.bossX,
                  y: g.bossY,
                  vy: 0,
                  collected: false,
                };
              }
            }
          }
        }
      }

      // ── Player Collisions ──
      if (g.invuln <= 0) {
        // Player vs Alien
        for (const alien of g.aliens) {
          const dx = g.px - alien.x;
          const dy = g.py - alien.y;
          if (Math.sqrt(dx * dx + dy * dy) < alien.r + 15) {
            g.hp--;
            g.invuln = 60;
            if (g.hp <= 0) {
              g.hp = 0;
              g.dead = true;
            }
            break;
          }
        }

      // ── Dropped Medal Logic ──
      if (g.droppedMedal && !g.droppedMedal.collected) {
        g.droppedMedal.vy = Math.min(g.droppedMedal.vy + 0.05, 1.5);
        g.droppedMedal.y += g.droppedMedal.vy;
        g.droppedMedal.x -= 0.5;

        // Player collision with dropped medal
        const dx = g.px - g.droppedMedal.x;
        const dy = g.py - g.droppedMedal.y;
        if (Math.sqrt(dx * dx + dy * dy) < 30 && !g.won) {
          g.droppedMedal.collected = true;
          setShowMedalReveal(true);
        }
      }

        // Player vs Enemy Projectile
        for (const ep of g.enemyProjectiles) {
          const dx = g.px - ep.x;
          const dy = g.py - ep.y;
          if (Math.sqrt(dx * dx + dy * dy) < ep.r + 15) {
            g.hp--;
            g.invuln = 60;
            if (g.hp <= 0) {
              g.hp = 0;
              g.dead = true;
            }
            break;
          }
        }

        // Player vs Boss Letters
        for (const letter of g.bossLetters) {
          const dx = g.px - letter.x;
          const dy = g.py - letter.y;
          if (Math.sqrt(dx * dx + dy * dy) < letter.size + 10) {
            g.hp--;
            g.invuln = 60;
            if (g.hp <= 0) {
              g.hp = 0;
              g.dead = true;
            }
            break;
          }
        }
      }
    }

    function draw() {
      const g = gsRef.current;
      ctx.clearRect(0, 0, CW, CH);

      // Purple space background
      ctx.fillStyle = "#faf5ff";
      ctx.fillRect(0, 0, CW, CH);

      // Purple star/space grid dots
      ctx.fillStyle = "#e9d5ff";
      for (let gx = 16; gx < CW; gx += 32) {
        for (let gy = 16; gy < CH; gy += 32) {
          const dotOffset = (g.frameCount * 0.5 + gx * 2) % 32;
          const drawX = (gx - dotOffset + CW) % CW;
          ctx.beginPath();
          ctx.arc(drawX, gy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!g.started) {
        drawStartScreen(ctx);
        return;
      }

      // Draw Lasers
      ctx.fillStyle = "#a855f7";
      ctx.strokeStyle = "#7c3aed";
      ctx.lineWidth = 2;
      for (const l of g.lasers) {
        ctx.beginPath();
        ctx.fillRect(l.x, l.y - 2, 14, 4);
        ctx.strokeRect(l.x, l.y - 2, 14, 4);
      }

      // Draw Aliens
      for (const alien of g.aliens) {
        drawAlien(ctx, alien, g.frameCount);
      }

      // Draw Enemy Projectiles
      ctx.fillStyle = "#c084fc";
      ctx.strokeStyle = "#7c3aed";
      for (const ep of g.enemyProjectiles) {
        ctx.beginPath();
        ctx.arc(ep.x, ep.y, ep.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      // Draw Boss
      if (g.bossSpawned && g.bossHp > 0) {
        drawBoss(ctx, g.bossX, g.bossY, g.bossHp, g.frameCount);
      }

      // Draw Dropped Medal
      if (g.droppedMedal && !g.droppedMedal.collected) {
        drawInWorldMedal(ctx, g.droppedMedal.x, g.droppedMedal.y, g.frameCount);
      }

      // Draw Boss Letters
      ctx.font = "bold 22px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const letter of g.bossLetters) {
        ctx.save();
        ctx.translate(letter.x, letter.y);
        ctx.rotate(letter.angle);

        ctx.fillStyle = "#7c3aed";
        ctx.strokeStyle = "#4c1d95";
        ctx.lineWidth = 1.5;
        ctx.strokeText(letter.char, 0, 0);
        ctx.fillText(letter.char, 0, 0);

        ctx.restore();
      }

      // Draw Player Superman Stickman
      if (!g.dead) {
        drawSupermanStickman(ctx, g.px, g.py, g.invuln, g.frameCount);
      }

      // HUD
      drawHUD(ctx, g.hp, g.kills, g.bossSpawned, g.bossHp, g.dead, g.won, g.wonT, g.difficulty, onViewAchievements);
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
    <div
      style={{
        minHeight: "100vh",
        background: "#faf5ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Outfit', sans-serif",
        padding: 24,
        position: "relative",
      }}
    >
      {showMedalReveal && (
        <MedalReveal
          logoSrc="/logos/cbtl.png"
          label="Coffee Bean & Tea Leaf Brunei"
          onComplete={() => {
            setShowMedalReveal(false);
            gsRef.current.won = true;
            onLevelComplete(3);
          }}
        />
      )}
      <div style={{ width: CW, maxWidth: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
          }}
        >
          <button
            onClick={onBack}
            style={{
              padding: "7px 16px",
              background: "white",
              border: "1px solid #7c3aed33",
              color: "#7c3aed",
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            ← Back to Levels
          </button>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 2.5,
                color: "#7c3aed",
                fontWeight: 700,
              }}
            >
              LEVEL 3 — SPACE SHOOTER
            </div>
            <div style={{ fontSize: 11, color: "#9333ea", marginTop: 2 }}>
              Defeat the Life Problem
            </div>
          </div>
          <div style={{ fontSize: 12, color: "#7c3aed", textAlign: "right" }}>
            <div>WASD / Arrows   Move</div>
            <div>Auto-fire active</div>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          width={CW}
          height={CH}
          style={{
            display: "block",
            border: "2.5px solid #5b21b6",
            borderRadius: 6,
            outline: "none",
            boxShadow: "0 8px 32px rgba(109, 40, 217, 0.18)",
          }}
          tabIndex={0}
        />

        <div
          style={{
            marginTop: 10,
            display: "flex",
            justify: "space-between",
            color: "#9333ea",
            fontSize: 12,
          }}
        >
          <span>Press R to restart after dying</span>
          <span style={{ color: "#7c3aed", fontWeight: 600 }}>Level 3</span>
        </div>
      </div>
    </div>
  );
}
