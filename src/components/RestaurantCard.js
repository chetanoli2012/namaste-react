import { CLOUDINARY_BASE_URL } from "../utils/constants";

const RestaurantCard = ({
  data: { name, cloudinaryImageId, cuisines, avgRating, costForTwo, slaString },
}) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt={`${name} image`}
        src={`${CLOUDINARY_BASE_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{`${avgRating} stars`}</h4>
      <h4>{`₹ ${costForTwo / 100} for two`}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
