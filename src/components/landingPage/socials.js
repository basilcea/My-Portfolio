import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { socialData } from '../../data';
const Social = styled.div`
  margin: 3% 1%;
  width: 15%;
  height: 5vh;
  text-align: center;

  a {
    color: black;
    font-size: 1.5em;
    @media (max-width: 500px) {
      font-size: 1em;
    }
    &:hover {
      color: teal;
    }
  }
`;

class Socials extends React.Component {
  Container = React.createRef;

  render() {
    return socialData.map(card => {
      return (
        <Social key={card.name}>
          <NavLink to={card.url}>
            <card.icon />
          </NavLink>
        </Social>
      );
    });
  }
}
export default Socials;
