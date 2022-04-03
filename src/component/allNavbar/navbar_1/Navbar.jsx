import "./Navbar.css";
import { FaArtstation, FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="Navbar">
      <div className="container">
        <div className="row">
          <div className="logo">
            <span>
              <FaArtstation /> MUNNA
            </span>
          </div>
          <div onClick={() => setOpen(!open)} className="toggle">
            {open ? <FaBars /> : <FaTimes />}
          </div>
          <div className={open ? "nav__mob" : "nav__item"}>
            <ul>
              <span>Home</span>
              <span>Payment</span>
              <span>Features</span>
            </ul>
            <div className="btn">
              <button id="log__in">Login</button>
              <button id="sign__in">Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
