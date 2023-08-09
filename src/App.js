import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FractionTile from './components/FractionTile';
import NewPromptForm from './components/NewPromptForm';
import TileList from './components/TileList'; 
import Question from './components/Question';
import Login from './components/Login';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import QuestionList from './components/QuestionList';
import SelectedQuestion from './components/SelectedQuestion';
import RegistrationForm from './components/RegistrationForm';

const kBaseUrl = "http://127.0.0.1:8080";

// Need to change hard coding this to logged in teacher state
let teacherId = 1;

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

const getAllTeachers = () => {
  return axios
    .get(`${kBaseUrl}/teachers`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

function App() {

  const [teacherState, setTeacherState] = useState([])
  const [userState, setUserState] = useState(null)
  const [questionState, setQuestionState] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const findQuestionById = (questionId) => {
    return questionState.find((question) => {return question.questionId === questionId})
  };
  
  const handleQuestionSelection = (questionId) => {
    let question = findQuestionById(questionId);
    setSelectedQuestion(question);
    fetchQuestions(questionId);
    console.log(selectedQuestion)
  };
  
  const fetchQuestions = () =>{
    getAllQuestions().then((questions)=>{
      console.log(questions);
      setQuestionState(questions);
    })
  }

  const fetchTeachers = (email) =>{
    getAllTeachers().then((teachers)=>{
      console.log(teachers);
      setUserState(teachers.find((teacher) => {return teacher.email === email}));
    })
  }

  useEffect(()=>{
    fetchQuestions();
  },[]);

  const onHandleTeacherSubmit = (data) => {
    axios.post(`${kBaseUrl}/teachers`, data)
      .then((response) => {
        setTeacherState((prevTeachers) => [response.data, ...prevTeachers]);
      })
      .catch((e) => console.log(e));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <header className="App-header">Think Tiles</header>
      <div>
      {!userState ? 
      <div>
        <RegistrationForm onHandleTeacherSubmit={onHandleTeacherSubmit} />
        <Login fetchTeachers={fetchTeachers} />
      </div> : 
      <div className="App">
        <header className="App-header">Think Tiles</header>
        {/* <TileList tileData={tileState} /> */}
        <QuestionList questionData={questionState} onSelectQuestion={handleQuestionSelection} />
        <SelectedQuestion questionState={selectedQuestion} />
        <FractionTile />
        {/* <NewPromptForm /> */}
      </div>
      }
      </div>
    </DndProvider>
  );
}

export default App;
