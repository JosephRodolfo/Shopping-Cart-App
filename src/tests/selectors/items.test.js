import selectItems from "../../selectors/items";

const items = {shopItems: [
  { id: 1, name: "Blue Bike", price: 300, quantity: 0, picture: "blueBike" },
  { id: 2, name: "Red Bike", price: 200, quantity: 0, picture: "redBike" },
  { id: 3, name: "Orange Bike", price: 400, quantity: 0, picture: "orangeBike" },
  { id: 4, name: "Yellow Bike", price: 100, quantity: 0, picture: "yellowBike" },
]};


test("should sort shop items by price", () => {
    const filters = {
       sortBy: "price"
    };
  
    const result = selectItems(items, {...filters});
    expect(result["newShopItems"]).toEqual([items.shopItems[0], items.shopItems[1], items.shopItems[2], items.shopItems[3]]);
  });

  test("should sort shop items by price", () => {
    const filters = {
       sortBy: "alphabetical"
    };
  
    const result = selectItems(items, {...filters});

    expect(result["newShopItems"]).toEqual([items.shopItems[0], items.shopItems[1], items.shopItems[2], items.shopItems[3]]);
  });

