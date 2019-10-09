import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

const Container = styled.div `
    width:7%;
    height: 80vh;
    position:fixed;
    background:white;
    top:10vh;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index:+3;
    @media(max-width: 800px){
        display:none;
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
&:last-of-type{
    border-bottom:none;
}
a{  height:100%;
    width:100%;
    text-decoration:none;
    display:flex;
    ${props => (props.mode === "dark" ? `color:white` : `color:#3d3d3d `)};
    align-items:center;
    justify-content:center;
    &:hover{
    color:white;
    background-color:rgb(32, 53, 67);
    }

}

`
const Navbar = (props) => {
    const onclicked=()=>{

    }
    return(
        <Container>
            <NavTab onClick={()=>onclicked()}><NavLink to ={'/'}>Home</NavLink></NavTab>
            <NavTab onClick={()=>onclicked()}><NavLink to ={'/about'} >About</NavLink></NavTab>
            <NavTab onClick={()=>onclicked()}><NavLink to ={'/skills'}>Skills</NavLink></NavTab>
            <NavTab onClick={()=>onclicked()}><NavLink to={'/projects'}>Projects</NavLink></NavTab>
            <NavTab onClick={()=>onclicked()}><NavLink to={'/contact'}>Contact</NavLink></NavTab>
        </Container>
    )
}
export default Navbar
