/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {Button, TextInputComp, TopSection} from '../../components';
import {INavigationSetting} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ChangePasswordScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View
      // showsVerticalScrollIndicator={false}
      style={[
        tw`flex-1`,
        {backgroundColor: '#01041F', paddingHorizontal: 16, paddingTop: 10},
      ]}>
      <TopSection
        settingsIcon={false}
        title="Change Password"
        searchIcon={false}
      />

      <View style={tw`px-4`}>
        <View style={{gap: 17}}>
          <TextInputComp placeholder="Input Old PIN" secureTextEntry />
          <TextInputComp placeholder="Input New PIN" secureTextEntry />
          <TextInputComp placeholder="Confirm  New PIN" secureTextEntry />
        </View>
        <View
          style={[
            tw`pt-4`,
            {
              marginTop: 56,
            },
          ]}>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            login
            title={'Change Password'}
          />
        </View>
      </View>
    </View>
  );
};
