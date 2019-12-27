import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../Actions';
import Dash from './Dash'

class App extends Component  {

  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Dash}/>
        </div>
      </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App) ;