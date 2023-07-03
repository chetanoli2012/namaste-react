import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getTopRatedRestaurants = () => {
    const topRestaurants = listOfRestaurants.filter(function (restaurant) {
      return restaurant.data.avgRating > 4;
    });
    setFilteredRestaurant(topRestaurants);
  };

  const handleSearch = () => {
    const searchResult = listOfRestaurants.filter(function (restaurant) {
      return restaurant.data.name.toLowerCase().includes(searchText);
    });

    setFilteredRestaurant(searchResult);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  return !listOfRestaurants.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search by name or cuisine..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={getTopRatedRestaurants}>
          Top Rated Restarants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants?.map(function (res) {
          return (
            <Link key={res.data.uuid} to={`/restaurant/${res.data.id}`}>
              <RestaurantCard {...res} />{" "}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
