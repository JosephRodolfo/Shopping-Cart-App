const editCartQuantity = (quantity, item, arrayOfCartItems) => {
    let index = arrayOfCartItems
      .map(function (e) {
        return e.name;
      })
      .indexOf(item);

    let newState = [...arrayOfCartItems];

    newState[index].quantity = quantity;
    return newState;
  };

  export default editCartQuantity;