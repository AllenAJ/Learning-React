import React, { Component } from 'react';
import { signInWithGoogle, signOut } from '../firebase';

class Signin extends Component{
  render(){
    return(
      <div className="signin-form">
    <h1>Sign In</h1>
    <button className="btn basic-btn" onClick={signInWithGoogle} >
      <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png" />
      Sign In with Google
    </button>
    <button className="btn basic-btn" onClick={signOut} >
      <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png" />
      Sign Out from Google
    </button>
    </div>
    );
  }
}

export default Signin;
