import React from 'react';

const SignUp = (props) => {
  
  const {
    handleSignUp,
  } = props.actions;
  
  return(
    <div>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username</label>
          <input 
            type="text"
            name="username"
            placeholder="Username"
          />
        </div>
        <input 
          type="submit" 
          value="Sign Up" />
      </form>
    </div>
  )
}

module.exports = SignUp;