import RestroCardComponent from "./RestroCardComponent";
import resList from "../utils/mockData";
import { useState } from "react";

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
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

        {listOfRestaurants.map((restaurant) => {
          return (
            <RestroCardComponent key={restaurant.info.id} resObj={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default BodyComponent;
