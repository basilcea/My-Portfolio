import React from 'react';
import styled from 'styled-components';
import Home from './views/home';
import About from './views/about'
import Navbar from './components/navbar';
import './App.css'
const AppContainer = styled.div`
${props =>
  props.mode === "dark"
    ? `background-color:black`
    : `background-color:white `};
  display:flex;
  width:100%;
  flex-direction:column;
  margin-top:0% ;
  @media(max-width:750px){
    margin-top:0%;
  }

`;
const App = () =>{
    return (
      <AppContainer>
        <Navbar/>
        <Home  />
        <About />
      </AppContainer>
    );
  }
export default App;
