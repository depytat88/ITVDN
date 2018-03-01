import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


const history = createBrowserHistory();

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)
  


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Contacts = () => (
  <div>
    <h2>Contacts</h2>
  </div>
)



class Navigation extends React.Component {
  render () {
    return (
      <BrowserRouter history={history}>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Navigation;




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
