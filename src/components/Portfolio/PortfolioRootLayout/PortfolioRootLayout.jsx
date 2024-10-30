import React from "react";
import { Outlet } from "react-router-dom";

const PortfolioRootLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default PortfolioRootLayout;
