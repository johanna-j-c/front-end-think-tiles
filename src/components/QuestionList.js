import React from 'react';
import Question from './Question';
import PropTypes from 'prop-types';
import './QuestionList';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const QuestionList = (props) => {
    const getQuestionListJSX = (questions) => {
            return questions.map((question)=>{
                return (
                        <Question
                            questionId = {question.id}
                            title = {question.title}
                            prompt = {question.prompt}
                            key={question.question}
                            onSelectQuestion={props.onSelectQuestion}
                            onUnregister={props.onUnregister}
                        />
                );
            });
    }; 

    return (
        <section>
            {/* <Box marginBottom={3}>
                <h2>Question List</h2>
            </Box> */}
            <Typography marginY={3} variant='h6'>Select a Question:</Typography>
            {/* <h3 className='selectQuestion'>Select a Question:</h3> */}
            <Stack spacing={4}>
                {getQuestionListJSX(props.questionData)}
            </Stack>
            {/* <ul>{getQuestionListJSX(props.questionData)}</ul> */}
        </section>
    );
};

// BoardList.propTypes = {
//     boardData: PropTypes.arrayOf(
//         PropTypes.shape({
//             boardId: PropTypes.number.isRequired,
//             title: PropTypes.string.isRequired,
//             owner: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// }

export default QuestionList;