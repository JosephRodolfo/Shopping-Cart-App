import filtersReducer from '../../reducers/filters'


test("should set sortBy to price ", () => {
    const currentState = {
      text: "",
      startDate: undefined,
      endDate: undefined,
      sortBy: "alphabetical",
    };
  
    const action = { type: "SORT_BY_PRICE" };
  
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe("price");
  });

  test("should set sortBy to alphabetical ", () => {
    const currentState = {
      text: "",
      startDate: undefined,
      endDate: undefined,
      sortBy: "price",
    };
  
    const action = { type: "SORT_BY_ALPHABETICAL" };
  
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe("alphabetical");
  });
  