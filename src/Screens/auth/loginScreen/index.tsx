/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {Button, TextInputComp} from '../../../components';
import {INavigationSetting} from '../../../navigation/type';
<<<<<<< HEAD
=======
import {SafeAreaView} from 'react-native-safe-area-context';
>>>>>>> origin/bidemi-project

export const LoginScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [, setToggle] = useState<boolean>(false);

  return (
<<<<<<< HEAD
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[tw`flex-1`, {backgroundColor: '#01041F'}]}>
      <View style={[tw`flex-column items-start pb-4`, {paddingTop: 60}]}>
        <Text
          style={[
            tw`text-3xl text-white font-semibold text-left flex-col px-4`,
          ]}>
          Welcome back!
        </Text>
        <Text
          style={[
            tw`text-base text-white font-semibold text-left flex-col px-4`,
          ]}>
          Login to continue
        </Text>
      </View>
      <View style={tw`px-4`}>
        <TextInputComp
          placeholder="Enter phone Number or Email"
          label="Email/Phone"
          icon={require('../../../../assets/images/dark-message.png')}
        />
        <TextInputComp
          label="Password"
          placeholder="Enter Password"
          icon={require('../../../../assets/images/dark-lock.png')}
          secureTextEntry
        />
        <View style={tw`flex-row py-5 items-center text-right justify-end`}>
          <Text
            onPress={() =>
              navigation.navigate('AuthStack', {screen: 'TwoFactorAuth'})
            }
            style={[
              tw`text-sm  text-center px-2 text-white`,
              {color: '#E5770E'},
            ]}>
            Forgot Password?
          </Text>
        </View>
        <View style={tw`pt-4`}>
          <Button
            onPress={() => {
              navigation.navigate('BottomStack', {
                screen: 'HomeScreen',
              });
            }}
            login
            title={'Continue'}
          />
          <View
            style={tw`flex-row pt-10 items-center text-center justify-center`}>
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
              You don't have an account?
            </Text>
            <Text
              onPress={() =>
                navigation.navigate('AuthStack', {screen: 'LoginScreen'})
=======
    <SafeAreaView style={{flex: 1, backgroundColor: '#01041F'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={[tw`flex-1`, {}]}>
        <View style={[tw`flex-column items-start pb-4`, {paddingTop: 60}]}>
          <Text
            style={[
              tw`text-3xl text-white font-semibold text-left flex-col px-4`,
              {
                fontSize: 28,
                fontWeight: '700',
              },
            ]}>
            Welcome back!
          </Text>
          <Text
            style={[
              tw`text-base text-white font-semibold text-left flex-col px-4`,
            ]}>
            Login to continue
          </Text>
        </View>
        <View
          style={[
            tw`px-4`,
            {
              marginTop: 44,
            },
          ]}>
          <TextInputComp
            placeholder="Enter phone Number or Email"
            label="Account"
          />
          <TextInputComp
            label="Password"
            placeholder="Enter Password"
            secureTextEntry
          />
          <View style={tw`flex-row py-5 items-center text-right justify-end`}>
            <Text
              onPress={() =>
                navigation.navigate('AuthStack', {screen: 'TwoFactorAuth'})
>>>>>>> origin/bidemi-project
              }
              style={[
                tw`text-sm  text-center px-2 text-white`,
                {color: '#E5770E'},
              ]}>
<<<<<<< HEAD
              Register Now
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
=======
              Forgot Password?
            </Text>
          </View>
          <View style={tw`pt-4`}>
            <Button
              onPress={() => {
                navigation.navigate('BottomStack', {
                  screen: 'HomeScreen',
                });
              }}
              login
              title={'Continue'}
            />
            <View
              style={tw`flex-row pt-10 items-center text-center justify-center`}>
              <Text
                onPress={() => setToggle(prev => !prev)}
                style={[tw`h-4 w-4 border mr-3`]}
              />
              <Text style={[tw`text-sm py-6 text-white text-center`]}>
                Or sign up with
              </Text>
            </View>
            <View
              style={[
                tw`flex-row`,
                {
                  gap: 16,
                },
              ]}>
              <Image
                source={require('../../../../assets/images/google-bitflow.png')}
                style={{flex: 1, height: 50, borderRadius: 15}}
              />
              <Image
                source={require('../../../../assets/images/apple-bitflow.png')}
                style={{flex: 1, height: 50, borderRadius: 15}}
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
                Login Now
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
>>>>>>> origin/bidemi-project
  );
};
