let addUpCartItems = (cartItemArray) => {
    let startingNumber = 0;

    cartItemArray.forEach((element) => {
      startingNumber += element.quantity;
    });
    return startingNumber;
  };

  export default addUpCartItems;