import { useCallback, useMemo, useState } from "react";
import Home from "./pages/Home";
import GameLevels from "./pages/GameLevels";
import PlatformerGame from "./pages/PlatformerGame";
import RunnerGame from "./pages/RunnerGame";
import ShooterGame from "./pages/ShooterGame";
import Experiences from "./pages/Experiences";
import Certificates from "./pages/Certificates";
import Skills from "./pages/Skills";
import LockedNotice from "./components/LockedNotice";
import type { PageKey } from "./components/SiteNav";
import { SiteProvider, useSite } from "./site/SiteContext";

type Route = PageKey | "levels" | "game";

const ALL_LEVELS = new Set([1, 2, 3]);

function AppInner() {
  const { devMode } = useSite();

  const [route, setRoute] = useState<Route>("home");
  const [achievements, setAchievements] = useState<Set<number>>(new Set());
  const [selectedLevelId, setSelectedLevelId] = useState<number>(1);
  const [lockedPrompt, setLockedPrompt] = useState<number | null>(null);

  const handleLevelComplete = useCallback((levelId: number) => {
    setAchievements((prev) => new Set([...prev, levelId]));
  }, []);

  /** Dev mode opens everything without touching real progress. */
  const unlocked = useMemo(
    () => (devMode ? ALL_LEVELS : achievements),
    [devMode, achievements],
  );

  const goPage = useCallback((page: PageKey) => {
    setRoute(page);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const goLevels = useCallback(() => {
    setRoute("levels");
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleLockedAttempt = useCallback((levelId: number) => {
    setLockedPrompt(levelId);
  }, []);

  const playFromPrompt = useCallback(() => {
    setLockedPrompt(null);
    goLevels();
  }, [goLevels]);

  const pageProps = {
    unlocked,
    onNavigate: goPage,
    onLockedAttempt: handleLockedAttempt,
    onPlayClick: goLevels,
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }} className="min-h-full bg-white">
      {route === "home" && (
        <Home
          onPlayClick={goLevels}
          achievements={unlocked}
          onNavigate={goPage}
          onLockedAttempt={handleLockedAttempt}
        />
      )}

      {route === "experiences" && <Experiences {...pageProps} />}
      {route === "certificates" && <Certificates {...pageProps} />}
      {route === "skills" && <Skills {...pageProps} />}

      {route === "levels" && (
        <GameLevels
          onBack={() => goPage("home")}
          onStartGame={(levelId) => {
            setSelectedLevelId(levelId);
            setRoute("game");
          }}
          onLevelComplete={handleLevelComplete}
          achievements={unlocked}
        />
      )}

      {route === "game" &&
        (selectedLevelId === 3 ? (
          <ShooterGame
            onBack={goLevels}
            onLevelComplete={handleLevelComplete}
            onViewAchievements={() => goPage("home")}
          />
        ) : selectedLevelId === 2 ? (
          <RunnerGame
            onBack={goLevels}
            onLevelComplete={handleLevelComplete}
            onViewAchievements={() => goPage("home")}
          />
        ) : (
          <PlatformerGame
            onBack={goLevels}
            levelId={selectedLevelId}
            onLevelComplete={handleLevelComplete}
            onViewAchievements={() => goPage("home")}
          />
        ))}

      {lockedPrompt !== null && (
        <LockedNotice
          levelId={lockedPrompt}
          onClose={() => setLockedPrompt(null)}
          onPlay={playFromPrompt}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <SiteProvider>
      <AppInner />
    </SiteProvider>
  );
}
