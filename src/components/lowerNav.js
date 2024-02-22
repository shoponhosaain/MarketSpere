import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ProfileAvatar from "./ProfileAvatar";
import ProfileToggle from './profileToggle';

const LowerNav = () => {
  const { currentUser, logout } = useAuth();
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => {
    console.log("clicked")
    setIsToggled(!isToggled);
    
    // Toggle the state
  };
  return (
    <>
      
      <nav className="container">
        <div className="navbar m-0 default-padding d-none d-md-flex">
          <ul className="d-flex list-style p-0 m-0">
            <li>
              <Link
                className="font-sm prime-color font-bolt"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="ms-4">
              <Link
                className=" prime-color font-bolt"
                style={{ textDecoration: "none" }}
                to="/categories/category"
              >
                Categories
              </Link>
            </li>
            <li className="ms-4">
              <Link
                className=" prime-color font-bolt"
                style={{ textDecoration: "none" }}
                to="/"
              >
                About us
              </Link>
            </li>
            <li className="ms-4">
              <Link
                className=" prime-color font-bolt"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Customer care
              </Link>
            </li>
          </ul>

          <div className="nav-buttons">
            {currentUser ? (
              <div className="d-flex align-items-center">
                <button className="border-0" onClick={toggle}>
                   <ProfileAvatar onClick={toggle} currentUser={currentUser} />
                </button>
                <div className="mx-3">
                  <span
                    className="login-btn cursor-pointer font-bolt"
                    onClick={logout}
                  >
                    Logout
                  </span>
                </div>
              </div>
            ) : (
              <div>
                <Link className="login-btn" to="login">
                  Login
                </Link>
                <Link className="sign-up-btn ms-3" to="signup">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="profile-toggle" >
      {isToggled && <ProfileToggle/>}
      </div>
      </nav>
      <hr className="d-none d-md-block"></hr>
     
      
      
    </>
  );
};

export default LowerNav;
