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
            <div>
              <h1 className="title-description">{e.breeds[0].name}</h1>
            </div>
            <div className="subtitle-description">
              <h4 className="subtitle-description">
                Origin: {e.breeds[0].origin}
              </h4>
              <h4 className="subtitle-description">
                Life Span: {e.breeds[0].life_span} years
              </h4>
              <h4 className="subtitle-description">
                Temperament: {e.breeds[0].temperament}.
              </h4>
              <h4 className="subtitle-description">
                Description: {e.breeds[0].description}
              </h4>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
