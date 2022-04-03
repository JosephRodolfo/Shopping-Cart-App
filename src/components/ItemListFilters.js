import React from "react";
import { connect } from "react-redux";
import { sortByPrice, sortByAlphabetical } from "../actions/filters";

const ItemListFilters = (props) => (

  <div>
    <select
      onChange={(e) => {
        if (e.target.value === "alphabetical") {

          props.dispatch(sortByAlphabetical());
        } else if (e.target.value === "price") {
          props.dispatch(sortByPrice());
        }
      }}
    >
      <option value="alphabetical">Alphabetical</option>
      <option value="price">Price, low to high</option>
    </select>
  </div>
);

const mapStateToProp = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProp)(ItemListFilters);
