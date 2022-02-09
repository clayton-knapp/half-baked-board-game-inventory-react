import { Link } from 'react-router-dom';

export default function Game({ game }) {
  return (
    // be sure this component is wrapped in a react-router link that takes the user to the correct detail page
    <div className='game'>
      <h3>{game.title}</h3>
      <p>A {game.genre} game by designer {game.designer}</p>
      <p>for {game.min_players} - {game.max_players} players</p>
    </div>
  );
}
