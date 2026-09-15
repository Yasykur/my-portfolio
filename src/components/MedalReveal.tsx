import { useEffect, useRef } from "react";
import * as THREE from "three";

interface MedalRevealProps {
  logoSrc: string;
  label: string;
  onComplete: () => void;
}

export default function MedalReveal({ logoSrc, label, onComplete }: MedalRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = 400;
    const height = 400;

    // ── Three.js Scene Setup ──
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── Lighting ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xfff5ea, 2.0);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const frontLight = new THREE.DirectionalLight(0xffffff, 1.2);
    frontLight.position.set(0, 0, 5);
    scene.add(frontLight);

    const backLight = new THREE.DirectionalLight(0xd4a017, 0.8);
    backLight.position.set(-5, -5, -2);
    scene.add(backLight);

    // ── Offscreen Texture Generation ──
    const offCanvas = document.createElement("canvas");
    offCanvas.width = 512;
    offCanvas.height = 512;
    const ctx = offCanvas.getContext("2d")!;

    function drawCoinFace(image?: HTMLImageElement) {
      ctx.clearRect(0, 0, 512, 512);

      // Gold outer background
      ctx.fillStyle = "#d4a017";
      ctx.fillRect(0, 0, 512, 512);

      // Outer gold border ring
      ctx.beginPath();
      ctx.arc(256, 256, 245, 0, Math.PI * 2);
      ctx.fillStyle = "#b48011";
      ctx.fill();

      // Inner face circle
      ctx.beginPath();
      ctx.arc(256, 256, 225, 0, Math.PI * 2);
      ctx.fillStyle = "#1e3a8a"; // Navy background tint for face
      ctx.fill();

      ctx.lineWidth = 10;
      ctx.strokeStyle = "#f59e0b";
      ctx.stroke();

      if (image && image.complete && image.naturalWidth > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(256, 256, 215, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(image, 41, 41, 430, 440);
        ctx.restore();
      } else {
        // Fallback: draw gold letter
        const initial = (label && label.trim().length > 0 ? label.trim()[0] : "A").toUpperCase();
        ctx.font = "900 200px 'Playfair Display', Georgia, serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#fbbf24";
        ctx.fillText(initial, 256, 260);

        // Inner ring accent
        ctx.beginPath();
        ctx.arc(256, 256, 210, 0, Math.PI * 2);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#fef3c7";
        ctx.stroke();
      }
    }

    let textureReady = false;
    const canvasTexture = new THREE.CanvasTexture(offCanvas);
    canvasTexture.colorSpace = THREE.SRGBColorSpace;

    if (logoSrc) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        drawCoinFace(img);
        canvasTexture.needsUpdate = true;
        textureReady = true;
        if (coin) coin.visible = true;
      };
      img.onerror = () => {
        drawCoinFace();
        canvasTexture.needsUpdate = true;
        textureReady = true;
        if (coin) coin.visible = true;
      };
      img.src = logoSrc;
    } else {
      drawCoinFace();
      canvasTexture.needsUpdate = true;
      textureReady = true;
    }

    // ── Coin Geometry & Materials ──
    const geometry = new THREE.CylinderGeometry(1.2, 1.2, 0.15, 48);

    const sideMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4a017,
      metalness: 0.8,
      roughness: 0.3,
    });

    const faceMaterial = new THREE.MeshStandardMaterial({
      map: canvasTexture,
      metalness: 0.05,
      roughness: 0.35,
    });

    // CylinderGeometry materials: [side, top, bottom]
    const coin = new THREE.Mesh(geometry, [sideMaterial, faceMaterial, faceMaterial]);
    coin.rotation.x = Math.PI / 2;
    coin.visible = textureReady;
    scene.add(coin);

    // ── Animation Loop ──
    let animationFrameId: number;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const t = currentTime - startTime;

      coin.rotation.y += 0.05;
      coin.rotation.x = Math.PI / 2 + Math.sin(t * 0.002) * 0.15;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);

    // ── Timer for Completion ──
    const timerId = setTimeout(() => {
      onComplete();
    }, 2500);

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timerId);

      geometry.dispose();
      sideMaterial.dispose();
      faceMaterial.dispose();
      canvasTexture.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [logoSrc, label, onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: 400,
          height: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />

      <div
        style={{
          textAlign: "center",
          color: "white",
          marginTop: 16,
          fontFamily: "'Outfit', sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: 2.5,
            color: "#f59e0b",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          Achievement Unlocked!
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 28,
            fontWeight: 800,
            color: "#ffffff",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}
