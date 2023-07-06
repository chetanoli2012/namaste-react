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
      <div className="flex justify-between items-center">
        <div className="m-2 p-2">
          <input
            type="text"
            className="p-2 rounded-xl border border-solid border-gray-300"
            placeholder="Search by name or cuisine..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            className="ml-4 px-4 py-2 bg-gray-200 rounded-xl hover:cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="m-2 p-2">
          <button
            className="m-8 px-4 py-2 bg-gray-200 rounded-xl hover:cursor-pointer"
            onClick={getTopRatedRestaurants}
          >
            Top Rated Restarants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
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
