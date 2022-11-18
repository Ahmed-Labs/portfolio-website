import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="relative font-Lato min-w-full min-h-screen bg-beige-500">
      <Navbar />
      <main className="pb-[250px] md:pb-24">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
