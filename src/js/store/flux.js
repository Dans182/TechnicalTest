const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			categories: []
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
		} catch (e) {
		  alert("ERROR");
		}
	  },
	  		getCategoriesHats: async () => {
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
	  },
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
