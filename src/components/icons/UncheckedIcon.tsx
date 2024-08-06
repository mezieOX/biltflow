import * as React from 'react';
import Svg, {Rect, SvgProps} from 'react-native-svg';
const UnchechedIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Rect
      x={3}
      y={3}
      width={18}
      height={18}
      rx={9}
      stroke="#E3E3E3"
      strokeWidth={2}
    />
  </Svg>
);
export default UnchechedIcon;
