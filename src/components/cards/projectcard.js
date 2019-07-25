import React, { useState } from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
const Container = styled.div`
  position: relative;
  width: 45%;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  margin-bottom: 5%;
  min-height: 18vh;
  height: 30vh;
  text-align: center;
  background-color: #e6e6e6;
  transition: transform 0.8s;
  perspective: 1000px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0px 0px 10px 10px;

  @media (max-width: 1024px){
    width:55%;
    height:15vh;
  }
  @media (max-width: 500px) {
    width:100%;
    margin-left:0px;
    height: 40vh;
  }
`;
const Anotherdiv= styled.div `
  display: flex;
  flex-direction:column;
  width: 100%;
  height: 100%;
  text-align: center;
  position:relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${props => props.transformed && `transform:rotateY(180deg)`};
  `;
const Front = styled.div`
display:flex;
flex-direction:column;
  backface-visibility:hidden;
  width: 100%;
  height: 100%;

  transform: translateY(-9%);
  position:absolute;
`;
const Bar = styled.div`
  ${props => `background-color:${props.background}`};
  height: 1vh;
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Back = styled.div`
  width: 100%;
  height: 100%;
  transform: rotateY(180deg);
  padding: 5%;
  backface-visibility:hidden;
  position: absolute;
  p{
    min-height:12vh;
  }
  a{
    text-decoration:none;
  }
  div{
    display:flex;
    justify-content:space-between;
  }
`;
const PictureDiv = styled.div`
  width: 100%;
  height:100%;
  backface-visibility:hidden;
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 750px) {
    width: 100%;

  }
`;
const Picture = styled.img`
  height: 100%;
  width: 100%;
`;
const Namediv = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
`;
const Project = props => {
  const [transformStatus, setTransform] = useState(false);
  const redirect = url => {
    // eslint-disable-next-line no-restricted-globals
    location.href = url;
  };
  const setStyle = () => {
    setTransform(!transformStatus);
  };
  return (
    <Container
     transformed={transformStatus}
      value={props.id}
      onClick={() => setStyle()}
    >

    <Bar  background={props.color}/>
    <Anotherdiv     transformed={transformStatus}>
    {/*<Front>
       
      
      </Front>
     */}
      
      <Front>
      <PictureDiv>
      <Picture src={props.srcUrl} />
    </PictureDiv>
    <Namediv>
    {props.name}
    <FaGithub onClick={() => redirect(props.gitUrl)} />
    <FaGlobe onClick={() => redirect(props.webUrl)} />
    <button>Details</button>
  </Namediv>
      </Front>
      <Back transformed={transformStatus} onClick={() => setStyle()}>
        <p>{props.description}</p>
        <div>Built for: <NavLink colored={props.color} to={props.clientUrl}>{props.client}</NavLink></div>
        <div>
        {props.tools && props.tools.map(tool => <div key={`${tool}${props.id}`} style={{'backgroundColor':props.color}}>{tool}</div>)}
        <button> Back </button>
        </div>
      </Back>
      </Anotherdiv>
    </Container>
  );
};

export default Project;
