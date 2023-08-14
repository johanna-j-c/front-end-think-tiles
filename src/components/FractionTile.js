import React, { useState } from "react";
import Fraction from "./Fraction";
import FractionPictures from "../ImageList"
import "../App.css";
import { useDrop } from "react-dnd";
import NewTileForm from "./NewTileForm";
import TileList from "./TileList";
import { Dustbin } from "./Dustbin";
import TemporaryDrawer from "./Drawer";

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
        <button onClick={(e) => setBoard([])}>Clear Board</button>
        <div className="Board" ref={drop}>
            {board.map((picture) => {
                return <Fraction title={picture.title} id={picture.id} />;
            })}
        </div>
        {/* <Dustbin deleteImage={deleteImageFromBoard} /> */}
        {/* <NewTileForm addTile={props.addTile} /> */}
        <TemporaryDrawer addTile={props.addTile} onUnregisterTile={props.onUnregisterTile} />
        {/* <TileList addTile={props.addTile} onUnregisterTile={props.onUnregisterTile} /> */}
        </>
    )
}; 

export default FractionTile;