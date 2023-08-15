import React from 'react';
import Tile from './Tile';
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

    return (
        <section>
            <Box marginLeft={5} marginTop={2}>
                <Typography marginLeft={1} variant='h3'>Tile List</Typography>
                <Typography marginLeft={5} variant='h6'>Update Tile:</Typography>
                <Stack
                    spacing={2}
                    >{getTileListJSX(FractionPictures)}
                </Stack>
            </Box>
        </section>
    );
};

export default TileList;