import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.scss";
import logo from "../assets/logo.png";
import car from "../assets/car.png";
import avatar from "../assets/avatar.png";
import search from "../assets/search.png";
import { useDispatch } from "react-redux";
import { startLogout } from "../actions/auth";

const Nav = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(startLogout())
  }

return(
  <div className="header">
    <div className="header__container">
      <Link to="/">
        <img className="header__img" src={logo} alt="logo" />
      </Link>
      <div className="header__menu">
        <nav className="header__options">
          <ul className="header__options--ul">
            <li>
              <Link to="/home">
                <img src={search} />
              </Link>
            </li>
            <li>
              <Link to="/cart/">
                <img src={car} />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <img src={avatar} />
              </Link>
            </li>
            <li>
              <button
              className='logout-btn'
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
)};

export default Nav;
