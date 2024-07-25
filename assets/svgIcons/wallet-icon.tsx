import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const WalletIcon = ({isActive}: {isActive?: boolean}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 8V21H3V8"
        fill={isActive ? '#000' : '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M23 3H1V8H23V3Z"
        fill={isActive ? '#000' : '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10 12H14"
        fill={isActive ? '#000' : '#fff'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
