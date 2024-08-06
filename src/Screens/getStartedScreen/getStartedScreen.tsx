import React, {useEffect, useRef} from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  useWindowDimensions,
  StyleSheet,
} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {Button} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Pagination from '../../components/Pagination';

export const GetStartedScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const {width} = useWindowDimensions();

  const data = [
    {
      imgSrc: require('../../../assets/images/onboarding-img-1.png'),
      title: 'Unlock your Financial Future',
      description: 'Buy, sell and trade cryptocurrencies with ease',
    },
    {
      imgSrc: require('../../../assets/images/onboarding-img-2.png'),
      title: 'Tade with confidence',
      description: 'Secure and reliable cryptocurrency trading platform',
    },
  ];

  const flatListRef: any = useAnimatedRef();
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);

  // const skip = () => {
  //   navigation.navigate('EnterPhoneNumber');
  // };

  const onViewableItemsChanged = ({viewableItems}: {viewableItems: any}) => {
    if (viewableItems.length > 0) {
      flatListIndex.value = viewableItems[0].index;
    }
  };

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      x.value = event.contentOffset.x;
    },
  });

  const scrollToNext = () => {
    const nextIndex = flatListIndex.value + 1;
    if (nextIndex < data.length) {
      flatListRef?.current?.scrollToIndex({index: nextIndex, animated: true});
    } else {
      // Smoothly loop back to the first item
      flatListRef?.current?.scrollToIndex({index: 0, animated: true});
      setTimeout(() => {
        flatListRef.current.scrollToOffset({offset: 0, animated: false});
      }, 1500); // Duration should match the duration of the animated scroll
    }
  };

  // Autoplay functionality
  const intervalRef: any = useRef(null);

  useEffect(() => {
    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        scrollToNext();
      }, 6000); // Change slide every 6 seconds
    };

    const stopAutoplay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startAutoplay();

    // Cleanup interval on component unmount
    return () => stopAutoplay();
  }, []);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/onboarding-splash-bg.png')}
        style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <Text
            onPress={() =>
              navigation.navigate('AuthStack', {screen: 'LoginScreen'})
            }
            style={{
              color: '#FF7422',
              fontSize: 16,
              marginLeft: 'auto',
              fontWeight: 'bold',
              paddingHorizontal: 16,
              marginTop: 20,
            }}>
            Skip
          </Text>
          <View>
            <Animated.FlatList
              ref={flatListRef}
              onScroll={onScroll}
              scrollEventThrottle={16}
              horizontal={true}
              bounces={false}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              onViewableItemsChanged={onViewableItemsChanged}
              viewabilityConfig={{
                minimumViewTime: 300,
                viewAreaCoveragePercentThreshold: 10,
              }}
              data={data}
              renderItem={({item}) => (
                <View
                  style={{
                    width: width,
                    paddingHorizontal: 20,
                  }}>
                  <Image
                    source={item.imgSrc}
                    style={{
                      marginHorizontal: 'auto',
                      marginTop: 40,
                    }}
                  />
                  <Text style={[styles.title, {marginTop: 50}]}>
                    {item.title}
                  </Text>
                  <Text style={[styles.title, {marginTop: 20}]}>
                    {item.description}
                  </Text>
                </View>
              )}
            />
          </View>
          <View
            style={{
              marginTop: 60,
              paddingHorizontal: 30,
              flex: 1,
            }}>
            <Pagination x={x} data={data} />
            <View
              style={{
                marginTop: 'auto',
              }}>
              <Button
                login
                onPress={() => {
                  navigation.navigate('AuthStack', {
                    screen: 'RegisterScreen',
                  });
                }}
                title={'Next'}
              />
              <Text
                style={[
                  tw`text-white py-4`,
                  {
                    textAlign: 'center',
                    fontWeight: 'bold',
                  },
                ]}>
                Your information is always secure
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
