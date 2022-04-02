
import { v4 as uuidv4 } from 'uuid';
//add items
export const addItem = ({
    picture = "",
    name = "",
    price = 0,
    quantity = 1,
  } = {}) => ({
    type: "ADD_ITEM",
    item: {
      id: uuidv4(),
      picture,
      name,
      price,
      quantity,
    },
  });


  //add item to cart 

  export const addItemToCart = ({id, name, price, quant} = {})=> ({
id,
type: 'ADD_ITEM_TO_CART',
name, 
price,
quant,


  });
  //REMOvE_EXPENSE
  
 export const removeItem = ({ id } = {}) => ({
    id,
  
    type: "REMOVE_ITEM",
  });
  
  //EDIT_EXPENSE
  
 export const editCartQuantity = (id, updatedQuant) => ({
    type: "EDIT_ITEM_QUANTITY",
    id,
    updatedQuant,
  });