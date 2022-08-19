import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getHouses } from "../../redux/actions/actions";
import HousesCard from "../HouseCard/HousesCard";

const Houses = ({ getHouses, houses }) => {
  /* const [didFetch, setDidFetch] = useState(false); */


  useEffect(() => {
      getHouses()
  }, [getHouses]);

  
  return (
    <>
      {houses &&
        houses.map((h) => (
          <HousesCard house={h} key={h.id} id={h.id}></HousesCard>
        ))}
    </>
  );
};

function mapStateToProps(state) {
  return {
    houses: state.houses,
  };
}

export default connect(mapStateToProps, { getHouses })(Houses);
