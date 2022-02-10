import { useState } from 'react';
import { createGame } from './services/fetch-utils';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit
  const history = useHistory();

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
    const response = await createGame(game);

    // use history.push to send the user to the list page
    history.push('/board-games');

  }

  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form
        onSubmit={handleSubmit}
      >
        <h2>Add board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input required name='title' 
            onChange ={(e)=> setTitleForm(e.target.value)}
          />
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select required
            onChange ={(e)=> setGenreForm(e.target.value)}
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
          <input required name='designer' 
            onChange ={(e)=> setDesignerForm(e.target.value)}
          />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input required type='number' name='min_players' 
            onChange ={(e)=> setMinPlayersForm(e.target.value)}
          />
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input required type='number' name='max_players' 
            onChange ={(e)=> setMaxPlayersForm(e.target.value)}
          />
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea required name='description' 
            onChange ={(e)=> setDescriptionForm(e.target.value)}
          />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}
