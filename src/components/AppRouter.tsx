import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Games } from "../pages/games";
import { Main } from "../pages/main";
import { Tutorial } from "../pages/tutorial";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/games" element={<Games />} />
        <Route path="/tutorial" element={<Tutorial />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
