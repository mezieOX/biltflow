/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../../../navigation/type';
import {Button, OTPInputComp} from '../../../../components';

export const VerificationConfirmScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [, setValue] = useState('');

  return (
    <>
      <ScrollView
        style={[tw`flex-1`, {backgroundColor: '#01041F'}]}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={tw`flex-row items-center w-full text-center justify-center items-center h-24`}
          onPress={() => navigation.goBack()}>
          <Image
            style={tw`h-10 w-8 absolute top-11 left-2`}
            resizeMode="contain"
            source={require('../../../../../assets/images/arrow-left.png')}
          />
          <Text
            style={[
              tw`text-3xl self-center justify-center text-center mx-auto mt-6 font-extrabold`,
              {color: '#F7A701'},
            ]}>
            OTP Verification
          </Text>
        </TouchableOpacity>
        <View style={[tw`flex-column items-center pb-20 flex-1`]}>
          <View style={tw`flex-col items-center`}>
            <View style={tw`flex-column items-center text-center px-4`}>
              <Text
                style={[
                  tw`text-center text-xl text-white font-medium py-10 w-80`,
                ]}>
                Enter The OTP Sent To You +23480398357286
              </Text>
              <View style={tw`pb-10`}>
                <View style={tw`pb-14 pt-14`}>
                  <OTPInputComp
                    onChangeText={digit => setValue(digit)}
                    digits={4}
                  />
                </View>
                <View
                  style={tw`flex-row pt-6 items-center text-center justify-center pb-10`}>
                  <Text style={[tw`text-sm  text-center text-white`]}>
                    Didn’t receive the OTP?
                  </Text>
                  <Text
                    onPress={() =>
                      navigation.navigate('AuthStack', {screen: 'LoginScreen'})
                    }
                    style={[
                      tw`text-sm  text-center px-2 text-white`,
                      {color: '#E5770E'},
                    ]}>
                    Resend OTP
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={tw`absolute bottom-10 px-4`}>
        <Button
          onPress={() => {
            navigation.navigate('AuthStack', {
              screen: 'LoginScreen',
            });
          }}
          login
          title={'Verify'}
        />
      </View>
    </>
  );
};
