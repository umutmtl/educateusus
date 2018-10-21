import React, { Component } from 'react'
import './App.css'
import Button from '@material-ui/core/Button'
import DiscoverComponent from './Components/DiscoverComponent'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Button variant="outlined">
            Not Sample Button from App Component
          </Button>
          <Switch>
            <Route path='/DiscoverComponent' component={DiscoverComponent}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
