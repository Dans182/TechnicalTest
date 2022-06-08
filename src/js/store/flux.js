const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			categories: [],
			breeds: [],
			imagecategories: [],
			breedsDescription: [],
		},
		actions: {
			getCategories: async () => {
		try {
		  const resp = await fetch("https://api.thecatapi.com/v1/categories", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(),
		  });
		  const dataCategories = await resp.json();
		  setStore({categories: dataCategories})
		} catch (e) {
		  alert("ERROR");
		}
	  },

	  		getBreeds: async () => {
		try {
		  const resp = await fetch("https://api.thecatapi.com/v1/breeds", {
			method: "GET",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(),
		  });
		  const dataBreeds = await resp.json();
		  setStore({breeds: dataBreeds})
		} catch (e) {
		  alert("ERROR");
		}
	  },
	  		getImageCategories: async (id) => {
		try {
		  const resp = await fetch("https://api.thecatapi.com/v1/images/search?category_ids=" + id, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		  });
		  const dataimagecategories = await resp.json();
		  setStore({imagecategories: dataimagecategories})
		} catch (e) {
		  alert("ERROR");
		}
	  },
	 		getBreedsDescription: async (id) => {
		try {
		  const resp = await fetch("https://api.thecatapi.com/v1/images/search?breed_ids=" + id, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		  });
		  const databreedsDescription = await resp.json();
		  setStore({breedsDescription: databreedsDescription})
		} catch (e) {
		  alert("ERROR");
		}
	  },
	  		logout: async () => {setStore({categories: [], breeds: [], imagecategories: [], breedsDescription: [],
        });
      },
		}
	};
};

export default getState;
