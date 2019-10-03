import React from "react";
import styled from "styled-components";
  import ScrollAnimation from 'react-animate-on-scroll';
  import "../animate.css";
import Typed from "react-typed";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitterSquare,
  FaDev,
  FaMedium,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import image from '../assests/image.png'
const Container = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  width: 90%;
  margin-left:2%;
  height: 100vh;
`;
const Hero = styled.div`
  height: 50%;
  width:100%;
  margin-left: 15%;
  h1 {
    font-size: 3em;
    ${props => (props.mode === "dark" ? `color:white` : `color:#3d3d3d `)};
    margin-bottom: 2px;
  }
`;
const Hello = styled.p`
  color: rgb(32, 53, 67);
  width: 60%;
  border-radius: 50%;
  font-size: 1.2em;
  height: 5%;
`;
const Description = styled.div`
    height:10%
    padding-top:0;
    display:flex;
    margin-top:8%;
    margin-bottom:8%;
    justify-content:flex-start;
    font-size:1.5em;
    font-weight:bold;
    ${props => (props.mode === "dark" ? `color:white` : `color:#3d3d3d `)};
`;
const Detail = styled.p`
  ${props => (props.mode === "dark" ? `color:white` : `color:#3d3d3d`)};
  &:hover {
    span {
      color: grey;
    }
  }
  span {
    padding-right: 3%;
  }
`;
const Socials = styled.div`
  display:flex;
  margin-top:10%;
  justify-content:space-between;
  align-items:center;
  width:40%;
  a{  display:flex;
     align-items:center;
      font-size:1.5em;
      justify-content:center;
      text-decoration:none;
      ${props => (props.mode === "dark" ? `color:white` : `color:#3d3d3d `)};
  }
`;
const ProfilePix = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
`
const OuterRadius = styled.div `
    border-radius:50%
    width:70%;
    height:50%;
    ${props => (props.mode === "dark" ? `background-color:black` : `background-color:#efefef`)};
    justify-content:center;
    align-items:center;
    display:flex;
    `
const InnerRadius = styled.div`
border-radius:50%;
${props => (props.mode === "dark" ? `background-color:rgb(32, 53, 67)` : `background-color:lightgrey`)};
width:90%;
padding:5%;
height:90%;
img{
    width:100%;
    height:100%;
}
`

const Home = () => {
  return (
    <Container id={'home'}>
      <Hero>
        <ScrollAnimation animateIn="fadeInUp"  style={{width:'100%'}}>
        <Hello>Hello I'm</Hello>
        <h1>Ogbonna Basil</h1>
        <Description>
          <Typed
            strings={[
              "Frontend Engineer",
              "Backend Engineer",
              "Mobile Engineer",
              "Software Engineer"
            ]}
            typespeed={100}
            fadeOut={true}
            showCursor={false}
          />
        </Description>

        <Detail>
          <span>
            <FaEnvelope />
          </span>{" "}
          ogbonna.basil3@gmail.com
        </Detail>
        <Detail>
          <span>
            <FaMapMarkerAlt />
          </span>{" "}
          Lagos , Nigeria
        </Detail>
        <Socials>
          <a href="https://github.com/basilcea">
            <FaGithub />
          </a>
          <a href="https://twitter.com/basil_cea">
            <FaTwitterSquare/>
          </a>
          <a href="https://www.linkedin.com/in/basilcea/">
            <FaLinkedin />
          </a>
          <a href="https://dev.to/basilcea">
            <FaDev />
          </a>
          <a href="https://medium.com/@ogbonnabasil">
            <FaMedium />
          </a>
        </Socials>
        </ScrollAnimation >
      </Hero>
      <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' style={{width:'100%'}}>
      <ProfilePix>
      
        <OuterRadius>
          <InnerRadius>
               <img src={image} alt =''/>
          </InnerRadius>
        </OuterRadius>
       
      </ProfilePix>
      </ScrollAnimation>
    </Container>
  );
};
export default Home;
