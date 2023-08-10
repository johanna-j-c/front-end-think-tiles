import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';

const Question = (props) => {
    
    const handleQuestionClick = () => {
        props.onSelectQuestion(props.id);
    };

    return (
        <li>
            <h3>{props.title}</h3>
            <p>{props.prompt}</p>
            <button id="button" onClick={handleQuestionClick}>Present</button>
            <button onClick={(e) => props.onUnregister(props.questionId)}>Delete ❌ </button>
        </li>
    );
};

// Board.propTypes = {
//     boardId: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     owner: PropTypes.string.isRequired,
// };

export default Question;