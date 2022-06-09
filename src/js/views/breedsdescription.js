import React from "react";
import { useContext, useEffect, Fragment } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import "../../styles/breedsDescription.css";

export const Breedsdescription = () => {
  const { actions, store } = useContext(Context);
  let { id } = useParams();

  useEffect(() => {
    actions.getBreedsDescription(id);
  }, []);

  return (
    <Fragment>
      {store.breedsDescription.breeds ? (
        <div className="content-card-id" key={store.breedsDescription.id}>
          <img
            className="cat-imagen-header"
            src={store.breedsDescription.url}
          ></img>
          <div>
            <h1 className="title-description">
              {store.breedsDescription.breeds[0].name}
            </h1>
          </div>
          <div className="subtitle-description">
            <h4 className="subtitle-description">
              Origin: {store.breedsDescription.breeds[0].origin}
            </h4>
            <h4 className="subtitle-description">
              Life Span: {store.breedsDescription.breeds[0].life_span} years
            </h4>
            <h4 className="subtitle-description">
              Temperament: {store.breedsDescription.breeds[0].temperament}.
            </h4>
            <h4 className="subtitle-description">
              Description: {store.breedsDescription.breeds[0].description}
            </h4>
            <div>
              <button
                onClick={() => {
                  actions.nextCat(store.breedsDescription.breeds[0].id);
                }}
              >
                BOTON DE PRUEBA
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};
