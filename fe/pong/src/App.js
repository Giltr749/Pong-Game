import React from "react";
import PingPongPage from "./pages/PingPongPage";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

export default function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/pong" element={<PingPongPage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
