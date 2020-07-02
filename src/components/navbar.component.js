import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" id="nav">
        <Link to="/" className="navbar-brand">All Question</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Question</Link>
          </li>
          
        </ul>
        </div>
      </nav>
    );
  }
}