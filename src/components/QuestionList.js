import React from 'react';
import Question from './Question';
import PropTypes from 'prop-types';
import './QuestionList';

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
            <h2>Question List</h2>
            <h3 className='selectQuestion'>Select a Question:</h3>
            <ul>{getQuestionListJSX(props.questionData)}</ul>
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