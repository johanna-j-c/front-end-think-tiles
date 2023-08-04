import React from 'react';
import PropTypes from 'prop-types';
import './Question.css';

const Question = (props) => {
    
    const handleQuestionClick = () => {
        props.onSelectQuestion(props.questionId);
    };

    return (
        <li>
            <button id="button" onClick={handleQuestionClick}>{props.title}</button>
        </li>
    );
};

// Board.propTypes = {
//     boardId: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     owner: PropTypes.string.isRequired,
// };

export default Question;