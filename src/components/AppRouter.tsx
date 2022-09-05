import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Games } from "../pages/games";
import { Main } from "../pages/main";
import { Tutorial } from "../pages/tutorial";
import Statistics from "../pages/statistics";
import AudioChallenge from "./pageGames/audio/audioChallenge";
import Sprint from "./pageGames/sprint/sprint";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/games" element={<Games />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path='/games/sprint' element={<Sprint />} />
        <Route path='/games/audio' element={<AudioChallenge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
