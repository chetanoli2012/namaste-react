import { useState } from "react";

import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);

  const getTopRatedRestaurants = () => {
    let filteredRestaurants = {};
    filteredRestaurants = listOfRestaurants.filter(function (restaurant) {
      return restaurant.data.avgRating > 4;
    });
    setListOfRestaurants(filteredRestaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={getTopRatedRestaurants}>
          Top Rated Restarants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map(function (res) {
          return <RestaurantCard key={res.data.uuid} {...res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
