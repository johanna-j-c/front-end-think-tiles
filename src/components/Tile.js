import React from 'react';
import PropTypes from 'prop-types';
// import './Tile.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const Tile = (props) => {

    return (
        <Grid container marginLeft={3}>
            <Grid xs={1}>
                <Button onClick={(e) => props.addTile({id: props.id, value: props.value})}>Add Tile ✅</Button>
            </Grid>
            <Grid xs={2}>
                <Button onClick={(e) => props.onUnregisterTile({id: props.id, value: props.value})}>Remove Tile ❌</Button>  
            </Grid>
            <Grid xs={12}>
                <img src={props.title} alt={props.altText} />
            </Grid>
        </Grid>
    );
};

Tile.propTypes = {
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    displayOrder: PropTypes.string,
};

export default Tile;