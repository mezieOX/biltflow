import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SwapCryptoIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <Path
      d="M1 4V10H7"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23 20V14H17"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M20.49 9.00008C19.9828 7.56686 19.1209 6.28548 17.9845 5.27549C16.8482 4.26551 15.4745 3.55984 13.9917 3.22433C12.5089 2.88883 10.9652 2.93442 9.50481 3.35685C8.04437 3.77928 6.71475 4.56479 5.64 5.64008L1 10.0001M23 14.0001L18.36 18.3601C17.2853 19.4354 15.9556 20.2209 14.4952 20.6433C13.0348 21.0657 11.4911 21.1113 10.0083 20.7758C8.52547 20.4403 7.1518 19.7346 6.01547 18.7247C4.87913 17.7147 4.01717 16.4333 3.51 15.0001"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SwapCryptoIcon;
