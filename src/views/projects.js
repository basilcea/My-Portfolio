import React, {useEffect} from 'react';
import styled from 'styled-components';
import Project from  '../components/cards/project'
import ScrollAnimation from 'react-animate-on-scroll';
import wheretocode from '../assests/logo.png'
import politico from '../assests/logo(1).png'
import rr from '../assests/logo(3).png'
import lifted from '../assests/logo(4).png'
import portfolio from '../assests/logo(6).png'
import kidsfly from '../assests/logo(2).png'
import "../animate.css";

const data = [{
    id:1,
    name:'Where To Code',
    icon:wheretocode,
    description:'A web app to help remote developers find places to code. ',
    stack:['POSTGRES', 'EXPRESS' , 'REACT', 'NODE'],
    responsibilities:[
        'Created authentication, validation and controllers in backend API',
        'Ensured jest front and backend testing, continous integration and code coverage' 
    ],
    github:'https://github.com/where-to-code',
    web:'https://wheretocode.com',
},
{   id:2,
    name:'Politico',
    icon:politico,
    description:'An online voting platform',
    stack:['POSTGRE', 'EXPRESS' , 'VANILLA JS' , 'NODE'],
    responsibilities:['Build out backend for the app using node, postgres and raw sql' ,
'Built front-end using vanilla javascript and css'],
    github:'https://github.com/basilcea/Politico',
    web:'https://ceapolitico.netlify.com',
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
    github:'https://github.com/basilcea/IDoJAMStack',
    web:'https://preciouso.netlify.com',
},
{id:6,
    icon:kidsfly,
    name:'Kids Fly API',
    description:'An app that enables parents flying with kids, a hassle free flight.',
    stack:['REACT' , 'POSTGRES', 'NODE' , 'REDUX'],
    responsibilities:[
        'Built API consumed by front-end using Node JS, Express , and POSTGRES',
    ],
    github:'https://github.com/kids-fly/backend',
    web:'https://kidsflyapi.herokuapp.com',
}
// {   id:3,
//     icon:lifted,
//     name:'Lifted',
//     description:'A weight lifting journal for users to track their weight lifting progress',
//     stack:['REACT', 'REDUX' , 'EXPRESS', 'NODE'],
//     responsibilities:[
//         'Built responsive front-end for web app  using React components',
//         'Ensured state management using Redux and Private Routing using react-router',
//     ],
//     github:'https://github.com/build-week-weight-journal/weight-journal-FE',
//     web:'https://lifted.netlify.com',
// },
// {id:4,
//     icon:rr,
//     name:'Reading Recommender',
//     description:'A web app that recommends books based on user preferences',
//     stack:['JAVASCRIPT', 'HTML' , 'LESS', 'CSS'],
//     responsibilities:[
//         'Created responsive marketing page for web app',
//         'Created About us page for details about the app and team',
//     ],
//     github:'https://github.com/reading-recommender/basil-ogbonna-ui',
//     web:'https://ceareads.netlify.com',
// },

// {id:6,
//     icon:kidsfly,
//     name:'Adventure House',
//     description:'A multi-user real-time virtual world game where players can transverse rooms in four directions',
//     stack:['REACT' , 'DJANGO', 'PYTHON' , 'REDUX'],
//     responsibilities:[
//         'Implemented Algorithm for the dynamic creation of the room',
//         'Designed the front-end for the game'
//     ],
//     github:'https://github.com/CSEU2-BW',
//     web:'https://mud-game-lambda.netlify.com/',
// }
]
const Container = styled.div`
width:85%;
margin-left:15%;
margin-top:4%;
height: 89vh;
h2{
    width:85%;
    text-align:center;
    color:rgb(32, 53, 67);
}a{
    color:rgb(32, 53, 67);
    font-weight:bold;
}
@media(max-width:1024px){
    width:90%;
    height:96vh;
    margin:0 5%;
    h2{
        margin-top:10%;
        margin-left:5%;
    }
}
@media(max-width:800px){
    height:100%;
}

`
const ProjectsDiv = styled.div`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    width:90%;
    align-items:center;
    height:100%;
    @media(max-width:1024px){
        margin-left:8%;
     
    }
    @media(max-width:800px){
        flex-direction:column;
        margin:0 5%;
    }
    @media(max-height:450px){
        width:90%;
        flex-wrap:wrap;
        flex-direction:row;
        margin:0 5%;
    }
`;
const P = styled.p`
text-align:center`;
const Projects = (props)=> {
    useEffect(()=>{
        props.setLocation('projects')
      },[])
    return (
        <Container>
               <ScrollAnimation animateIn="fadeInUp" style={{ width: "100%" }}>
            <h2>MY PROJECTS</h2>
            <ProjectsDiv>
            {
                data.map(project => <Project key={project.id}  data={project}/>)
            }
            <P>Other Projects Include <a href='https://ceawars.netlify.com/'>React Wars</a> and <a href='https://mud-game-lambda.netlify.com/'>Adventure House</a></P>
            </ProjectsDiv>
        </ScrollAnimation>
        </Container>
    )
}
export default Projects