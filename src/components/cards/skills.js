import React from "react";
import styled from "styled-components";

const Container = styled.div`
width:30%
height:100%;
box-shadow: -1px 2px 19px -3px rgba(196,194,196,1);
background-color:white;
text-align:center;
@media(max-width:600px){
    width:100%;
    margin-bottom:5%;
}
}
p{
    padding:10%;
    padding-top:1%;
}
`;
const Icon = styled.div`
display:flex;
justify-content:center;
font-size:2em;
padding-top:5%
color: rgb(32, 53, 67);
`;
const Clip = styled.div`
  height:3vh;
  z-index: -1;
  background-color: rgb(32, 53, 67);
  clip-path: polygon(100% 0, 0 0, 0 100%);
`;

const SkillCard = props => {
  return (
    <Container>
      <Clip />
      <Icon>{props.data.icon}</Icon>
      <h3>{props.data.name}</h3>
      <p>{props.data.description}</p>
    </Container>
  );
};
export default SkillCard;
