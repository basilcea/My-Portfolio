import React,{useState} from 'react' ;
import styled from 'styled-components';
import Nav from './navs'
import {navInfo} from '../../../data'
import {FaBars} from 'react-icons/fa'

const NavContainer = styled.div `
display:flex;
    flex-direction:column;
    width:12%;
    margin-right:1%;
    margin-top:3%;
    height:40vh;
    font-size:1vw;
    @media (max-width:750px){
       z-index:4;
       position:absolute;
       flex-direction:row;
       font-size:1.5vw;
       width:80%;   margin-left:9%;
       margin-top:1px;
       opacity:0.8;
    }
`;
const Div= styled.div`
display:none;
@media (max-width:750px){
    display:block;
    position:fixed;
    color:white;
    right:5%;
    top:2%;
    font-size:3vw;
    z-index:5;
}
`;


const Navbar =(props) =>{
    const [click , setClick] = useState(0)
    const [hamburgerOn , setHamburgerOn] = useState(false);
    const clicked =(id)=>{
        setClick(id)
    }
    const hamburgerClicked = ()=>{
        !hamburgerOn && setHamburgerOn(true)
        hamburgerOn && setHamburgerOn(false)
  
    }

    return(
        <NavContainer >
        <Div onClick={()=>hamburgerClicked()}><FaBars/></Div>    
        {navInfo.map(nav => {
            return <Nav  
            status={click} 
            clickAction={clicked} 
            changeCarousel ={props.changeCarousel} 
            setPrevious ={props.setPrevious} 
            key={nav.id} 
            id = {props.carouselId}
            value={nav.id} 
            hamburgerClicked={hamburgerOn}
            icon={nav.icon}
            name ={nav.name} />
        }) } 
      
        </NavContainer>
    )

}

export default Navbar;