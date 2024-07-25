import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowCircleDownIcon = () => {
  return (
    <Svg width="21" height="24" viewBox="0 0 21 24" fill="none">
      <Path
        d="M10.5 22C15.3325 22 19.25 17.5228 19.25 12C19.25 6.47715 15.3325 2 10.5 2C5.66751 2 1.75 6.47715 1.75 12C1.75 17.5228 5.66751 22 10.5 22Z"
        stroke={'#000'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7 12L10.5 16L14 12"
        stroke={'#000'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.5 8V16"
        stroke={'#000'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
