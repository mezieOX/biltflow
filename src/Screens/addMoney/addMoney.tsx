/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { s as tw } from 'react-native-wind';
import { useNavigation, useRoute } from '@react-navigation/native';
import { INavigationSetting } from '../../navigation/type';
import { Button } from '../../components';
import { ArrowRightIcon } from '../../../assets';
import { addMoney } from '../../APIs/api';

interface IAddORWithdrawMoney {
  title?: string;
  subTitle?: string;
  firstItemTitle?: string;
  firstItemDescription?: string;
  secondItemTitle?: string;
  secondItemDescription?: string;
}

export const AddMoneyScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<INavigationSetting>();
  const {
    title,
    subTitle,
    firstItemTitle,
    firstItemDescription,
    secondItemTitle,
    secondItemDescription,
  } = (route.params as IAddORWithdrawMoney) || {};

  const [amount, setAmount] = useState('5000'); // Default amount set to ₦5000
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleAddMoney = async () => {
    if (!amount || !paymentMethod) {
      Alert.alert('Error', 'Please select a payment method.');
      return;
    }

    try {
      const response = await addMoney(parseFloat(amount), paymentMethod);
      Alert.alert('Success', 'Money added successfully.');
      navigation.navigate('AddBankCardScreen'); // Navigate to the next screen after successful addition
    } catch (error) {
      Alert.alert('Error', 'Failed to add money.');
    }
  };

  return (
    <View style={[tw`flex-1 bg-white`]}>
      <View style={tw`mx-4`}>
        <Text style={tw`text-black pt-8 pb-4 text-center text-2xl font-bold`}>
          {title ? title : 'Add Money'}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`mx-4`}>
          <View
            style={[
              tw`w-full h-36 flex-col justify-center items-center rounded-3xl px-4 my-8 rounded-br-3xl`,
              {backgroundColor: '#0A352C'},
            ]}>
            <Text style={tw`text-white text-center pb-6 text-lg`}>
              Enter your amount
            </Text>
            <Text style={tw`text-white  text-center text-2xl font-bold`}>
              ₦{amount}.00
            </Text>
          </View>
        </View>
        <Text style={[tw`text-lg px-4 text-black`]}>
          {subTitle ? subTitle : 'Select mode of payment'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setPaymentMethod('Visa');
            navigation.navigate('AddBankCardScreen');
          }}
          style={[
            tw`flex-row justify-between border bg-white rounded-xl items-center py-6 m-4 pr-5`,
          ]}>
          <View style={tw`flex-row justify-between items-center`}>
            <Image
              resizeMode="contain"
              style={tw`h-10 w-10 mx-4`}
              source={require('../../../assets/images/visa.png')}
            />
            <View>
              <Text style={[tw`font-bold text-base text-black`]}>
                {firstItemTitle ? firstItemTitle : 'Visa Card'}
              </Text>
              <Text style={[tw`text-sm text-black`]}>
                {firstItemDescription
                  ? firstItemDescription
                  : 'Add money Using Visa App'}
              </Text>
            </View>
          </View>
          <ArrowRightIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPaymentMethod('MasterCard');
            navigation.navigate('AddBankCardScreen');
          }}
          style={[
            tw`flex-row justify-between border bg-white rounded-xl items-center py-6 mx-4 mb pr-5`,
          ]}>
          <View style={tw`flex-row justify-between items-center`}>
            <Image
              resizeMode="contain"
              style={tw`h-10 w-10 mx-4`}
              source={require('../../../assets/images/mastercard.png')}
            />
            <View>
              <Text style={[tw`font-bold text-sm text-black`]}>
                {secondItemTitle
                  ? secondItemTitle
                  : 'Top-up with Master Card/Account'}
              </Text>
              <Text style={[tw`text-sm text-black w-40`]}>
                {secondItemDescription
                  ? secondItemDescription
                  : 'Add money directly from your bank card or account'}
              </Text>
            </View>
          </View>
          <ArrowRightIcon />
        </TouchableOpacity>

        <View style={tw`py-10 px-4`}>
          <Button
            onPress={handleAddMoney}
            title={'Next'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
