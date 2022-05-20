import React from "react";
import { Routes, Route } from "react-router-dom";
import CounterPage from "./pages/counterPage/CounterPage";

function App() {
  return (
    <Routes>
      <Route path="counter" element={<CounterPage />} />
    </Routes>
  );
}

export default App;
