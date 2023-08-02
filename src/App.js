import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FractionTile from './components/FractionTile';
import NewPromptForm from './components/NewPromptForm';
import TileList from './components/TileList'; 
import Prompt from './components/Prompt';
import axios from 'axios';
import { useState, useEffect } from 'react';

const kBaseUrl = "http://127.0.0.1:8080";

const getAllTiles = () => {
  return axios
    .get(`${kBaseUrl}/tiles`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

function App() {

  const [tileState, setTileState] = useState([]);

  const fetchTiles = () =>{
    getAllTiles().then((tiles)=>{
      console.log(tiles);
      setTileState(tiles);
    })
  }

  useEffect(()=>{
    fetchTiles();
  },[]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
      <header className="App-header">Think Tiles</header>
      <TileList tileData={tileState} />
      <Prompt />
      <FractionTile />
      {/* <NewPromptForm /> */}
      </div>
    </DndProvider>
  );
}

export default App;
