import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Imagecategories = () => {
	const { actions, store } = useContext(Context);
	let { id } = useParams();

    useEffect(() => {
        actions.getImageCategories(id);
      }, []);

return(
	<div className="text-center mt-5">
		{store.imagecategories.map((e)=>{
		return(
        <div key={e.id}>
            
        <img src={e.url} style={{"width": "50%", "height": "50%"}}></img>
         
		</div>)
		})}
	</div>)}
