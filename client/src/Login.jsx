import React from 'react';

export default function Login(props) {
  return (
    <div className="login-form">
    <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            onChange={props.handleLoginChange}
            type="email"
          />
          <br /><br />
          <label htmlFor="fullname">FullName: </label>
          <br />
          <input
            name="fullname"
            onChange={props.handleLoginChange}
            type="text"
          />
          <br /><br />
          <label htmlFor="username">Username: </label>
          <br />
          <input
            name="username"
            onChange={props.handleLoginChange}
            type="text"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            onChange={props.handleLoginChange}
            type="password"
          />
          </form>
          <br />
          <button onClick={() => props.register()}>Register</button> | <button onClick={() => props.login()}>Login</button>
          </div>
    )
}