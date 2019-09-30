import React from 'react';
import styled from 'styled-components';

const SlideImg = styled.img`
  box-shadow: 0 0 8px 1px rgba(196, 196, 196, 0.2);
  cursor: pointer;
  height: 118px;
  margin: 0 15px;
  min-width: 80px;
`;

const Slide = props => <SlideImg
  src={props.image}
  onClick={() => props.onMovieSelect(props.image)}
  ></SlideImg>;

export default Slide;