import React,{useEffect} from "react";
import styled from "styled-components";
import developer from "../assests/developer.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "../animate.css";
const Container = styled.div`
  width: 85%;
  margin-left: 15%;
  display: flex;
  height:96vh;
  justify-content: space-between;
  align-items: center;
  .displayPix{
    width:50%;
    height:100%;
    @media(max-width:1023px){
      width:80%;
    }
  }
  @media(max-width:1023px){
    flex-direction:column;
    margin:0%;
    width:100%;
    height:100%;
  }
  }

`;
const Details = styled.div`
  width: 50%;
  margin-right: 10%;
  margin-top: 5%;
  text-align: justify;

  @media (max-width: 1024px) {
    height:100%;
  }
  @media (max-width: 800px) {
    width: 90%;
    height:55.5vh;
    margin-right: 0%;
  }
    @media (max-width: 600px) {
    height:100%;
  }
  @media (max-height: 450px) {
    height:100%;
  }
  h2 {
    color: rgb(32, 53, 67);
    font-size: 1.5em;
    @media (max-width: 800px) {
      text-align: center;
    }
    @media (max-height: 450px) {
      text-align: left;
    }
  }
  p {
    line-height: 22px;
    font-size: 0.9em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 600px) {
      line-height: 18px;
      font-size: 0.5em;
      padding: 0%;
    }
    @media (max-width: 1023px) {
      font-size: 1em;
    }
  }
  h3 {
    color: rgb(32, 53, 67);
    @media (max-width: 600px) {
      text-align: center;
    }
  }
  span {
    border: 2px solid rgb(32, 53, 67);
    border-raduis: 5px;
    width: 18.2%;
    margin-bottom: 5%;
    text-align: center;
    @media (max-width: 600px) {
      line-height: 18px;
      font-size: 0.6em;
    }
  }
`;
const Side = styled.div`
width: 80%;
height:70%;
margin-top:30%;
background-size:100%;
background-position:center;
background-repeat:no-repeat;
img{
  width:100%;
  height:100%;
}
@media(max-width:600px){
  height:40vh;
  width:100%;
  background-size:120% 100%;
  margin-bottom:1%;
}
@media(max-height:450px){
  height:60vh;
  margin-left:5%;
  background-size:100%;
  width:90%;
}
@media(min-height:1023px){
  height:40vh;
  margin-left:10%;
  background-size:100%;
}
`;
const Initial = styled.div`
  font-weight: bold;
  @media (max-width: 800px) {
    padding-top: 5%;
    text-align: center;
  }
  @media (max-height: 450px) {
    padding-top: 5%;
    text-align: left;
  }
`;


const About = (props) => {
  useEffect(()=>{
    props.setLocation('about')
  },[])
  return (
    
    <Container>
      <ScrollAnimation animateIn="fadeIn" className="displayPix">
        <Side>
          <img src={developer} alt=''/>
        </Side>
      </ScrollAnimation>
      <Details>
        <ScrollAnimation animateIn="fadeIn" style={{ width: "100%" }}>
          <h2>About Me</h2>

          <Initial>Firstly, I love coding!</Initial>
          <p>
            When I was 10, I went with a classmate to a local cyber cafe to do
            research for a school project. While there, I started inputting the
            web address in the Google search bar. As this was my first
            experience with computers, my classmate had to correct me quite a
            number of times before I understood the difference between the
            search bar and the web address. It was then and there that I
            realized I had to learn about this intriguing device that consumed
            the time of everyone in the cyber cafe. Over the years, technology
            has evolved and the number of people going to cyber cafes has
            drastically reduced in Nigeria, but my excitement about technology
            and the possibilities it holds has only increased.
          </p>
          <p>
            I am Ogbonna Basil, a software engineer. I have a degree in
            Mathematics and Statistics, certifications in data science, and
            experience in building software applications.
          </p>
          <p>
            My ultimate desire is to improve human lives and raise human
            potential through software development and to do my part in making
            our cities smarter and our lives less stressful. When I am not
            coding, I am volunteering, listening to music, or playing chess.
          </p>
          <h3>My Core </h3>
          <p>
            {" "}
            <span>HTML</span>
            <span>CSS</span>
            <span>Javascript</span>
            <span> Typescript</span>
            <span>Python</span>
            <span>React</span>
            <span>Node Js</span>
            <span>REST</span>
            <span>GraphQl</span>
            <span>Postgres</span>
            <span>MongoDb</span>
            <span>Django</span>
            <span>Flask</span>
            <span>AWS</span>
            <span>Pytorch</span>
          </p>
        </ScrollAnimation>
      </Details>
    </Container>
  );
};
export default About;
