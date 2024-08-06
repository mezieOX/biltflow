import React from 'react';
import {
  Platform,
  StyleProp,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import Keypad from 'react-native-simple-keypad';

interface AppKeypadProps
  extends Omit<
    React.ComponentProps<typeof Keypad>,
    | 'onKeyPress'
    | 'onBioAuthPress'
    | 'bioMetricAuthIcon'
    | 'bioMetricIconHeight'
    | 'bioMetricIconWidth'
    | 'backspaceIcon'
    | 'backspaceIconHeight'
    | 'backspaceIconWidth'
  > {
  length: number;
  resetOnComplete?: boolean;
  enableBioAuth?: boolean;
  bioMetricIconSize?: number;
  backspaceIconSize?: number;
  onCodeChange?: (code: string) => void;
  onCodeComplete?: (code: string, success?: boolean) => void;
  onKeyPress?: (value: string) => void;
}

const AppKeypad = React.memo(
  ({
    length,
    resetOnComplete,
    enableBioAuth,
    bioMetricFillColor,
    bioMetricIconSize,
    backspaceIconSize,
    backspaceIconFillColor,
    textStyle,
    onCodeChange,
    onCodeComplete,
    onKeyPress,
    ...props
  }: AppKeypadProps) => {
    const [verificationCode, setVerificationCode] = React.useState('');

    React.useEffect(() => {
      if (verificationCode.length === length) {
        onCodeComplete?.(verificationCode);

        if (resetOnComplete) {
          setVerificationCode('');
        }
      }
    }, [verificationCode, length, onCodeComplete, resetOnComplete]);

    const handleKeyPress = React.useCallback(
      (value: string) => {
        // Haptic feedback

        if (value === 'delete') {
          setVerificationCode(prev => prev.slice(0, -1));
          onCodeChange?.(verificationCode.slice(0, -1));
        } else {
          if (verificationCode.length === length) {
            return;
          }
          setVerificationCode(prev => prev + value);
          onCodeChange?.(verificationCode + value);
        }
      },
      [onCodeChange, verificationCode],
    );

    return (
      <Keypad
        onKeyPress={handleKeyPress}
        textStyle={{fontSize: 22, marginBottom: 30, fontWeight: 'bold'}}
        backspaceIcon={null}
        {...props}
      />
    );
  },
);

interface DisplayProps {
  value: string;
  containerStyle?: StyleProp<ViewStyle>;
  length: number;
  size?: number;
}

function Display({value, containerStyle, length, size}: DisplayProps) {
  const {width} = useWindowDimensions();
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 16,
        },
        containerStyle,
      ]}>
      {Array.from({length}).map((_, index) => (
        <View
          key={index}
          style={{
            aspectRatio: 1.1,
            borderRadius: 8,
            borderWidth: 1,
            marginHorizontal: 4,
            justifyContent: 'center',
            alignItems: 'center',
            width: (width - 80) / 5,
            borderColor: '#EEEEF0',
            backgroundColor: '#EEEEF0',
          }}>
          {index === value.length ? (
            <View
              style={{
                height: '50%',
                width: 2,
                borderRadius: 8,
                backgroundColor: '#EEEEF0',
              }}
            />
          ) : value[index] ? (
            <View
              style={{
                height: 16,
                aspectRatio: 1,
                borderRadius: 8,
                backgroundColor: '#000',
              }}
            />
          ) : null}
        </View>
      ))}
    </View>
  );
}

export default Object.assign(AppKeypad, {Display});
