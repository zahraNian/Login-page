import './App.css';
import React from "react";
import Login from './login.js';
import CreateAccount from './create.js'
import styled from "styled-components";

const Total =styled.div({
    display:'flex',
    flexDirection:'Row',
    justifyContent:'center',
    alignItem:'center',
    height:'100%'
})

export default function App(){
  return(
    <Total>
      <CreateAccount/>
    </Total>
  )
}
