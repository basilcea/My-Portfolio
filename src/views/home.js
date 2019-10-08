import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import icon from "../assests/icon.png";
import "../animate.css";
import pdf from "../assests/Ogbonna Basil C.pdf";
import axios from "axios";
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
import image from "../assests/image.png";
const Container = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  width: 90%;
  margin-left: 2%;
  height: 100vh;
  @media (max-width: 800px) {
    flex-direction: column;
    margin-left: 0;
    width: 100%;
  }
`;
const Hero = styled.div`
  height: 50%;
  width: 45%;
  margin-left: 15%;
  @media (max-width: 800px) {
    width:90%;
    margin:0 5%
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
  @media (max-width: 800px) {
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
  @media(max-width:800px){
    justify-content:center;
    font-size: 1.2em;
  }
`;
const Detail = styled.p`
  ${props => (props.mode === "dark" ? `color:white` : `color:black`)};
  @media(max-width:800px){
    margin-left:10%;
  }
  &:hover {
    span {
      color: grey;
    }
  }
  span {
    margin-right: 3%;

  }
  @media(max-width:800px){
    justify-content:center;
  }
  
`;
const Socials = styled.div`
  display: flex;
  margin: 5% 0%;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  @media(max-width:800px){
    justify-content:center;
    width:100%;
  }
  a {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    justify-content: center;
    text-decoration: none;
    ${props => (props.mode === "dark" ? `color:white` : `color:black `)};
    @media(max-width:800px){
     margin-right:5%;
    }
  }
`;
const ProfilePix = styled.div`
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 800px) {
    order: -1; 
    width: 100%;
    height:45%;
  }
`;
const OuterRadius = styled.div`
    border-radius:50%
    width:80%;
    height:60%;
    background-color:rgb(32, 53, 67);
    justify-content:center;
    align-items:center;
    display:flex;
    @media(max-width:800px){
      width:65%;
      height:70%;
    }
    img{
      width:90%;
      height:90%;
  }
    `;
const Name = styled.div`
  display: flex;
  align-items: center;
  @media(max-width:800px){
    justify-content:center;
  }
  h1 {
    margin-top: 0%;
    padding-top: 3%;
    font-size: 3em;
    ${props => (props.mode === "dark" ? `color:white` : `color:black `)};
    margin-bottom: 2px;
    @media (max-width: 800px) {
      font-size:2em;
      padding-top: 5%;
    }
  }
  img {
    width: 3.5em;
    height: 4em;
    padding-top: 3%;
    padding-right: 0.5%;
    @media (max-width: 800px) {
      width:2.5em;
      height:3em;
    }
  }
`;
const Button = styled.a`
  margin-top: 5%;
  background-color: inherit;
  border: 2px solid rgb(32, 53, 67);
  font-size: 1em;
  border-radius: 5px;
  height: 40px;
  padding: 10px 5px;
  color: rgb(32, 53, 67);
  text-decoration: none;
  outline: none;
  &:hover {
    color: white;
    background-color: rgb(32, 53, 67);
  }
  @media (max-width: 800px) {
    font-size: 0.8em;
    display:flex;
    justify-content:center;
    height:20px;
    height:3em;
  }
`;
dotenv.config();
const Home = () => {
  return (
    <Container>
      <Hero>
        <ScrollAnimation animateIn="fadeInUp" style={{ width: "100%" }}>
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
                "A Software Engineer"
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
              <FaTwitterSquare />
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

          <Button href={pdf} download>
            Download Resume{" "}
          </Button>
        </ScrollAnimation>
      </Hero>

      <ProfilePix>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
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
