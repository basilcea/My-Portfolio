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
    description:'A question and answer web forum for developers',
    stack:['POSTGRES', 'EXPRESS' , 'CSS MODULES', 'NODE'],
    responsibilities:[
        'Built responsive front-end using vanilla Javascript and CSS Modules',
        'Built API consumed by front-end using NODE JS, EXPRESS , and SQL',
    ],
    github:'',
    web:'',
},
{   id:2,
    name:'Where To Code',
    icon:wheretocode,
    description:'A web app to help remote developers find places to code. ',
    stack:['POSTGRES','EXPRESS' , 'REACT', 'NODE'],
    responsibilities:[
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
    stack:['REACT', 'REDUX' , 'EXPRESS', 'NODE'],
    responsibilities:[
        'Built responsive front-end for web app  using React components',
        'Ensured state management using Redux and Private Routing using react-router',
    ],
    github:'',
    web:'https://lifted.netlify.com',
},
{id:4,
    icon:rr,
    name:'Reading Recommender',
    description:'A web app that recommends books based on user preferences',
    stack:['JAVASCRIPT', 'HTML' , 'LESS', 'CSS'],
    responsibilities:[
        'Created responsive marketing page for web app',
        'Created About us page for details about the app and team',
    ],
    github:'',
    web:'https://ceareads.netlify.com',
},
{id:5,
    icon:portfolio,
    name:'Portfolio Pages',
    description:'A virtual assistant portfolio page built using Gatsby markup generators',
    stack:['REACT','CSS MODULES', 'GATSBY' , 'CONTEXT'],
    responsibilities:[
        'Built responsive front-end using Gatsby',
        'Used CSS Modules for styling'
    ],
    github:'',
    web:'https://preciouso.netlify.com',
},
{id:6,
    icon:kidsfly,
    name:'Kids Fly',
    description:'An app that enables parents flying with kids, a hassle free flight.',
    stack:['REACT' , 'POSTGRES', 'NODE' , 'REDUX'],
    responsibilities:[
        'Built API consumed by front-end using Node JS, Express , and POSTGRES',
    ],
    github:'',
    web:'https://kidsfly.netlify.com',
}]
const Container = styled.div`
width:85%;
margin-left:15%;
margin-top:4%;
height: 100%;
h2{
    width:85%;
    text-align:center;
    color:rgb(32, 53, 67);
}
@media(max-width:1024px){
    width:90%;
    margin:0 5%;
    h2{
        margin-top:10%;
        margin-left:5%;
    }
}
`
const ProjectsDiv = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    width:90%;
    @media(max-width:1024px){
        margin-left:8%;
    }
    @media(max-width:800px){
        flex-direction:column;
        margin:0 5%;
    }
    @media(max-height:400px){
        width:90%;
        flex-wrap:wrap;
        flex-direction:row;
        margin:0 5%;
    }
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