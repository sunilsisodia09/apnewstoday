"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

const navItems = [
  { name: "होम", href: "/" },
  { name: "उत्तराखंड", href: "/uttarakhand" },
  { name: "राजनीति", href: "/politics" },
  { name: "बिजनेस", href: "/business" },
  { name: "खेल", href: "/sports" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <header className="news-navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link
          href="/"
          className="navbar-logo"
          onClick={closeMobileMenu}
          aria-label="AP Today News 24 Home"
        >
          <span className="logo-ap">AP</span>

          <span className="logo-text">
            <strong>TODAY</strong>
            <small>NEWS</small>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="navbar-actions">
          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenu((prev) => !prev)}
            aria-label={mobileMenu ? "मेनू बंद करें" : "मेनू खोलें"}
            aria-expanded={mobileMenu}
            aria-controls="mobile-navigation"
          >
            {mobileMenu ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        className={`mobile-nav ${mobileMenu ? "open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}