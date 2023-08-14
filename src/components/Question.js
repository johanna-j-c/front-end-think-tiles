import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Question = (props) => {
    
    const handleQuestionClick = () => {
        console.log(props.questionId)
        props.onSelectQuestion(props.questionId);
    };

    return (
        <Box>
            <h3>{props.title}</h3>
            <p>{props.prompt}</p>
            {/* <button id="button" onClick={handleQuestionClick}>Present</button> */}
            <Button
                    onClick={handleQuestionClick}
                    variant='contained'
                    >Present</Button>
            {/* <button onClick={(e) => props.onUnregister(props.questionId)}>Delete ❌ </button> */}
            <Button onClick={(e) => props.onUnregister(props.questionId)}
                    variant='text'
                    >Delete ❌ </Button>
        </Box>
    );
};

// Board.propTypes = {
//     boardId: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     owner: PropTypes.string.isRequired,
// };

export default Question;