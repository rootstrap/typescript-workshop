import React from "react";
import logo from "assets/logo.png";

const Layout: React.FC = ({ children }) => (
  <div className="container mx-auto px-4">
    <div className="flex items-center pt-4 pb-2">
      <img className="w-14" src={logo} alt="" />
      <h1 className="text-4xl font-bold ml-4 text-dark-gray">Pokedex</h1>
    </div>
    <div className="pt-2">{children}</div>
  </div>
);

export default Layout;
