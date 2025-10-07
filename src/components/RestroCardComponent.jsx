import { CDN_URL } from "../utils/constants";

const RestroCardComponent = (props) => {
  const { resObj } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resObj?.info;
  const card={
    backgroundColor:"#f0f0f0",
    margin:"10px",}
  return (
    <div className="res-card" style={card}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="biriyani"
      />
      <h3> {name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resObj.info.sla.deliveryTime}min</h4>
    </div>
  );
};
export default RestroCardComponent;
