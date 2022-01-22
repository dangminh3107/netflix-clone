import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from '../SignUpScreen';

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className='login-screen'>
      <div className="login-screen__background">
        <img className="login-screen__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
        <button 
          onClick={() => setSignIn(true)}
          className="login-screen__button">
            Sign In
        </button>
        <div className="login-screen__gradient"></div>
      </div>
      <div className="login-screen__body">
        {signIn ? (
          <SignUpScreen/>
        ) : (<>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership</h3>
          <div className="login-screen__input">
            <form>
              <input type="email" placeholder="Email Address"/>
              <button 
                onClick={() => setSignIn(true)}
                className="login-screen__getStarted">
                GET STARTED
              </button>
            </form>
          </div>
        </>)}
      </div>
    </div>
  )
}

export default LoginScreen
