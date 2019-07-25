import React, {} from "react";
import styled from "styled-components";
import CarouselContainer from "./carouselContainer";
import Navbar from "./navbar/navContainer";
import { TimelineLite } from "gsap/all";


const HeaderContainer = styled.div`
  display: flex;
  width: 50%;
  z-index:3;
  margin-bottom:1%;
  @media (max-width: 750px) {
    width: 100%;

  }

`;

class Header extends React.Component {
  state = {
    card: false,
  };
  container;

  componentDidMount() {
    new TimelineLite({ play: true }).fromTo(
      this.container,
      1,
      { x: "2000", y: 0 },
      {
        x: "0%",
        y: 0,
        marginLeft: "0%",
        onStart: () => {
          this.props.setCarouselId(0)
          this.setState({
            card: true
          });  
        },
        onComplete:()=> {
          
          this.props.animateCard(this.state.card);
        }
      }
    );
  }
  componentDidUpdate(){
    this.props.setPrevious(this.state.previous);
  }

  getCarouselId = id => {
    this.props.setCarouselId(id);
  };
  setPrevious = () => {
    this.setState({
      previous: this.props.previous
    });

  
  };

  render() {
    return (
      <HeaderContainer ref={div => (this.container = div)}>
        <Navbar
          changeCarousel={this.getCarouselId}
          carouselId ={this.props.previous}
          setPrevious={this.setPrevious}
        />
        <CarouselContainer />
      </HeaderContainer>
    );
  }
}

export default Header;
