import React from 'react';
import NavLink from './NavLink';

export default ({ auth }) => {
  return (
    <div>
      <NavLink
        to="/"
        onlyActiveOnIndex={true}
      >
        Home
      </NavLink>
      {
        /* Logged In Routes */
        auth.isAuthenticated ?
        
        <div>
          <NavLink to="/games">
            Games
          </NavLink>
        </div>

        :

        /* Logged Out Routes */
        <div>
          <NavLink
            to="/signup"
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
          >
            Login
          </NavLink>
        </div>
      }
    </div>
  )
}
