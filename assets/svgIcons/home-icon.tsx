import React from 'react';
import {Path, Svg} from 'react-native-svg';

export const HomeIcon = ({isActive}: {isActive?: boolean}) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.5 8.19094V2.25H15.75V4.98984L12 1.5L0 12.75H3V22.5H9.75V15H14.25V22.5H21V12.75H24L19.5 8.19094Z"
        fill={isActive ? '#000' : '#fff'}
      />
    </Svg>
  );
};
