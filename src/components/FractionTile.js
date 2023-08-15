import React, { useState } from "react";
import Fraction from "./Fraction";
import FractionPictures from "../ImageList"
import "../App.css";
import { useDrop } from "react-dnd";
// import { Dustbin } from "./Dustbin";
import TemporaryDrawer from "./Drawer";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function FractionTile(props) {

    const [board, setBoard] = useState([]);

    const selectedQuestionTileList = props.tileData

    const filteredTilePictures = FractionPictures.filter((pictureData)=> {
        return selectedQuestionTileList.some((pictureList) => {
            return pictureList.value === pictureData.value
        });
    });

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    const addImageToBoard = (id) => {
        const fractionList = FractionPictures.filter((picture) => id === picture.id);
        setBoard((board) => [...board, fractionList[0]]);
    };

    // Not working properly, will delete all instances of a tile instead of just one instance
    // const deleteImageFromBoard = (id) => {
    //     setBoard((oldData) => {
    //         return oldData.filter((tile) => tile.id !== id)});
        
    // };
    
    return (
        <>
        <div className="Fractions">{filteredTilePictures ? filteredTilePictures.map((picture)=>{
            return <Fraction title={picture.title} id={picture.id} />;}) : null }
        </div>
        <div className="Board" ref={drop}>
            {board.map((picture) => {
                return <Fraction title={picture.title} id={picture.id} />;
            })}
        </div>
        <Grid container>
            <Grid xs={7}>
                <Button onClick={(e) => setBoard([])}>Clear Board</Button>
            </Grid>
            <Grid xs={5}>
                <TemporaryDrawer addTile={props.addTile} onUnregisterTile={props.onUnregisterTile} />
            </Grid>
        </Grid>
        {/* <Dustbin deleteImage={deleteImageFromBoard} /> */}
        </>
    )
}; 

export default FractionTile;