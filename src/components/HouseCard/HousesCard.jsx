import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { deleteCard } from "../../redux/actions/actions";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const HouseCard = ({ house, deleteCard }) => {
  return (
    <div>
      <Button variant="contained">
        <Link to={`/house/${house.id}`}>{house.name}</Link>
      </Button>
      <IconButton aria-label="delete" size="lg">
        <DeleteIcon
          fontSize="inherit"
          onClick={() => deleteCard(house.id)}
        ></DeleteIcon>
      </IconButton>
      <p>{house.region}</p>
      <p>{house.words}</p>
    </div>
  );
};

export default connect(null, { deleteCard })(HouseCard);
