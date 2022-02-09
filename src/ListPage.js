import { useState, useEffect } from 'react';
import { getGames } from './services/fetch-utils';
import Game from './Game';

export default function ListPage() {
  // you'll need some state to hold onto the array of games

  // fetch the games on load and inject them into state
  return (
    <div className='list games'>
      {/* map through the games in state and render Game components */}
    </div>
  );
}
