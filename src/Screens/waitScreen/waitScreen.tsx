import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';

export const WaitScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  useEffect(() => {
    const timeout = setTimeout(() => {
      return navigation.navigate('BottomStack', {screen: 'HomeScreen'});
    }, 4000);
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={[tw`flex-1 flex justify-center items-center`]}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={{width: '100%', height: '100%'}}
        resizeMode="cover"
      />
    </View>
  );
};
