import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../../navigation/type';
import {Button, TextInputComp} from '../../../components';

export const TwoFactorAuth = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [confirmPin, setConfirmPin] = useState<boolean>(false);

  return (
    <ScrollView
      style={[tw`px-4`, {backgroundColor: '#01041F'}]}
      showsVerticalScrollIndicator={false}>
      <View style={tw`pt-32`}>
        <View
          style={tw`flex-column bg-white pb-20 pt-5 items-start rounded-xl`}>
          <Text
            style={[
              tw`text-left text-xl text-gray-500 font-black text-black pt-10 px-4`,
            ]}>
            {confirmPin ? 'Two-factor ' : 'Forgot '}
            <Text
              style={[
                tw`text-left text-xl text-gray-500 font-black text-black`,
                {color: '#E5770F'},
              ]}>
              {confirmPin ? 'authentication' : 'Password'}
            </Text>
          </Text>
          <Text style={[tw`py-4 text-gray-600 px-4`, {color: '#9DA3BA'}]}>
            {confirmPin
              ? 'Kindly verify via email. Input authentication code promptly for secure access.'
              : 'Enter your Email address associated with your account to reset your password, you will recieve an email with confirmation code'}
          </Text>
          <View style={tw`px-4`}>
            <Text style={tw`text-black pt-2`}>
              {confirmPin ? 'Authentication code' : 'Email'}
            </Text>
            <TextInputComp
              support
              placeholder={confirmPin ? '*******' : 'user.mail@gmail.com'}
            />
          </View>
        </View>
        <View style={tw`py-14`}>
          <Button
            onPress={() => {
              if (confirmPin) {
                navigation.navigate('AuthStack', {
                  screen: 'VeryIdentityScreen',
                });
                return;
              }
              setConfirmPin(true);
            }}
            login
            title={'Confirm'}
          />
        </View>
      </View>
    </ScrollView>
  );
};
