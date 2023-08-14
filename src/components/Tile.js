import React from 'react';
import PropTypes from 'prop-types';
// import './Tile.css';
import Button from '@mui/material/Button';

const Tile = (props) => {

    return (
        <li>
            <img src={props.title} alt={props.altText} />
            <Button onClick={(e) => props.addTile({id: props.id, value: props.value})}>Add Tile ✅</Button>
            <Button onClick={(e) => props.onUnregisterTile({id: props.id, value: props.value})}>Remove Tile ❌</Button>  
        </li>
    );
};

// Board.propTypes = {
//     boardId: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     owner: PropTypes.string.isRequired,
// };

export default Tile;