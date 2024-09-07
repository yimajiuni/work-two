import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../contexts/ShopContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } =
    useContext(ShopContext); /*カート商品数アイコン*/
  const menuRef = useRef();

  /*クリックでメニューを開きnavbarを表示*/
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-invisible");
    e.target.classList.toggle("close");
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            SHOPPER
          </Link>{" "}
        </p>
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Seach items" />
        <BiSearchAlt className="icon" />
      </div>
      <RiArrowDropDownLine
        size={70}
        className="nav-dropdown"
        onClick={dropdown_toggle}
      />

      <ul ref={menuRef} className="nav-menu nav-menu-visible">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/mens">
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
            style={{ textDecoration: "none", color: "inherit" }}
            to="/womens"
          >
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
