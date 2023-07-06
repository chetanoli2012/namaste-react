import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const {
    listOfRestaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    getTopRatedRestaurants,
    handleSearch,
  } = useBody();

  const { onlineStatus } = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

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
