import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IAccount {
  width?: number;
  height?: number;
  fill?: string;
}

const Account: React.FC<IAccount> = ({ width, height, fill }) => (
  <Svg width={width} height={height} viewBox="0 0 22 22" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 1.375C13.6555 1.375 15.8125 3.53203 15.8125 6.1875C15.8125 8.84297 13.6555 11 11 11C8.34453 11 6.1875 8.84297 6.1875 6.1875C6.1875 3.53203 8.34453 1.375 11 1.375ZM16.5 15.125C18.773 15.125 20.625 16.977 20.625 19.25V20.625H1.375V19.25C1.375 16.977 3.22695 15.125 5.5 15.125C9.15234 15.125 8.3918 15.8125 11 15.8125C13.6168 15.8125 12.8434 15.125 16.5 15.125ZM11 0C7.58398 0 4.8125 2.77148 4.8125 6.1875C4.8125 9.60352 7.58398 12.375 11 12.375C14.416 12.375 17.1875 9.60352 17.1875 6.1875C17.1875 2.77148 14.416 0 11 0ZM16.5 13.75C12.5297 13.75 13.4492 14.4375 11 14.4375C8.55937 14.4375 9.46601 13.75 5.5 13.75C2.46211 13.75 0 16.2121 0 19.25V20.625C0 21.3855 0.614453 22 1.375 22H20.625C21.3855 22 22 21.3855 22 20.625V19.25C22 16.2121 19.5379 13.75 16.5 13.75Z"
      fill={fill}
    />
  </Svg>
);

Account.defaultProps = {
  width: 22,
  height: 22,
  fill: '#eee',
};

export default Account;
