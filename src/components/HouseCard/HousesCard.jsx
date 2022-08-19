import React from 'react';
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button";

const HouseCard = ({ house }) => {
    return (
        <div>
            <Button variant='contained'><Link to={`/house/${house.id}`}>{house.name}</Link></Button>
            <p>{house.region}</p>
            <p>{house.words}</p>
            <hr></hr>
        </div>
    );
}

export default HouseCard;
