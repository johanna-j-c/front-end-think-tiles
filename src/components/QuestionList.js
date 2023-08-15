import React from 'react';
import Question from './Question';
import PropTypes from 'prop-types';
import './QuestionList';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const QuestionList = (props) => {
    const getQuestionListJSX = (questions) => {
            return questions.map((question)=>{
                return (
                        <Question
                            questionId = {question.id}
                            title = {question.title}
                            prompt = {question.prompt}
                            key={question.id}
                            onSelectQuestion={props.onSelectQuestion}
                            onUnregister={props.onUnregister}
                        />
                );
            });
    }; 

    return (
        <section>
            <Typography marginY={1} variant='h6'>Select a Question:</Typography>
            {/* <h3 className='selectQuestion'>Select a Question:</h3> */}
            <Stack spacing={4}>
                {getQuestionListJSX(props.questionData)}
            </Stack>
        </section>
    );
};

QuestionList.propTypes = {
    questionData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            prompt: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default QuestionList;