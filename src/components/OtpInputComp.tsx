import {css} from '@emotion/native';
import React, {FC} from 'react';
import {OtpInput} from 'react-native-otp-entry';
import {TextStyle, ViewStyle} from 'react-native';

interface IOTPInputComp {
  digits: number;
  onChangeText: (text: string) => void;
}

export interface Theme {
  containerStyle?: ViewStyle;
  inputsContainerStyle?: ViewStyle;
  pinCodeContainerStyle?: ViewStyle;
  filledPinCodeContainerStyle?: ViewStyle;
  pinCodeTextStyle?: TextStyle;
  focusStickStyle?: ViewStyle;
  focusedPinCodeContainerStyle?: ViewStyle;
}

export const OTPInputComp: FC<IOTPInputComp> = ({onChangeText, digits}) => {
  const styles = {
    pinCodeContainer: css`
      height: 56px;
<<<<<<< HEAD
      width: 56px;
=======
>>>>>>> origin/bidemi-project
      border-radius: 10px;
      border-width: 1px;
      border-style: solid;
      color: white;
<<<<<<< HEAD
=======
      flex: 0.5;
>>>>>>> origin/bidemi-project
    `,
    filledPinCodeContainerStyle: css`
      border-width: 1px;
      border-style: solid;
      color: white;
      border-color: '#E5770E';
    `,
  };
  return (
    <OtpInput
      numberOfDigits={digits}
      focusColor={'#E5770E'}
      focusStickBlinkingDuration={500}
      onTextChange={text => onChangeText(text)}
      theme={{
        pinCodeContainerStyle: styles.pinCodeContainer,
        filledPinCodeContainerStyle: styles.filledPinCodeContainerStyle,
<<<<<<< HEAD
=======
        containerStyle: {
          gap: 10,
          paddingHorizontal: 40,
        },
>>>>>>> origin/bidemi-project
      }}
    />
  );
};
