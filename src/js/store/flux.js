const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      categories: [],
      breeds: [],
      imageCategories: [],
      breedsDescription: {},
    },
    actions: {
      getCategories: async () => {
        try {
          const resp = await fetch("https://api.thecatapi.com/v1/categories", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const dataCategories = await resp.json();
          setStore({ categories: dataCategories });
        } catch (e) {
          alert("ERROR");
        }
      },

      getBreeds: async () => {
        try {
          const resp = await fetch("https://api.thecatapi.com/v1/breeds", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
          const dataBreeds = await resp.json();
          setStore({ breeds: dataBreeds });
        } catch (e) {
          alert("ERROR");
        }
      },
      getImageCategories: async (id) => {
        try {
          const resp = await fetch(
            "https://api.thecatapi.com/v1/images/search?category_ids=" + id,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );
          const dataImageCategories = await resp.json();
          setStore({ imageCategories: dataImageCategories });
        } catch (e) {
          alert("ERROR");
        }
      },
      getBreedsDescription: async (id) => {
        try {
          const resp = await fetch(
            "https://api.thecatapi.com/v1/images/search?breed_ids=" + id,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" },
            }
          );
          const dataBreedsDescription = await resp.json();
          setStore({ breedsDescription: dataBreedsDescription[0] });
        } catch (e) {
          alert("ERROR");
        }
      },
      logout: async () => {
        setStore({
          categories: [],
          breeds: [],
          imageCategories: [],
          breedsDescription: {},
        });
      },
      previousCat: (currentId) => {
        let breeds = getStore().breeds;
        for (let i = 0; i < breeds.length; i++) {
          if (breeds[i].id == currentId && i < breeds.length) {
            getActions().getBreedsDescription(breeds[i - 1].id);
          } else if (breeds[i] == currentId && i == breeds.length) {
            getActions().getBreedsDescription(breeds[0].id);
          }
        }
      },
      nextCat: (currentId) => {
        let breeds = getStore().breeds;
        for (let i = 0; i < breeds.length; i++) {
          if (breeds[i].id == currentId && i < breeds.length) {
            getActions().getBreedsDescription(breeds[i + 1].id);
          } else if (breeds[i] == currentId && i == breeds.length) {
            getActions().getBreedsDescription(breeds[0].id);
          }
        }
      },
    },
  };
};

export default getState;
