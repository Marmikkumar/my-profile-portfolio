import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-scroll";

export default function Navbar() {
  const [key, setkey] = useState(true);

  const handleClick = () => {
    setkey(!key);
  };

  return (
    <div className={key ? "Nav" : "Nav Nav1"}>
      <div className="heading">
        <h2>M a r m i k _ k u m a r</h2>
      </div>

      <div className="menu">
        <div onClick={handleClick} className="hamburger">
          <div className={key ? "bar" : "bar bar1"}></div>
          <div className={key ? "bar" : "bar bar2"}></div>
          <div className={key ? "bar" : "bar bar3"}></div>
        </div>

        <ul className={key ? "menu-align" : "ham-menu"}>
          <li className={key ? "menubar" : "menu-bar"}>
            <Link spy={true} smooth={true} offset={50} duration={500} to="home">
              Home
            </Link>
          </li>

          <li className={key ? "menubar" : "menu-bar"}>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              to="About"
            >
              About
            </Link>
          </li>

          <li className={key ? "menubar" : "menu-bar"}>
            <Link spy={true} smooth={true} offset={50} duration={500} to="port">
              Portfolio
            </Link>
          </li>
          <li className={key ? "menubar" : "menu-bar"}>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
              to="Experience"
            >
              Experience
            </Link>
          </li>

          <li className={key ? "menubar" : "menu-bar"}>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={2000}
              to="Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
