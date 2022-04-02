const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.expense];
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

