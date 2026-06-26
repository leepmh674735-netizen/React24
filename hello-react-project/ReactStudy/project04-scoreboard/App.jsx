import { useState } from 'react';
import usePlayerStore from './src/zustand/usePlayerStore';
import Header from './src/components/Header';
import AddPlayerForm from './src/components/AddPlayerForm';
import Player from './src/components/Player';

function App() {
  const {playerData} = usePlayerStore();

  return (
    <div className="scoreboard">
      <Header />
      {
        playerData.map((playerRow) => (
          <Player playerRow={playerRow} key={playerRow.idx} />
        ))  
      }
      <AddPlayerForm />
    </div>
  );
}

export default App;