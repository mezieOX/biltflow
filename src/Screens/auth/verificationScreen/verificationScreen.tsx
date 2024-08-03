/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../../navigation/type';
import {Button, TextInputComp} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';

export const VerificationScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#01041F'}}>
      <ScrollView
        style={[tw`flex-1`, {paddingHorizontal: 16}]}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={tw`flex-row items-center w-full text-center justify-center items-center h-24`}
          onPress={() => navigation.goBack()}>
          <Image
            style={tw`h-10 w-8 absolute top-11 left-2`}
            resizeMode="contain"
            source={require('../../../../assets/images/arrow-left.png')}
          />
          <Text
            style={[
              tw`text-3xl self-center justify-center text-center mx-auto mt-6 font-extrabold`,
              {color: '#F7A701'},
            ]}>
            OTP Verification
          </Text>
        </TouchableOpacity>
        <View style={[tw`flex-column items-center`]}>
          <View style={tw`flex-col items-center`}>
            <View style={tw`flex-column items-center text-center px-4`}>
              <Text
                style={[
                  tw`text-center text-xl text-white font-medium py-10 w-80`,
                ]}>
                we will send you a one time mobile password to this number
              </Text>
              <View style={tw``}>
                <View style={tw``}>
                  <TextInputComp
                    placeholder="Nigeria"
                    label="Select Country"
                    icon={require('../../../../assets/images/ngn.png')}
                  />
                  <View style={{marginTop: 20}}>
                    <TextInputComp
                      label="Enter Phone Number"
                      placeholder="080398357286"
                      secureTextEntry
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginTop: 87}}>
              <Button
                onPress={() => {
                  navigation.navigate('AuthStack', {
                    screen: 'VerificationConfirmScreen',
                  });
                }}
                login
                title={'Get OTP'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
