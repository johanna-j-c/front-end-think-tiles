import React, { useState } from 'react';
import './NewQuestionForm.css';

const NewQuestionForm = (props) => {
    const questionDefaultState = {
        title: "",
        prompt: "",
    };
    
    const [questionFormData, setQuestionFormData] = useState(questionDefaultState);
    const [isHidden, setIsHidden] = useState(false);
    
    const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    
    const newFormData = {...questionFormData, [fieldName]: fieldValue};
    setQuestionFormData(newFormData);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    const newQuestion = {
        title: questionFormData.title, 
        prompt: questionFormData.prompt,
    }
    props.onHandleQuestionSubmit(newQuestion);
    setQuestionFormData(questionDefaultState);
    };

    const toggleHiddenForm = () => {
        setIsHidden(!isHidden);
    };

    const hiddenClass = isHidden ? 'hidden-component' : null;
    const hiddenFormText = isHidden ? 'Show Board Form' : 'Hide Board Form';

    return (
    <section className="newQuestionForm">
        <form onSubmit={handleSubmit} className={hiddenClass}>
            <h2>New Question</h2>
            <div>
            <label htmlFor="title">Title: </label>
            <input type="text" id="title" name="title" onChange={handleChange} value={questionFormData.title}></input>
            </div>
            <div>
            <label htmlFor="prompt"> Prompt: </label>
            <input type="text" id="prompt" name="prompt" onChange={handleChange} value={questionFormData.prompt}></input>
            </div>
            <div>
            <input type="submit" value="Add a Question"></input>
            </div>
        </form>
        <button onClick={toggleHiddenForm}>{hiddenFormText}</button>
    </section>
    );
};
    
    export default NewQuestionForm;