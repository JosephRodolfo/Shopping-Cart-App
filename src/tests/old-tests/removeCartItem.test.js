import removeCartItem from "../components/utils/removeCartItem";

let sampleCart = [
    { name: "Bike", quantity: 500, price: 100 },
    { name: "Pedal", quantity: 2, price: 100 },
    { name: "Helmet", quantity: 1, price: 100 },
  ]

let sampleItem = "Bike"
test("removes item from cart array correctly", () => {
    expect(removeCartItem(sampleItem, sampleCart)).toEqual( [
        { name: "Pedal", quantity: 2, price: 100 },
        { name: "Helmet", quantity: 1, price: 100 },
      ]);
  });

  test("removes item from cart array correctly", () => {
    expect(removeCartItem("", sampleCart)).toEqual([
        { name: "Bike", quantity: 500, price: 100 },
        { name: "Pedal", quantity: 2, price: 100 },
        { name: "Helmet", quantity: 1, price: 100 },
      ]);
  });

  test("removes item from cart array correctly", () => {
    expect(removeCartItem("Bike", [])).toEqual([
        
      ]);
  });