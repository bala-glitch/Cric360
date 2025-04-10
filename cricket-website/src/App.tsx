import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Players from "./pages/Players";
import Stats from "./pages/Stats";
import Records from "./pages/Records";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow p-4 flex justify-between">
          <h1 className="text-xl font-bold">🏏 Cricket Central</h1>
          <div className="space-x-4">
            <Link to="/">Live Scores</Link>
            <Link to="/players">Players</Link>
            <Link to="/stats">Stats</Link>
            <Link to="/records">Records</Link>
          </div>
        </nav>
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<Players />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/records" element={<Records />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
