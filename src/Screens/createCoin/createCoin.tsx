/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {Button, TextInputComp, TopSection} from '../../components';
import {INavigationSetting} from '../../navigation/type';

export const CreateCoinScreen = () => {
  const navigation = useNavigation<INavigationSetting>();
  const [, setToggle] = useState<boolean>(false);

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#01041F', paddingTop: 30}}>
      <TopSection title="Create Your Coin" searchIcon={false} />
      <View style={tw`px-4`}>
        <TextInputComp placeholder="EcoCoin" label="Coin Name" />
        <TextInputComp placeholder="ECO" label="Symbol" />
        <TextInputComp placeholder="1M Coins" label="Initial Supply" />
        <TextInputComp placeholder="18" label="Decimal Places" />
        <TextInputComp placeholder="Ethereum" label="Blockchain" />

        <View style={tw`pt-4`}>
          <Button login title={'CreateCoin'} />
          <View style={tw`flex-row items-center text-center justify-center`}>
            <Text
              onPress={() => setToggle(prev => !prev)}
              style={[tw`h-4 w-4 border mr-3`]}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
