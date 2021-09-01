import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const TabBarSide: React.FC<SvgProps> = (props) => (
  <Svg width="35" height="117" viewBox="0 0 35 117" fill="none" {...props}>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V117H35V22H22C9.84961 22 0 12.1503 0 0Z" fill="#0C5268" />
  </Svg>
);

export default TabBarSide;
