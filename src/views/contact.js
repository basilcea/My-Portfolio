import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";

import "../animate.css";
const Container = styled.div`
  margin-left: 15%;
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  h2 {
    width: 85%;
    margin-top: 7%;
    text-align: center;
    color: rgb(32, 53, 67);
  }
`;
const Form = styled.form`
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  border: 2px solid rgb(32, 53, 67);
  width: 90%;
  height: 50vh;
  margin: 5% 0%;
  padding: 2% 5%;
  justify-content: space-between;
  input {
    background: none;
    font-size: 1em;
    height: 5vh;
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
  font-size: 1em;
  height: 20vh;
  padding-left: 5%;
  padding-top: 2%;
  outline: none;
  &::placeholder {
    color: black;
  }
  @media(max-width:500px){
      font-size:0.6em;
    }
}
`;
const Features = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
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
`;
const Place = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5%;
`;
const Div = styled.div`
  width: 50%;
`;


const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  change = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };
  render() {
    return (
      <Container>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOut="fadeOut"
          style={{ height: "20%" }}
        >
          <h2>CONTACT ME</h2>
        </ScrollAnimation>
        <Place>
          <Div>
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
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
              <Form onSubmit={this.handleSubmit}>
                <input
                  type="email"
                  value={this.state.email}
                  name="email"
                  placeholder="Your Email"
                  onChange={this.change}
                  required
                />
                <input
                  type="text"
                  value={this.state.name}
                  name="name"
                  placeholder="Your Name"
                  onChange={this.change}
                  required
                />
                <Textarea
                  name="message"
                  value={this.state.message}
                  placeholder="Your Message"
                  onChange={this.change}
                  required
                />
                <input type="submit" value="Send Message" />
              </Form>
            </ScrollAnimation>
          </Div>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeOut"
            style={{ width: "50%", height: "100%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.497204439343!2d3.3616950272125!3d6.50594572470166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c8c358b3f4b%3A0x5552cfbd43df8434!2sYaba%2C%20Oworonshoki!5e0!3m2!1sen!2sng!4v1570467602009!5m2!1sen!2sng"
              width="100%"
              height="95%"
              frameborder="0"
              style={{border:'0'}}
              allowfullscreen=""
            />
          </ScrollAnimation>
        </Place>
      </Container>
    );
  }
}
export default Contact;
