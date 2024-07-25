import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

export const SwapCryptoIcon = ({isActive}: {isActive?: boolean}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="9.2" r="3.7" stroke={isActive ? '#000' : '#fff'} />
      <Path
        d="M5.5242 19.1C5.77544 16.518 7.95205 14.5 10.6 14.5H13.4C16.0479 14.5 18.2246 16.518 18.4758 19.1H5.5242Z"
        stroke={isActive ? '#000' : '#fff'}
      />
    </Svg>
  );
};
