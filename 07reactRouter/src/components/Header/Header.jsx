import React from "react";
import "./Header.css";
function Header() {
  // Code for a basic navigation bar
  return (
    <>
      <div className="topNav">
        <nav className="navBar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>

            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/profiles">Profiles</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
