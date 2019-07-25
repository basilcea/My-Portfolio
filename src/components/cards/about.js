import React from "react";
import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";
import Typed from "react-typed";
const Div = styled.div`
width:80%;
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height:85vh;
  @media (max-width:750px){
        min-height:30vh
      }
  h3{  font-size:14px;
    @media (min-width:750px){
        font-size:1.3vw
    }
  }
  div {
    margin-left: 2%;
   &:first-of-type{
     font-size:12px;
     @media (min-width:750px) {
      font-size: 1.1vw;
   }
    @media (min-width:1024px) {
      font-size: 1.1vw;
      p {
        line-height: 12px;
      }
    }
    div {
      margin-left: 3%;
      font-style: italic;
      span {
        font-weight: bold;
        color:black;
      }
      @media (min-width:1024px){
        p {
        line-height: 10px;
      }
      }
    
    }
  }
  }
`;
const Next = styled.div`
  text-align: right;
  margin: 1%;
  font-size:20px;
`;

class About extends React.Component {
  state = {
    other: false
  };
  change = () => {
    this.setState({
      other: true
    });
  };
  render() {
    return (
      <Div>
        <h3>
          ....a passionate, tech-savy engineer building reuseable and scalable
          technology solutions.....{" "}
        </h3>
        <p>{"{"} </p>
        <div>
          <Typed
            strings={[
              `<p>Career Description: "FullStack Software Development"</p>
            
            <p>Current Location :  "Lagos, Nigeria"</p>
            
            <p>Languages : ["English" , "Javascript" ]</p>
            <p>Tools: { </p>
                <div><p><span>Front-end</span> : [ "React" , "Redux" , "LESS", "Bootstrap", "Styled-Components" ],</p>
                <p><span>Back-end</span>  : [ "Node JS" , "Express JS" ] ,</p>
                <p><span>Database</span> : [ "Postgres" , "SQLite" , "Sequelize" , "Knex" ], </p>
                <p><span>Deployment</span> : [ "Travis" , "Heroku" ,"Netlify" ],</p>
                <p><span>Animations</span> : ["Gsap" ,"Figma" , "Photoshop" ] , </p>
                <p><span>Project Management</span>: ["Github", "Pivotal Tracker" , "Trello"]</p>
                </div>
            <p>} </p>
            <p>Architecture : ["REST", "GraphQL"],</p>
            <p>Methodology :["Agile" , "Test-Driven" , "Design-Driven"]</p>
            <p>"Not Developing Software" ? "Data Science" : "Volunteer Service"</p>`
            ]}
            cursorChar=""
            startDelay={1000}
            onComplete={() => this.change()}
          />
        </div>
        <p>{"}"} ;</p>
        {this.state.other && (
          <Next onClick ={()=>this.props.action(1)}>
            <FaSignOutAlt />
          </Next>
        )}
      </Div>
    );
  }
}
export default About;
