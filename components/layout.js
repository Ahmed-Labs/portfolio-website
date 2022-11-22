import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";

function Layout({ children }) {
  const { toggle } = useContext(ThemeContext);

  return (
    <div className={`${toggle && "dark"}`}>
      <div className="relative font-Lato min-w-full min-h-screen bg-beige-500 dark:bg-dark-500 dark:text-gray-100">
        <Navbar />
        <main className="pb-[250px] md:pb-24">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
