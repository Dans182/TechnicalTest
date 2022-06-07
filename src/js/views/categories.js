import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Categories = () => {
	const { actions, store } = useContext(Context);

    useEffect(() => {
        actions.getCategories();
      }, []);

return(
	<div className="text-center mt-5">
		{store.categories.map((e)=>{
		return(<div key={e.id}><Link to={"categories/" + e.id}><button className="btn btn-outline-success"
		type="button" 		onClick={() => {
            actions.getImageCategories(e.id);
        }}>
			{e.name}	

	  </button></Link>
              

		</div>)
		})}
	</div>)}
