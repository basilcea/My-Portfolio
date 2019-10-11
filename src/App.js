import React from 'react';
import styled from 'styled-components';
import Home from './views/home';
import About from './views/about'
import Skills from './views/skills'
import Projects from './views/projects'
import Navbar from './components/navbar';
import Contact from './views/contact';
import Footer from './views/footer'
import './App.css'
import {Route} from 'react-router-dom';
const AppContainer = styled.div`
  display:flex;
  width:100%;
  height:100%;
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
        <Route exact path ='/'  render={() => <Home />} />
        <Route path ='/about' component={About} />
        <Route path ='/skills' component={Skills} />
        <Route path ='/contact' component={Contact} />
        <Route path='/projects' component={Projects} />
        <Footer />
      </AppContainer>
    );
  }
export default App;
