import { CLEAR_ALL, SET_REGION, SET_SEARCH } from "./controllerAction";

const initialState = {
  search: "",
  region: "",
};

export const controllerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }
    case SET_REGION: {
      return {
        ...state,
        region: action.payload,
      };
    }

    case CLEAR_ALL: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
