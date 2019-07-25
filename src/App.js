import React from 'react';
import styled from 'styled-components';
import './App.css'
import LandingPage from './components/landingPage/pageContainer';
const AppContainer = styled.div`
  width:100%;
  margin-top:1% ;
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
      <LandingPage />
      </AppContainer>
    );
  }
}

export default App;
