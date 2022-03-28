import React from "react";
import { useState } from "react";

const CartPage = (props) => {

    const [items, setItems] = useState([]);

return(
<div>This is your cart! You have {items.length} items in your cart </div>
);}
export default CartPage;
