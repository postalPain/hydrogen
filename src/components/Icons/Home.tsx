import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IHome {
  width?: number;
  height?: number;
  fill?: string;
}

const Home: React.FC<IHome> = ({ width = 28, height = 29, fill = '#eee' }) => (
  <Svg width={width} height={height} viewBox="0 0 28 29" fill="none">
    <Path
      d="M27.7419 14.3123L14.6169 1.20119C14.2756 0.860304 13.72 0.860304 13.3788 1.20119L0.25375 14.3123C0.091875 14.474 0 14.6969 0 14.9285V28.0397C0 28.5248 0.39375 28.9137 0.875 28.9137H10.5C10.9812 28.9137 11.375 28.5248 11.375 28.0397V19.2989H16.625V28.0397C16.625 28.5248 17.0187 28.9137 17.5 28.9137H27.125C27.6063 28.9137 28 28.5248 28 28.0397V14.9285C28 14.6969 27.9081 14.474 27.7419 14.3123ZM26.25 27.1656H18.375V18.4248C18.375 17.9397 17.9813 17.5508 17.5 17.5508H10.5C10.0188 17.5508 9.625 17.9397 9.625 18.4248V27.1656H1.75V15.2913L14 3.05423L26.25 15.2913V27.1656Z"
      fill={fill}
    />
  </Svg>
);

export default Home;
