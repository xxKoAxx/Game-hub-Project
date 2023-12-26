import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesData {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGamesData>('/xgames')
      .then((res) => {
        console.log(res.data.count);
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

  console.log(games.length);
  return (
    <>
      {error && <text className='danger'>{error}</text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
