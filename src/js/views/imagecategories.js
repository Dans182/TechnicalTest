import React from "react";
import { useContext, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/imagecategories.css";

export const Imagecategories = () => {
  const { actions, store } = useContext(Context);
  let { id } = useParams();

  useEffect(() => {
    actions.getImageCategories(id);
  }, []);

  return (
    <Fragment>
      <div className="cat-content">
        {store.imagecategories.map((e) => {
          return (
            <div key={e.id}>
              <img className="cat-img" src={e.url}></img>
              <div className="title">
                <h3>Cats in {e.categories[0].name}</h3>
              </div>
            </div>
          );
        })}
      </div>{" "}
    </Fragment>
  );
};
