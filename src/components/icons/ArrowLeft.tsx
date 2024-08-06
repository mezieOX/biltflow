import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const ArrowLeftIcon = (props: SvgProps) => (
  <Svg width={18} height={12} viewBox="0 0 18 12" fill="none" {...props}>
    <Path
      d="M1 5.99976L17 5.99976"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.99996 11C5.99996 11 1.00001 7.31756 1 5.99996C0.999989 4.68237 6 1 6 1"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ArrowLeftIcon;
