import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from 'react-router-dom';
import "../../styles/home.css";

export const Breedsdescription = () => {
	const { actions, store } = useContext(Context);
	let { id } = useParams();

    useEffect(() => {
        actions.getBreedsDescription(id);
      }, []);

return(
	<div className="text-center mt-5">
		{store.breedsDescription.map((e)=>{
		return(
        <div key={e.id}>
        <img src={e.url} style={{"width": "50%", "height": "50%"}}></img>
        {e.breeds[0].name}
		</div>)
		})}
	</div>)}
