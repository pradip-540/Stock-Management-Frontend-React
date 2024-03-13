import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
      <div className="md:h-16">
        <Header />
      </div>
      <div className="bg-gray-100 items-baseline">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
