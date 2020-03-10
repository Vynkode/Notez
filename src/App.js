import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import notesList from "./components/notesList";
import editNote from "./components/editNote";
import createNote from "./components/createNote";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2>Notez</h2>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Notes</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Note</Link>
                </li>
              </ul>
            </div> 
          </nav>
          <Route path="/" exact component={notesList} />
          <Route path="/create" component={createNote} />
          <Route path="/edit/:id" component={editNote} />
          
          {/* YET TO CREATE THESE COMPONENTS */}
          {/* <Route path="/delete/:id" component={deleteNote} /> */}
          {/* <Route path="/signin" component={signIn} /> */}
          {/* <Route path="/register" component={register} /> */}
          {/* <Route path="/signout" component={signOut} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
