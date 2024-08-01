/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {Button, TextInputComp} from '../../../components';
import {INavigationSetting} from '../../../navigation/type';

export const RegisterScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [, setToggle] = useState<boolean>(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[tw`flex-1`, {backgroundColor: '#01041F'}]}>
      <View style={[tw`flex-column items-start pb-4`, {paddingTop: 60}]}>
        <Text
          style={[
            tw`text-3xl text-white font-semibold text-left flex-col px-4`,
          ]}>
          Sign up
        </Text>
        <Text
          style={[
            tw`text-3xl text-white font-semibold text-left flex-col px-4`,
          ]}>
          new account
        </Text>
      </View>
      <View style={tw`px-4`}>
        <TextInputComp
          placeholder="Full name"
          label="Full Name"
          icon={require('../../../../assets/images/dark-user.png')}
        />
        <TextInputComp
          placeholder="Email Address"
          label="Email"
          icon={require('../../../../assets/images/dark-message.png')}
        />
        <TextInputComp
          placeholder="Enter Mobile Number"
          label="Enter phone number"
          icon={require('../../../../assets/images/ngn.png')}
        />
        <TextInputComp
          label="Password"
          placeholder="Password"
          icon={require('../../../../assets/images/dark-lock.png')}
          secureTextEntry
        />
        <TextInputComp
          label="Confirm Password"
          placeholder="Confirm Password"
          icon={require('../../../../assets/images/dark-lock.png')}
          secureTextEntry
        />
        <TextInputComp
          label="Gender"
          placeholder="Female"
          icon={require('../../../../assets/images/dark-lock.png')}
          secureTextEntry
        />
        <View style={tw`pt-4`}>
          <Button
            onPress={() => {
              navigation.navigate('AuthStack', {
                screen: 'VerificationConfirmScreen',
              });
            }}
            login
            title={'Continue'}
          />
          <View style={tw`flex-row items-center text-center justify-center`}>
            <Text
              onPress={() => setToggle(prev => !prev)}
              style={[tw`h-4 w-4 border mr-3`]}
            />
            <Text style={[tw`text-sm py-6 text-white text-center`]}>
              Or sign up with
            </Text>
          </View>
          <View style={tw`flex-row `}>
            <Image
              source={require('../../../../assets/images/google-bitflow.png')}
              resizeMode="contain"
              style={{width: '50%', height: 50}}
            />
            <Image
              source={require('../../../../assets/images/apple-bitflow.png')}
              resizeMode="contain"
              style={{width: '50%', height: 50}}
            />
          </View>
          <View
            style={tw`flex-row pt-6 items-center text-center justify-center pb-10`}>
            <Text style={[tw`text-sm  text-center text-white`]}>
              You had an account
            </Text>
            <Text
              onPress={() =>
                navigation.navigate('AuthStack', {screen: 'LoginScreen'})
              }
              style={[
                tw`text-sm  text-center px-2 text-white`,
                {color: '#E5770E'},
              ]}>
              Login now
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
