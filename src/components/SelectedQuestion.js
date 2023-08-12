import React from 'react';
import PropTypes from 'prop-types';
import FractionTile from './FractionTile';
import { Dustbin } from './Dustbin';
// import './SelectedQuestion.css';

const SelectedQuestion = (props) => {

    return (
        <main className="selectedQuestion">
            <h2>Current Selected Question</h2>
            <h3>{props.selectedQuestion ? props.selectedQuestion.prompt : 'None Selected'}</h3>
            {props.selectedQuestion ?
            <section>
                <FractionTile tileData={props.tileData} selectedQuestion={props.selectedQuestion}
                addTile={props.addTile} onUnregisterTile={props.onUnregisterTile} />
            </section> : null}
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