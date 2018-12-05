import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Books from './Books';
import Authors from './Authors';

const NavBar = ({books}) => {
  return (
      <Router>
        <React.Fragment>
      <Menu pointing>
        <img src='/books.png' className="navbar-logo"/>
        <h2 className="navbar-name">Galvanize Reads</h2>
        <Menu.Item 
          as = { Link }
          to = "/"
          name='home' 
        />
        <Menu.Item
          as = { Link }
          to = "/book"
          name='books'
        />
        <Menu.Item
          as = { Link }
          to = "/author"
          name='authors'
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
  
      <Route path="/book" render={() => <Books books={books}/>}  />
      <Route path="/author" render={() => <Authors />}  />
      </React.Fragment>
      </Router>    
  )
}

export default NavBar

