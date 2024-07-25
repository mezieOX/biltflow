/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {s as tw} from 'react-native-wind';
import {useNavigation} from '@react-navigation/native';
import {INavigationSetting} from '../../navigation/type';
import {Button, TextInputComp, TopSection} from '../../components';

export const AddBankWithdrawalCard = () => {
  const navigation = useNavigation<INavigationSetting>();

  return (
    <View style={[tw`flex-1 bg-white`]}>
      <TopSection title="Add Bank Card" searchIcon={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={[tw`text-lg px-4 text-black font-medium`]}>
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
        </View>
        <View style={tw`py-10 px-4`}>
          <Button
            onPress={() =>
              navigation.navigate('CongratulationScreen', {
                title: 'Withdraw Successful',
                description: 'Your request has been confirmed',
                btnText: 'View History',
              })
            }
            title={'Withdraw'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
