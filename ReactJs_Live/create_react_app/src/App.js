import React from 'react';
import { BrouserRouter, Route, Link } from 'react-router-dom';
import createBrouserHistory from 'history/createBrowserHistory';


const history = createBrowserHistory();

const Home = () => {
  <div>
    <h2>Home</h2>
  </div>
}


const About = () => {
  <div>
    <h2>About</h2>
  </div>
}

const Contacts = () => {
  <div>
    <h2>Contacts</h2>
  </div>
}



class Navigation extends React.Component {
  render () {
    return (
      <BrouserRouter history={history}>
        <ul>
          <li><link to="/">Home</link></li>
          <li><link to="/about">About</link></li>
          <li><link to="/contacts">Contacts</link></li>
        </ul>
      </BrouserRouter>
    );
  }
}




// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// } 

// export default App;
