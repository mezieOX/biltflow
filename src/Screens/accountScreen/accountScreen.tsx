import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {TopSection} from '../../components';

export const AccountScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[tw`flex-1`, {backgroundColor: '#01041F'}]}>
      <TopSection settingsIcon={false} title="Account" searchIcon={false} />

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
        </View>
      </View>
    </ScrollView>
  );
};
