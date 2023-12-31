// import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppBar from './components/AppBar';
import NewQuestionForm from './components/NewQuestionForm';
import Login from './components/Login';
import axios from 'axios';
import { useState, useEffect } from 'react';
import QuestionList from './components/QuestionList';
import SelectedQuestion from './components/SelectedQuestion';
import RegistrationForm from './components/RegistrationForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// const kBaseUrl = "http://127.0.0.1:8080";
const kBaseUrl = "https://back-end-think-tiles-d9b14a08f378.herokuapp.com";


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

const deleteQuestion = (questionId) => {
  return axios 
  .delete(`${kBaseUrl}/questions/${questionId}`)
  .catch((error) => {
    console.log(error)
  });
};

const getAllTiles = (questionId) => {
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

const deleteTile = (tileId) => {
  return axios 
  .delete(`${kBaseUrl}/tiles/${tileId}`)
  .catch((error) => {
    console.log(error)
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


const App = () => {

  const [teacherState, setTeacherState] = useState([]);
  const [userState, setUserState] = useState(checkLocalStorage);
  const [questionState, setQuestionState] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [tileState, setTileState] = useState([]);

  const getUserId = () => {
    return userState ? userState.id : ""
  };

  const getSelectedQuestionId = () => {
    return selectedQuestion ? selectedQuestion.id : null
  };

  const userId = getUserId();
  console.log(userId)

  const questionId = getSelectedQuestionId();
  console.log(questionId)

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
    // fetchTiles();
    fetchTiles(questionId);
  };

  const onHandleQuestionSubmit = (data) => {
    axios.post(`${kBaseUrl}/teachers/${userId}/questions`, data)
      .then((response) => {
        setQuestionState((prevQuestions) => [response.data, ...prevQuestions]);
      })
      .catch((e) => console.log(e));
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
      let currentTeacher = teachers.find((teacher) => {return teacher.email === email});
      console.log(currentTeacher);
      return currentTeacher;
    })
  }

  const fetchTiles = (questionId) =>{
    getAllTiles(questionId).then((tiles)=>{
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

  const onHandleNewTile = (data) => {
    console.log(data);
    axios.post(`${kBaseUrl}/questions/${questionId}/tiles`, data)
      .then((response) => {
        setTileState((prevTiles) => [response.data, ...prevTiles]);
        fetchTiles(questionId);
      })
      .catch((e) => console.log(e));
  };

  const findTilebyValue = (tileValue) => {
    return tileState.find((tile) => {return tile.value === tileValue})
  };

  const onUnregisterTile = (tileData) => {
    console.log(tileData);
    const currentTile = findTilebyValue(tileData.value);
    deleteTile(currentTile.id).then(() => {
      setTileState((oldData) => {
        return oldData.filter((tile) => currentTile.id !== tile.id);
      });
      fetchTiles(questionId);
    });
  };

  useEffect(()=>{
    fetchTeachers();
    if (userId){
      fetchQuestions(userId);
    }
    if (questionId){
      fetchTiles(questionId);
    }
  },[]);
  
  const onHandleTeacherSubmit = (data) => {
    axios.post(`${kBaseUrl}/teachers`, data)
      .then((response) => {
        setTeacherState((prevTeachers) => [response.data, ...prevTeachers]);
      })
      .catch((e) => console.log(e));
  };

  const handleLoginUser = (teacher) => {
    console.log(teacher);
    setUserState(teacher);
    fetchQuestions(teacher.id);
  };

  const logout = () => {
    localStorage.removeItem('teacher');
    setUserState(null);
};

  return (
    <DndProvider backend={HTML5Backend}>
      <AppBar />
        <div>
        {!userId ? 
        <Container>
        <div>
          <RegistrationForm onHandleTeacherSubmit={onHandleTeacherSubmit} />
          <Login fetchLoginTeachers={fetchLoginTeachers} handleLoginUser={handleLoginUser} />
        </div>
        </Container>
        :
        <Grid container spacing={0}>
          <Grid xs={3} marginLeft={3} marginTop={3}>
            <Box marginBottom={3}>
              <Typography variant='h5'>Hello, {userState.name}</Typography>
              <Button onClickCapture={logout} variant='outlined'>Log Out</Button>
            </Box>
            <QuestionList questionData={questionState} onSelectQuestion={handleQuestionSelection}
              onUnregister={onUnregister} />
            <Box marginY={3}>
              <NewQuestionForm onHandleQuestionSubmit={onHandleQuestionSubmit} />
            </Box>
          </Grid>
          <Grid xs={8} marginTop={3}>
            <div className="App">
            <SelectedQuestion selectedQuestion={selectedQuestion} tileData={tileState} 
            addTile={onHandleNewTile} onUnregisterTile={onUnregisterTile} />
            </div>
          </Grid>
        </Grid>
        }
        </div>
    </DndProvider>
  );
}

export default App;
