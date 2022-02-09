import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage(props) {
  // you'll need to track the form state of the email and password

  async function handleSignIn(e) {
    e.preventDefault();
      
    // sign the user in using the form state

    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
  }
    
  async function handleSignUp() {
    // sign the user up using the form state

    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
  }

  return (
    <div className='auth'>
      <h1><em>Boardzo</em></h1>
      {/* on submit, sign the user in using the function defined above */}
      <form>
        <label>
            Email
          {/* on change, update the form state for email */}
          <input required type="email" name="email" />
        </label>
        <label>
            Password
          {/* on change, update the form state for password */}
          <input required type="password" name="password" />
        </label>
        <button>Sign In</button>
        {/* on clicking sign up, sign the user up using the function defined above */}
        <button type="button" >Sign Up</button>
      </form>
    </div>
  );
}
