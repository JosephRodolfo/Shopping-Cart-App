let addItem = (item, arrayOfCartItems) => {
    if (!arrayOfCartItems.find((element) => element.name === item.name)) {
      let newState = [...arrayOfCartItems];
      newState.push(item);
      return newState;
    } else {
      let index = arrayOfCartItems
        .map(function (e) {
          return e.name;
        })
        .indexOf(item.name);

      let newState = [...arrayOfCartItems];

      newState[index].quantity += item.quantity;
      return newState;
    }
  };

  export default addItem;