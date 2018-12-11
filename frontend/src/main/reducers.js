import { combineReducers } from "redux";

const rootReducer = combineReducers({
  dashboard: () => ({ sumary: { credit: 0, debt: 0 } })
});
export default rootReducer;
