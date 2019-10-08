import React ,{useState} from "react";
import styled from 'styled-components'
import {FaGlobe , FaGithub} from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';
import "../../animate.css";
import background from '../../assests/background.png'
const Container = styled.div`
width:30%;
display:flex;
flex-direction:column;
height:30vh;
box-shadow: 1px 1px 13px -1px rgba(219,215,219,1);
margin:1% 0%;
border-radius: 10px 10px 0px 0px;
transition: transform 0.8s;
transform-style: preserve-3d;
@media(max-width:800px){
    width:100%;
    margin-bottom:5%;
    height:40vh;
}
${props => props.transformed && `transform:rotateY(180deg)`};
`;
const FrontDiv = styled.div`
display:flex;
flex-direction:column;
  backface-visibility:hidden;
  width: 100%;
  height: 100%;
  position:absolute;
  img{
    height:100%;
    background-color:rgb(32, 53, 67);
    width:100%;
    border-radius:5px 5px 0px 0px;
  
}
div{
    height:30%;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:100%;
    background:url(${background});
    border-bottom:2px solid rgb(32, 53, 67) ;
    a{
        color:rgb(32, 53, 67);
        text-decoration:none;
    }
    span{
        color:rgb(32, 53, 67);
    }
}
`;
const Button=styled.button`
    width:30%;
    height:50%;
    outline:none;
    float:right;
    border-radius:5px;
    background-color:inherit;
    font-size:0.8em;
    border:1px solid rgb(32, 53, 67);
    color:rgb(32, 53, 67);
    &:hover{
        background-color:rgb(32, 53, 67);
        color:white;
    }`
const BackDiv = styled.div`
  width: 100%;
  height: 100%;
  margin:0;
  background-color:rgb(32, 53, 67);    
  border-radius:5px 5px 0px 0px;
  transform: rotateY(180deg);
  padding: 5% 0%;
  backface-visibility:hidden;
  position: absolute;
  p{
      padding:0 5%;
      color:white;
  }
  a{
    text-decoration:none;
  }
  div{
    display:flex;
    justify-content:space-between;
  }
`;
const Highlights = styled.div`
display:flex;
flex-direction:column;
height:42%;
p{
    font-size:0.8em;
    margin:0%;
    color:white;
}
`;
const Stack = styled.div`
    display:flex;
    height:30%;
    margin-top:3%;
    width:100%;
    padding:0 5%;
    justify-content:space-between;
    align-items:center;
    background:url(${background});
    width:100%;
    flex-wrap:wrap;
    span{
        font-size:.8em;
        margin-right:3%;
    }
`;


const Project = props => {
    const [transformStatus, setTransform] = useState(false);
    const setStyle = () => {
        setTransform(!transformStatus);
      };
  return (
    <Container transformed={transformStatus}>
        <FrontDiv>
            <ScrollAnimation animateIn="fadeIn" style={{height:'70%'}}>
      <img src={props.data.icon} alt=""/>
      </ScrollAnimation>
      <div>
    <span>{props.data.name}</span>
      <a href={props.data.web}><FaGlobe/></a>
      <a href={props.data.github}><FaGithub/></a>
      <Button onClick={() => setStyle()}>About Project </Button>
      </div>
      </FrontDiv>
      <BackDiv transformed={transformStatus}>
   
    <p>{props.data.description}</p>
    <Highlights>
        {props.data.responsibilities.map(responsibility => <p key={props.data.responsibilities.indexOf(responsibility)}>- {responsibility}.</p>)}
    </Highlights>
    <Stack>Built with: {props.data.stack.map(stack => <span key={props.data.stack.indexOf(stack)}> {stack}</span>)}
    <Button onClick={() => setStyle()}>Go Back</Button></Stack>

      </BackDiv>
    </Container>
  );
};
export default Project;
