import { useState, useCallback } from "react";
import Home from "./pages/Home";
import GameLevels from "./pages/GameLevels";
import PlatformerGame from "./pages/PlatformerGame";

type Page = "home" | "levels" | "game";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [achievements, setAchievements] = useState<Set<number>>(new Set());
  const [selectedLevelId, setSelectedLevelId] = useState<number>(1);

  const handleLevelComplete = useCallback((levelId: number) => {
    setAchievements(prev => new Set([...prev, levelId]));
  }, []);

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }} className="min-h-full bg-white">
      {page === "home" && <Home onPlayClick={() => setPage("levels")} achievements={achievements} />}
      {page === "levels" && (
        <GameLevels
          onBack={() => setPage("home")}
          onStartGame={(levelId) => { setSelectedLevelId(levelId); setPage("game"); }}
          onLevelComplete={handleLevelComplete}
          achievements={achievements}
        />
      )}
      {page === "game" && (
        <PlatformerGame 
          onBack={() => setPage("levels")} 
          levelId={selectedLevelId}
          onLevelComplete={handleLevelComplete}
        />
      )}
    </div>
  );
}
