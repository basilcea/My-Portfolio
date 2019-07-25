import React, { Fragment } from "react";
import styled from "styled-components";
import { TimelineLite } from "gsap/all";
import { CarouselInfo } from "../../data";
const Card = styled.div`
  ${props =>
    props.started && props.value === props.info
      ? `display:block`
      : `display:none`}

  margin: 1.8% 0%;
  z-index: 1;
  width: 50%;
  background-color: white;
  border-radius: 0px 10px 10px 0px;
  position: absolute;

  @media (min-width: 750px) {
    height: 90vh;
  }
  h2 {
    color: black;
    text-align: center;
    padding-top: 3%;
    line-height: 10px;
  }

  @media (max-width: 750px) {
    width: 100%;
    position: absolute;
    top: 75%;
    left: 0px;
    z-index: 3;
    background-color: white;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 0px;
    margin-bottom: 0px;
    h2 {
      font-size: 16px;
    }
  }
  @media (max-width: 500px) {
    top: 78%;
  }
`;

class CardContainer extends React.Component {
  state = {
    onScroll: false,
    prevData: {
      display: false,
      id: 0
    },
    card: []
  };
  container;
  tween = (value, action) =>
    new TimelineLite({ [action]: true }).fromTo(
      value,
      1,
      { x: "-80%", y: 0 },
      {
        x: "0.1%",
        y: 0
      }
    );
  tween1 = (value, action) =>
    new TimelineLite({ [action]: true }).fromTo(
      value,
      0.5,
      {
        x: "0.1%",
        y: 0
      },
      {
        x: "-80%",
        y: 0,
        display: "none",
        "font-size": "0.4em"
      }
    );

  componentDidMount() {
    this.setState(state => ({
      ...state.prevData,
      prevData: {
        display: this.props.displayed,
        id: this.props.cardToDisplay
      },
      card: CarouselInfo
    }));
    this.container && this.tween(this.container, "play");
  }
  
  componentWillReceiveProps() {
    if (this.state.prevData.id !== this.props.cardToDisplay) {
      this.container && this.tween1(this.container, "play");
      setTimeout(() => {
        this.setState(state => ({
          prevData: {
            ...state.prevData,
            id: this.props.cardToDisplay
          },
          card: CarouselInfo
        }));
        this.container && this.tween(this.container, "play");
      }, 600);
    }
  }
  goNext = id => {
    this.props.setCarouselId(id);
  };

  render() {
    const singleCard =
      this.state.prevData.display &&
      this.state.card.filter(
        Carousel => Carousel.id === this.state.prevData.id
      );

    return (
      <Fragment>
        {singleCard &&
          singleCard.map(Carousel => (
            <Card
              key={Carousel.id}
              info={Carousel.id}
              value={this.state.prevData.id}
              started={this.state.prevData.display}
              show={this.props.displayed}
              ref={div => (this.container = div)}
              onScroll={() => this.scroll()}
              startScroll={this.state.onScroll}
            >
              <div>
                {" "}
                <h2>{Carousel.page}</h2>
                <Carousel.value action={this.goNext} />
              </div>
            </Card>
          ))}
      </Fragment>
    );
  }
}

export default CardContainer;
