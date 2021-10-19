import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const BigLocationCircle: React.FC = () => (
  <Svg width="71" height="71" viewBox="0 0 71 71" fill="none">
    <Circle cx="35.5" cy="35.5" r="35.5" fill="#0C5268" />
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M52.639 21.3301L37.6548 53.8209C35.9813 57.4468 30.5 56.2906 30.5 52.2494V38.5H16.7447C12.7351 38.5 11.5389 33.0226 15.1733 31.3451L47.6627 16.3538C50.7834 14.9134 54.116 18.13 52.639 21.3301ZM48.7206 18.6193L16.2248 33.6138C15.0146 34.1723 15.409 35.9986 16.7489 35.9986H33V52.2486C33 53.6489 34.8434 53.9457 35.3849 52.7725L50.3791 20.2788C50.8713 19.2122 49.7701 18.135 48.7206 18.6193Z" fill="white" />
  </Svg>
);

export default BigLocationCircle;
