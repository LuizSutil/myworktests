import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ContainerAed } from './SvgBoxAddDrag/ContainerAeD';
function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <ContainerAed></ContainerAed>
      </DndProvider>
    </div>
  );
}

export default App;
