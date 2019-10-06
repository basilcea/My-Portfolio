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
    icon:asklite,
    description:'',
    stack:[],
    github:'',
    web:'',
},
{   id:2,
    icon:wheretocode,
    description:'',
    stack:[],
    github:'',
    web:'',
},
{   id:3,
    icon:lifted,
    description:'',
    stack:[],
    github:'',
    web:'',
},
{id:4,
    icon:rr,
    description:'',
    stack:[],
    github:'',
    web:'',
},
{id:5,
    icon:portfolio,
    description:'',
    stack:[],
    github:'',
    web:'',
},
{id:6,
    icon:kidsfly,
    description:'',
    stack:[],
    github:'',
    web:'',
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