import { createStore, applyMiddleware, compose } from "redux";
import axios from "axios";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";
import * as api from "../config";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      })
    )
  )
);

export { store };
