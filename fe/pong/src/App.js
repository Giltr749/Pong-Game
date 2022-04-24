import React from "react";
import Signup from "./Components/Signup";
import PingPongPage from "./pages/PingPongPage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Signup />} />
        <Route path="/pong" element={<PingPongPage />} />
      </Routes>
    </div>
  );
}
