import React from 'react';
<<<<<<< HEAD
import {ScrollView, View} from 'react-native';
=======
import {ScrollView, Text, View} from 'react-native';
>>>>>>> origin/bidemi-project
import {s as tw} from 'react-native-wind';
import {Button, TextInputComp, TopSection} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';

export const AccountScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[tw`flex-1`, {backgroundColor: '#01041F'}]}>
      <TopSection settingsIcon={false} title="Account" searchIcon={false} />

<<<<<<< HEAD
      <View style={tw`px-4`}>
        <TextInputComp
          placeholder="USD"
          secureTextEntry
          label="Payment Method"
        />
        <TextInputComp
          placeholder="$ 30,000,000"
          label="Account Limits"
          secureTextEntry
        />
        <TextInputComp
          placeholder="Verify"
          label="Verification"
          secureTextEntry
        />
        <View style={tw`pt-4`}>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            login
            title={'Save'}
          />
=======
      <View
        style={[
          tw`px-4`,
          {
            gap: 31,
          },
        ]}>
        <View>
          <Text style={[tw`text-white`, {fontSize: 16, marginBottom: 23}]}>
            Payment Method
          </Text>
          <View
            style={{
              paddingHorizontal: 14,
              paddingVertical: 16,
              backgroundColor: '#8C6744',
              borderRadius: 8,
            }}>
            <Text style={{color: '#fff'}}>USD</Text>
          </View>
        </View>
        <View>
          <Text style={[tw`text-white`, {fontSize: 16, marginBottom: 23}]}>
            Account Limits
          </Text>
          <View
            style={{
              paddingHorizontal: 14,
              paddingVertical: 16,
              backgroundColor: '#8C6744',
              borderRadius: 8,
            }}>
            <Text style={{color: '#fff'}}>$ 30,000,000</Text>
          </View>
        </View>
        <View>
          <Text style={[tw`text-white`, {fontSize: 16, marginBottom: 23}]}>
            Verification
          </Text>
          <View
            style={{
              paddingHorizontal: 14,
              paddingVertical: 16,
              backgroundColor: '#8C6744',
              borderRadius: 8,
            }}>
            <Text style={{color: '#fff'}}>Verify</Text>
          </View>
>>>>>>> origin/bidemi-project
        </View>
      </View>
    </ScrollView>
  );
};
