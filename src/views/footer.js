import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    background-color: rgb(32, 53, 67);
    color:white;
    text-align:center;
    height:100%;
    padding:1vh 0;
    @media(max-height:450px){
        padding:0;
    }
    @media(max-width:800px){
        padding:0.3vh;
    }
`
const Footer = () => {
    return (
        <Container>
            Copyright &copy;  2019. Powered by CEA.
        </Container>
    )
}
export default Footer