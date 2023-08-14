import React, { useState } from 'react';
import './NewQuestionForm.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const NewQuestionForm = (props) => {
    const questionDefaultState = {
        title: "",
        prompt: "",
    };
    
    const [questionFormData, setQuestionFormData] = useState(questionDefaultState);
    const [isHidden, setIsHidden] = useState(true);
    
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
    const hiddenFormText = isHidden ? 'Create New Question' : 'Hide Question Form';

    return (
        <section className="newQuestionForm">
            <form onSubmit={handleSubmit} className={hiddenClass}>
                <Typography variant='h6'>New Question</Typography>
                <TextField
                    required
                    style={{ width: "200px", margin: "5px" }}
                    id="title"
                    label="Title"
                    name="title"
                    onChange={handleChange} value={questionFormData.title}
                />
                <TextField
                    required
                    style={{ width: "200px", margin: "5px" }}
                    id="prompt"
                    label="Prompt"
                    name="prompt"
                    onChange={handleChange} value={questionFormData.prompt}
                />
                <Button
                type="submit"
                style={{ width: "200px", margin: "5px" }}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Add a Question
                </Button>
            </form>
            <Button onClick={toggleHiddenForm} variant='text'>{hiddenFormText}</Button>
        </section>
        );
};
    
    export default NewQuestionForm;