import React,{useEffect, useState} from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from './footer';
import "../animate.css";
const Container = styled.div`
  margin-left: 15%;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    width: 85%;
    margin-top: 7%;
    text-align: center;
    color: rgb(32, 53, 67);
    @media (max-width: 800px) {
      margin-top:5%;
      width:100%;
    }
  }
  @media (max-width: 800px) {
    width: 100%;
    height:100%;
    margin: 0;
  }
`;
const Form = styled.form`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  border: 2px solid rgb(32, 53, 67);
  width: 90%;
  height: 500px;
  margin: 5% 0%;
  padding: 2% 5%;
  justify-content: space-between;
  @media (max-width: 800px) {
    margin: 5%;
  }
  input {
    background: none;
    font-size: 1em;
    height: 50px;
    border-radius: 10px;
    width: 100%;
    outline: none;
    margin: 3% 0%;
    padding-left: 5%;
    &::placeholder {
      color: black;
    }
  }
  input[type="submit"] {
    width: 60%;
    margin: 0% 20%;
    &:hover{
      background-color:rgb(32, 53, 67);
      color:white
    }
  }
`;
const Textarea = styled.textarea`
width: 100%;
  border-radius: 5px;
  margin: 3% 0%;
  border: 1px solid black;
  background-color: inherit;
  color: black;
  resize: none;
  font-size: 1rem;
  height: 20vh;
  padding-left: 5%;
  padding-top: 2%;
  outline: none;
  &::placeholder {
    color: black;
  }
}
`;
const Features = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  @media (max-width: 800px) {
    margin: 0% 5%;
  }
`;
const Activity = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(32, 53, 67);
  @media (max-width: 1024px) {
    flex-direction: column;
    font-size: 0.6em;
    align-items: center;
  }
  @media(max-height: 450px){
    font-size:0.8em;
  }

`;
const Place = styled.div`
  display: flex;
  width: 100%;
  height:100%;
  margin-top: 5%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Div = styled.div`
  width: 50%;
  .contactAnim{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-height: 450px) {
    height:100vh;
  }
`;
const MapDiv = styled.div`
width:50%;
height:100%;
.map{
  height:100%;
}
@media (max-width: 800px) {
  display:none
}
`;

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};





  const Contact = (props)=> {
    useEffect(()=>{
      props.setLocation('contact')
    },[])
    const [details, setDetails] = useState(
      { name:'',email:'',message:'' })

      const change = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setDetails(details => ({ ...details, [name]: value }));
      };
    const handleSubmit = e => {
  
      console.log(details)
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...details })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));
        e.preventDefault();
 
    };
    return (
      <Container>
          <h2>CONTACT ME</h2>
        <Place>
          <Div>
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut" className='contactAnim'>
              <Features>
                <Activity>
                  <FaCheckCircle /> Remote{" "}
                </Activity>
                <Activity>
                  <FaCheckCircle /> Javascript{" "}
                </Activity>
                <Activity>
                  <FaCheckCircle /> Tech Speaking{" "}
                </Activity>
                <Activity>
                  <FaCheckCircle /> Front-end{" "}
                </Activity>
                <Activity>
                  <FaCheckCircle /> Back-end{" "}
                </Activity>
              </Features>
              <Form onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={details.email}
                  name="email"
                  placeholder="Your Email"
                  onChange={change}
                  required
                />
                <input
                  type="text"
                  value={details.name}
                  name="name"
                  placeholder="Your Name"
                  onChange={change}
                  required
                />
                <Textarea
                  name="message"
                  value={details.message}
                  placeholder="Your Message"
                  onChange={change}
                  required
                />
                <input type="submit"  value="Send Message" />
              </Form>
            </ScrollAnimation>
          </Div>
          <MapDiv>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeOut"
            className ='map'
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.497204439343!2d3.3616950272125!3d6.50594572470166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c8c358b3f4b%3A0x5552cfbd43df8434!2sYaba%2C%20Oworonshoki!5e0!3m2!1sen!2sng!4v1570467602009!5m2!1sen!2sng"
              style={{
                border: "0",
                frameBorder: "0",
                width: "100%",
                height: "95%",
                allowFullScreen: ""
              }}
              title='location'
            />
          </ScrollAnimation>
          </MapDiv>
        </Place>
      </Container>
    );
  }

export default Contact;
