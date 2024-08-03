import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowFillDownIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M6 9L12 15L18 9"
        stroke={'#000'}
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
