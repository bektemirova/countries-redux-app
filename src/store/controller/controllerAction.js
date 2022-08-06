export const SET_SEARCH = "@@country/SET_SEARCH";
export const SET_REGION = "@@country/SET_REGION";
export const CLEAR_ALL = "@@country/CLEAR_ALL";

export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});

export const clearAll = () => ({
  type: CLEAR_ALL,
});
