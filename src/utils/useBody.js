import { useEffect, useState } from "react";

const useBody = () => {
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
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return {
    listOfRestaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    getTopRatedRestaurants,
    handleSearch,
  };
};

export default useBody;
