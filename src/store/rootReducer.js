import { combineReducers } from "redux";
import { controllerReducer } from "./controller/controllerReducer";
import { countriesReducer } from "./countries/countriesReducer";
import { themeReducer } from "./theme/themeReducer";

export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
  controls: controllerReducer,
});
