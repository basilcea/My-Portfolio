import React from 'react';
import styled from 'styled-components';
import Project from  '../components/cards/project'
import ScrollAnimation from 'react-animate-on-scroll';
import wheretocode from '../assests/logo.png'
import asklite from '../assests/logo(1).png'
import rr from '../assests/logo(3).png'
import lifted from '../assests/logo(4).png'
import kidsfly from '../assests/logo(5).png'
import portfolio from '../assests/logo(6).png'
import "../animate.css";

const data = [{
    id:1,
    name:'Asklite',
    icon:asklite,
    description:'A Lite version of the popular question and answer platform for  stackoverflow.',
    stack:['Vanilla Js', 'HTML' , 'CSS Modules', 'SQL' , 'Express', 'Postgres'],
    responsibilities:[
        'Built responsive front-end using vanilla javascript and css modules',
        'Built Api consumed by front-end using Node JS, Express , and SQL',
        'Ensured testing ,test coverage, maintainability and api documentation'
    ],
    github:'',
    web:'',
},
{   id:2,
    name:'Where To Code',
    icon:wheretocode,
    description:'A web app to help remote developers find places to code. ',
    stack:['React', 'Styled-Components' , 'Redux', 'Node JS' , 'Express', 'Postgres'],
    responsibilities:[
        'Created front-end features including google ratings,UI-Design',
        'Created authentication, validation and controllers in backend API',
        'Ensured jest front and backend testing, continous integration and code coverage' 
    ],
    github:'',
    web:'https://wheretocode.com',
},
{   id:3,
    icon:lifted,
    name:'Lifted',
    description:'A weight lifting journal for users to track their weight lifting progress',
    stack:['React', 'Redux' , 'SQlite', 'Node' , 'Express', 'Jest'],
    responsibilities:[
        'Built responsive front-end for web app  using React components',
        'Ensured state management using Redux and Private Routing using react-router',
        "Using routing for dynamic routing of web app"
    ],
    github:'',
    web:'https://lifted.netlify.com',
},
{id:4,
    icon:rr,
    name:'Reading Recommender',
    description:'A web app that recommends books based on user preferences',
    stack:['Vaniila Js', 'HTML' , 'LESS', 'CSS'],
    responsibilities:[
        'Created responsive marketing page for web app',
        'Created About us page for details about the app and team',
        'Ensured testing ,test coverage, maintainability and api documentation'
    ],
    github:'',
    web:'https://ceareads.netlify.com',
},
{id:5,
    icon:portfolio,
    name:'Portfolio Pages',
    description:'A portfolio page built using gatsby generator ',
    stack:['HTML', 'CSS Modules', 'React' , 'Context', 'Gatsby'],
    responsibilities:[
        'Built responsive front-end using vanilla javascript and css modules',
        'Built Api consumed by front-end using Node JS, Express , and SQL',
        'Implement Scroll to anchors in React'
    ],
    github:'',
    web:'https://preciouso.netlify.com',
},
{id:6,
    icon:kidsfly,
    name:'Kids Fly',
    description:'An app that enables flying with kids a hassle free flight.',
    stack:['Vaniila Js', 'HTML' , 'CSS Modules', 'SQL' , 'Express', 'Postgres'],
    responsibilities:[
        'Built responsive front-end using vanilla javascript and css modules',
        'Built Api consumed by front-end using Node JS, Express , and SQL',
        'Ensured testing ,test coverage, maintainability and api documentation'
    ],
    github:'',
    web:'https://kidsfly.netlify.com',
}]
const Container = styled.div`
width:85%;
margin-left:15%;
margin-top:4%;
height: 100vh;
h2{
    width:85%;
    text-align:center;
}
`
const ProjectsDiv = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    width:90%;
`;
const Projects = ()=> {
    return (
        <Container>
               <ScrollAnimation animateIn="fadeInUp" style={{ width: "100%" }}>
            <h2>MY PROJECTS</h2>
            <ProjectsDiv>
            {
                data.map(project => <Project key={project.id}  data={project}/>)
            }
            </ProjectsDiv>
        </ScrollAnimation>
        </Container>
    )
}
export default Projects