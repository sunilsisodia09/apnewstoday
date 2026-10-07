"use client";

import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

const navItems = [
  { name: "होम", href: "/" },
  // { name: "भारत", href: "/india" },
  { name: "उत्तराखंड", href: "/uttarakhand" },
  { name: "राजनीति", href: "/politics" },
  { name: "बिजनेस", href: "/business" },
  { name: "खेल", href: "/sports" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="news-navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a href="/" className="navbar-logo">
          <span className="logo-ap">AP</span>

          <span className="logo-text">
            <strong>TODAY</strong>
            <small>NEWS</small>
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="navbar-actions">

          

          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
            type="button"
          >
            {mobileMenu ? <X size={25} /> : <Menu size={25} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-nav ${mobileMenu ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMobileMenu(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}