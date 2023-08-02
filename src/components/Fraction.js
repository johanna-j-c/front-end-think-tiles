import React from "react";
import { useDrag } from "react-dnd";

function Fraction({ id, title, altText }){
    const [{ isDragging }, drag] = useDrag(()=>({
        type: "image",
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (    
    <img 
        ref={drag}
        src={title} 
        alt={altText} 
        style={{ border: isDragging ? "5px solid pink" : "0px"}} 
    />
    );
};

export default Fraction;