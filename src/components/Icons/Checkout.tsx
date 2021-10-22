import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ICheckout {
  width?: number;
  height?: number;
  fill?: string;
}

const Checkout: React.FC<ICheckout> = ({ width = 26, height = 29, fill = '#eee' }) => (
  <Svg width={width} height={height} viewBox="0 0 26 29" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 7.93871C20 4.0833 16.8598 0.946655 13 0.946655C9.14016 0.946655 6 4.0833 6 7.93871H0.75V24.5448C0.75 26.9584 2.70874 28.9149 5.125 28.9149H20.875C23.2913 28.9149 25.25 26.9584 25.25 24.5448V7.93871H20ZM13 2.69467C15.8949 2.69467 18.25 5.04711 18.25 7.93871H7.75C7.75 5.04711 10.1051 2.69467 13 2.69467ZM23.5 24.5448C23.5 25.9906 22.3224 27.1669 20.875 27.1669H5.125C3.67759 27.1669 2.5 25.9906 2.5 24.5448V9.68672H6V12.3087C6 12.7915 6.39178 13.1827 6.875 13.1827C7.35822 13.1827 7.75 12.7915 7.75 12.3087V9.68672H18.25V12.3087C18.25 12.7915 18.6417 13.1827 19.125 13.1827C19.6083 13.1827 20 12.7915 20 12.3087V9.68672H23.5V24.5448Z"
      fill={fill}
    />
  </Svg>
);

export default Checkout;
