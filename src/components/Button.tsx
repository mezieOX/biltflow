import React from 'react';
import {s as tw} from 'react-native-wind';
import {Pressable, StyleSheet, Text} from 'react-native';

export const Button = ({
  roundedFull = false,
  onPress,
  title,
  icon,
  login = false,
<<<<<<< HEAD
}: {
  onPress: (value: any) => void;
=======
  outline = false,
}: {
  onPress?: (value: any) => void;
>>>>>>> origin/bidemi-project
  title: string;
  icon?: React.ReactNode;
  roundedFull?: boolean;
  login?: boolean;
<<<<<<< HEAD
=======
  outline?: boolean;
>>>>>>> origin/bidemi-project
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          borderRadius: roundedFull ? 50 : 12,
          backgroundColor: login ? '#E5770E' : '#fff',
<<<<<<< HEAD
=======
          borderColor: outline ? '#E5770E' : '#fff',
        },
        outline && {
          borderWidth: 1,
>>>>>>> origin/bidemi-project
        },
      ]}>
      <Text
        style={[
          styles.text,
          icon ? styles.height : null,
          {
<<<<<<< HEAD
            color: login ? '#fff' : '#ffffff',
=======
            color: login ? '#fff' : outline ? '#E5770E' : '#ffffff',
>>>>>>> origin/bidemi-project
          },
        ]}>
        {title}
        {icon ? (
          <Text
            style={[
              tw`mx-10 min-h-80`,
              {
                color: login ? '#fff' : '#fffff',
              },
            ]}>
            {' '}
            &nbsp; &nbsp; {icon}
          </Text>
        ) : null}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    minWidth: '100%',
    height: 58,
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    lineHeight: 21,
<<<<<<< HEAD
    fontWeight: '700',
=======
    fontWeight: '500',
>>>>>>> origin/bidemi-project
    letterSpacing: 0.25,
  },
  height: {
    minHeight: 25,
  },
});
