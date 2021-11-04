import React from "react";
import { SvgCss } from "react-native-svg";

export default (props) => {
  const { fill, width, height } = props;
  const xml = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.80084 17.3781C7.992 16.2649 6.30926 14.9547 4.78274 13.471C3.70953 12.4025 2.8925 11.0998 2.39425 9.66282C1.49762 6.87525 2.54494 3.68402 5.47593 2.7396C7.01634 2.2437 8.69871 2.52713 9.99674 3.50123C11.2953 2.52831 12.977 2.24498 14.5176 2.7396C17.4485 3.68402 18.5034 6.87525 17.6068 9.66282C17.1085 11.0998 16.2915 12.4025 15.2183 13.471C13.6918 14.9547 12.009 16.2649 10.2002 17.3781L10.0043 17.5L9.80084 17.3781Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>   
`;
  return (
    <SvgCss
      xml={xml}
      width={width || "100%"}
      height={height || "100%"}
      fill={fill}
    />
  );
};
