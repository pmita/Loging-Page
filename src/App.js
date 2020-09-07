import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <img src="https://green.cdn.energy/branding/logo-r.svg" className="green-image" />
        <h2>Example login screen</h2>
        <h6 className="grey-highlight">Getting started with green</h6>
        <h6 className="new-line grey-highlight">Email Address</h6>
        <input type="text" placeholder />
        <label className="container">
          <input className="check-me" type="checkbox" defaultChecked="checked" /><h6>Remember this device</h6></label>
        <input type="submit" defaultValue="Sign In" className="sign-in-button" />
      </form>
    </div>
  );
}

export default App;
