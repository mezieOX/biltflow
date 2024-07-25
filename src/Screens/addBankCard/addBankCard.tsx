/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {Button, TextInputComp, TopSection} from '../../components';

export const AddBankCardScreen = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View style={[tw`flex-1 bg-white`, {backgroundColor: '#01041F'}]}>
      <TopSection title="Choose Card" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={[tw`text-lg px-4 text-white font-medium`]}>
            Card details
          </Text>
          <Image
            resizeMode="contain"
            style={tw`h-20 w-20 mx-4`}
            source={require('../../../assets/images/mastercard-logo.png')}
          />
        </View>

        <View style={tw`px-4`}>
          <TextInputComp support placeholder="Name on Card" />
          <TextInputComp
            support
            placeholder="Card number"
            icon={require('../../../assets/images/credit-card.png')}
            keyboardType="numeric"
          />
          <TextInputComp support placeholder="MM/YY" keyboardType="numeric" />
          <TextInputComp support placeholder="CVV" keyboardType="numeric" />
          <TextInputComp support placeholder="PIN" keyboardType="numeric" />
        </View>
        <View style={tw`py-10 px-4`}>
          <Button
            onPress={() =>
              navigation.navigate('CongratulationScreen', {
                title: 'Added Successful',
                description: 'Your Deposit has been confirmed',
                btnText: 'Go to account',
                path: 'BuyAndSellCryptoScreen',
              })
            }
            title={'Confirm'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
