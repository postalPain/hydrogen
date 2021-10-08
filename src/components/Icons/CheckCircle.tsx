import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ICheckCircle {
  width?: number;
  height?: number;
  fill?: string;
}

const CheckCircle: React.FC<ICheckCircle> = ({ width, height, fill }) => (
  <Svg width={width} height={height} viewBox="0 0 14 14" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0.21875C3.25481 0.21875 0.21875 3.25481 0.21875 7C0.21875 10.7452 3.25481 13.7812 7 13.7812C10.7452 13.7812 13.7812 10.7452 13.7812 7C13.7812 3.25481 10.7452 0.21875 7 0.21875ZM7 12.9062C3.75528 12.9062 1.09375 10.2797 1.09375 7C1.09375 3.75531 3.72025 1.09375 7 1.09375C10.2447 1.09375 12.9062 3.72025 12.9062 7C12.9062 10.2447 10.2797 12.9062 7 12.9062ZM10.8727 5.38778L5.9377 10.2832C5.80904 10.4108 5.60128 10.41 5.47367 10.2813L3.12545 7.91413C2.99783 7.78548 2.99865 7.57772 3.1273 7.45011L3.36027 7.21902C3.48893 7.09141 3.69668 7.09223 3.8243 7.22088L5.71036 9.12218L10.1794 4.68893C10.3081 4.56132 10.5159 4.56214 10.6435 4.69079L10.8746 4.92376C11.0022 5.05241 11.0013 5.26017 10.8727 5.38778Z"
      fill={fill}
    />
  </Svg>
);

CheckCircle.defaultProps = {
  width: 14,
  height: 14,
  fill: '#b4bc48',
};

export default CheckCircle;
