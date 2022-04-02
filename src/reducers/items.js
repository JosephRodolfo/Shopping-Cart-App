const cartItemsDefaultState = [];

const itemsReducerDefaultState = {
  shopItems: [],
  cartItems: [],
};
export default (state = itemsReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, shopItems: [...state.shopItems, action.item] };

    case "ADD_ITEM_TO_CART":
      if (!state.cartItems.find((element) => element.id === action.id)) {
        return { ...state, cartItems: [...state.cartItems, action] };
      } else {
        let index = state.cartItems
          .map(function (e) {
            return e.id;
          })
          .indexOf(action.id);

        const newCartItemsState = state.cartItems;
        newCartItemsState[index].quant += action.quant;

        return { ...state, cartItems: [...newCartItemsState] };
      }
    case "REMOVE_ITEM":
      let newCartState = state.cartItems.filter(({ id }) => id !== action.id);

      return { ...state, cartItems: [...newCartState] };
    case "EDIT_ITEM_QUANTITY":
      let index = state.cartItems
        .map(function (e) {
          return e.id;
        })
        .indexOf(action.id);

      let newCartState2 = state.cartItems;

      newCartState2[index].quant = parseInt(action.updatedQuant);

      return { ...state, cartItems: [...newCartState2] };

    default:
      return state;
  }
};
