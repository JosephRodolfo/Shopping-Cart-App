let addUpCartItems = (cartItemArray) => {

  if(cartItemArray === undefined) {
    return;
  }
    let startingNumber = 0;

    cartItemArray.forEach((element) => {
      startingNumber += element.quant;
    });
    return startingNumber;
  };

  export default addUpCartItems;