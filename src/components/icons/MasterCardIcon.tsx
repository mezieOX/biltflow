import * as React from 'react';
import Svg, {Circle, SvgProps} from 'react-native-svg';
const MasterCardIcon = (props: SvgProps) => (
  <Svg width={28} height={16} viewBox="0 0 28 16" fill="none" {...props}>
    <Circle
      opacity={0.85}
      cx={19.2637}
      cy={7.92645}
      r={7.9107}
      fill="#FFA800"
    />
    <Circle
      opacity={0.85}
      cx={8.50494}
      cy={7.92645}
      r={7.9107}
      fill="#FE0C0C"
    />
  </Svg>
);
export default MasterCardIcon;
