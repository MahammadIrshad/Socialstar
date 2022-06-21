import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
function Menu({ user }) {
  const history = useHistory();
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Social star
        </Link>
        <ul style={{ marginLeft: "20%" }} id="nav-mobile" className="left">
          {user ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              
              <li style={{ marginLeft: "40px" }}>
                <Link to="/Trending">Trending</Link>
              </li>
              <li style={{ marginLeft: "40px" }}>
                <Link to="/About">About</Link>
              </li>
              <li style={{ marginLeft: "580px" }}>
                <button
                  className="btn red"
                  onClick={() => {
                    auth.signOut();
                    history.push("./Login");
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li style={{ marginLeft: "720px" }}>
                <Link to="/Login">Login</Link>
              </li>
              <li style={{ marginLeft: "30px" }}>
                <Link to="/Register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Menu;
