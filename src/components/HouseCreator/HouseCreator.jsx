import React, { useState } from "react";
import { connect } from "react-redux";
import { createHouse } from "../../redux/actions/actions";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const HouseForm = ({ createHouse }) => {
  const [house, setHouse] = useState({
    name: "",
    region: "",
    words: "",
  });

  const [submit, setSubmit] = useState(false);

  function onChangeHandler(e) {
    setHouse({ ...house, [e.target.name]: e.target.value });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setHouse({
          name: "",
          region: "",
          words: "",
        });

        setTimeout(() => {
          setSubmit(false);
        }, 3000);
      }}
    >
      <input
        type="text"
        placeholder="Nombre de la casa..."
        name="name"
        value={house.name}
        onChange={(e) => onChangeHandler(e)}
      ></input>
      <input
        type="text"
        placeholder="Región de la casa..."
        name="region"
        value={house.region}
        onChange={(e) => onChangeHandler(e)}
      ></input>
      <input
        type="text"
        placeholder="Lema de la casa..."
        name="words"
        value={house.words}
        onChange={(e) => onChangeHandler(e)}
      ></input>
      <input
        type="submit"
        value="Crear casa"
        onClick={() => setSubmit(true)}
        onChange={(e) => onChangeHandler(e)}
      ></input>
      {submit ? <Alert severity="success">Casa creada con éxito</Alert> : null}
    </form>
  );
};

export default connect(null, { createHouse })(HouseForm);
