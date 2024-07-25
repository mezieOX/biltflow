import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const ScanIcon = ({isActive}: {isActive?: boolean}) => {
  return (
    <Svg width="35" height="35" viewBox="0 0 24 24" fill="none">
      <Path
        d="M13.5 6H17.25C17.6642 6 18 6.33579 18 6.75V10.5"
        stroke={isActive ? '#000' : '#fff'}
      />
      <Path
        d="M10.5 6H6.75C6.33579 6 6 6.33579 6 6.75V10.5"
        stroke={isActive ? '#000' : '#fff'}
      />
      <Path
        d="M10.5 18H6.75C6.33579 18 6 17.6642 6 17.25V13.5"
        stroke={isActive ? '#000' : '#fff'}
      />
      <Path
        d="M13.5 18H17.25C17.6642 18 18 17.6642 18 17.25V13.5"
        stroke={isActive ? '#000' : '#fff'}
      />
      <Path d="M6 12H18" stroke={isActive ? '#000' : '#fff'} />
    </Svg>
  );
};
