import React from "react";
import { useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/breedsdescription.css";

export const Breedsdescription = () => {
  const { actions, store } = useContext(Context);
  let { id } = useParams();

  useEffect(() => {
    actions.getBreedsDescription(id);
  }, []);

  return (
    <Fragment>
      {store.breedsDescription.map((e) => {
        return (
          <div className="content-card-id" key={e.id}>
            <img className="cat-imagen-header" src={e.url}></img>
            <div className="description">
              <h4>{e.breeds[0].name}</h4>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
