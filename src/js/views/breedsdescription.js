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
              <h1>{e.breeds[0].name}</h1>
            </div>
			<div className="description">
              <h2>Origin: {e.breeds[0].origin}</h2>
			  <h3>Life Span: {e.breeds[0].life_span} years</h3>
			  <h4>Temperament: {e.breeds[0].temperament} years</h4>
			  <h5>Life Span: {e.breeds[0].description} years</h5>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
