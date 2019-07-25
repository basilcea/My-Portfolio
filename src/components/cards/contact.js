import React from 'react';
import styled from 'styled-components';
import {FaSignOutAlt , FaCheckCircle} from 'react-icons/fa';

const Form = styled.form `
display:flex;
border-radius:10px;
flex-direction:column;
width:80%;
height:50vh;
margin:10%;
padding:2% 10%;
justify-content:space-between;
border:1px solid black;
input{
    background:none;
    border:1px solid black;
    height:5vh;
    border-radius:10px;
    width:100%;
    outline:none;
    margin:3% 0%;
    padding-left:5%;
}
input[type=submit]{
    width:60%;
    margin:0% 20%;
}
`;
const Textarea = styled.textarea `
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
    color: grey;
  }
  @media(max-width:500px){
      font-size:0.6em;
    }
}
`;
const Previous = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  margin-right:10%;
  margin-bottom:5%;
  font-size: 1.5em;
  transform:rotate(180deg);
`;
const Features = styled.div`
display:flex;
justify-content:space-between;
margin-left:10%;
width:80%;
`;
const Activity= styled.div`
display:flex;
justify-content:center;
@media (max-width:1024px){
  flex-direction:column;
  font-size:.6em;
  align-items:center;
}
`;
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends React.Component  {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

change = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}

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
render(){
    return(
        <div>
        <Features>
        <Activity><FaCheckCircle/> Remote        </Activity>
        <Activity><FaCheckCircle/> Javascript    </Activity>
        <Activity><FaCheckCircle/> Tech Speaking </Activity>
       <Activity><FaCheckCircle/>  Front-end      </Activity> 
        <Activity><FaCheckCircle/> Back-end      </Activity>
        </Features>
        <Form name='contact' data-netlify="true" data-netlify-honeypot="bot-field" onSubmit = {this.handleSubmit}>
        <input type='email' value={this.state.email} name='email' placeholder="Your Email" onChange={this.change}  required/>
        <input type='text' value={this.state.name} name='name' placeholder="Your Name" onChange={this.change}    required/>
        <Textarea name='message'  value={this.state.message} placeholder= 'Hello Basil , i would like to discuss.....' onChange={this.change}   required/>
        <input type='submit'  value='Send Message'/>
        </Form>
        <Previous onClick={()=>this.props.action(1)}> <FaSignOutAlt /></Previous>
        </div>
    )
}
}
export default Contact