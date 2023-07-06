import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getResDetailsURL } from "./helper";

const useRestaurantCard = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(getResDetailsURL(resId));
    const json = await data.json();
    setResInfo(json?.data);
  };

  return { resInfo };
};

export default useRestaurantCard;
