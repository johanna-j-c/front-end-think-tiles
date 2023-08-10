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

const getAllQuestions = (userId) => {
  return axios
    .get(`${kBaseUrl}/teachers/${userId}/questions`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

const checkLocalStorage = () => {
  const localStorageTeacher = localStorage.getItem("teacher");
  if (localStorageTeacher){
    return JSON.parse(localStorageTeacher);
  }else {
    return null
  }
};


function App() {

  const [teacherState, setTeacherState] = useState([]);
  const [userState, setUserState] = useState(checkLocalStorage);
  const [questionState, setQuestionState] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const getUserId = () => {
    return userState ? userState.id : ""
    // if (userState) {
    //   const teacherId = userState.id;
    //   return teacherId
    // } else{
    //   return ""
    // }
  };

  const userId = getUserId();
  console.log(userId)

  const findQuestionById = (questionId) => {
    return questionState.find((question) => {return question.questionId === questionId})
  };
  
  const handleQuestionSelection = (questionId) => {
    let question = findQuestionById(questionId);
    setSelectedQuestion(question);
    // fetchQuestions(questionId);
    console.log(selectedQuestion)
  };
  
  const fetchQuestions = (userId) =>{
    return getAllQuestions(userId).then((questions)=>{
      console.log(questions);
      setQuestionState(questions);
    })
  }

  const fetchTeachers = () =>{
    return getAllTeachers().then((teachers)=>{
      console.log(teachers);
      setTeacherState(teachers);
    })
  }


  const fetchLoginTeachers = (email) =>{
    return getAllTeachers().then((teachers)=>{
      // console.log(teachers);
      let currentTeacher = teachers.find((teacher) => {return teacher.email === email});
      console.log(currentTeacher);
      return currentTeacher;
    })
  }

  useEffect(()=>{
    fetchTeachers();
    if (userId){
      fetchQuestions(userId);
    }
    // fetchLoginTeachers();
  },[]);
  
  const onHandleTeacherSubmit = (data) => {
    axios.post(`${kBaseUrl}/teachers`, data)
      .then((response) => {
        setTeacherState((prevTeachers) => [response.data, ...prevTeachers]);
      })
      .catch((e) => console.log(e));
  };

  // const findTeacherById = (teacherId) => {
  //   return teacherState.find((teacher) => {return teacher.id === teacherId})
  // };

  const handleLoginUser = (teacher) => {
    console.log(teacher);
    // let currentTeacher = findTeacherById(teacherId);
    console.log(teacher);
    setUserState(teacher);
    fetchQuestions(teacher.id);
    // console.log(`userId:${userId}`)
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <header className="App-header">Think Tiles</header>
      <div>
      {!userId ? 
      <div>
        <RegistrationForm onHandleTeacherSubmit={onHandleTeacherSubmit} />
        <Login fetchLoginTeachers={fetchLoginTeachers} handleLoginUser={handleLoginUser} />
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
