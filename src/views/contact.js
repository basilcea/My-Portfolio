import React from "react";
import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";
import ScrollAnimation from "react-animate-on-scroll";
import map from "../assests/map.png";
import "../animate.css";
const Container = styled.div`
  margin-left: 15%;
  width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  h2 {
    width: 85%;
    margin-top:7%;
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
const Map = styled.div`
  background: url(${map});
  background-repeat: no-repeat;
  background-size: 90% 95%;
  width: 100%;
  height: 100%;
  opacity: 1;
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
        <h2>CONTACT ME</h2>
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
            animateIn="fadeIn"
            animateOut="fadeOut"
            style={{ width: "50%", height: "100%" }}
          >
            <Map/>
          </ScrollAnimation>
        </Place>
      </Container>
    );
  }
}
export default Contact;
