import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation, useRoute} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {Button} from '../../components';

interface ICongratulationMessageScreen {
  title: string;
  description?: string;
  btnText?: string;
  path: string;
}

export const CongratulationScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<INavigationSetting>();
  const [, setValue] = useState('');
  const {title, description, btnText, path} =
    route.params as ICongratulationMessageScreen;

  return (
    <>
      <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
        <View style={[tw`flex-column items-center pb-40 flex-1`]}>
          <View style={tw`flex-col items-center mt-20`}>
            <Image
              style={tw`h-48 mt-10 w-48`}
              resizeMode="contain"
              source={require('../../../assets/images/verified.png')}
            />
            <Text
              style={[
                tw`text-3xl self-center text-black justify-center text-center mx-auto mt-6 font-extrabold`,
              ]}>
              {title}
            </Text>
            <View style={tw`flex-column items-center text-center px-4`}>
              <Text
                style={[
                  tw`text-center text-lg text-black font-medium py-10 w-80`,
                ]}>
                {description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={tw`absolute bottom-10 px-4`}>
        <Button
          onPress={() =>
            path ? navigation.navigate(path as any) : navigation.goBack()
          }
          title={btnText ? btnText : 'Continue'}
        />
      </View>
    </>
  );
};
