import * as React from 'react';
import Svg, {
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';
const CreditCardChipIcon = (props: SvgProps) => (
  <Svg width={27} height={21} viewBox="0 0 27 21" fill="none" {...props}>
    <Rect
      x={0.902898}
      y={1.23652}
      width={25.4334}
      height={18.9131}
      rx={3.97958}
      fill="url(#paint0_linear_4012_2671)"
      stroke="black"
      strokeWidth={0.908334}
    />
    <Path
      d="M9.05529 1.04321L13.5542 5.21616M13.5542 5.21616L18.0532 1.04321M13.5542 5.21616V7.82424C13.5542 8.40041 13.0872 8.86748 12.511 8.86748H0.970215"
      stroke="black"
      strokeWidth={0.908334}
      strokeLinecap="round"
    />
    <Path
      d="M18.0533 20.343L13.5543 16.1701M13.5543 16.1701L9.0554 20.343M13.5543 16.1701V13.3012M13.5543 13.3012H0.905118M13.5543 13.3012H26.334"
      stroke="black"
      strokeWidth={0.908334}
      strokeLinecap="round"
    />
    <Path
      d="M26.3996 8.73706H19.6186C18.7543 8.73706 18.0537 9.43767 18.0537 10.3019V13.3012"
      stroke="black"
      strokeWidth={0.908334}
      strokeLinecap="round"
    />
    <Path
      d="M9.83789 9.06311V13.1709"
      stroke="black"
      strokeWidth={0.908334}
      strokeLinecap="round"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_4012_2671"
        x1={11.9243}
        y1={22.0383}
        x2={15.5756}
        y2={-0.521695}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D28E08" />
        <Stop offset={0.467359} stopColor="#FFA012" />
        <Stop offset={1} stopColor="#FFC700" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default CreditCardChipIcon;
