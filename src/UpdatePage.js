import { useState, useEffect } from 'react';
import { updateGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useRouteMatch } from 'react-router-dom';
import { getGameById } from './services/fetch-utils';

export default function UpdatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit
  const history = useHistory();
  const match = useRouteMatch();

  // here's the state you'll need:
    // title;
    // genre;
    // designer;
    // description;
    // minPlayers;
    // maxPlayers;
  const [titleForm, setTitleForm] = useState('');
  const [genreForm, setGenreForm] = useState('');
  const [designerForm, setDesignerForm] = useState('');
  const [descriptionForm, setDescriptionForm] = useState('');
  const [minPlayersForm, setMinPlayersForm] = useState(1);
  const [maxPlayersForm, setMaxPlayersForm] = useState(1);
  const [id, setId] = useState('');

  // ON LOAD FETCH THIS GAME AND SET IT TO STATE
  useEffect(() => {
    async function fetchAndSetSingleGame() {
      const game = await getGameById(match.params.id);
      setTitleForm(game.title);
      setGenreForm(game.genre);
      setDesignerForm(game.designer);
      setDescriptionForm(game.description);
      setMinPlayersForm(game.min_players);
      setMaxPlayersForm(game.max_players);
      setId(game.id);
    }
    fetchAndSetSingleGame();
  }, [match.params.id]);
  


  async function handleSubmit(e) {
    e.preventDefault();

    // create a game
    const game = {
      title: titleForm,
      genre: genreForm,
      designer: designerForm,
      description: descriptionForm,
      min_players: minPlayersForm,
      max_players: maxPlayersForm
    };
    const response = await updateGame(game, id);

    if (response) {
      // use history.push to send the user to the list page
      history.push('/board-games');
    }

  }
  // To refactor the form you would need to pass down the string 'create' or 'update' and also pass down the handle submit function for create or update as props

  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form
        onSubmit={handleSubmit}
      >
        <h2>Update board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input required name='title' value={titleForm} 
            onChange={(e)=> setTitleForm(e.target.value)}
          />
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select required value={genreForm}
            onChange={(e)=> setGenreForm(e.target.value)}
          >
            <option>Tile-laying</option>
            <option>Economic</option>
            <option>War</option>
            <option>Card</option>
            <option>Abstract</option>
            <option>Cooperative</option>
            <option>Solo</option>
          </select>
        </label>
        <label>
            Designer
          {/* on change, set the designer in state */}
          <input required name='designer' value={designerForm}
            onChange={(e)=> setDesignerForm(e.target.value)}
          />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input required type='number' name='min_players' value={minPlayersForm}
            onChange={(e)=> setMinPlayersForm(e.target.value)}
          />
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input required type='number' name='max_players' value={maxPlayersForm}
            onChange={(e)=> setMaxPlayersForm(e.target.value)}
          />
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea required name='description' value={descriptionForm}
            onChange={(e)=> setDescriptionForm(e.target.value)}
          />
        </label>
        <button>Update game</button>
      </form>
    </div>
  );
}
