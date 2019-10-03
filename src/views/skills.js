import React from "react";
import styled from "styled-components";
import Skillcard from './card/skills'
const skills = [
    {
        name: 'FRONT END DEVELOPMENT',
        description: ''
    },
    {
        name: 'BACKEND /API DEVELOPMENT',
        description:''
    },
    {
        name:'MOBILE APP DEVELOPMENT',
        description:''
    }
]
const Container = styled.div`
    display:flex;
    height:100vh;
    width: 85%;
`
const Skills = () => {
  return (
    <Container>
        {
            skills.map(skill => <Skillcard data ={skill}/>)
        }
    </Container>
  );
};
export default Skills;
