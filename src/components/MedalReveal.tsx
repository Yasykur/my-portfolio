import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface MedalRevealProps {
  logoSrc: string;
  label: string;
  onComplete: () => void;
}

export default function MedalReveal({ logoSrc, label, onComplete }: MedalRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [textureReady, setTextureReady] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const container = containerRef.current;
    if (!container) return;

    const width = 340;
    const height = 340;

    // ── Offscreen Texture Canvas ──
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

      // Inner face circle background
      ctx.beginPath();
      ctx.arc(256, 256, 225, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
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
        // Fallback face (Navy circle + Gold initial)
        ctx.beginPath();
        ctx.arc(256, 256, 215, 0, Math.PI * 2);
        ctx.fillStyle = "#1e3a8a";
        ctx.fill();

        const initial = (label && label.trim().length > 0 ? label.trim()[0] : "A").toUpperCase();
        ctx.font = "900 200px 'Playfair Display', Georgia, serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#fbbf24";
        ctx.fillText(initial, 256, 260);

        ctx.beginPath();
        ctx.arc(256, 256, 210, 0, Math.PI * 2);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#fef3c7";
        ctx.stroke();
      }
    }

    const canvasTexture = new THREE.CanvasTexture(offCanvas);
    canvasTexture.colorSpace = THREE.SRGBColorSpace;

    // Load image before setting up 3D scene & starting animation
    const img = new Image();
    img.crossOrigin = "anonymous";

    const initScene = () => {
      if (!isMounted) return;
      setTextureReady(true);

      // ── Three.js Scene Setup ──
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 4.2);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Clean any existing canvas before appending
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(renderer.domElement);

      // ── Enhanced Bright Lighting ──
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xfff5ea, 2.5);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const fillLight = new THREE.DirectionalLight(0xffffff, 1.5);
      fillLight.position.set(-5, 3, 5);
      scene.add(fillLight);

      const frontLight = new THREE.DirectionalLight(0xffffff, 1.5);
      frontLight.position.set(0, 0, 6);
      scene.add(frontLight);

      const backLight = new THREE.DirectionalLight(0xd4a017, 1.0);
      backLight.position.set(-5, -5, -2);
      scene.add(backLight);

      // ── Coin Geometry & Materials ──
      const geometry = new THREE.CylinderGeometry(1.2, 1.2, 0.15, 48);

      const sideMaterial = new THREE.MeshStandardMaterial({
        color: 0xd4a017,
        metalness: 0.8,
        roughness: 0.3,
      });

      const faceMaterial = new THREE.MeshStandardMaterial({
        map: canvasTexture,
        metalness: 0.0,
        roughness: 0.25,
      });

      const coin = new THREE.Mesh(geometry, [sideMaterial, faceMaterial, faceMaterial]);
      coin.rotation.x = Math.PI / 2;
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

      return () => {
        cancelAnimationFrame(animationFrameId);
        geometry.dispose();
        sideMaterial.dispose();
        faceMaterial.dispose();
        canvasTexture.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      };
    };

    let cleanupScene: (() => void) | undefined;

    if (logoSrc) {
      img.onload = () => {
        drawCoinFace(img);
        canvasTexture.needsUpdate = true;
        cleanupScene = initScene();
      };
      img.onerror = () => {
        drawCoinFace();
        canvasTexture.needsUpdate = true;
        cleanupScene = initScene();
      };
      img.src = logoSrc;
    } else {
      drawCoinFace();
      canvasTexture.needsUpdate = true;
      cleanupScene = initScene();
    }

    const timerId = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      isMounted = false;
      clearTimeout(timerId);
      if (cleanupScene) cleanupScene();
    };
  }, [logoSrc, label, onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.82)",
        backdropFilter: "blur(8px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: 340,
          height: 340,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: textureReady ? 1 : 0,
          transition: "opacity 0.2s ease-in",
        }}
      />

      <div
        style={{
          textAlign: "center",
          color: "white",
          marginTop: 24,
          fontFamily: "'Outfit', sans-serif",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: 2.5,
            color: "#f59e0b",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: 8,
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
