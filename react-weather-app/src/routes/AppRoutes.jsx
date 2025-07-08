import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "../pages/SearchPage";
import CityWeatherPage from "../pages/CityWeatherPage";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/city/:cityId" element={<CityWeatherPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
