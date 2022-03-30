import editCartQuantity from "../components/utils/editCartQuantity";


let sampleCart = [
    { name: "Bike", quantity: 500, price: 100 },
    { name: "Pedal", quantity: 2, price: 100 },
    { name: "Helmet", quantity: 1, price: 100 },
  ]

let sampleItem = "Bike"
test("removes item from cart array correctly", () => {
    expect(editCartQuantity( 40, sampleItem, sampleCart)).toEqual( [
        { name: "Bike", quantity: 40, price: 100 },
        { name: "Pedal", quantity: 2, price: 100 },
        { name: "Helmet", quantity: 1, price: 100 },
      ]);
  });