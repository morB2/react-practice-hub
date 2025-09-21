import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppContext } from "../context/context";
import { Header } from "./Header";
import About from "./About";
import { Home } from "./Home";
import { Counter } from "./Counter";
import { Counter2 } from "./Counter2";
import { Atlas } from "../atlas/Atlas";
import Pixa from "../Pixa/Pixa";
import VIP from "../VIP/VIP";

export default function AppRoutes() {
  const [number, setNumber] = useState(33);
  const [coins, setCoins] = useState(6);
  const [counter, setCounter] = useState(0);
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <AppContext.Provider
          value={{
            val: "koko6",
            number,
            setNumber,
            coins,
            setCoins,
            counter,
            setCounter,
          }}
        >
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/counter2" element={<Counter2 />} />
            <Route path="/atlas" element={<Atlas />} />
            <Route path="/pixa" element={<Pixa />} />
            <Route path="/vip" element={<VIP />} />
          </Routes>
        </AppContext.Provider>
        <footer className="bg-dark text-white text-center py-4 mt-auto">
          <div className="container">
            <p className="mb-0">&copy; 2024 MyApp. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
