import React from "react";
import styled from "styled-components";
import Skillcard from '../components/cards/skills'
import ScrollAnimation from 'react-animate-on-scroll';
import "../animate.css";
import {FaCode,FaDesktop, FaMobileAlt } from 'react-icons/fa'
const skills = [
    {id:1,
        icon: <FaDesktop/> ,
        name: 'FRONT END DEVELOPMENT',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {id:2,
        icon:<FaCode/>  ,
        name: 'BACKEND /API DEVELOPMENT',
        description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    },
    {id:3,
        icon:<FaMobileAlt/>,
        name:'MOBILE APP DEVELOPMENT',
        description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
    }
]
const Container = styled.div`
    display:flex;
    flex-direction:column;
    height:100vh;
    width: 85%;
    margin-left:15%;
  justify-content:center;
  h2{
      text-align:center;
      color:rgb(32, 53, 67)
  }
`
const Skill = styled.div`
display:flex;
width:95%;
justify-content:space-between;
`;
const Skills = () => {
  return (
    <Container>
        <h2>WHAT I DO</h2>
        <ScrollAnimation  animateIn="fadeInUp" animateOut='fadeOut'>
        <Skill>
        {
            skills.map(skill => <Skillcard  key={skill.id} data ={skill}/>)
        }
        </Skill>
        </ ScrollAnimation>
    </Container>
  );
};
export default Skills;
