import "./App.css";
import Ball from "./Components/Ball.jsx";

function App() {
  const ROW_SIZE = 20; // should be sent to ball component as props
  const COL_SIZE = 40; // should be sent to ball component as props
  const board = [...Array(ROW_SIZE * COL_SIZE)];
  console.log(board);

  return (
    <div className="App">
      <div className="board">
        {board.map((box, index) => (
          <li key={index}>{box}</li>
        ))}
        <Ball />
      </div>
    </div>
  );
}

export default App;
