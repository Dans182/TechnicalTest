import React from "react";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { actions, store } = useContext(Context);

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
                actions.getBreeds();
              }}
            >
              Breeds
            </button>
			</Link>
		</p>
	</div>
)};
