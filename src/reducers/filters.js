const filtersReducerDefaultState = {
    sortBy: "alphabetical",
 
  };
  

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case "SORT_BY_PRICE":


 
      let newFilter = {sortBy: 'price'}
      
      return { ...state, sortBy: 'price'};



      case "SORT_BY_ALPHABETICAL":

        let newAlphaFilter = {sortBy: 'alphabetical'}
      
        return { ...state, sortBy: 'alphabetical'};
  
  
      default:
        return state;
    }
  };