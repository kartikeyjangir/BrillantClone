import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="row ">
        <div className="logo">
          < Link to="/">
            <img src="images/logo.png" alt="logo"/>
          </Link>
        </div>

        <div>
         <Link to="/warm"> <button className="freetrial">START TRIAL</button></Link>
        </div>
      </header>
    </>
  );
}

export default Header;
