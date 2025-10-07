import RestroCardComponent from "./RestroCardComponent";
import resList from "../utils/mockData";

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {/* restaurant cards */}

        {resList.map((restaurant) => {
          return (
            <RestroCardComponent key={restaurant.info.id} resObj={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default BodyComponent;
