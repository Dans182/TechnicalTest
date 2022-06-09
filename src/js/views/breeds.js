import React from "react";
import { Fragment, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/breeds.css";

export const Breeds = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getBreeds();
  }, []);

  return (
    <Fragment>
      <div className="breed">
        {store.breeds.map((e) => {
          return (
            <div className="content-card" key={e.id}>
              <div>
                <img
                  className="cat-imagen-header"
                  src={e.image ? e.image.url : "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                ></img>
              </div>
              <div className="box-button">
                <Link to={"breeds/" + e.id}>
                  <button className="breed-button" type="button">
                    {e.name}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>{" "}
    </Fragment>
  );
};
