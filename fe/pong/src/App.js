import logo from './logo.svg';
import './App.css';
import Ball from './Components/Ball.jsx'

function App() {

  const ROW_SIZE = 10; // should be sent to ball component as props
  const COL_SIZE = 20; // should be sent to ball component as props
  const board = [...Array(ROW_SIZE * COL_SIZE)];

  return (
    <div className="App">
      <Ball />
    </div>
  );
}

export default App;
