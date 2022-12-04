export const SET_COUNTRIES = '@items/SET_COUNTRIES';
export const SET_PRODUCTS = '@items/SET_PRODUCTS';
export const SET_CURRENCIES = '@items/SET_CURRENCIES';


export const setCountries = (item) => {
  return {
    type: SET_COUNTRIES,
    payload: item,
  }
}

export const setProducts = (item) => {
  return {
    type: SET_PRODUCTS,
    payload: item,
  }
}

export const setAllCurrencies = (item) => {
  return {
    type: SET_CURRENCIES,
    payload: item,
  }
}