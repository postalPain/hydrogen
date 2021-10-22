import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface ISearch {
  width?: number;
  height?: number;
  fill?: string;
}

const Search: React.FC<ISearch> = ({ width = 29, height = 30, fill = '#eee' }) => (
  <Svg width={width} height={height} viewBox="0 0 29 30" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.091 27.5214L20.9647 20.4032C20.8376 20.2763 20.6719 20.21 20.4951 20.21H19.9261C21.8209 18.1629 22.981 15.4314 22.981 12.4241C22.981 6.08393 17.8379 0.946655 11.4905 0.946655C5.14311 0.946655 0 6.08393 0 12.4241C0 18.7643 5.14311 23.9016 11.4905 23.9016C14.5012 23.9016 17.2358 22.7428 19.2853 20.8556V21.4185C19.2853 21.5951 19.3571 21.7606 19.4786 21.8875L26.6049 29.0058C26.8646 29.2651 27.2844 29.2651 27.5441 29.0058L28.091 28.4595C28.3506 28.2001 28.3506 27.7808 28.091 27.5214ZM11.4908 22.1358C6.11564 22.1358 1.76803 17.7932 1.76803 12.4241C1.76803 7.0551 6.11564 2.71242 11.4908 2.71242C16.8659 2.71242 21.2135 7.0551 21.2135 12.4241C21.2135 17.7932 16.8659 22.1358 11.4908 22.1358Z"
      fill={fill}
    />
  </Svg>
);

export default Search;
