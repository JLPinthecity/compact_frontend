const url = "https://compact-backend.herokuapp.com/";
const categoriesPath = "api/v1/categories";
//synchronous actions
export const setCategories = (categories) => {
  // console.log(categories)  works
  return {
    type: "SET_CATEGORIES",
    categories,
  };
};

export const clearCategories = () => {
  return {
    type: "CLEAR_CATEGORIES",
  };
};

//asynchronous actions
export const getCategories = () => {
  // console.log("inside getCategories")
  return (dispatch) => {
    const configObj = {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
    };

    fetch(url + "/" + categoriesPath, configObj)
      .then((res) => res.json())
      .then((categories) => {
        if (categories.error) {
          alert(categories.error);
        } else {
          // console.log("categories:", categories)
          dispatch(setCategories(categories));
        }
      })
      .catch(console.log);
  };
};
