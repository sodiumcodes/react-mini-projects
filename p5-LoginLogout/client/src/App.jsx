import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./features/Auth/Pages/Login";
import Register from "./features/Auth/Pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Register />} />
    </Routes>
  );
}

export default App;