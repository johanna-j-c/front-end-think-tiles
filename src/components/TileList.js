import React from 'react';
import Tile from './Tile';
import PropTypes from 'prop-types';
import './TileList.css';
import FractionPictures from '../ImageList';

const TileList = (props) => {
    const getTileListJSX = (tiles) => {
            return tiles.map((tile)=>{
                return (
                    <Tile
                        tileId = {tile.tileId}
                        title = {tile.title}
                        value = {tile.value}
                        key={tile.tileId}
                        addTile={props.addTile}
                    />
                );
            });
    }; 

    return (
        <section>
            <h2>Tile List</h2>
            <h3 className='Tile List'>Update Tile:</h3>
            <ul>{getTileListJSX(FractionPictures)}</ul>
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