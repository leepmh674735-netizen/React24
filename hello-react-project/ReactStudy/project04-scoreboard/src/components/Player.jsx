import { useState } from 'react';
import usePlayerStore from '../zustand/usePlayerStore';
import EditPlayerForm from './EditPlayerForm';

export default function Player({ playerRow }) {
  const { deletePlayerProcess, scoreChangeProcess } = usePlayerStore();
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="player">
      <span className="player-name">
        <button 
          className="remove-player" 
          onClick={() => deletePlayerProcess(playerRow.idx)}
        >
          x
        </button>
        {showEdit ? (
          <EditPlayerForm
            pName={playerRow.name}
            pIdx={playerRow.idx}
            setShowEdit={setShowEdit}
          />
        ) : (
          <span 
            className="player-name-text" 
            style={{ cursor: 'pointer' }} 
            onClick={() => setShowEdit(true)}
          >
            {playerRow.name}
          </span>
        )}
      </span>
      <div className="counter">
        <button 
          className="counter-action decrement" 
          onClick={() => scoreChangeProcess('-', playerRow.idx)}
        >
          -
        </button>
        <span className="counter-score">{playerRow.score}</span>
        <button 
          className="counter-action increment" 
          onClick={() => scoreChangeProcess('+', playerRow.idx)}
        >
          +
        </button>
      </div>
    </div>
  );
}
