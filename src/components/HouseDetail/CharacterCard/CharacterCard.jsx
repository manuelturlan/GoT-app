import React from 'react';

const CharacterCard = ({ fullName, title, family }) => {
    return (
        <div>
            <p>Fullname: {fullName}</p>
            <p>Title: {title}</p>
            <p>Family: {family}</p>
            <hr></hr>
        </div>
    );
}

export default CharacterCard;
