import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../../navigation/type';
import {Button, TextInputComp} from '../../../components';
<<<<<<< HEAD
=======
import {SafeAreaView} from 'react-native-safe-area-context';
>>>>>>> origin/bidemi-project

export const VeryIdentityScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
<<<<<<< HEAD
    <ScrollView
      style={[tw`px-4`, {backgroundColor: '#01041F'}]}
      showsVerticalScrollIndicator={false}>
      <View style={tw`pt-8`}>
        <View style={tw`flex-column bg-white pt-2 items-center rounded-xl`}>
          <Text
            style={[
              tw`text-left text-xl text-gray-500 font-black text-black pt-10 px-4`,
            ]}>
            <Text
              style={[
                tw`text-left text-xl text-gray-500 font-black text-black`,
                {color: '#E5770F'},
              ]}>
              Verify your Identity
            </Text>
          </Text>
          <Text
            style={[
              tw`py-4 text-gray-600 font-medium px-4 text-center text-lg`,
              {color: '#000'},
            ]}>
            Your information is always secure only thing Missing is KYC
            Verification and Anti-Money Laundering Agreements
          </Text>
          <View style={tw`px-4`}>
            <Text style={tw`text-black pt-2`}>Document Type</Text>
            <TextInputComp support placeholder="NIN" />
            <Text style={tw`text-black pt-2`}>Country</Text>
            <TextInputComp support placeholder="Nigeria" />
            <Text style={tw`text-black pt-2`}>NIN Number</Text>
            <TextInputComp support placeholder="876537" />
            <View style={[tw`flex-row  items-center pt-5`, {width: '98%'}]}>
              <Image
                style={tw`h-4 w-4`}
                resizeMode="contain"
                source={require('../../../../assets/images/checkbox.png')}
              />
              <Text style={[tw`text-gray-600 font-medium px-4 text-[13px]`]}>
                I agree that in line with the Federal government Anti-Money Law,
                all my activities here will be within the con((fines of the law.
              </Text>
            </View>
            <View style={tw`py-14 flex-row`}>
              <View style={tw`w-1/2 pr-2`}>
                <Button
                  onPress={() => {
                    navigation.goBack();
                  }}
                  login
                  title={'Skip'}
                />
              </View>
              <View style={tw`w-1/2 pl-2`}>
                <Button
                  onPress={() => {
                    navigation.navigate('BottomStack', {screen: 'HomeScreen'});
                  }}
                  login
                  title={'Verify'}
                />
=======
    <SafeAreaView style={{flex: 1, backgroundColor: '#01041F'}}>
      <ScrollView style={[tw`px-4`, {}]} showsVerticalScrollIndicator={false}>
        <View style={tw`pt-8`}>
          <View style={tw`flex-column bg-white pt-2 items-center rounded-xl`}>
            <Text
              style={[
                tw`text-left text-xl text-gray-500 font-black text-black pt-10 px-4`,
              ]}>
              <Text
                style={[
                  tw`text-left text-xl text-gray-500 font-black text-black`,
                  {color: '#E5770F'},
                ]}>
                Verify your Identity
              </Text>
            </Text>
            <Text
              style={[
                tw`py-4 text-gray-600 font-medium px-4 text-center text-lg`,
                {color: '#000'},
              ]}>
              Your information is always secure only thing Missing is KYC
              Verification and Anti-Money Laundering Agreements
            </Text>
            <View style={tw`px-4`}>
              <Text style={tw`text-black pt-2`}>Document Type</Text>
              <TextInputComp support placeholder="NIN" />
              <Text style={tw`text-black pt-2`}>Country</Text>
              <TextInputComp support placeholder="Nigeria" />
              <Text style={tw`text-black pt-2`}>NIN Number</Text>
              <TextInputComp support placeholder="876537" />
              <View style={[tw`flex-row  items-center pt-5`, {width: '98%'}]}>
                <Image
                  style={tw`h-4 w-4`}
                  resizeMode="contain"
                  source={require('../../../../assets/images/checkbox.png')}
                />
                <Text style={[tw`text-gray-600 font-medium px-4 text-[13px]`]}>
                  I agree that in line with the Federal government Anti-Money
                  Law, all my activities here will be within the con((fines of
                  the law.
                </Text>
              </View>
              <View style={tw`py-14 flex-row`}>
                <View style={tw`w-1/2 pr-2`}>
                  <Button
                    onPress={() => {
                      navigation.goBack();
                    }}
                    login
                    title={'Skip'}
                  />
                </View>
                <View style={tw`w-1/2 pl-2`}>
                  <Button
                    onPress={() => {
                      navigation.navigate('BottomStack', {
                        screen: 'HomeScreen',
                      });
                    }}
                    login
                    title={'Verify'}
                  />
                </View>
>>>>>>> origin/bidemi-project
              </View>
            </View>
          </View>
        </View>
<<<<<<< HEAD
      </View>
    </ScrollView>
=======
      </ScrollView>
    </SafeAreaView>
>>>>>>> origin/bidemi-project
  );
};
