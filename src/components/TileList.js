import React from 'react';
import { useState } from 'react';
import Tile from './Tile';
import PropTypes from 'prop-types';
import './TileList.css';
import FractionPictures from '../ImageList';

const TileList = (props) => {
    const getTileListJSX = (tiles) => {
            return tiles.map((tile)=>{
                return (
                    <Tile
                        tileId = {tile.id}
                        title = {tile.title}
                        value = {tile.value}
                        key={tile.tileId}
                        addTile={props.addTile}
                        onUnregisterTile={props.onUnregisterTile}
                    />
                );
            });
    }; 

    // const [isHidden, setIsHidden] = useState(true);

    // const toggleHiddenForm = () => {
    //     setIsHidden(!isHidden);
    // };

    // const hiddenClass = isHidden ? 'hidden-component' : null;
    // const hiddenFormText = isHidden ? 'Show Tile List' : 'Hide Tile List';


    return (
        <section>
            {/* <div className={hiddenClass}> */}
            <div>
                <h2>Tile List</h2>
                <h3 className='Tile List'>Update Tile:</h3>
                <ul>{getTileListJSX(FractionPictures)}</ul>
            </div>
            {/* <button onClick={toggleHiddenForm}>{hiddenFormText}</button> */}
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