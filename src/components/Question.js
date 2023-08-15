import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Question = (props) => {
    
    const handleQuestionClick = () => {
        console.log(props.questionId)
        props.onSelectQuestion(props.questionId);
    };

    return (
        <Box>
            <Typography marginBottom={0.5} variant='body1'>{props.title}</Typography>
            <Typography marginBottom={0.5} variant='body2'>{props.prompt}</Typography>
            <Button
                    onClick={handleQuestionClick}
                    variant='contained'
                    >Present</Button>
            <Button onClick={(e) => props.onUnregister(props.questionId)}
                    variant='text'
                    >Delete ❌ </Button>
        </Box>
    );
};

Question.propTypes = {
    questionId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,
    onSelectQuestion: PropTypes.func.isRequired,
    onUnregister: PropTypes.func.isRequired
};

export default Question;