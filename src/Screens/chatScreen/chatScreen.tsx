import React, {useContext} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {TextInputComp, TopSection} from '../../components';
import {INavigationSetting} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';

export const ChatScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View style={[tw`flex-1 pr-2`]}>
      <TopSection title="Chart with us" searchIcon={true} />

      <View style={tw`px-4`}>
        <Image
          resizeMode="contain"
          style={tw`w-full h-32`}
          source={require('../../../assets/images/bot-greeting-message.png')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row justify-end`}>
          <Text
            style={[
              tw`bg-gray-200 rounded-lg text-black px-4 py-2.5 text-center ml-auto my-4 w-52`,
              {maxWidth: 'fit-content'},
            ]}>
            Accounts Issue
          </Text>
        </View>
      </ScrollView>
      <View style={tw`px-4`}>
        <TextInputComp
          fill
          support
          placeholder="Message"
          icon={require('../../../assets/images/camera.png')}
        />
      </View>
    </View>
  );
};
