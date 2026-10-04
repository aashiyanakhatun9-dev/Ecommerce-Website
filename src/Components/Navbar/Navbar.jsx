import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart.webp";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

import drop_down from "../../assets/drop_down.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalcarItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>Shopify</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={drop_down}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/">
            {" "}
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "#626262" }}
            to="/womens"
          >
            Women
          </Link>{" "}
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none", color: "#626262" }} to="/kids">
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>{" "}
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" height="45px" />
        </Link>
        <div className="nav-cart-count">{getTotalcarItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
