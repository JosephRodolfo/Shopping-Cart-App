const removeCartItem = (item, arrayOfCartItems) => {
  let index = arrayOfCartItems
    .map(function (e) {
      return e.name;
    })
    .indexOf(item);

  if (index === -1) {
    return arrayOfCartItems;
  } else {
    let newState = [...arrayOfCartItems];
    newState.splice(index, 1);
    return newState;
  }
};

export default removeCartItem;
