import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage(props) {
  // you'll need to track the form state of the email and password
  const [signInUpEmail, setSignInUpEmail] = useState('');
  const [signInUpPassword, setSignInUpPassword] = useState('');


  async function handleSignIn(e) {
    e.preventDefault();
      
    // sign the user in using the form state
    const user = signIn(signInUpEmail, signInUpPassword);


    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
    props.setUser(user);
  }
    
  async function handleSignUp() {
    // sign the user up using the form state
    const user = signUp(signInUpEmail, signInUpPassword);

    // set the user in App.js state using the correct prop callback. If you did the ternary right in App.js, this should automatically redirect the user to the board game list
    props.setUser(user);
  }

  return (
    <div className='auth'>
      <h1><em>Boardzo</em></h1>
      {/* on submit, sign the user in using the function defined above */}
      <form
        onSubmit = {handleSignIn}
      >
        <label>
            Email
          {/* on change, update the form state for email */}
          <input required type="email" name="email" 
            onChange={(e)=> setSignInUpEmail(e.target.value)}
          />
        </label>
        <label>
            Password
          {/* on change, update the form state for password */}
          <input required type="password" name="password" 
            onChange={(e)=> setSignInUpPassword(e.target.value)}
          />
        </label>
        <button
          // onClick = {handleSignIn}
        >Sign In</button>
        {/* on clicking sign up, sign the user up using the function defined above */}
        <button type="button" 
          onClick={handleSignUp}
        >Sign Up</button>
      </form>
    </div>
  );
}
