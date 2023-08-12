import React, { useState } from "react";
import Fraction from "./Fraction";
import FractionPictures from "../ImageList"
import "../App.css";
import { useDrop } from "react-dnd";
import NewTileForm from "./NewTileForm";
import TileList from "./TileList";

function FractionTile(props) {

    const [board, setBoard] = useState([]);

    const selectedQuestionTileList = props.tileData

    // const checkForSelectedQuestion = () => {
    //     if (props.selectedQuestion) {
    //         FractionPictures.filter((pictureData)=> {
    //             return selectedQuestionTileList.some((pictureList) => {
    //                 return pictureList.value === pictureData.value
    //             });
    //         });
    //     }else{
    //         return [];
    //     }
    // };

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
        {/* <NewTileForm addTile={props.addTile} /> */}
        <TileList addTile={props.addTile} onUnregisterTile={props.onUnregisterTile} />
        </>
    )
}; 

export default FractionTile;