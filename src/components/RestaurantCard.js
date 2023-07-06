import { CLOUDINARY_BASE_URL } from "../utils/constants";

const RestaurantCard = ({
  data: { name, cloudinaryImageId, cuisines, avgRating, costForTwo, slaString },
}) => {
  return (
    <div className="m-4 p-4 w-[310px] rounded-xl shadow-xl bg-gray-200 hover:border border-solid border-gray-200">
      <img
        className="rounded-lg"
        alt={`${name} image`}
        src={`${CLOUDINARY_BASE_URL}${cloudinaryImageId}`}
      />
      <h3 className="pt-4 pb-2 text-lg font-semibold">{name}</h3>
      <h4 className="pb-2 text-base whitespace-nowrap overflow-hidden text-ellipsis">
        {cuisines.join(", ")}
      </h4>
      <h4 className="pb-2 text-base">{`${avgRating} ★★★`}</h4>
      <h4 className="pb-2 text-base">{`₹ ${costForTwo / 100} for two`}</h4>
      <h4 className="pb-4">{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
