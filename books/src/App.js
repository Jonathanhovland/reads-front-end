import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './Components/NavBar';

class App extends Component {

  state = {
    books: []
  }

  async componentDidMount() {
    const getBooks = await fetch(`https://sheltered-caverns-11078.herokuapp.com/book`)
    const book = await getBooks.json() 
    console.log("cdm", book)
    this.setState({books: book.books })
  }

  render() {
    console.log("dsta", this.state.books)
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <NavBar books={this.state.books} />
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
