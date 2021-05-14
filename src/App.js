import './App.css';
import React from "react";
import Login from './login.js';
import CreateAccount from './create.js'
import Home from './home.js'
import styled from "styled-components";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const Total =styled.div({
  display:'flex',
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  width:'100%',
  height:'100%'
})

export default function App(){
  return(
    <Router>
      <Total>
        <Switch>
          <Route path='/home' component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path='/' component={CreateAccount}></Route>
        </Switch>
      </Total> 
    </Router>
  )
}
