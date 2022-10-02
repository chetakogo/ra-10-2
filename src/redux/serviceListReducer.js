import {
    REMOVE_ITEM,
    ADD_INPUT_VALUE,
  } from "./action";
  import {
    nanoid
  } from "nanoid";
  
  const initialState = [{
      id: nanoid(),
      name: "Замена стекла",
      price: 21000
    },
    {
      id: nanoid(),
      name: "Замена дисплея",
      price: 25000
    },
    {
      id: nanoid(),
      name: "Замена динамика",
      price: 10000
    },
  ];
  
  
  const serviceListReducer = (state = initialState, action) => {
    switch (action.type) {
      case REMOVE_ITEM:
        const {
          id
        } = action.payload;
        return state.filter((service) => service.id !== id);
      case ADD_INPUT_VALUE:
        const {
          name, price, iD
        } = action.payload;
        return iD ? state.map((item) => {
          if (item.id === iD) {
            return {
              id: iD,
              name: name,
              price: price
            }
          }
          return item
        }) : [
          ...state,
          {
            id: nanoid(),
            name,
            price: Number(price),
          },
        ];
      default:
        return state;
    }
  };
  
  export default serviceListReducer;