export default (items, { sortBy } = {}) => {
  let newShopItems = items.shopItems.sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "alphabetical") {
      return a.name.localeCompare(b.name);
    }
  });

  return { ...items, newShopItems };
};
