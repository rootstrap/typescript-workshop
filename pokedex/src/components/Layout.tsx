import React from "react";
import Logo from "assets/Logo";

const Layout: React.FC = ({ children }) => (
  <div className="container px-4 mx-auto">
    <div className="flex items-center pt-4 pb-2">
      <Logo className="w-14 fill-dark-gray" />
      <h1 className="ml-4 text-4xl font-bold text-dark-gray">Pokedex</h1>
    </div>
    <div className="pt-2">{children}</div>
  </div>
);

export default Layout;
