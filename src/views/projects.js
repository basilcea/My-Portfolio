import React, {useEffect} from 'react';
import styled from 'styled-components';
import Project from  '../components/cards/project'
import ScrollAnimation from 'react-animate-on-scroll';
import wheretocode from '../assests/logo.png'
import politico from '../assests/logo(1).png'
import lambdadoor from '../assests/logo(4).png'
import reactwars from '../assests/logo(3).png';
import kidsfly from '../assests/logo(2).png'
import AdventureHouse from '../assests/logo(5).png'
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
    icon:lambdadoor,
    name:'Lambda Door',
    description:'The one-stop portal for Lambda graduates looking for company information in the quest for a job',
    stack:['POSTGRES','Express', 'React' , 'Node'],
    responsibilities:[
        'Lead the team that build the whole app',
        'Lead user research for building the product '
    ],
    github:'https://github.com/LABS-EU3/lambdaDoor_backend',
    web:'https://lamdadoor.com',
},
{id:6,
    icon:kidsfly,
    name:'Kids Fly API',
    description:'An app that enables parents flying with kids, a hassle free flight.',
    stack:['EXPRESS' , 'POSTGRES', 'NODE' , 'JEST'],
    responsibilities:[
        'Built API consumed by front-end using Node JS, Express , and POSTGRES',
    ],
    github:'https://github.com/kids-fly/backend',
    web:'https://kidsflyapi.herokuapp.com',
},
{   id:3,
    icon:reactwars,
    name:'React Wars',
    description:'A simple app providing details about star wars characters',
    stack:['REACT', 'STYLED-COMPONENTS' , 'API', ],
    responsibilities:[
        'Built responsive front-end for web app  using React components',
        'Used styled-components to ensure responsiveness',
    ],
    github:'https://github.com/basilcea/Sprint-Challenge-React-Wars',
    web:'https://ceawars.netlify.com',
},

{id:6,
    icon:AdventureHouse,
    name:'Adventure House',
    description:'A multi-user real-time virtual world game where players can transverse rooms in four directions',
    stack:['REACT' , 'DJANGO', 'PYTHON' , 'REDUX'],
    responsibilities:[
        'Implemented Algorithm for the dynamic creation of the room',
        'Designed the front-end for the game'
    ],
    github:'https://github.com/CSEU2-BW',
    web:'https://mud-game-lambda.netlify.com/',
}
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
            </ProjectsDiv>
        </ScrollAnimation>
        </Container>
    )
}
export default Projects