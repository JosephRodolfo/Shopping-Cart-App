import { sortByAlphabetical, sortByPrice } from "../../actions/filters";

test("should generate sort by alphabetical action object ", ()=>{

    const action = sortByAlphabetical();
    expect(action).toEqual({

        type: "SORT_BY_ALPHABETICAL",
    })

});

test("should generate sort by price action object ", ()=>{

    const action = sortByPrice();
    expect(action).toEqual({

        type: "SORT_BY_PRICE",
    })

});