import {
  addItem,
  addItemToCart,
  removeItem,
  editCartQuantity,
} from "../../actions/cartItems";

test("should set up remove item from cart action object", () => {
  const action = removeItem({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_ITEM",
    id: "123abc",
  });
});

test("should set up add item to cart action object", () => {
  const itemData = {
    id: "123abc",
    picture: "./test/path",
    quant: 1,
    name: "bike",
    price: 100,
  };
  const action = addItemToCart({ ...itemData });

  expect(action).toEqual({
    type: "ADD_ITEM_TO_CART",
    id: "123abc",
    quant: 1,
    name: "bike",
    price: 100,
  });
});

test("should set up edit cart quantity action object", () => {
  const action = editCartQuantity("123abc", 8);
  expect(action).toEqual({
    type: "EDIT_ITEM_QUANTITY",
    id: "123abc",
    updatedQuant: 8,
  });
});

test("should set up add item action object with provided values", () => {
  const itemData = {
    picture: "./test/path",
    quantity: 1,
    name: "bike",
    price: 100,
  };

  const action = addItem(itemData);
  expect(action).toEqual({
    type: "ADD_ITEM",
    item: {
      id: expect.any(String),
      picture: "./test/path",
      quantity: 1,
      name: "bike",
      price: 100,
    },
  });
});

test("should set up add item action object with default values", () => {
  const action = addItem({});
  expect(action).toEqual({
    type: "ADD_ITEM",
    item: {
      id: expect.any(String),
      picture: "",
      quantity: 1,
      name: "",
      price: 0,
    },
  });
});
