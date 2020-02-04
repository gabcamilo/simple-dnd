import React from 'react';
import Card from './components/Card'
import Board from './components/Board'

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-1" className="board">
          <Card id="card-1" className="card" draggable="true">
            <p>Card 1</p>
          </Card>
        </Board>

        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card 2</p>
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
