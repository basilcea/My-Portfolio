import React,{useEffect} from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import icon from "../assests/icon.png";
import "../animate.css";
import Typed from "react-typed";
import dotenv from "dotenv";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitterSquare,
  FaDev,
  FaMedium,
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import image from "../assests/image.jpg";
const Container = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 96vh;
  @media (max-width: 750px) {
    flex-direction: column;
    margin-left: 0;
    width: 100%;
    height: 97vh;
  }
  @media(max-height:450px){
    flex-direction:row
  }
`;
const Hero = styled.div`
  height: 40%;
  width: 50%;
  margin-left: 15%;
  @media (max-width: 750px) {
    width:90%;
    margin:0 5%
  }
  @media(max-height:450px){
    width:50%;
    height:60%;
  }
`;
const Hello = styled.p`
  background-color: rgb(32, 53, 67);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  width: 60%;
  color: white;
  border-radius: 2px;
  text-align: center;
  font-size: 1.2em;
  line-height: 30px;
  @media (max-width: 750px) {
    width: 90%;
    margin:0 5%
    line-height: 40px;
    font-size: 1.5em;
  }
`;
const Description = styled.div`
  height: 5vh;
  padding-top: 0;
  display: flex;
  margin-top: 5%;
  margin-bottom: 5%;
  justify-content: flex-start;
  font-size: 1.5em;
  font-weight: bold;
  ${props => (props.mode === "dark" ? `color:white` : `color:black `)};
  @media(max-width:750px){
    justify-content:center;
  }
  @media(max-width:650px){
    font-size: 1.2em;
  }
  @media(max-height:450px){
    font-size:1.2em;
    justify-content:flex-start;
    margin-left:5%;
  }
`;
const Detail = styled.p`
  ${props => (props.mode === "dark" ? `color:white` : `color:black`)};
  font-size:1.2em;
  @media(max-width:750px){
   text-align:center;
  }
  @media(max-width:650px){
    font-size:1em;
   }
   @media(max-height:450px){
    font-size:1em;
    text-align:left;
    margin-left:5%;
  }
  &:hover {
    span {
      color: grey;
    }
  }
  span {
    margin-right: 3%;

  }
  
`;
const Socials = styled.div`
  display: flex;
  margin: 5% 0%;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  @media(max-width:750px){
    justify-content:center;
    width:100%;
  }
  @media(max-height:450px){
    justify-content: space-between;
    width: 60%;
    margin-left:3%;
  }
  a {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    justify-content: space-between;
    text-decoration: none;
    ${props => (props.mode === "dark" ? `color:white` : `color:black `)};
    @media(max-width:750px){
      margin: 0 2%;
    }
  }
`;
const ProfilePix = styled.div`
  width: 50%;
  display:flex;
  align-items:center;
  height: 100%;
  .profilePix{
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    @media (max-width: 750px){
      justify-content:center;
    }

  }
  @media (max-width: 750px) {
    order: -1; 
    width: 100%;
    height:50%;
  }
  @media(max-height:450px){
  order:0;
  width: 55%;
  height:100%;
  }
`;
const OuterRadius = styled.div`
    width:60%;
    height:60%;
  display:flex;
  border-radius:10%;
  justify-content:center;
  align-items:center;
    img{
      width:100%;
      height:100%;
      border-radius:10%;

  }
    `;
const Name = styled.div`
  display: flex;
  align-items: center;
  @media(max-width:750px){
    justify-content:center;
  }
  @media(max-height:450px){
   justify-content:flex-start;
   margin-left:5%;
  }
  h1 {
    margin-top: 0%;
    padding-top: 3%;
    font-size: 3em;
    ${props => (props.mode === "dark" ? `color:white` : `color:black `)};
    margin-bottom: 2px;
    @media (max-width: 650px) {
      font-size:2em;
      padding-top: 5%;
    }
    @media(max-height:450px){
      font-size:1.5em
    }
  }
  img {
    width: 3.5em;
    height: 4em;
    padding-top: 3%;
    padding-right: 0.5%;
    @media (max-width: 650px) {
      width:2.5em;
      height:3em;
    }
    @media(max-height:450px){
      width:2em;
      height:2.5em;
  }
`;
dotenv.config();
const Home = (props) => {
  useEffect(()=>{
    props.setLocation('home')
  },props)
  return (
    <Container>
      <Hero>
        <ScrollAnimation animateIn="fadeIn" style={{ width: "100%" }}>
          <Hello>- - Hello I'm - - </Hello>
          <Name>
            <img src={icon} alt="O" />
            <h1>gbonna Basil</h1>
          </Name>
          <Description>
            <Typed
              strings={[
                "A Frontend Engineer",
                "A Backend Engineer",
                "A Full Stack Engineer",
                "Aspiring AI Engineer",
                "A Software Engineer",
              ]}
              typespeed={100}
              startDelay={100}
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
              <FaTwitterSquare />
            </a>
            <a href="https://www.linkedin.com/in/basilcea/">
              <FaLinkedin />
            </a>
            <a href="https://dev.to/basilcea">
              <FaDev />
            </a>
            <a href="https://medium.com/@basilcea">
              <FaMedium />
            </a>
          </Socials>
        </ScrollAnimation>
      </Hero>

      <ProfilePix>
        <ScrollAnimation
          className = 'profilePix'
          animateIn="fadeIn"
          animateOut="fadeOut"
        >
          <OuterRadius>
            <img src={image} alt="" />
          </OuterRadius>
        </ScrollAnimation>
      </ProfilePix>
    </Container>
  );
};
export default Home;
