import React from 'react';
import Tile from './Tile';
import PropTypes from 'prop-types';
import './TileList.css';

const TileList = (props) => {
    const getTileListJSX = (tiles) => {
            return tiles.map((tile)=>{
                return (
                    <Tile
                        tileId = {tile.tileId}
                        title = {tile.title}
                        prompt = {tile.prompt}
                        key={tile.tileId}
                    />
                );
            });
    }; 

    return (
        <section>
            <h2>Tile List</h2>
            <h3 className='selectBoard'>Select a Tile:</h3>
            <ul>{getTileListJSX(props.tileData)}</ul>
        </section>
    );
};

// BoardList.propTypes = {
//     boardData: PropTypes.arrayOf(
//         PropTypes.shape({
//             boardId: PropTypes.number.isRequired,
//             title: PropTypes.string.isRequired,
//             owner: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// }

export default TileList;