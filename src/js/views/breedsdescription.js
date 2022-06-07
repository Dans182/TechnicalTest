import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Breedsdescription = () => {
	const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getBreedsDescription();
      }, []);

return(
	<div className="text-center mt-5">{console.log(store.breedsDescription)}
		{store.breedsDescription.breeds.map((e)=>{
		return(
        <div key={e.id}>
            {console.log(e.id)}

        <img src="{e.url}"></img>
        
		</div>)
		})}
	</div>)}
