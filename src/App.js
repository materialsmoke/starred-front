import React, { useState } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import FavoritePage from "./Pages/FavoritesPage";
import RegisterPage from "./Pages/RegisterPage";
import JobPage from "./Pages/JobPage";
import JobShowPage from "./Pages/JobPage/ShowPage";
import Navbar from "./components/Navbar";

function App() {
  const [reloadComponent, setReloadComponent] = useState(false);

  return (
    <div>
      <Navbar
        reloadComponent={reloadComponent}
        setReloadComponent={setReloadComponent}
      />
      <SearchInput />
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setReloadComponent={setReloadComponent} />}
        />
        <Route path="/favorites" element={<FavoritePage />} />
        <Route path="/" element={<JobPage />} />
        <Route path="/:id" element={<JobShowPage />} />
      </Routes>
    </div>
  );
}

export default App;
