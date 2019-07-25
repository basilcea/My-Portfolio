import React from 'react' ;
import styled from 'styled-components';


const Navs = styled.div `
${props => ( (props.status === props.value)   ?`color:teal`:`color:black`)}
    display:flex;
    height:20%;
    width:100%;
    justify-content:center;
    align-items:center;
    text-align:center;
    background-color: #f0f0f0;
    font-size:.65em;
    border:1px solid grey;
&:first-of-type{
    border-radius:5px 5px 0 0;
}
&:last-of-type{
    border-radius: 0 0 5px 5px;
}
@media (max-width:750px){
    font-size:1.2em;
    ${props => ( props.hamburgerClicked ? `display:flex` :`display:none`)};
    &:last-of-type{
    border-radius: 0px;
}
}  
`





const Nav =(props) =>{

    const clicked = (value)=>{
        props.clickAction(value);
        props.setPrevious();
        props.changeCarousel(value);
     
    }
 
    
    return(
        <Navs  status={props.id} onClick={()=>clicked(props.value)}  hamburgerClicked={props.hamburgerClicked}
    value={props.value} display={props.id}>
        {<div><props.icon/><br/>
            {props.name}</div>}
        </Navs>
    )

}

export default Nav;