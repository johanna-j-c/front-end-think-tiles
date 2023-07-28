import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDropWorkspace from './components/DragDropWorkspace';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
      <header className="App-header">
      </header>
      <DragDropWorkspace />
    </div>
    </DndProvider>
  );
}

export default App;
