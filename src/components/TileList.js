import React from 'react';
import { useState } from 'react';
import Tile from './Tile';
import PropTypes from 'prop-types';
import './TileList.css';
import FractionPictures from '../ImageList';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


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
            <Box marginLeft={5} marginTop={2}>
                <Typography marginLeft={1} variant='h3'>Tile List</Typography>
                <Typography marginLeft={5} variant='h6'>Update Tile:</Typography>
                <Stack
                    spacing={2}
                    >{getTileListJSX(FractionPictures)}
                </Stack>
            </Box>
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