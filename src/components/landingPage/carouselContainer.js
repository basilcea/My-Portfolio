import React from "react";
import styled from "styled-components";
import Carousel from "./carousel";
import Social from "./socials";
import image from "../../assests/image.png";
import figma from "../../assests/figma.png";
import gsap from "../../assests/greensock.png";
import js from "../../assests/js.png";
import jupyter from "../../assests/jupyter.png";
import node from "../../assests/node.jpg";
import Particles from "react-particles-js";
import photoshop from "../../assests/photoshop.png";
import python from "../../assests/python.png";
import react from "../../assests/react.png";
import redux from "../../assests/redux.png";
import Typed from "react-typed";

const CarouselDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 99%;
  padding: 0;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (min-width:750px) {
    height: 95vh;
  }
  @media (max-width: 750px) {
    min-height: 100%;
    border-radius: 0px;
    width:100%;
  }
`;
const ParticleDiv = styled.div`
  width: 90%;
  position: absolute;
  opacity: 0.2;
  z-index: 2;
  height: 100vh;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Passport = styled.div`
  display: flex;
  background-color: #f0f0f0;
  border-radius: 50%;
  top: 36%;
  z-index: 3;
  position: absolute;
  width: 150px;
  height: 140px;
  @media (max-width: 1200px) {
    top: 40%;
  }
  @media (max-width: 1024px) {
    width: 130px;
    height: 120px;
  }
  @media (max-width: 750px) {
    top: 60%;
    width: 120px;
    height: 100px;
  }
  @media (max-width: 500px) {
    top: 50%;
    width: 100px;
    height: 90px;
  }

  img {
    background: url(${image});
    background-size: cover;
    background-position: center;
    border: 2px solid white;
    width: 90%;
    margin: 2% 5%;
    height: 100%;
    border-radius: 50%;
  }
`;
const Details = styled.div`
  width: 100%;
  z-index:3;
  border-radius: 0px 0px 10px 10px;
  h2 {
    font-weight: bolder;
    font-size: 1.5vw;
    margin-top: 10%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: center;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }
`;
const Socials = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
  width: 40%;
  height: 13vh;
  margin-left:33%;
  @media (max-width: 1000px) {
    width: 60%;
    margin-left:23%;
  }
`;

class CarouselContainer extends React.Component {
  state = {
    show: false,
    offset: 0
  };
  gifContainer;
  componentDidMount() {}

  showStatic = () => {
    this.setState({
      show: true
    });
  };

  render() {
    return (
      <CarouselDiv>
        <ParticleDiv>
          <Particles
            params={{
              particles: {
                number: {
                  value: 9,
                  density: {
                    enable: true,
                    value_area: 400
                  }
                },
                color: {
                  value: "#ffffff"
                },
                shape: {
                  type: "images",
                  stroke: {
                    width: 0,
                    color: "#000"
                  },
                  polygon: {
                    nb_sides: 6
                  },
                  images: [
                    {
                      src: `${gsap}`,
                      width: 20,
                      height: 20
                    },
                    {
                      src: `${figma}`,
                      width: 20,
                      height: 20
                    },

                    {
                      src: `${photoshop}`,
                      width: 20,
                      height: 20
                    },
                    {
                      src: `${js}`,
                      width: 20,
                      height: 20
                    },
                    {
                      src: `${jupyter}`,
                      width: 20,
                      height: 20
                    },
                    {
                      src: `${react}`,
                      width: 20,
                      height: 20
                    },
                    {
                      src: `${redux}`,
                      width: 20,
                      height: 20
                    },
                    {
                      src: `${python}`,
                      width: 20,
                      height: 20
                    },
                    {
                      src: `${node}`,
                      width: 20,
                      height: 20
                    }
                  ]
                },
                opacity: {
                  value: 0.3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 12,
                  random: false,
                  anim: {
                    enable: true,
                    speed: 5,
                    size_min: 10,
                    sync: false
                  }
                },
                line_linked: {
                  enable: false,
                  distance: 200,
                  color: "#ffffff",
                  opacity: 0.2,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 3,
                  direction: "bottom-left",
                  random: false,
                  straight: true,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: false,
                    mode: "repulse"
                  },
                  onclick: {
                    enable: false,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}
          />
        </ParticleDiv>
        <Passport>
          <img src="" alt="" />
        </Passport>
        <Carousel />
        <Details>
          <h2>
            {"<"}
            <Typed
              strings={[`  Software Engineer `]}
              typeSpeed={60}
              cursorChar=""
            />
            {"/>"}
          </h2>
          <Socials>
            <Social />
          </Socials>
        </Details>
      </CarouselDiv>
    );
  }
}

export default CarouselContainer;
