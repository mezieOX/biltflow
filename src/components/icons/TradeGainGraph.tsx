import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const TradeGainGraph = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={32}
    viewBox="0 0 56 32"
    fill="none"
    {...props}>
    <Path
      d="M55.5718 2.31051L52.4004 6.49408H50.8148L49.2291 2.31051L47.247 10.2593L44.4721 6.91244L41.3007 3.56558L36.5437 15.2796L35.3545 8.1675L32.5796 30.7588L26.6333 6.49408V11.5144H24.6512L24.6512 17.3714L21.0834 13.1878L19.8942 18.2081L17.1193 15.2796L10.7766 20.2999L7.60525 30.7588L0.469739 20.2999"
      stroke="#21BF73"
    />
  </Svg>
);
export default TradeGainGraph;
