import itemsReducer from "../../reducers/items";

const items = {
  shopItems: [
    { id: 1, name: "Blue Bike", price: 300, quantity: 0, picture: "blueBike" },
    { id: 2, name: "Red Bike", price: 200, quantity: 0, picture: "redBike" },
    {
      id: 3,
      name: "Orange Bike",
      price: 400,
      quantity: 0,
      picture: "orangeBike",
    },
    {
      id: 4,
      name: "Yellow Bike",
      price: 100,
      quantity: 0,
      picture: "yellowBike",
    },
  ],
};

test("should set default state", () => {
  const state = itemsReducer(undefined, { type: "@INIT" });

  expect(state).toEqual({ shopItems: [], cartItems: [] });
});

test("should add item to shopItems", () => {
  const testItem = {
    item: {
      id: expect.any(String),
      price: 100,
      quantity: 9,
    },
    type: "ADD_ITEM",
  };
  const state = itemsReducer({ shopItems: [items], cartItems: [] }, testItem);
  expect(state.shopItems).toEqual([items, testItem.item]);
});

test("should add item to cartItems", () => {
  const testItem = {
    id: "123abc",
    type: "ADD_ITEM_TO_CART",
    name: "Blue Wheel",
    price: 100,
    quant: 9,
  };
  const state = itemsReducer({ shopItems: [], cartItems: [] }, testItem);
  expect(state.cartItems).toEqual([testItem]);
});

test("should removeItem from cartItems", () => {
  const testItem = {
    id: 1,
    type: "REMOVE_ITEM",
  };
  const state = itemsReducer(
    { shopItems: [], cartItems: items.shopItems },
    testItem
  );

  expect(state.cartItems).toEqual([
    items.shopItems[1],
    items.shopItems[2],
    items.shopItems[3],
  ]);
});

test("should not remove Item from cartItems if ID doesn't match", () => {
  const testItem = {
    id: 99,
    type: "REMOVE_ITEM",
  };
  const state = itemsReducer(
    { shopItems: [], cartItems: items.shopItems },
    testItem
  );

  console.log(state);
  expect(state.cartItems.length).toEqual(4);
});

test("should edit cart item quantity", () => {
  const testItem = {
    id: 1,
    type: "EDIT_ITEM_QUANTITY",
    updatedQuant: 99,
  };
  const state = itemsReducer(
    { shopItems: [], cartItems: items.shopItems },
    testItem
  );

  console.log(state);
  expect(state.cartItems[0].quant).toBe(99);
});
