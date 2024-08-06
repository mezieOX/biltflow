/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, Switch, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {Button, TextInputComp, TopSection} from '../../components';

export const CreatePriceAlertScreen = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[tw`flex-1`, {backgroundColor: '#01041F'}]}>
      <TopSection
        settingsIcon={false}
        title="Create Price Alert"
        searchIcon={false}
      />

      <View style={tw`px-4`}>
        <TextInputComp label="Select Coin" placeholder="ETH" />
        <TextInputComp label="Enter Amount" placeholder="$1,000" />
        <View style={tw`flex-row items-center justify-between my-5`}>
          <Text style={tw`text-white text-base`}>Enable push notification</Text>
          <Switch
            value={active}
            trackColor={{false: 'rgba(229, 229, 229, 1)'}}
            onChange={() => setActive(prev => !prev)}
            thumbColor={'rgba(229, 119, 14, 1)'}
          />
        </View>

        <View style={tw`pt-4`}>
          <Button login title={'Create'} />
        </View>
      </View>
    </ScrollView>
  );
};
