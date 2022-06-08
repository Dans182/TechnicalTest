import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { actions, store } = useContext(Context);

  return (
    <nav className="title navbar">
      <Link className="link" to="/">
        <h1 className="titleNavBar" onClick={() => actions.logout()}>
          Home
        </h1>
      </Link>
    </nav>
  );
};
