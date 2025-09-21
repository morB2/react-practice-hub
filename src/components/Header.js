import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/context";

export const Header = () => {
  const { coins } = useContext(AppContext);
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">Coins: {coins}</span>
        
        <div className="navbar-nav ms-auto">
          <Link to="/" className="nav-link text-white">Home</Link>
          <Link to="/about" className="nav-link text-white">About</Link>
          <Link to="/counter" className="nav-link text-white">Counter</Link>
          <Link to="/counter2" className="nav-link text-white">Counter2</Link>
          <Link to="/atlas" className="nav-link text-white">Atlas</Link>
          <Link to="/pixa" className="nav-link text-white">Pixa</Link>
          <Link to="/vip" className="nav-link text-white">VIP</Link>
        </div>
      </div>
    </header>
  );
};
