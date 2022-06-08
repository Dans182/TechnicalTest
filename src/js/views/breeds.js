import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/breeds.css";

export const Breeds = () => {
	const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getBreeds();
      }, []);
	  
    return(
        <div className="text-center mt-5">
            {store.breeds.map((e)=>{
            return(<div key={e.id}><Link to={"breeds/" + e.id}><button className="btn btn-outline-success"
            type="button">
                {e.name}


          </button>
          <img src={"https://cdn2.thecatapi.com/images/" + e.reference_image_id + ".jpg"}></img>
    </Link>
            </div>)
            })}
        </div>)}
    