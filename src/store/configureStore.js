import { createStore, combineReducers } from "redux";
import itemsReducer from '../reducers/items';

//store creation
export default ()=>{
const store = createStore(
    combineReducers({
      expenses: itemsReducer,
    })
  );

  return store;
}