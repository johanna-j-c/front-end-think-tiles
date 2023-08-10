import React from 'react';
import PropTypes from 'prop-types';
import './SelectedQuestion.css';

const SelectedQuestion = (props) => {

    return (
        <main className="selectedQuestion">
            <h2>Current Selected Question</h2>
            <h3>{props.selectedQuestion ? props.selectedQuestion.prompt : 'None Selected'}</h3>
        </main>
    );
};

// SelectedQuestion.propTypes = {
//     boardState: PropTypes.shape({
//             boardId: PropTypes.number.isRequired,
//             title: PropTypes.string.isRequired,
//             owner: PropTypes.string.isRequired,
//         })
// };

export default SelectedQuestion;