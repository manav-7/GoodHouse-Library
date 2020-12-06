import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Navbar extends Component {

  render() {
    return (
        <div className="navbar">
          <Link to="/" className="logo">GoodHouse Library</Link>
          <ul className="nav">
            <li className="">
            <Link to="/" className="a">Books</Link>
            </li>
            <li className="">
            <Link to="/create" className="a">Create Book Log</Link>
            </li>
            <li className="">
            <Link to="/user" className="a">Create User</Link>
            </li>
          </ul>
        </div>
    );
  }
}