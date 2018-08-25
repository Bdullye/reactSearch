import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './components/Home';
import logo from './logo.svg';
import './App.css';
import SavedArticles from './components/Saved';
import Navbar from './components/Nav';

class App extends Component {
  render() {
    return (
        <Router>
      <div>
        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/saved'>Saved</Link></li>
          </ul> */}
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/saved'  component={ SavedArticles } />
          </Switch>

        </div>
        </Router>
    );
  }
}
//<div className="App">
  //<header className="App-header">
    //<img src={logo} className="App-logo" alt="logo" />
    //<h1 className="App-title">Welcome to React</h1>
 // </header>
  //<p className="App-intro">
   // To get started, edit <code>src/App.js</code> and save to reload.
  //</p>
//</div>

export default App;
