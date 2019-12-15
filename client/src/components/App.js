import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from '../Actions';
import Header from './Header'
import Dash from './Dash'

const footer = () => <h2>foot</h2>;
const side = () => <h2>side</h2>;
class App extends Component  {

  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path='/' component={Dash}/>
        </div>
      </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App) ;