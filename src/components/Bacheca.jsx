import React from "react";
import { Link } from "react-router-dom";

const Bacheca = () => {
  return (
    <div className="mt-0">
      <div className="d-flex justify-content-around">
        <Link to="/PrezziLatte">
          <button className="btn btn-primary rounded-circle">
            <img src="/latte.png" alt="Latte" width="50px" height="50px" />
            <p>Prezzi Latte</p>
          </button>
        </Link>
        <Link to="/prezzi-ovini">
          <button className="btn btn-primary rounded-circle">
            <img src="/ovini.png" alt="Ovini" width="50px" height="50px" />
            <p>Prezzi Ovini</p>
          </button>
        </Link>
        <Link to="/prezzi-suini">
          <button className="btn btn-primary rounded-circle">
            <img src="/suini.png" alt="Suini" width="50px" height="50px" />
            <p>Prezzi Suini</p>
          </button>
        </Link>
        <Link to="/prezzi-bovini">
          <button className="btn btn-primary rounded-circle">
            <img src="/bovini.png" alt="Bovini" width="50px" height="50px" />
            <p>Prezzi Bovini</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Bacheca;
