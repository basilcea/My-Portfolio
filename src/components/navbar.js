import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    width:7%;
    height: 80vh;
    position:fixed;
    top:10vh;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    z-index:+3;
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
            <NavTab onClick={()=>onclicked()}><a href ={'/#home'}>Home</a></NavTab>
            <NavTab onClick={()=>onclicked()}><a href ={'/#about'} >About</a></NavTab>
            <NavTab onClick={()=>onclicked()}><a href ={'/#skills'}>Skills</a></NavTab>
            <NavTab onClick={()=>onclicked()}><a href={'/#projects'}>Projects</a></NavTab>
            <NavTab onClick={()=>onclicked()}><a href={'/#contact'}>Contact</a></NavTab>
        </Container>
    )
}
export default Navbar
