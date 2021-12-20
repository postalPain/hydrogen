import React from 'react';
import { Dimensions } from 'react-native';
import Svg, { Rect, SvgProps } from 'react-native-svg';
import { HEADER_HEIGHT } from '../../constants';

const { width: wWidth } = Dimensions.get('window');

const NavBackground: React.FC<SvgProps> = (props) => (
  <Svg width={wWidth} height={HEADER_HEIGHT} viewBox={`0 0 ${wWidth} 95`} fill="none" {...props}>
    <Rect width={wWidth} height="95" fill="#0C5268" />
  </Svg>
);

export default NavBackground;
