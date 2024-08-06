import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const PlusIcon = (props: SvgProps) => (
  <Svg width={14} height={15} viewBox="0 0 14 15" fill="none" {...props}>
    <Path
      d="M7.0007 1.5V13.4855"
      stroke="#B4B4B4"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.9974 7.49288H1.00049"
      stroke="#B4B4B4"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PlusIcon;
