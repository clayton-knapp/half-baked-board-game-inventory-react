import { client, checkError } from './client';


//AUTH FUNCTIONS
export function getUser() {
  return client.auth.session();

}

// signs an new user in and puts an auth token in local storage in the browser
export async function signUp(email, password){
  const response = await client.auth.signUp({ email, password });
  
  return response.user;
}

// signs an existing user in and puts an auth token in local storage in the browser
export async function signIn(email, password){
  const response = await client.auth.signIn({ email, password });

  return response.user;
}

// removes the token from local storage and redirects the user home
export async function logout() {
  await client.auth.signOut();

  return window.location.href = '../';
}


//CRUD FUNCTIONS

export async function createGame(game){
  const response = await client
    .from('board_games')
    .insert([game]);

  return checkError(response);
}


export async function getGames() {
  const response = await client
    .from('board_games')
    .select();


  return checkError(response);    
}


export async function getGameById(id) {
  const response = await client
    .from('board_games')
    .select()
    .match({ id })
    .single();

  return checkError(response);    
}

export async function deleteGame(id) {
  const response = await client
    .from('board_games')
    .delete()
    .match({ id });

  return checkError(response);
}

export async function updateGame(game, id) {
  const response = await client
    .from('board_games')
    .update(game)
    .match({ id: id });

  return checkError(response);
}