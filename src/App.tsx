import { useState } from "react";
import Home from "./pages/Home";
import GameLevels from "./pages/GameLevels";
import PlatformerGame from "./pages/PlatformerGame";

type Page = "home" | "levels" | "game";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }} className="min-h-full bg-white">
      {page === "home" && <Home onPlayClick={() => setPage("levels")} />}
      {page === "levels" && (
        <GameLevels
          onBack={() => setPage("home")}
          onStartGame={() => setPage("game")}
        />
      )}
      {page === "game" && <PlatformerGame onBack={() => setPage("levels")} />}
    </div>
  );
}
