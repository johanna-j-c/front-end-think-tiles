import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FractionTile from './components/FractionTile';
import NewQuestionForm from './components/NewQuestionForm';
import TileList from './components/TileList'; 
import Question from './components/Question';
import axios from 'axios';
import { useState, useEffect } from 'react';
import QuestionList from './components/QuestionList';
import SelectedQuestion from './components/SelectedQuestion';

const kBaseUrl = "http://127.0.0.1:8080";

// Need to change hard coding this to logged in teacher state
let teacherId = 1;
let questionId = 1;

const getAllQuestions = () => {
  return axios
    .get(`${kBaseUrl}/teachers/${teacherId}/questions`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteQuestion = (questionId) => {
  return axios 
  .delete(`${kBaseUrl}/questions/${questionId}`)
  .catch((error) => {
    console.log(error)
  });
};

const getAllTiles = () => {
  return axios
    .get(`${kBaseUrl}/questions/${questionId}/tiles`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

function App() {

  const [questionState, setQuestionState] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [tileState, setTileState] = useState([]);

  const findQuestionById = (questionId) => {
    console.log(questionId)
    return questionState.find((question) => {return question.id === questionId})
  };
  
  const handleQuestionSelection = (questionId) => {
    console.log(questionState);
    console.log(questionId)
    let question = findQuestionById(questionId);
    console.log(question);
    setSelectedQuestion(question);
    fetchTiles();
    // fetchTiles(questionId); Need to update
    console.log(selectedQuestion)
  };

  const onHandleQuestionSubmit = (data) => {
    axios.post(`${kBaseUrl}/teachers/${teacherId}/questions`, data)
      .then((response) => {
        setQuestionState((prevQuestions) => [response.data.question, ...prevQuestions]);
      })
      .catch((e) => console.log(e));
  };
  
  const fetchQuestions = () =>{
    getAllQuestions().then((questions)=>{
      console.log(questions);
      setQuestionState(questions);
    })
  }

  const fetchTiles = () =>{
    getAllTiles().then((tiles)=>{
      console.log(tiles);
      setTileState(tiles);
    })
  }

  const onUnregister = (questionId) => {
    deleteQuestion(questionId).then(() => {
      setQuestionState((oldData) => {
        return oldData.filter((question) => question.id !== questionId);
      });
    });
  };

  useEffect(()=>{
    fetchQuestions();
  },[]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
      <header className="App-header">Think Tiles</header>
      {/* <TileList tileData={tileState} /> */}
      <QuestionList questionData={questionState} onSelectQuestion={handleQuestionSelection}
        onUnregister={onUnregister} />
      <SelectedQuestion selectedQuestion={selectedQuestion} tileData={tileState} />
      {/* <FractionTile /> */}
      <NewQuestionForm onHandleQuestionSubmit={onHandleQuestionSubmit} />
      </div>
    </DndProvider>
  );
}

export default App;
