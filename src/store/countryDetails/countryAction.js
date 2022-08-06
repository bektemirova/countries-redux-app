export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";

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

export const loadingCountry =
  () =>
  (dispatch, _, { api, client }) => {
    dispatch(setLoading());

    client
      .get(api.searchByCountry)
      .then(({ data }) => dispatch(setCountry(data)))
      .catch((err) => dispatch(setError(err.message)));
  };
