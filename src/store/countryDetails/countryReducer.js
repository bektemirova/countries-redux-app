import {
  SET_CLEAR,
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  SET_NEIGHBORS,
} from "./countryAction";

const initialState = {
  setCountry: null,
  error: null,
  status: "idle",
  borders: [],
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        status: "loading",
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        status: "rejected",
      };
    }
    case SET_COUNTRY: {
      return {
        ...state,
        error: null,
        status: "received",
        setCountry: action.payload,
      };
    }

    case SET_CLEAR: {
      return initialState;
    }

    case SET_NEIGHBORS: {
      return {
        ...state,
        borders: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
