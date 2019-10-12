import React ,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Container = styled.div `
    width:7%;
    height: 80vh;
    position:fixed;
    background:white;
    top:10vh;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index:+3;
    @media(max-width: 800px){
        ${props => (props.menu ? `display:block`:`display:none`)};
        width:20%;
    }
`
const NavTab = styled.div `
height:20%;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border-bottom:1px solid black;
${props => (props.active === props.id? 'background-color:rgb(32, 53, 67)' : `background-color:white`)};
&:last-of-type{
    border-bottom:none;
}
a{  height:100%;
    width:100%;
    text-decoration:none;
    display:flex;
    ${props => (props.mode === "dark" ? `color:white` : `color:#3d3d3d `)};
    ${props => (props.active === props.id && `color:white`)};
    align-items:center;
    justify-content:center;
    &:hover{
    color:white;
    background-color:rgb(32, 53, 67);
    }

}

`
const Navbar = (props) => {
    const [active, setActive] = useState(props.location || 'home')
    const onclicked=(value)=>{
        setActive(value)
    }
    return(
        <Container menu={props.menu}>
            <NavTab onClick={()=>onclicked('home')} active ={active} id='home' ><NavLink to ={'/'}>Home</NavLink></NavTab>
            <NavTab onClick={()=>onclicked('about')}  active ={active} id ='about'><NavLink to ={'/about'} >About</NavLink></NavTab>
            <NavTab onClick={()=>onclicked('skills')}  active ={active} id='skills'><NavLink to ={'/skills'}>Skills</NavLink></NavTab>
            <NavTab onClick={()=>onclicked('projects')}  active ={active} id='projects'><NavLink to={'/projects'}>Projects</NavLink></NavTab>
            <NavTab onClick={()=>onclicked('contact')}  active ={active} id='contact'><NavLink to={'/contact'}>Contact</NavLink></NavTab>
  
        </Container>
    )
}
export default Navbar
