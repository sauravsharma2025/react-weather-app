import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SearchBar from "./components/molecules/SearchBar.jsx";
import CityCard from "./components/molecules/CityCard.jsx";

createRoot(document.getElementById("root")).render(
  <CityCard
    city={{ name: "gwalior", rank: "1st", image: "" }}
    onClick={console.log("SKC@")}
  />
);
