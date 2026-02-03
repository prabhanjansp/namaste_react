import RestroCardComponent from "./RestroCardComponent";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  console.log("rendered");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9029202&lng=77.4950581&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("json", json);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants);
  };
  if (listOfRestaurants.length === 0) {
    return <Shimmer/>
  }
  return (
    <div className="body">
      {/* <div className="search">search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* restaurant cards */}

        {listOfRestaurants?.map((restaurant) => {
          return (
            <RestroCardComponent key={restaurant.info.id} resObj={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default BodyComponent;
