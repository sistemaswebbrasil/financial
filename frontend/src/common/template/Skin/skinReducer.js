const INITIAL_STATE = {
  selected: "skin-blue",
  availables: [
    "skin-blue",
    "skin-blue-light",
    "skin-yellow",
    "skin-yellow-light",
    "skin-green",
    "skin-green-light",
    "skin-purple",
    "skin-purple-light",
    "skin-red",
    "skin-red-light",
    "skin-black",
    "skin-black-light"
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SKIN_CHANGED":
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};
