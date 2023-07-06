import Shimmer from "./Shimmer";
import useRestaurantCard from "../utils/useRestaurantCard";

const RestaurantMenu = () => {
  const { resInfo } = useRestaurantCard();

  if (resInfo === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card
      .categories[0];
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu:</h2>
      <ul>
        {itemCards.map(function (itemCard) {
          return (
            <li key={itemCard?.card?.info?.id}>
              {itemCard?.card?.info?.name} - ₹{" "}
              {itemCard?.card?.info?.price / 100 ||
                itemCard?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
