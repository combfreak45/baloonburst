import React, { useContext } from "react";
import Home from "./Home";
import Game from "./Game";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import AuthContext from "./Auth";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
};

export default App;
