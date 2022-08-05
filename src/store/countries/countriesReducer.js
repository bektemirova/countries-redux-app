import { SET_COUNTRIES, SET_ERROR, SET_LOADING } from "./countriesAction";

const initialState = {
  status: "idle", //loading | received | rejected
  list: [],
  error: null,
};

export const countriesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES: {
      return { ...state, status: "received", list: payload, error: null };
    }
    case SET_ERROR: {
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    }
    case SET_LOADING: {
      return { ...state, status: "loading", error: null };
    }

    default: {
      return state;
    }
  }
};
