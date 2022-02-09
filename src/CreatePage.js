import { useState } from 'react';
import { createGame } from './services/fetch-utils';

export default function CreatePage() {
  // you'll need the history hook from react-router-dom to do your redirecting in the handleSubmit

  // here's the state you'll need:
    // title;
    // genre;
    // designer;
    // description;
    // minPlayers;
    // maxPlayers;

  async function handleSubmit(e) {
    e.preventDefault();

    // create a game

    // use history.push to send the user to the list page
  }

  return (
    <div className='create'>
      {/* on submit, call your handleSubmit function */}
      <form>
        <h2>Add board game</h2>
        <label>
            Title
          {/* on change, set the title in state */}
          <input required name='title' />
        </label>
        <label>
            Genre
          {/* on change, set the genre in state */}
          <select required>
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
          <input required name='designer' />
        </label>
        <label>
            Min Players
          {/* on change, set the min players in state */}
          <input required name='min_players' />
        </label>
        <label>
            Max Players
          {/* on change, set the max players in state */}
          <input required name='max_players' />
        </label>
        <label>
            Description
          {/* on change, set the description in state */}
          <textarea required name='max_players' />
        </label>
        <button>Create game</button>
      </form>
    </div>
  );
}
