import React , {useState} from 'react';
import styled from 'styled-components';
import Home from './views/home';
import About from './views/about'
import Skills from './views/skills'
import Projects from './views/projects'
import Navbar from './components/navbar';
import Contact from './views/contact';
import Footer from './views/footer'
import './App.css'
import {FaBars} from 'react-icons/fa'
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

const Div = styled.div`
 svg{
   display:none;
   @media(max-width:800px){
    display:block;
    position:absolute;
    top:5%;
    left:8%;
    z-index:+4;
  }
 }

`;
const App = (props) =>{
  const [menu , setMenu] = useState(false)
  const menuClicked = () => {
    setMenu (!menu)
  }
  const offMenu = ()=> {
    setMenu(false)
  }
  const [location, setLocation] = useState('')

  const getLocation = (value) => {
    setLocation(value)
  }
    return (
      <AppContainer>
        <Div>
        <FaBars onClick ={menuClicked} />
        <Navbar menu={menu} location={location} menuClicked ={offMenu}/>
        </Div>
        <div onClick ={offMenu}>
        <Route exact path ='/'  render={props => <Home  props={props} setLocation={getLocation}/>} />
        <Route path ='/about' render={props => <About props={props} setLocation={getLocation}/>} />
        <Route path ='/skills'  render={props => <Skills props={props} setLocation={getLocation}/>} />
        <Route path ='/contact'  render={props => <Contact props={props} setLocation={getLocation}/>} />
        <Route path='/projects'  render={props => <Projects props={props} setLocation={getLocation}/>} />
        </div>
        <Footer />
      </AppContainer>
    );
  }
export default App;
