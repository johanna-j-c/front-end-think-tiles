import React from 'react';
import PropTypes from 'prop-types';
import FractionTile from './FractionTile';
import { Dustbin } from './Dustbin';
// import './SelectedQuestion.css';
import Typography from '@mui/material/Typography';

const SelectedQuestion = (props) => {

    return (
        <main className="selectedQuestion">
            <Typography variant='overline'>Selected Question</Typography>
            <Typography variant='h5'>{props.selectedQuestion ? props.selectedQuestion.prompt : 'None Selected'}</Typography>
            {props.selectedQuestion ?
            <section>
                <FractionTile tileData={props.tileData} selectedQuestion={props.selectedQuestion}
                addTile={props.addTile} onUnregisterTile={props.onUnregisterTile} />
            </section> : null}
        </main>
    );
};

SelectedQuestion.propTypes = {
    questionState: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            prompt: PropTypes.string.isRequired,
        })
};

export default SelectedQuestion;