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
`;
const Hero = styled.div`
  height: 50%;
  width: 100%;
  margin-left: 15%;
  h1 {
    font-size: 3em;
    ${props => (props.mode === "dark" ? `color:white` : `color:black `)};
    margin-bottom: 2px;
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
`;
const Detail = styled.p`
  ${props => (props.mode === "dark" ? `color:white` : `color:black`)};
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
  display: flex;
  margin-top: 5%;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  a {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    justify-content: center;
    text-decoration: none;
    ${props => (props.mode === "dark" ? `color:white` : `color:black `)};
  }
`;
const ProfilePix = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const OuterRadius = styled.div`
    border-radius:50%
    width:80%;
    height:55%;
    background-color:rgb(32, 53, 67);
    justify-content:center;
    align-items:center;
    display:flex;
    img{
      width:90%;
      height:90%;
      border-radius:50%;
  }
    `;
const Name = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-top: 0%;
    padding-top: 3%;
  }
  img {
    width: 3.5em;
    height: 4em;
    padding-top: 2%;
    padding-right: 0.5%;
  }
`;
const Button = styled.button`
  margin-top: 5%;
  background-color: inherit;
  border: 2px solid rgb(32, 53, 67);
  font-size: 1em;
  border-radius: 5px;
  height: 40px;
  outline: none;
  a {
    text-decoration: none;
    width: 100%;
    color: rgb(32, 53, 67);
    height: 100%;
    &:hover {
      color: white;
    }
  }
  &:hover {
    background-color: rgb(32, 53, 67);
  }
`;
dotenv.config();
const Home = () => {
  return (
    <Container>
      <Hero>
        <ScrollAnimation animateIn="fadeInUp" style={{ width: "100%" }}>
          <Hello>- - - - - - - Hello I'm - - - - - - -</Hello>
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
          <Button>
            <a href={pdf} download>
              Download Resume{" "}
            </a>
          </Button>
        </ScrollAnimation>
      </Hero>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        style={{ width: "100%" }}
      >
        <ProfilePix>
          <OuterRadius>
            <img src={image} alt="" />
          </OuterRadius>
        </ProfilePix>
      </ScrollAnimation>
    </Container>
  );
};
export default Home;
