import { CHANGE_VALUE, RESET_FORM, SET_EDIT_ITEM } from "./action";

const initialState = {
  name: "",
  price: "",
  id: "",
};

const serviceAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VALUE:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    case RESET_FORM:
      return (state = {
        name: "",
        price: "",
        id: "",
      });
    case SET_EDIT_ITEM:
      const edit = action.payload;
      return (state = {
        name: edit.name,
        price: edit.value,
        id: edit.id,
      });
    default:
      return state;
  }
};

export default serviceAddReducer;