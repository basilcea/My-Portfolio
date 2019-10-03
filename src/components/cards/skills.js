import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
width:30%
height:30vh ;
box-shadow: -1px 2px 19px -3px rgba(196,194,196,1);
h3{
    text-align:center;
}
p{
    padding:5%;
    text-align:justify;
}
`
const Icon = styled.div`
display:flex;
justify-content:center;
font-size:2em;
padding-top:5%
color: rgb(32, 53, 67);
`;

const SkillCard = (props) => {
    return (
        <Container>
            <Icon>{props.data.icon}</Icon>
            <h3>{props.data.name}</h3>
            <p>{props.data.description}</p>
        </Container>
    )
}
export default SkillCard