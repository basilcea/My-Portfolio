import React from "react";
import styled from "styled-components";
import backgrounds from "../../assests/mine.png";
import Typed from "react-typed";


const CarouselContainer = styled.div`
  width: 100%;
  height: 48vh;
  margin:0;
  padding:0;
  display:flex;
  flex-direction:column;
`;

const CarouselDiv = styled.div`
  background: url(${backgrounds}) #222222;
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 120% -2%;
  background-blend-mode: color-dodge;
  width: 100%;
  margin: 0%;
  padding: 0;
  height: 48vh;
  border-radius: 10px 10px 0px 0px;
  -webkit-clip-path: polygon(
    10% 0%,
    0% 1px,
    100% 1px,
    100% 83%,
    50% 95%,
    0% 80%,
    0% 0%
  );
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media(max-width:750px){
    border-radius:0;
    -webkit-clip-path: polygon(
    10% 0%,
    0% 0px,
    100% 0px,
    100% 83%,
    50% 95%,
    0% 80%,
    0% 0%
  );
  }
`;
const MainCarousel = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 0;
  padding: 0;
  margin-left: 5%;
  margin-top: 7%;
  height: 70%;
  h1 {
    color: whitesmoke;
    margin: 0;
  
    padding-bottom:10px;
  }
  h3, h4 {
    color: white;
    text-align: center;
    padding-left:30%;
    font-size:1.5em;
    display: inline;
  
  }h4{
    padding-left:40%;
  }
`;

const Carousel = () => {
  return (
    <CarouselContainer>
      
      <CarouselDiv>
        <MainCarousel>
        <h3>
          <Typed
            strings={[` OGBONNA <br/> BASIL  `]}
            typeSpeed={40}
            cursorChar='...'
          />

          </h3>
        </MainCarousel>
      </CarouselDiv>
    </CarouselContainer>
  );
};

export default Carousel;
