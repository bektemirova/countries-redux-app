export const SET_COUNTRIES = "@@countries/SET_COUNTRIES";
export const SET_LOADING = "@@countries/SET_LOADING";
export const SET_ERROR = "@@countries/SET_ERROR";

export const setCountries = (title) => ({
  type: SET_COUNTRIES,
  payload: title,
});

export const setLoading = () => ({
  type: SET_LOADING,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const loadCountries =
  () =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.ALL_COUNTRIES)
      .then(({ data }) => dispatch(setCountries(data)))
      .catch((err) => dispatch(setError(err.message)));
  };
