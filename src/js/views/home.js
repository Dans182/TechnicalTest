import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { actions, store } = useContext(Context);

	  const getCategoriesHats = async () => {
		try {
		  const resp = await fetch("https://api.thecatapi.com/v1/images/search?category_ids=2", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(),
		  });
		  const dataCategoriesHats = await resp.json();
		} catch (e) {
		  alert("ERROR");
		}
	  };	  

	  const getBreeds = async () => {
		try {
		  const resp = await fetch("https://api.thecatapi.com/v1/breeds", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(),
		  });
		  const dataBreeds = await resp.json();
		} catch (e) {
		  alert("ERROR");
		}
	  };


return(
	<div className="text-center mt-5">
		<p>
			<Link to="categories"><button
              className="btn btn-outline-success"
              type="button"
              onClick={() => {
                actions.getCategories();
              }}
            >
              Categories
            </button>
			</Link>
		</p>
		<p>
		<Link to="breeds"><button
              className="btn btn-outline-success"
              type="button"
              onClick={() => {
                getBreeds();
              }}
            >
              Breeds
            </button>
			</Link>
		</p>
		<p>
			<button
              className="btn btn-outline-success"
              type="button"
              onClick={() => {
                getCategoriesHats();
              }}
            >
              Catogory - Hats
            </button>
		</p>

	</div>
)};
