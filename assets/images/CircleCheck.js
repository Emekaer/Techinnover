import React from "react";
import { SvgCss } from "react-native-svg";

export default (props) => {
  const { fill, width, height } = props;
  const xml = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="24" height="24" rx="12" fill="#E3FFF8"/>
  <path d="M16 9L10.5 14.5L8 12" stroke="#1FCC79" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
