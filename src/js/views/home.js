import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  return (
    <Fragment>
      <div className="cat-content">
        <img
          className="cat-img"
          src="https://images.pexels.com/photos/599492/pexels-photo-599492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <div className="title">
          <h3>Cats APP</h3>
        </div>
        <div className="content-buttons">
          <p>
            <Link to="categories">
              <button className="buttons" type="button">
                Categories
              </button>
            </Link>
          </p>
          <p>
            <Link to="breeds">
              <button className="buttons" type="button">
                Breeds
              </button>
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};
