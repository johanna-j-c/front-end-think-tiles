import React, { useState } from 'react';
import './NewTileForm.css';
import FractionPictures from '../ImageList';

const NewTileForm = (props) => {
    // const tileDefaultState = {
    //     value: "",
    //     displayOrder: "",
    // };
    
    // const [tileFormData, setTileFormData] = useState(tileDefaultState);
    const [isHidden, setIsHidden] = useState(false);

    const toggleHiddenForm = () => {
        setIsHidden(!isHidden);
    };

    const hiddenClass = isHidden ? 'hidden-component' : null;
    const hiddenFormText = isHidden ? 'Show Tile Options' : 'Hide Tile Options';
    
    // const handleChange = (event) => {
    // const fieldName = event.target.name;
    // const fieldValue = event.target.value;
    
    // const newFormData = {...tileFormData, [fieldName]: fieldValue};
    // setTileFormData(newFormData);
    // };

    // const handleSubmit = (event) => {
    // event.preventDefault();
    // const newTile = {
    //     value: tileFormData.value, 
    //     displayOrder: tileFormData.displayOrder,
    // }
    // props.onHandleQuestionSubmit(newTile);
    // setTileFormData(tileDefaultState);
    // };

    // const toggleHiddenForm = () => {
    //     setIsHidden(!isHidden);
    // };

    return (
    <section className="NewTileForm" >
        <section className={hiddenClass} >
            <div className="FractionsOptions">{FractionPictures.map((picture)=>{
                return <button>
                            <img src={picture.title} alt={picture.altText} onClick={(e) => props.addTile(picture)} />
                        </button> })};
            </div>
        </section>
        <div>
                <button onClick={toggleHiddenForm}>{hiddenFormText}</button>
        </div>
        
        {/* <form onSubmit={handleSubmit} className={hiddenClass}>
            <h2>Add Tiles</h2>
            <div>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" onChange={handleChange} value={questionFormData.title}></input>
            </div>
            <div>
            <label htmlFor="prompt"> Prompt: </label>
            <input type="text" id="prompt" name="prompt" onChange={handleChange} value={questionFormData.prompt}></input>
            </div>
            <div>
            <input type="submit" value="Add a Tile"></input>
            </div>
        </form>
        <button onClick={toggleHiddenForm}>{hiddenFormText}</button> */}
    </section>
    );
};
    
    export default NewTileForm;