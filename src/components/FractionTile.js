import React, { useState } from "react";
import Fraction from "./Fraction";
import OneWhole from "../img/OneWhole.png"
import OneHalf from "../img/OneHalf.png"
import OneThird from "../img/OneThird.png"
import OneFourth from "../img/OneFourth.png"
import "../App.css";
import { useDrop } from "react-dnd";

const FractionPictures = [
    {
        id: 1,
        title: OneWhole,
        altText: "One Whole Fraction Strip"
    },
    {
        id: 2,
        title: OneHalf,
        altText: "One Half Fraction Strip"
    },
    {
        id: 3,
        title: OneThird,
        altText: "One Third Fraction Strip"
    },
    {
        id: 4,
        title: OneFourth,
        altText: "One Fourth Fraction Strip"
    }
]

function FractionTile() {

    const [board, setBoard] = useState([]);

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
        <div className="Fractions">{FractionPictures.map((picture)=>{
            return <Fraction title={picture.title} id={picture.id} />;
        })}
        </div>
        <div className="Board" ref={drop}>
            {board.map((picture) => {
                return <Fraction title={picture.title} id={picture.id} />;
            })}
        </div>
        </>
    )
}; 

export default FractionTile;