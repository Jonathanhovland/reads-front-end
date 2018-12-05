import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Books from './Books';
import Authors from './Authors';


export default class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

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
            active={activeItem === 'home'} 
            onClick={this.handleItemClick} />
          <Menu.Item
            as = { Link }
            to = "/book"
            name='books'
            active={activeItem === 'books'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as = { Link }
            to = "/author"
            name='authors'
            active={activeItem === 'authors'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Route path="/book" render={() => <Books />}  />
        <Route path="/author" render={() => <Authors />}  />
        </React.Fragment>
        </Router>    
        )
  }
}

