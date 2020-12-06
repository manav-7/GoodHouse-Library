import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import './components/index.css';

import Navbar from "./components/navbar"
import BooksList from "./components/books-list";
import EditBook from "./components/edit-book";
import CreateBook from "./components/create-book";
import CreateUser from "./components/create-user";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={BooksList} />
      <Route path="/edit/:id" component={EditBook} />
      <Route path="/create" component={CreateBook} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;

