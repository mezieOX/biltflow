import React from 'react';
import {ScrollView, View} from 'react-native';
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
        </View>
      </View>
    </ScrollView>
  );
};
