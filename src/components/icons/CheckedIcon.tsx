import * as React from 'react';
import Svg, {Rect, Circle, SvgProps} from 'react-native-svg';
const CheckedIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect x={2} y={2} width={20} height={20} rx={10} fill="#E5770E" />
    <Circle cx={12} cy={12} r={4} fill="white" />
  </Svg>
);
export default CheckedIcon;
