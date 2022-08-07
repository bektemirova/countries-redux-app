export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";
export const SET_CLEAR = "@@details/SET_CLEAR";
export const SET_NEIGHBORS = "@@details/SET_NEIGHBORS";

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

export const setClear = () => ({
  type: SET_CLEAR,
});

export const setNeighbors = (neighbor) => ({
  type: SET_NEIGHBORS,
  payload: neighbor,
});

//thunk

export const loadCountryByName =
  (name) =>
  (dispatch, _, { api, client }) => {
    dispatch(setLoading());

    client
      .get(api.searchByCountry(name))
      .then(({ data }) => dispatch(setCountry(data[0])))
      .catch((err) => dispatch(setError(err.message)));
  };

export const loadCountryNeighbors =
  (neighbor) =>
  (dispatch, _, { api, client }) => {
    client
      .get(api.filterByCode(neighbor))
      .then(({ data }) => dispatch(setNeighbors(data.map((c) => c.name))))
      .catch((err) => console.err);
  };
