import React from "react";
import styled from 'styled-components'
import {FaGlobe , FaGithubAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom';
const Container = styled.div`
width:30%
height:250px;
border:2px solid rgb(32, 53, 67);
box-shadow: 1px 1px 13px -1px rgba(219,215,219,1);
margin:1% 0%;
border-radius: 10px 10px 0px 0px;
img{
    height:70%;
    width:100%;
    border-radius:5px;
    border-bottom:none;
}
div{
    height:30%;
    width:100%;
    background-color:rgb(32, 53, 67);
}
`;

const Button = styled.button``
const Project = props => {
  return (
    <Container>
      <img src={props.data.icon} alt="" />
      <div>
      <Link to={props.data.web}><FaGlobe/></Link>
      <Link to={props.data.github}><FaGithubAlt/></Link>
      <Button>About Project</Button>
      </div>
    </Container>
  );
};
export default Project;
