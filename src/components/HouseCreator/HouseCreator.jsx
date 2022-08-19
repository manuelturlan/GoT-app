import React, { useState } from "react";
import { connect } from "react-redux";
import { createHouse } from "../../redux/actions/actions";

const HouseForm = ({ createHouse }) => {
  const [house, setHouse] = useState({
    name: "",
    region: "",
    words: "",
  });

  function onChangeHandler(e) {
    setHouse({ ...house, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        createHouse(house);
    }}>
      <input
        type="text"
        placeholder="nombre de la casa"
        name="name"
        value={house.name}
        onChange={(e) => onChangeHandler(e)}
      ></input>
      <input type="text" placeholder="región de la casa" name="region" value={house.region} onChange={(e) => onChangeHandler(e)}></input>
      <input type="text" placeholder="word's house" name="words" value={house.words} onChange={(e) => onChangeHandler(e)}></input>
      <input type="submit" value="Crear casa" onChange={(e) => onChangeHandler(e)}></input>
    </form>
  );
};

export default connect(null, { createHouse })(HouseForm);
