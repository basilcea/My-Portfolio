import React from 'react';
import styled from 'styled-components';
import Home from './views/home';
import './App.css'
const AppContainer = styled.div`
  width:100%;
  margin-top:0% ;
  @media(max-width:750px){
    margin-top:0%;
  }

`;
class App extends React.Component{
  constructor(props){
    super(props)
    this.state =({
    })

  }
  render(){
    return (
      <AppContainer>
        <Home />
      </AppContainer>
    );
  }
}

export default App;
