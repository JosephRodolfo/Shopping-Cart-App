import addUpCartItems from "../components/utils/addUpCartItems";

test("adds quantities properly", () => {
  expect(addUpCartItems([
    { name: "Bike", quantity: 500, price: 100 },
    { name: "Pedal", quantity: 2, price: 100 },
    { name: "Helmet", quantity: 1, price: 100 },
  ])).toBe(503);
});

test("adds quantities properly", () => {
    expect(addUpCartItems([])).toBe(0);
  });


