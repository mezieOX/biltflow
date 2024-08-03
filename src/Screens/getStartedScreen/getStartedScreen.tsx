import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {Button} from '../../components';

export const GetStartedScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [next, setNext] = useState(false);

  return (
    <View
      style={[
        tw`bg-white flex-1 flex-col justify-center items-center`,
        {backgroundColor: '#0A352C'},
      ]}>
      <Text
        onPress={() =>
          navigation.navigate('AuthStack', {screen: 'RegisterScreen'})
        }
        style={[
          tw`text-white py-4 absolute top-4 right-4 z-40`,
          {
            color: '#FF7422',
          },
        ]}>
        Skip
      </Text>
      <Image
        source={
          next
            ? require('../../../assets/images/get-started-biltflow2.png')
            : require('../../../assets/images/get-started-biltflow.png')
        }
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
      />
      <View
        style={tw`flex-col items-center mt-5 absolute bottom-5 justify-center text-center px-4`}>
        <Button
          login
          onPress={() => {
            if (next) {
              return navigation.navigate('AuthStack', {
                screen: 'RegisterScreen',
              });
            }
            setNext(true);
          }}
          title={'Next'}
        />
        <View style={tw`flex-row items-center gap-4`}>
          <Image
            source={require('../../../assets/images/lock2.png')}
            resizeMode="contain"
            style={tw`h-4 w-4 mx-2`}
          />
          <Text style={tw`text-white py-4`}>
            Your information is always secure
          </Text>
        </View>
      </View>
    </View>
  );
};
