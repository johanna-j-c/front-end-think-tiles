import React from 'react';
import PropTypes from 'prop-types';
import './Tile.css';

const Tile = (props) => {

    return (
        <li>
            <img src={props.title} alt={props.altText} />
            <button onClick={(e) => props.addTile({id: props.id, value: props.value})}>Add Tile ✅</button>
            <button onClick={(e) => props.onUnregisterTile({id: props.id, value: props.value})}>Remove Tile ❌</button>  
        </li>
    );
};

// Board.propTypes = {
//     boardId: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     owner: PropTypes.string.isRequired,
// };

export default Tile;