import React from "react";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Breeds = () => {
	const { actions, store } = useContext(Context);
    const [prueba, setPrueba] = useState({})

    arrayofObjects.forEach(object =>{
        if(object.company === "Amazon"){
            console.log("Amazon Employee:", object.name);
        }
    });
    
    useEffect(() => {
        actions.getBreeds();
      }, []);
	  
    return(
        <div className="text-center mt-5">
            {store.breeds.map((e)=>{
            return(<div key={e.id}><Link to={"breeds/" + e.id}><button className="btn btn-outline-success"
            type="button">
                {e.name}
                {e.image}
          </button>
                  
    </Link>
            </div>)
            })}
        </div>)}
    