import React from "react";
import styled from "styled-components";
import developer from "../assests/developer.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "../animate.css";
const Container = styled.div`
  width: 85%;
  margin-left: 15%;
  display: flex;
  height:100vh;
  justify-content: space-between;
  align-items: center;
`;
const Details = styled.div`
  width: 45%;
  margin-right: 10%;
  text-align: justify;
  h1{
    color:rgb(32, 53, 67)
  }
  p {
    line-height: 22px;
    font-size: 0.9em;
    display: flex;
    justify-content: space-between;
  }
  span {
    border: 2px solid rgb(32, 53, 67);
    border-raduis: 5px;
    width: 15%;
    text-align: center;
  }
`;
const Side = styled.div`
width: 100%
background: url(${developer});
height:80vh;
background-size:100%;
background-position:center;
background-repeat:no-repeat;
`;
const Initial = styled.div`
  font-weight: bold;
`;
const About = () => {
  return (
    <Container>
       <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' style={{width:'40%'}}><Side></Side></ScrollAnimation>
      <Details>
      <ScrollAnimation animateIn="fadeInUp" animateOut='fadeOut' style={{width:'100%'}}>
        <h1>About Me</h1>

        <Initial>Firstly, I love coding!</Initial>
        <p>
          When I was 10, I went with a classmate to the cybercafe to get answers
          to a school project. While there, I started inputting the web address
          in the google search bar. He had to correct me quite a number of times
          before i got the difference. It was simple, if you need to go the
          exact web page, put the address in the bar. But i did not know it.
          That was my first experience with computers and that was the moment i
          decided i was going to learn what there was to learn about this
          intriguing device everyone in the cybercafe was spending time. Over
          the years, technology has evolved and the number of people going to
          cybercafe has drastically reduced in Nigeria but my excitement over
          technology has not.
        </p>
        <p>
          I am Ogbonna Basil, a software engineer. I have a degree in Mathematics and Statistics, certifications in data
          science, and experience in building web apps. 
          </p>
          <p>My ultimate desire is to improve human lives and raise human potential
          through software development and to contribute to making our cities
          smarter and our lives less stressful.When I am not coding, I am volunteering, listening to music, or
          playing chess.
        </p>
        <h3>My Core </h3>
        <p>
          {" "}
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>React</span>
          <span>Animations</span>
          </p>
         <p> <span>Node Js</span>
          <span>Express</span>
          <span> API </span>
          <span>Testing</span>
          <span>Python</span>
        </p>
        </ScrollAnimation>
      </Details>
    </Container>
  );
};
export default About;
