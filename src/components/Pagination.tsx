import {StyleSheet, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  interpolateColor,
  Extrapolation,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const Pagination = ({
  data,
  x,
}: {
  data: any;
  x: Animated.SharedValue<number>;
}) => {
  const {width} = useWindowDimensions();

  console.log(x.value, 'x');

  return (
    <View style={styles.paginationContainer}>
      {[...data].map((_: any, index: number) => {
        const animatedStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            x.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [8, 8, 8],
            Extrapolation.CLAMP,
          );

          const backgroundColor = interpolateColor(
            x.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            ['#FFFFFF', '#E5770E', '#FFFFFF'],
          );

          return {
            width: withTiming(dotWidth, {
              easing: Easing.inOut(Easing.quad),
              duration: 20,
            }),
            backgroundColor,
          };
        });

        return (
          <Animated.View key={index} style={[styles.dots, animatedStyle]}>
            <Animated.View style={[animatedStyle]} />
          </Animated.View>
        );
      })}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    height: 8,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
    borderRadius: 18,
  },
});
