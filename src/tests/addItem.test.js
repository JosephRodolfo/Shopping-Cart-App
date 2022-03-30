import addItem from "../components/utils/addItem";

let sampleCart = [    { name: "Bike", quantity: 500, price: 100 },
{ name: "Pedal", quantity: 2, price: 100 },
{ name: "Helmet", quantity: 1, price: 100 },];


  beforeEach(() => {
     sampleCart = [
        { name: "Bike", quantity: 500, price: 100 },
        { name: "Pedal", quantity: 2, price: 100 },
        { name: "Helmet", quantity: 1, price: 100 },
      ]



});

afterEach(() => {
    sampleCart = [
       { name: "Bike", quantity: 500, price: 100 },
       { name: "Pedal", quantity: 2, price: 100 },
       { name: "Helmet", quantity: 1, price: 100 },
     ]



});




test("add item to cart array correctly", () => {
    let sampleItem =     { name: "Helmet", quantity: 1, price: 100 };

    expect(addItem(sampleItem, sampleCart)).toEqual( [
        { name: "Bike", quantity: 500, price: 100 },
        { name: "Pedal", quantity: 2, price: 100 },
        { name: "Helmet", quantity: 2, price: 100 },
      ]);
  });

  test("add item to cart array correctly", () => {
    let sampleItem =     { name: "Bike", quantity: 30, price: 100 };

    expect(addItem(sampleItem, sampleCart)).toEqual( [
        { name: "Bike", quantity: 530, price: 100 },
        { name: "Pedal", quantity: 2, price: 100 },
        { name: "Helmet", quantity: 1, price: 100 },
      ]);
  });

  test("add item to cart array correctly", () => {
    let sampleItem = { name: "Seat", quantity: 30, price: 100 };

    expect(addItem(sampleItem, sampleCart)).toEqual([
      { name: "Bike", quantity: 500, price: 100 },
      { name: "Pedal", quantity: 2, price: 100 },
      { name: "Helmet", quantity: 1, price: 100 },
      { name: "Seat", quantity: 30, price: 100 },
    ]);
  });


