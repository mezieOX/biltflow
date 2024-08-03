/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {Button, TextInputComp, TopSection} from '../../components';
import {INavigationSetting} from '../../navigation/type';
import {useNavigation} from '@react-navigation/native';

export const ChangePasswordScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[tw`flex-1`, {backgroundColor: '#01041F'}]}>
      <TopSection
        settingsIcon={false}
        title="Change Password"
        searchIcon={false}
      />

      <View style={tw`px-4`}>
        <TextInputComp placeholder="Input Old PIN" secureTextEntry />
        <TextInputComp placeholder="Input New PIN" secureTextEntry />
        <TextInputComp placeholder="Confirm  New PIN" secureTextEntry />
        <View style={tw`pt-4`}>
          <Button
            onPress={() => {
              navigation.goBack();
            }}
            login
            title={'Change Password'}
          />
        </View>
      </View>
    </ScrollView>
  );
};
