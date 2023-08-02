import React from 'react';
import PropTypes from 'prop-types';
import './Tile.css';

const Tile = (props) => {
    
    const handleTileClick = () => {
        props.onSelectTile(props.tileId);
    };

    return (
        <li>
            <button id="button" onClick={handleTileClick}>{props.title}</button>
        </li>
    );
};

// Board.propTypes = {
//     boardId: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     owner: PropTypes.string.isRequired,
// };

export default Tile;