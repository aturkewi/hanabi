import React from 'react';

export default (props) => {

  const { login } = props

  let input = {};

  const handleSubmit = (event) => {
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            ref={node => input.userName = node}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            ref={node => input.password = node}
            type="password"
          />
        </div>
        <input
          type="submit"
          value="Login" 
          />
      </form>
    </div>
  )
  
}
