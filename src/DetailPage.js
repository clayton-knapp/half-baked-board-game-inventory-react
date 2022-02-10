import { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { getGameById, deleteGame } from './services/fetch-utils';

export default function DetailPage() {
  const [game, setGame] = useState({});
  const match = useRouteMatch();
  const history = useHistory();

  // on mount, fetch and set in state the correct board game for this id (the id can be found in match.params using the correct react-router hook)
  useEffect(() => {
    async function fetchAndSetSingleGame() {
      const game = await getGameById(match.params.id);
      setGame(game);
    }
    fetchAndSetSingleGame();
  }, [match.params.id]);

  async function handleDelete() {
    await deleteGame(match.params.id);

    // use history.push to send the user to the list page
    history.push('/board-games');
  }

  function handleUpdate() {
    // use history.push to send the user to the list page
    history.push(`/update-game/${match.params.id}`);
  }
  

  return (
    <>
      <div className='detail'>
        <h1>{game.title}</h1>
        <h2>A {game.genre} game for {game.min_players} to {game.max_players} players</h2>
        <h3>by celebrated designer {game.designer}</h3>
        <p>
          {game.description}
        </p>
      </div>
      <div className='button-container'>
        <button
          onClick={handleUpdate}
        >Update this Page</button>
        <button
          onClick={handleDelete}
        >Delete this game (FOREVER)</button>
      </div>
    </>
  );
}
