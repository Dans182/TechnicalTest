import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Imagecategories = () => {
	const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getImageCategories();
      }, []);

return(
	<div className="text-center mt-5">
		{store.imagecategories.map((e)=>{
		return(
        <div key={e.id}>
            <button className="btn btn-outline-success"
		type="button" onClick={() => {
            actions.getImageCategories(e.id);
        }}>
        <img src={e.url}></img>
	  </button>             
		</div>)
		})}
	</div>)}
