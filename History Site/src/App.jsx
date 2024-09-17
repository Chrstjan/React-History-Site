import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import { MainLayout } from "./layouts/MainLayout";
import {TodayPage} from "./pages/TodayPage";
import {SincePage} from "./pages/SincePage";
import {ByDatePage} from "./pages/ByDatePage";
import {PageNotFound} from "./pages/PageNotFound";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<TodayPage />} />
            <Route path={"/since"} element={<SincePage />} />
            <Route path={"/by-date"} element={<ByDatePage />} />
            <Route path={"/*"} element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
