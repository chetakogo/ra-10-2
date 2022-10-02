import {
    SERVICE_SEARCH
  } from "./action";
  
  const initialState = {
    listSearch: [],
    isSearch: false,
  }
  
  
  const serviceListSearch = (state = initialState, action) => {
    switch (action.type) {
      case SERVICE_SEARCH:
        const {
          arr, searchString
        } = action.payload;
  
        const arrResult = [];
  
  
        arr.forEach((el) => {
          if (el.name.match(new RegExp(`${searchString}`, 'gi')) !== null) {
            arrResult.push(el)
          }
        });
  
        searchString ? state.isSearch = true : state.isSearch = false;
        return {
          ...state, listSearch: arrResult
        }
        default:
          return state;
    }
  };
  
  export default serviceListSearch;