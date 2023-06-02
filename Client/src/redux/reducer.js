const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case "REMOVE_FAV":
      return { ...state, myFavorites: action.payload };
    case "FILTER":
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (pepito) => pepito.gender === action.payload
        ),
      };
    case "ORDER":
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
