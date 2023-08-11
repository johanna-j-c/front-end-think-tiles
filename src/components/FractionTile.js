import React, { useState } from "react";
import Fraction from "./Fraction";
import FractionPictures from "../ImageList"
// import OneWhole from "../img/OneWhole.png"
// import OneHalf from "../img/OneHalf.png"
// import OneThird from "../img/OneThird.png"
// import OneFourth from "../img/OneFourth.png"
import "../App.css";
import { useDrop } from "react-dnd";
import NewTileForm from "./NewTileForm";
import TileList from "./TileList";

// const FractionPictures = [
//     {
//         id: 1,
//         title: OneWhole,
//         value: "1",
//         altText: "One Whole Fraction Strip"
//     },
//     {
//         id: 2,
//         title: OneHalf,
//         value: "1/2",
//         altText: "One Half Fraction Strip"
//     },
//     {
//         id: 3,
//         title: OneThird,
//         value: "1/3",
//         altText: "One Third Fraction Strip"
//     },
//     {
//         id: 4,
//         title: OneFourth,
//         value: "1/4",
//         altText: "One Fourth Fraction Strip"
//     }
// ]

function FractionTile(props) {

    const [board, setBoard] = useState([]);

    const selectedQuestionTileList = props.tileData

    const checkForSelectedQuestion = () => {
        if (props.selectedQuestion) {
            FractionPictures.filter((pictureData)=> {
                return selectedQuestionTileList.some((pictureList) => {
                    return pictureList.value === pictureData.value
                });
            });
        }else{
            return [];
        }
    };

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