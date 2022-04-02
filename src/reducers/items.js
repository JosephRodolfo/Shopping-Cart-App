//const itemsReducerDefaultState = [];
const cartItemsDefaultState = [];

const itemsReducerDefaultState = {
  shopItems: [],
  cartItems: [],
};
export default (
  state = itemsReducerDefaultState,
  action,
  cartItems = cartItemsDefaultState
) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, shopItems: [...state.shopItems, action.item] };

    case "ADD_ITEM_TO_CART":
      return { ...state, cartItems: [...state.cartItems, action] };

    case "REMOVE_ITEM":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_IEM":
      return state.map((element) =>
        element.id === action.id ? { ...element, ...action.updates } : element
      );

    default:
      return state;
  }
};


