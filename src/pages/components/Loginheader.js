import React from "react";
import ch from "../img/CH.png";

const Lsheader = () => {
  return (
    <header className="main">
      <div>
        <img src={ch} alt="CH" className="ch"></img>
      </div>
      <span>
        <p>LOGIN / SIGN UP</p>
      </span>
    </header>
  );
};

export default Lsheader;
